import ScrollableNavbar from "@/components/Share/ScrollableNavbar/ScrollableNavbar";
import React from "react";

const ExamLayout = ({ children }) => {
  const examTabs = [
    { href: "/student/exams", label: "Upcoming Exams", exact: true },
    { href: "/student/billings/invoices", label: "Upcoming Exams" },
    { href: "/student/billings/payment", label: "Completed Exams" },
  ];

  return (
    <div>
      <ScrollableNavbar tabs={examTabs} />
      {children}
    </div>
  );
};

export default ExamLayout;
