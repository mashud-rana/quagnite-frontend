"use client";

import React, { useState } from "react";
import { Table, Tag, Button, Timeline, Pagination } from "antd";
import { FaChevronRight, FaTimes } from "react-icons/fa";
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
          "Problem related - Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        date: "10/10/2024",
        remark: "Your Remark",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
        title: "User cannot log in due to invalid credentials error",
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

  return (
    <Table
      columns={columns}
      dataSource={mockTickets}
      rowKey="id"
      pagination={false}
      expandable={{
        expandedRowRender: (record) => (
          <div style={{ margin: 0 }}>
            <Timeline>
              {record.timeline.map((item) => (
                <Timeline.Item
                  key={item.id}
                  color={item.type === "problem" ? "red" : "blue"}
                >
                  <h6 className="ic_text_transfrom">
                    {item.title} {`(${item.date})`}
                  </h6>

                  {item.remark && <p>{item.remark}</p>}
                  {item.description && (
                    <p className="ic_flex_warp">{item.description}</p>
                  )}
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        ),
        expandedRowKeys,
        onExpand: (expanded, record) => handleExpandToggle(record.id),

        // 👇 THIS LINE removes the default left-side expand icon
        expandIcon: () => null,
      }}
    />
  );
}
