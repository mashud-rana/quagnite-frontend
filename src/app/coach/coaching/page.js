"use client";

import CoachingModal from "@/components/Coach/Coaching/CoachingModal/CoachingModal";
import IcTable from "@/components/Share/IcTable/IcTable";
import { Space } from "antd";
import React, { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { GoEye } from "react-icons/go";
import { MdOutlineDownload } from "react-icons/md";

const CoachingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Course Name",
      dataIndex: "courseName",
      key: "courseName",
    },
    {
      title: "Enroll Date",
      dataIndex: "enrollDate",
      key: "enrollDate",
    },
    {
      title: "chatting",
      //   dataIndex: "chatting",
      key: "chatting",
      render: () => (
        <Space>
          <button
            onClick={() => setIsModalOpen(true)}
            className="ic_action_btn"
          >
            <BsChatDots />
          </button>
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space>
          <button className="ic_action_btn">
            <MdOutlineDownload />
          </button>
          <button className="ic_action_btn">
            <GoEye />
          </button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Arman Hossain",
      email: "arman@example.com",
      courseName: "Personal Membership",
      enrollDate: "2025-08-01",
      chatting: "Active",
    },
    {
      key: "2",
      name: "Moumita Rahman",
      email: "moumita@example.com",
      courseName: "Premium Package",
      enrollDate: "2025-08-05",
      chatting: "Pending",
    },
    {
      key: "3",
      name: "Tanvir Alam",
      email: "tanvir@example.com",
      courseName: "Basic Subscription",
      enrollDate: "2025-08-10",
      chatting: "Completed",
    },
    {
      key: "4",
      name: "Farzana Akter",
      email: "farzana@example.com",
      courseName: "Gold Package",
      enrollDate: "2025-08-12",
      chatting: "Active",
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <IcTable
        columns={columns}
        data={data}
        total={data.length}
        currentPage={currentPage}
        pageSize={2}
        handlePageChange={handlePageChange}
      />

      <CoachingModal
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      />
    </div>
  );
};

export default CoachingPage;
