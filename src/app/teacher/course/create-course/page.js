"use client";

import ProgressStepper from "@/components/Teacher/Courses/ProgressStepper/ProgressStepper";
import Link from "next/link";
import CreateCourseForm from "@/components/Teacher/Courses/CreateCourseForm/CreateCourseForm";
import {useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

import {
    useCourseCreateMutation,
    useCourseUpdateMutation,
} from "@/redux/features/teacher/course/courseApi";
import styles from "@/components/Teacher/Courses/CreateCourseForm/createform.module.css";
import CreateCourseUploadModuleForm
    from "@/components/Teacher/Courses/CreateCourseUploadModuel/CreateCourseUploadModuleForm";

const schema = yup.object({
    courseType: yup.string().nullable(true),
    title: yup.string().required("Title is required"),
    subtitle: yup.string().required("Subtitle is required"),
    course_category_id: yup.string().required("Course category is required"),
    course_subcategory_id: yup.string().nullable(true),
    course_announcement_id: yup.string().nullable(true),
    benefits_id: yup.array().nullable(true).of(yup.string()),
    access_period: yup.number().typeError('Access period must be a number').required("Access period is required"),
    course_language_id: yup.string().required("Course language is required"),
    tag_id: yup.array().nullable(true).of(yup.string()),
    difficulty_level_id: yup.string().required("Course difficulty level is required"),
    learner_accessibility: yup.string().required("Learner accessibility is required"),
    price: yup.mixed().when('learner_accessibility', {
        is: 'paid',
        then: (schema) => yup.number()
            .typeError('Price must be a number')
            .required('Price is required for paid courses'),
        otherwise: (schema) => yup.mixed().transform((value) => {
            return value === '' ? null : value;
        }).nullable()
    }),
    old_price: yup.mixed().when('learner_accessibility', {
        is: 'paid',
        then: (schema) => yup.number()
            .typeError('Old price must be a number')
            .nullable(),
        otherwise: (schema) => yup.mixed().transform((value) => {
            return value === '' ? null : value;
        }).nullable()
    }),
    image: yup
        .mixed()
        .required("Course thumbnail is required")
        .test("fileSize", "File size is too large", (value) => {
            if (!value) return false;
            return value.size <= 2 * 1024 * 1024; // 2MB limit
        })
        .test("fileType", "Unsupported file format", (value) => {
            if (!value) return false;
            return ["image/png", "image/jpeg", "image/jpg"].includes(value.type);
        }),
    thumb_type: yup.string().nullable(true),
    video: yup.string().when('thumb_type', ([thumb_type]) => {
        if (thumb_type === 'video') {
            return yup.string()
                .required('Course video is required for youtube type');
        }
        return yup.string().nullable(true);
    }),
    video_link: yup.string().when('thumb_type', ([thumb_type]) => {
        if (thumb_type === 'youtube') {
            return yup.string()
                .required('Course video link is required for youtube type');
        }
        return yup.string().nullable(true);
    }),
});

const CreateCoursePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
    // Course store step submit id
    const [courseId, setCourseId] = useState(null);
    const navigator = useRouter();

    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        getValues,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit', // or 'onChange' if you want real-time validation
        reValidateMode: 'onChange'
    });


    // RTK Query Start
    // course create mutation
    const [courseCreate, {
        isLoading: courseCreateLoading,
        isError: courseCreateError,
        error: courseCreateErrors,
        data: courseCreateData,
    }] = useCourseCreateMutation();


    const [courseUpdate, {
        isLoading: courseUpdateLoading,
        isError: courseUpdateIsError,
        error: courseUpdateErrors,
        data: courseUpdateData
    }] = useCourseUpdateMutation();

    // RTK Query End

    console.log('form errors', errors);

    const onSubmit = (data) => {
        let formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            console.log(key, value);
            if(key === 'image' && value.length > 0)
            {
                formData.append(key, value[0]);
            } else {
                formData.append(key, value);
            }
        });

        if(courseId !== null)
        {
            formData.append('course_id', courseId);
            courseUpdate(formData);
        }else{
            courseCreate(formData);
        }

    };

    //   Submit course create 1st tab
    useEffect(() => {
        if(courseCreateData?.data)
        {
            if(courseCreateData?.data?.id)
            {
                setCourseId(courseCreateData?.data?.id);
            }

            setCurrentStep(2);

        }else if(courseUpdateData?.data){
            if(courseUpdateData?.data?.id)
            {
                setCourseId(courseUpdateData?.data?.id);
            }

            setCurrentStep(2);
        }
    }, [courseCreateLoading,
        courseCreateError,
        courseCreateErrors,
        courseCreateData,
        courseUpdateLoading,
        courseUpdateIsError,
        courseUpdateErrors,
        courseUpdateData]);


  //   Go To Step
    const goToStep = (step) => {
        setCurrentStep(step);
    }



  return (
    <div>

      <ProgressStepper currentStep={currentStep} />

        <form onSubmit={handleSubmit(onSubmit)}>

            {/* Course Overview Component */}
            {currentStep === 1 && <>
                <CreateCourseForm
                    register={register}
                    control={control}
                    watch={watch}
                    setValue={setValue}
                    getValues={getValues}
                    errors={errors}
                />
            </>}

            {currentStep === 2 &&
                <CreateCourseUploadModuleForm
                    goToStep={goToStep}
                />
            }
        </form>
      {/* {currentStep === 1 && <CreateCourseForm />} */}
    </div>
  );
};

export default CreateCoursePage;
