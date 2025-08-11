"use client";

import DashboardHeader from "@/components/Student/Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "@/components/Student/Dashboard/Sidebar/Sidebar";

import React, { useState, useCallback } from "react";

const StudentLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => setIsSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

  return (
    <div className="student-layout">
      <div>
        <Sidebar isMobileOpen={isSidebarOpen} onClose={closeSidebar} />
      </div>
      <div className="content">
        <DashboardHeader onOpenSidebar={openSidebar} />
        <main className="main">{children}</main>
      </div>

      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar} />
      )}
    </div>
  );
};

export default StudentLayout;
