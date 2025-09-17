'use client';
import React from "react";
import {useSelector} from "react-redux";  
import CourseCard from "@/components/Student/Courses/Course/CourseCard";  

const AllCourses = () =>{
  const {allCourses} = useSelector((state) => state.course);
  return (
    <div>
      {allCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default AllCourses;