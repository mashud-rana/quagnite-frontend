"use client";

import React, {useEffect, useState} from "react";
import { Space } from "antd";

import { GoEye } from "react-icons/go";
import { MdOutlineDownload } from "react-icons/md";
import bg from "@/assets/images/bg/teacher-course-bg.png";
import { FaPlus } from "react-icons/fa6";
import IcTable from "@/components/Share/IcTable/IcTable";
import { BsThreeDots } from "react-icons/bs";
import { useParams } from "next/navigation";
import ProgressStepper from "@/components/Teacher/Courses/ProgressStepper/ProgressStepper";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import CreateCourseForm from "@/components/Teacher/Courses/CreateCourseForm/CreateCourseForm";
import EditCourseForm from "@/components/Teacher/Courses/EditCourseForm/EditCourseForm";
import {useSingleCourseQuery, useCourseUpdateMutation} from "@/redux/features/teacher/course/courseApi";

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
    .nullable(true)
    .test("fileSize", "File size is too large (max 2MB)", (value) => {
      if (!value) return true; // allow empty
      return value.size <= 2 * 1024 * 1024; // 2MB
    })
    .test("fileType", "Unsupported file format", (value) => {
      if (!value) return true; // allow empty
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


const CourseEditPage = () => {
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(1);



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


  console.log('course update errors', errors)

  // API Call Start
  const { data: courseData, isLoading: isCourseLoading } = useSingleCourseQuery({id});

  const [courseUpdate, {
    isLoading: courseUpdateLoading,
    isError: courseUpdateIsError,
    error: courseUpdateErrors,
    data: courseUpdateData
  }] = useCourseUpdateMutation();


// API Call End

  useEffect(() => {
    if (courseData && courseData.data) {
      const course = courseData?.data;
      console.log('course.access_period',[course.access_period])
        // Set form values based on fetched course data
        setValue('courseType', course.courseType || '');
        setValue('title', course.title || '');
        setValue('subtitle', course.subtitle || '');
        setValue('course_category_id', course.course_category_id || '');
        setValue('course_subcategory_id', course.course_subcategory_id || '');
        setValue('course_announcement_id', course.course_announcement_id || '');
        setValue('access_period', course.access_period ?? '');
        setValue('course_language_id', course.course_language_id || '');
        setValue('tag_id', course.tag_ids?? []);
        setValue('benefits_id', course.benefits_ids?? []);
        setValue('difficulty_level_id', course.difficulty_level_id || '');
        setValue('learner_accessibility', course.learner_accessibility || '');
        setValue('price', course.price || '');
        setValue('old_price', course.old_price || '');
        // Note: File inputs (like 'image') cannot be set programmatically for security reasons
        setValue('thumb_type', course.thumb_type || '');
        setValue('video', course.video || '');
        setValue('video_link', course.video_link || '');
    }
  },[isCourseLoading, courseData]);
  const onSubmit = (data) => {
    let formData = new FormData();
    console.log(data);

    Object.entries(data).forEach(([key, value]) => {
      console.log(key, value);
      if(key === 'image' && value !== null && value.length > 0)
      {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    });

    formData.append('course_id', courseData?.data?.id);
    courseUpdate(formData);

  };



  return (
    <div>
      <ProgressStepper currentStep={currentStep} />


      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Course Overview Component */}
        {currentStep === 1 && <>
          <EditCourseForm
              register={register}
              control={control}
              watch={watch}
              setValue={setValue}
              getValues={getValues}
              errors={errors}
              courseData = {courseData?.data}
              courseUpdateLoading = {courseUpdateLoading}
          />
        </>}

      </form>

    </div>
  );
};

export default CourseEditPage;
