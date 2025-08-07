import DashboardHeader from "@/components/Student/Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "@/components/Student/Dashboard/Sidebar/Sidebar";

import React from "react";

const StudentLayout = ({ children }) => {
  return (
    <div className="student-layout">
      <Sidebar />
      <div className="content">
        <DashboardHeader />
        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default StudentLayout;
