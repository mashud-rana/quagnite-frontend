import CoursesHeader from "@/components/Student/Courses/CoursesHeader/CoursesHeader";
import React from "react";

const CoursesLayout = ({ children }) => {
  return (
    <div>
      <CoursesHeader />
      <div>{children}</div>
    </div>
  );
};

export default CoursesLayout;
