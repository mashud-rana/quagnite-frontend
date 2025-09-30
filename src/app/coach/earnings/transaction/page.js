"use client";

import React, { useState } from "react";
import IcTable from "@/components/Share/IcTable/IcTable";

const TransactionDetailsPage = () => {
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
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => `$${text}`,
    },
  ];

  const data = [
    {
      key: "1",
      sl: 1,
      date: "2025-08-01",
      transactionId: "TXN-1001",
      type: "Personal Membership",
      amount: 200,
    },
    {
      key: "2",
      sl: 2,
      date: "2025-08-05",
      transactionId: "TXN-1002",
      type: "Premium Package",
      amount: 350,
    },
    {
      key: "3",
      sl: 3,
      date: "2025-08-10",
      transactionId: "TXN-1003",
      type: "Basic Subscription",
      amount: 100,
    },
    {
      key: "4",
      sl: 4,
      date: "2025-08-12",
      transactionId: "TXN-1004",
      type: "Gold Package",
      amount: 500,
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

export default TransactionDetailsPage;
