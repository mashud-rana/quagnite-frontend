"use client";

import React, { useState } from "react";
import { Table, Space } from "antd";
import styles from "./Purchase.module.css";
import { GoEye } from "react-icons/go";
import { MdOutlineDownload } from "react-icons/md";

const Purchase = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "invoiceId",
      key: "invoiceId",
    },
    {
      title: "Title / Plan",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => `$${text}`,
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={
            status === "Paid" ? styles.ic_status_paid : styles.ic_status_pending
          }
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space>
          <button className={styles.ic_action_btn}>
            <MdOutlineDownload />
          </button>
          <button className={styles.ic_action_btn}>
            <GoEye />
          </button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      invoiceId: "INV-1001",
      title: "Personal Membership",
      date: "2025-08-01",
      amount: 200,
      paymentMethod: "Credit Card",
      status: "Paid",
    },
    {
      key: "2",
      invoiceId: "INV-1002",
      title: "Premium Package",
      date: "2025-08-05",
      amount: 350,
      paymentMethod: "PayPal",
      status: "Pending",
    },
    {
      key: "3",
      invoiceId: "INV-1003",
      title: "Basic Subscription",
      date: "2025-08-10",
      amount: 100,
      paymentMethod: "Credit Card",
      status: "Paid",
    },
    {
      key: "4",
      invoiceId: "INV-1004",
      title: "Gold Package",
      date: "2025-08-12",
      amount: 500,
      paymentMethod: "Bank Transfer",
      status: "Paid",
    },
  ];

  return (
    <div className={styles.ic_wrapper}>
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
        scroll={{ x: 1000 }} // responsive horizontal scroll
      />
    </div>
  );
};

export default Purchase;
