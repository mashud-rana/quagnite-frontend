import FiltersSidebar from "@/components/Student/Courses/Course/FiltersSidebar";
import SearchInput from "@/components/Student/Courses/Course/SearchInput";
import CoursesHeader from "@/components/Student/Courses/CoursesHeader/CoursesHeader";
import React from "react";

const CoursesLayout = ({ children }) => {
  const filterData = [
    {
      title: "Ways to learn",
      options: ["All", "Core courses", "Expanded courses", "Labs"],
    },
    {
      title: "Skill level",
      options: ["Advanced", "Beginner", "Intermediate"],
    },
    {
      title: "Subject",
      options: [
        "Business Professional",
        "Creative Professional",
        "Data Professional",
        "Digital Marketer",
        "IT Ops",
        "Product Manager",
      ],
    },
  ];

  return (
    <div>
      <CoursesHeader />
      <SearchInput />

      <div className="ic_content_wrapper">
        <FiltersSidebar sections={filterData} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CoursesLayout;
