"use client";

import IcTable from "@/components/Share/IcTable/IcTable";
import { Space } from "antd";
import React, { useState } from "react";
import { GoEye } from "react-icons/go";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const QuestionListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      title: "Question Name",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Option No-1",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Option No-2",
      dataIndex: "amount",
      key: "amount",
      render: (text) => `$${text}`,
    },
    {
      title: "Option No-3",
      dataIndex: "invoiceNo",
      key: "invoiceNo",
    },

    {
      title: "Option No-4",
      dataIndex: "invoiceNo",
      key: "invoiceNo",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space>
          <AiTwotoneEdit size={20} />
          <RiDeleteBin6Line size={18} />
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
      <div className="ic_flex mb-24">
        <h5>Question Name</h5>
        <h5>Microservices with Node JS and React</h5>
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

export default QuestionListPage;
