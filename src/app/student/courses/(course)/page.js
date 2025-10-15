"use client";
import { useSearchParams, usePathname } from "next/navigation";
// import CourseCard from "@/components/Student/Courses/Course/CourseCard";
import React, {useEffect} from "react";
import {useGetCoursesQuery} from '@/redux/features/student/course/courseApi';
import { useSelector, useDispatch } from "react-redux";
import { setFilters, setAllCourses, appendCourses } from "@/redux/features/student/course/courseSlice";
import AllEnrolledCourses from "@/components/Student/Courses/Course/AllEnrolledCourses";
import FullscreenSpinner from "@/components/Spinner/FullscreenSpinner";
import {setSpinnerVisible} from "@/redux/features/spinner/spinnerSlice";
import SectionSpinner from "@/components/Spinner/SectionSpinner";

const DashboardCoursesPage = () => {
   const searchParams = useSearchParams();
   const dispatch = useDispatch();
   const page = useSelector((state) => state.course.page);
   const pathname = usePathname(); 

  // ✅ Extract filters/search from URL
  const filtersGetParams = {
    category_ids: searchParams.get("category_ids") || "",
    difficulty_level_ids: searchParams.get("difficulty_level_ids") || "",
    course_subjects_ids: searchParams.get("course_subjects_ids") || "",
    search: searchParams.get("search") || "",
  };
  let  type = 'all'
  if(pathname == '/student/courses'){
    type = 'all'
  }else if(pathname == '/student/courses/inprogress'){
    type = 'in_progress'
  }
  else if(pathname == '/student/courses/completed'){
    type = 'complete'
  }
    
  const { 
    data: coursesData,
    isSuccess, 
    isLoading, 
    error, 
    refetch,
    isFetching 
    } = useGetCoursesQuery({ page, type, ...filtersGetParams });

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
    <div className="ic_courses_list" id="scrollableDiv">
      {/* <FullscreenSpinner /> */}
      {
        isLoading || isFetching ? <SectionSpinner message={
          `Loading ${
          type === 'all' ? 'enrolled' : type === 'in_progress' ? 'inprogress' : 'completed'
          } courses...`
        } /> : <AllEnrolledCourses totalPages={coursesData?.data?.meta?.last_page || 1} />
      }
      
      
    </div>
  );
};

export default DashboardCoursesPage;
