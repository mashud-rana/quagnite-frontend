"use client";

import React, { useState } from "react";
import { Table, Button, Space } from "antd";
import styles from "./invoice.module.css";

const InvoiceTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    { title: "Date", dataIndex: "date", key: "date", width: 150 },
    { title: "Title / Plan", dataIndex: "title", key: "title", width: 250 },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 150,
      render: (text) => `$${text}`,
    },
    {
      title: "Invoice No",
      dataIndex: "invoiceNo",
      key: "invoiceNo",
      width: 200,
    },
    {
      title: "Action",
      key: "action",
      width: 200,
      render: (_, record) => (
        <Space>
          <Button type="primary" size="small">
            View
          </Button>
          <Button type="default" size="small">
            Download
          </Button>
        </Space>
      ),
    },
  ];

  // Data sample
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

  return (
    <div className={styles.ic_wrapper} style={{ padding: 20 }}>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={{
          current: currentPage,
          pageSize: 2,
          total: data.length,
          onChange: (page) => setCurrentPage(page),
        }}
        scroll={{ x: 1500 }}
      />
    </div>
  );
};

export default InvoiceTable;
