"use client";

import * as yup from "yup";
import {useEffect, useMemo, useRef, useState} from "react";
import ProgressStepper from "@/components/Teacher/Courses/ProgressStepper/ProgressStepper";
import CreateBootcampForm from "@/components/Teacher/Bootcamp/CreateBootcampForm/CreateBootcampForm";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useCreateBootcampMutation} from "@/redux/features/teacher/bootcamp/bootcampApi";



const schema = yup.object({
  title: yup.string().required("Bootcamp title is required"),
  subtitle: yup.string().required("Bootcamp subtitle is required"),
  bootcamp_category_id: yup.string().required("Bootcamp category is required"),
  bootcamp_subcategory_id: yup.string().nullable(true),
  start_date: yup.date().typeError("start_date must be a `date` type, but the final value was: `Invalid Date` (cast from the value `\"\"`).").transform((value) => value === '' ? null : value).required("Start date is required"),
  end_date: yup
    .date()
    .min(yup.ref('start_date'), "End date cannot be before start date")
    .required("End date is required"),
  description: yup.string().required("Description is required"),

  course_language_id: yup.string().required("Course language is required"),
  tag_id: yup.array().nullable(true).of(yup.string()),
  difficulty_level_id: yup.string().required("Bootcamp difficulty level is required"),
  access_period: yup.string().required("Access period is required"),
  bootcamp_announcement_id: yup.string().nullable(true),
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
  file: yup.string().when('thumb_type', ([thumb_type]) => {
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
  })
});

const CreateBootcampPage = () => {
    const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      videoType: "upload",
      whatYoullLearn: [],
      whoShouldAttend: [],
    },
  });


  // API Call Start
    const [
        bootcampCreate,
        {
          isLoading: isCreating,
          data: createdCourseData,
          error: createError
        }
    ] = useCreateBootcampMutation();

  console.log('bootcamp form errors', errors);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);

    let formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      console.log(key, value);
      if (key === 'image' && value.length > 0) {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    });

    // if (courseId !== null) {
    //   formData.append('course_id', courseId);
    //   courseUpdate(formData);
    // } else {
    //   bootcampCreate(formData);
    // }

    bootcampCreate(formData);

  };

  return (
    <div>
      <ProgressStepper currentStep={step} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
            <CreateBootcampForm
                register={register}
                watch={watch}
                control={control}
                setValue={setValue}
                errors={errors}
            />
        )}
      </form>
    </div>
  );
};

export default CreateBootcampPage;
