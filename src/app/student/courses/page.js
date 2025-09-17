"use client";
import { useSearchParams } from "next/navigation";
import CourseCard from "@/components/Student/Courses/Course/CourseCard";
import React, {useEffect} from "react";
import {useGetCoursesQuery} from '@/redux/features/student/course/courseApi';
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "@/redux/features/student/course/courseSlice";

const DashboardCoursesPage = () => {
   const searchParams = useSearchParams();
   const dispatch = useDispatch();
   const page = useSelector((state) => state.course.page);
  //  const {filters} = useSelector((state) => state.course);


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
    // console.log("Current Page:", page, filtersGetParams);

    console.log("Courses Data:", coursesData);

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
  
  //set filters in store from url params
  useEffect(() => {
    dispatch(setFilters(filtersGetParams));
  }, [filtersGetParams]);

  return (
    <div className="ic_courses_list">
  
      {mockCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default DashboardCoursesPage;
