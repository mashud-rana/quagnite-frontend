"use client";
import IcTable from "@/components/Share/IcTable/IcTable";
import React, { useState } from "react";
import styles from "./overview.module.css";

const UpcomingTask = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const columns = [
    {
      title: "Task Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Course / Bootcamp",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (text) => (
        <span
          className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
            text === "High"
              ? "bg-red-500"
              : text === "Medium"
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
        >
          {text}
        </span>
      ),
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Complete React Assignment",
      course: "React Bootcamp",
      dueDate: "2025-10-20",
      priority: "High",
      actions: "Mark as Done",
    },
    {
      key: "2",
      name: "Project Documentation",
      course: "Fullstack Course",
      dueDate: "2025-10-22",
      priority: "Medium",
      actions: "Mark as Done",
    },
    {
      key: "3",
      name: "Prepare for Quiz",
      course: "Frontend Development",
      dueDate: "2025-10-25",
      priority: "Low",
      actions: "Mark as Done",
    },
    {
      key: "4",
      name: "Fix Dashboard Bugs",
      course: "MERN Stack Training",
      dueDate: "2025-10-28",
      priority: "High",
      actions: "Mark as Done",
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.tableSection}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>Upcoming Tasks List</h3>
        <button className={styles.ic_btn}>VIEW ALL</button>
      </div>

      <IcTable
        columns={columns}
        data={data}
        total={data.length}
        currentPage={currentPage}
        pageSize={2}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default UpcomingTask;
