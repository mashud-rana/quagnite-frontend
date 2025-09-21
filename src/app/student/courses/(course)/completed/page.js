"use client";
import CourseCard from "@/components/Student/Courses/Course/CourseCard";

import { useSearchParams, usePathname } from "next/navigation";
// import CourseCard from "@/components/Student/Courses/Course/CourseCard";
import React, {useEffect} from "react";
import {useGetCoursesQuery} from '@/redux/features/student/course/courseApi';
import { useSelector, useDispatch } from "react-redux";
import { setFilters, setAllCourses, appendCourses } from "@/redux/features/student/course/courseSlice";
import AllEnrolledCourses from "@/components/Student/Courses/Course/AllEnrolledCourses";
import FullscreenSpinner from "@/components/Spinner/FullscreenSpinner";
import {setSpinnerVisible} from "@/redux/features/spinner/spinnerSlice";

const CompletedPage = () => {

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

  const mockCourses = [
    {
      id: "1",
      title: "Blockchain Mastery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada ex. Ut ultrices nulla ut tortor ullamcorper fermentum. Praesent sagittis enim sit amet ligula pharetra mattis id facilisis purus. Sed eu ante semper, varius velit vitae, sagittis turpis. Donec et posuere lectus. Praesent dignissim vulputate ipsum a molestie. Quisque ullamcorper non ligula ut tempus. Nullam tempor consectetur ultricies.",
      level: "Beginner",
      duration: "1h 10m",
      date: "22 Nov 2024",
      rating: 4,
      students: 210,
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      id: "2",
      title: "Blockchain Mastery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada ex. Ut ultrices nulla ut tortor ullamcorper fermentum. Praesent sagittis enim sit amet ligula pharetra mattis id facilisis purus. Sed eu ante semper, varius velit vitae, sagittis turpis. Donec et posuere lectus. Praesent dignissim vulputate ipsum a molestie. Quisque ullamcorper non ligula ut tempus. Nullam tempor consectetur ultricies.",
      level: "Beginner",
      duration: "1h 10m",
      date: "22 Nov 2024",
      rating: 4,
      students: 210,
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      id: "3",
      title: "Blockchain Mastery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada ex. Ut ultrices nulla ut tortor ullamcorper fermentum. Praesent sagittis enim sit amet ligula pharetra mattis id facilisis purus. Sed eu ante semper, varius velit vitae, sagittis turpis. Donec et posuere lectus. Praesent dignissim vulputate ipsum a molestie. Quisque ullamcorper non ligula ut tempus. Nullam tempor consectetur ultricies.",
      level: "Beginner",
      duration: "1h 10m",
      date: "22 Nov 2024",
      rating: 4,
      students: 210,
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
  ];

  return (
    <div className="ic_courses_list">
      <FullscreenSpinner />
      <AllEnrolledCourses totalPages={coursesData?.data?.meta?.last_page || 1} />
      {/* {mockCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))} */}
    </div>
  );
};

export default CompletedPage;
