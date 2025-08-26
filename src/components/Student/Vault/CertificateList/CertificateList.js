"use client";

import React, { useState } from "react";
import { Table, Button, Space } from "antd";
import styles from "./certificatelist.module.css";
import { GoEye } from "react-icons/go";
import { MdOutlineDownload } from "react-icons/md";

const CertificateList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Title / Plan",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => `$${text}`,
    },
    {
      title: "Invoice No",
      dataIndex: "invoiceNo",
      key: "invoiceNo",
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
        // scroll={{ x: 900 }}
      />
    </div>
  );
};

export default CertificateList;
