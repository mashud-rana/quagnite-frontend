import FiltersSidebar from "@/components/Student/Courses/Course/FiltersSidebar";
import SearchInput from "@/components/Student/Courses/Course/SearchInput";
import CoursesHeader from "@/components/Student/Courses/CoursesHeader/CoursesHeader";
import React from "react";

const CoursesLayout = ({ children }) => {
  return (
    <div>
      <CoursesHeader />
      <SearchInput />

      <div className="ic_content_wrapper">
        <FiltersSidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CoursesLayout;
