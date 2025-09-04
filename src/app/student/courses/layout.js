import ScrollableNavbar from "@/components/Share/ScrollableNavbar/ScrollableNavbar";
import FiltersSidebar from "@/components/Student/Courses/Course/FiltersSidebar";
import SearchInput from "@/components/Student/Courses/Course/SearchInput";
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

  const courseTabs = [
    { href: "/student/courses", label: "Enrolled courses", exact: true },
    { href: "/student/courses/inprogress", label: "Inprogress courses" },
    { href: "/student/courses/completed", label: "Completed Courses" },
  ];

  return (
    <div>
      <h1 className="ic_text_36 mb-24">My Courses</h1>
      <ScrollableNavbar tabs={courseTabs} />

      <SearchInput />

      <div className="ic_content_wrapper">
        <FiltersSidebar sections={filterData} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CoursesLayout;
