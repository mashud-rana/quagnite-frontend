import Course from "@/components/Student/Courses/Course/Course";
import CoursesHeader from "@/components/Student/Courses/CoursesHeader/CoursesHeader";
import React from "react";

const DashboardCoursesPage = () => {
  return (
    <div>
      <CoursesHeader />
      <Course />
    </div>
  );
};

export default DashboardCoursesPage;
