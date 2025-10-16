"use client";

import ProgressStepper from "@/components/Teacher/Courses/ProgressStepper/ProgressStepper";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import CreateCourseForm from "@/components/Teacher/Courses/CreateCourseForm/CreateCourseForm";
import {useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
        .test("required", "Course thumbnail is required", (value) => {
            return value && value.length > 0; // ✅ ensures at least one file
        })
        .test("fileSize", "File size is too large", (value) => {
            if (!value || value.length === 0) return true; // skip if empty
            return value[0].size <= 2 * 1024 * 1024; // 2MB limit
        })
        .test("fileType", "Unsupported file format", (value) => {
            if (!value || value.length === 0) return true; // skip if empty
            return ["image/png", "image/jpeg", "image/jpg"].includes(value[0].type);
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
    const [courseFirstStepUUId, setCourseFirstStepUUId] = useState(null);

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

        if(courseFirstStepUUId !== null)
        {
            formData.append('course_id', courseFirstStepUUId);
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
                setCourseFirstStepUUId(courseCreateData?.data?.id);
            }

            setCurrentStep(2);

        }else if(courseUpdateData?.data){
            if(courseUpdateData?.data?.id)
            {
                setCourseFirstStepUUId(courseUpdateData?.data?.id);
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

  return (
    <div>

      <ProgressStepper currentStep={currentStep} />

      <div className="mb-24">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Create New Course</h1>
        </div>
      </div>

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

                <div className="ic_flex">
                    <button type="button" className="ic_btn">
                        BACK
                    </button>
                    <button type="submit" className="ic_btn">
                        SAVE AND CONTINUE
                    </button>
                </div>
            </>}

            {currentStep === 2 && <CreateCourseUploadModuleForm/>}




        </form>
      {/* {currentStep === 1 && <CreateCourseForm />} */}
    </div>
  );
};

export default CreateCoursePage;
