"use client";

import IcTable from "@/components/Share/IcTable/IcTable";
import React, { useState } from "react";

const WithdrawalDetailsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      title: "SL",
      dataIndex: "sl",
      key: "sl",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Beneficiary Name",
      dataIndex: "beneficiaryName",
      key: "beneficiaryName",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => `$${text}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  const data = [
    {
      key: "1",
      sl: 1,
      date: "2025-08-01",
      beneficiaryName: "John Doe",
      amount: 200,
      status: "Pending",
    },
    {
      key: "2",
      sl: 2,
      date: "2025-08-05",
      beneficiaryName: "Alice Smith",
      amount: 350,
      status: "Completed",
    },
    {
      key: "3",
      sl: 3,
      date: "2025-08-10",
      beneficiaryName: "Robert Brown",
      amount: 100,
      status: "Rejected",
    },
    {
      key: "4",
      sl: 4,
      date: "2025-08-12",
      beneficiaryName: "Emma Wilson",
      amount: 500,
      status: "Completed",
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

export default WithdrawalDetailsPage;
