import ScrollableNavbar from "@/components/Share/ScrollableNavbar/ScrollableNavbar";
import React from "react";

const ExamLayout = ({ children }) => {
  const examTabs = [
    { href: "/student/exams", label: "Upcoming Exams", exact: true },
    { href: "/student/exams/suggested", label: "Suggested Exams" },
    { href: "/student/exams/completed", label: "Completed Exams" },
  ];

  return (
    <div>
      <ScrollableNavbar tabs={examTabs} />
      {children}
    </div>
  );
};

export default ExamLayout;
