"use client";
import { useSearchParams } from "next/navigation";
// import CourseCard from "@/components/Student/Courses/Course/CourseCard";
import React, {useEffect} from "react";
import {useGetCoursesQuery} from '@/redux/features/student/course/courseApi';
import { useSelector, useDispatch } from "react-redux";
import { setFilters, setAllCourses, appendCourses } from "@/redux/features/student/course/courseSlice";
import { Spin } from "antd";  // ✅ Import Spin from AntD
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import AllCourses from "@/components/Student/Courses/Course/AllCourses";
import FullscreenSpinner from "@/components/Spinner/FullscreenSpinner";
import {setSpinnerVisible} from "@/redux/features/spinner/spinnerSlice";

const DashboardCoursesPage = () => {
   const searchParams = useSearchParams();
   const dispatch = useDispatch();
   const page = useSelector((state) => state.course.page);

  // ✅ Extract filters/search from URL
  const filtersGetParams = {
    category_ids: searchParams.get("category_ids") || "",
    difficulty_level_ids: searchParams.get("difficulty_level_ids") || "",
    course_subjects_ids: searchParams.get("course_subjects_ids") || "",
    search: searchParams.get("search") || "",
  };
    
  const { 
    data: coursesData,
    isSuccess, 
    isLoading, 
    error, 
    refetch,
    isFetching 
    } = useGetCoursesQuery({ page, ...filtersGetParams });

    console.log('filtersGetParams',filtersGetParams, coursesData, page)
    console.log("--------------------------------------")
    
  
  //✅ Reset filters on URL change
  useEffect(() => {
    dispatch(setFilters(filtersGetParams));
  }, [filtersGetParams]);

  // ✅ Manage courses list
  useEffect(() => {
    if (isSuccess) {
      if (page === 1) {
        dispatch(setAllCourses(coursesData?.data?.data.length > 0 ? coursesData?.data?.data : []));
      } else {
        dispatch(appendCourses(coursesData?.data?.data.length > 0 ? coursesData?.data?.data : []));
      }
    }
    dispatch(setSpinnerVisible(false));
  }, [isSuccess, coursesData]);



  return (
    <div className="ic_courses_list">
      <FullscreenSpinner />
      <AllCourses totalPages={coursesData?.data?.meta?.last_page || 1} />
      
    </div>
  );
};

export default DashboardCoursesPage;
