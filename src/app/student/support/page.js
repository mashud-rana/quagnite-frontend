"use client";

import React, { useState } from "react";
import { Table, Tag, Button, Tabs, Timeline, Pagination } from "antd";
import { FaArrowLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import styles from "./support.module.css";

const mockTickets = [
  {
    id: "1",
    ticketNo: "d233d2q",
    date: "09/02/2025",
    type: "Refund Request",
    status: "Resolved",
    timeline: [
      {
        id: "1",
        type: "problem",
        title:
          "Problem related - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "10/10/2024",
        remark: "Your Remark",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        id: "2",
        type: "pending",
        title: "Your issue is pending",
        date: "12/10/2024",
      },
    ],
  },
  {
    id: "2",
    ticketNo: "x788sd9",
    date: "10/02/2025",
    type: "Login Issue",
    status: "Pending",
    timeline: [
      {
        id: "1",
        type: "problem",
        title: "User cannot log in due to invalid credentials error.",
        date: "15/10/2024",
        remark: "Customer tried resetting password",
      },
      {
        id: "2",
        type: "pending",
        title: "Admin is checking user credentials",
        date: "16/10/2024",
      },
    ],
  },
];

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("1");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const statusColors = {
    Resolved: "green",
    Pending: "orange",
    Open: "blue",
    Closed: "red",
  };

  const handleExpandToggle = (recordId) => {
    setExpandedRowKeys((prev) =>
      prev.includes(recordId)
        ? prev.filter((id) => id !== recordId)
        : [...prev, recordId]
    );
  };

  const columns = [
    { title: "Ticket No", dataIndex: "ticketNo", key: "ticketNo" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Type", dataIndex: "type", key: "type" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={statusColors[status] || "default"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type="link" onClick={() => handleExpandToggle(record.id)}>
          {expandedRowKeys.includes(record.id) ? (
            <FaTimes />
          ) : (
            <FaChevronRight />
          )}
        </Button>
      ),
    },
  ];

  const tabItems = [
    {
      key: "1",
      label: "Your Ticket",
      children: (
        <>
          <Table
            columns={columns}
            dataSource={mockTickets}
            rowKey="id"
            pagination={false}
            expandable={{
              expandedRowRender: (record) => (
                <div style={{ margin: 0 }}>
                  <h4>Ticket Details</h4>
                  <Timeline>
                    {record.timeline.map((item) => (
                      <Timeline.Item
                        key={item.id}
                        color={item.type === "problem" ? "red" : "blue"}
                      >
                        <h4>{item.title}</h4>
                        <small>{item.date}</small>
                        {item.remark && (
                          <p>
                            <b>Remark:</b> {item.remark}
                          </p>
                        )}
                        {item.description && <p>{item.description}</p>}
                      </Timeline.Item>
                    ))}
                  </Timeline>
                </div>
              ),
              expandedRowKeys,
              onExpand: (expanded, record) => handleExpandToggle(record.id),
            }}
          />

          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Pagination
              current={currentPage}
              total={68}
              pageSize={10}
              onChange={(page) => setCurrentPage(page)}
            />
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: "Community",
      children: <p>Community support content will be displayed here.</p>,
    },
    {
      key: "3",
      label: "Coaching Support",
      children: <p>Coaching support content will be displayed here.</p>,
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Button
          type="text"
          icon={<FaArrowLeft />}
          onClick={() => console.log("Back clicked")}
        >
          Back
        </Button>
        <Button
          type="primary"
          onClick={() => console.log("Create new ticket clicked")}
        >
          CREATE NEW TICKET
        </Button>
      </div>

      {/* Tabs */}
      <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
    </div>
  );
}
