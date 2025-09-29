"use client";

import React, { useState } from "react";
import { Space } from "antd";
import { GoEye } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { LuFile } from "react-icons/lu";

import IcTable from "@/components/Share/IcTable/IcTable";

const BeneficiaryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space>
          <button className="ic_action_btn">
            <GoEye />
          </button>
          <button className="ic_action_btn">
            <LuFile />
          </button>
          <button className="ic_action_btn">
            <MdDelete />
          </button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Doe",
      type: "Bank Account",
      date: "2025-08-01",
    },
    {
      key: "2",
      name: "Alice Smith",
      type: "Mobile Banking",
      date: "2025-08-05",
    },
    {
      key: "3",
      name: "Robert Brown",
      type: "PayPal",
      date: "2025-08-10",
    },
    {
      key: "4",
      name: "Emma Wilson",
      type: "Bank Account",
      date: "2025-08-12",
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <IcTable
      columns={columns}
      data={data}
      total={data.length}
      currentPage={currentPage}
      pageSize={2}
      handlePageChange={handlePageChange}
    />
  );
};

export default BeneficiaryPage;
