"use client";

import Sidebar from "@/components/Student/Dashboard/Sidebar/Sidebar";
import React, { useCallback, useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { PiMonitorBold, PiCirclesThreeBold } from "react-icons/pi";
import { GrPlay } from "react-icons/gr";
import { BiBookContent, BiMoneyWithdraw } from "react-icons/bi";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import { GiFeather } from "react-icons/gi";
import DashboardHeader from "@/components/Student/Dashboard/DashboardHeader/DashboardHeader";

const TeacherLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const openSidebar = useCallback(() => setIsSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);
  const toggleSidebarCollapse = useCallback(
    () => setIsSidebarCollapsed((prev) => !prev),
    []
  );

  const mainMenu = [
    {
      title: "Overview",
      url: "/teacher/overview",
      icon: GiFeather,
    },
    {
      title: "Courses",
      url: "/teacher",
      icon: GiFeather,
    },
    {
      title: "Bootcamps",
      url: "/teacher/bootcamps",
      icon: PiMonitorBold,
    },
    {
      title: "Exams",
      url: "/student/exams",
      icon: PiCirclesThreeBold,
    },
    {
      title: "Playground",
      url: "/student/playground",
      icon: GrPlay,
    },
    {
      title: "E-book",
      url: "/teacher/ebook",
      icon: BiBookContent,
    },
    {
      title: "Academe",
      url: "/student/academe",
      icon: RiGraduationCapLine,
    },
    {
      title: "Vault",
      url: "/student/vault",
      icon: MdLockOutline,
    },
  ];

  const otherMenu = [
    {
      title: "Billings",
      url: "/student/billings",
      icon: BiMoneyWithdraw,
    },
    {
      title: "Support",
      url: "/student/support",
      icon: FaRegQuestionCircle,
    },
  ];

  return (
    <div className="student-layout">
      <div>
        <Sidebar
          isMobileOpen={isSidebarOpen}
          onClose={closeSidebar}
          onToggleCollapse={toggleSidebarCollapse}
          isCollapsed={isSidebarCollapsed}
          mainMenu={mainMenu}
          otherMenu={otherMenu}
        />
      </div>
      <div
        className={`content ${isSidebarCollapsed ? "sidebar-collapsed" : ""}`}
      >
        <DashboardHeader onOpenSidebar={openSidebar} />
        <main className="main">{children}</main>
      </div>

      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar} />
      )}
    </div>
  );
};

export default TeacherLayout;
