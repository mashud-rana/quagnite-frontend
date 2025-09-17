"use client";
import { useSearchParams } from "next/navigation";
// import CourseCard from "@/components/Student/Courses/Course/CourseCard";
import React, {useEffect} from "react";
import {useGetCoursesQuery} from '@/redux/features/student/course/courseApi';
import { useSelector, useDispatch } from "react-redux";
import { setFilters, setAllCourses } from "@/redux/features/student/course/courseSlice";
import { Spin } from "antd";  // ✅ Import Spin from AntD
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import AllCourses from "@/components/Student/Courses/Course/AllCourses";

const DashboardCoursesPage = () => {
   const searchParams = useSearchParams();
   const dispatch = useDispatch();
   const page = useSelector((state) => state.course.page);

  // ✅ Extract filters/search from URL
  const filtersGetParams = {
    category_ids: searchParams.get("category_ids") || "",
    difficulty_level_ids: searchParams.get("difficulty_level_ids") || "",
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
    
  
  // ✅ Keep filters in Redux store synced
  useEffect(() => {
    dispatch(setFilters(filtersGetParams));
  }, [filtersGetParams]);

  // // ✅ Handle API response: update Redux store and show errors
  // useEffect(() => {
  //   if (isSuccess && coursesData) {
  //     dispatch(setAllCourses(coursesData.data.data || []));
  //   }
  //   if (error) {
  //     toastError(error?.data?.message || "Token is invalid or expired. Please try again.");
  //   }
  // }, [isSuccess, coursesData, error, dispatch]);

  return (
    <div className="ic_courses_list">
      <Spin spinning={isLoading || isFetching} fullscreen></Spin>
      <AllCourses />
      
    </div>
  );
};

export default DashboardCoursesPage;
