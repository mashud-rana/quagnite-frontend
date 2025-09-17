'use client';
import React from "react";
import {useSelector} from "react-redux";  
import CourseCard from "@/components/Student/Courses/Course/CourseCard";  

const AllCourses = () =>{
  const {allCourses} = useSelector((state) => state.course);
    if (!allCourses || allCourses.length === 0) {
        return (
            <div style={{ textAlign: "center", padding: "2rem", color: "#888", width: "100%" }}>
                <h2>No Data Found</h2>
                <p>There are no courses available at the moment.</p>
            </div>
        );
    }

    return (
        <div>
            {allCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
}

export default AllCourses;