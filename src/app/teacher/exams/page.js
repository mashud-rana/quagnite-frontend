"use client";

import React, { useState } from "react";
import { Space } from "antd";

import { GoEye } from "react-icons/go";
import { MdOutlineDownload } from "react-icons/md";
import bg from "@/assets/images/bg/teacher-course-bg.png";
import { FaPlus } from "react-icons/fa6";
import IcTable from "@/components/Share/IcTable/IcTable";
import { BsThreeDots } from "react-icons/bs";
import { useParams } from "next/navigation";

const DaynamicCoursePage = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);



  const columns = [
    {
      title: "Exam Name",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Exam Type",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Total Question",
      dataIndex: "amount",
      key: "amount",
      render: (text) => `$${text}`,
    },
    {
      title: "Status",
      dataIndex: "invoiceNo",
      key: "invoiceNo",
    },

    {
      title: "Add Question",
      key: "action",
      render: () => (
        <Space>
          <button className="ic_icn_btn">
            <FaPlus />
            Add
          </button>
        </Space>
      ),
    },

    {
      title: "Action",
      //   dataIndex: "invoiceNo",
      key: "invoiceNo",

      render: () => (
        <Space>
          <BsThreeDots size={20} className="ic_color_primary" />
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      date: "2025-08-01",
      title: "Personal Membership",
      amount: 200,
      invoiceNo: "INV-1001",
    },
    {
      key: "2",
      date: "2025-08-05",
      title: "Premium Package",
      amount: 350,
      invoiceNo: "INV-1002",
    },
    {
      key: "3",
      date: "2025-08-10",
      title: "Basic Subscription",
      amount: 100,
      invoiceNo: "INV-1003",
    },
    {
      key: "4",
      date: "2025-08-12",
      title: "Gold Package",
      amount: 500,
      invoiceNo: "INV-1004",
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div
        className="mb-24"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="p_16">
          <h1 className="ic_text_36 ic_white mb-24">
            Course Name: Data Science Python Course
          </h1>

          <button className="ic_icn_btn">
            <FaPlus />
            create exam
          </button>
        </div>
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

export default DaynamicCoursePage;
