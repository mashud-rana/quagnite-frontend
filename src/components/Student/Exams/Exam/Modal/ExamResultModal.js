"use client";

import React from "react";
import { Modal, Table, Button, Empty, Alert } from "antd";
import { 
  CheckCircleOutlined, 
  CloseCircleOutlined, 
  TrophyOutlined 
} from "@ant-design/icons";
import styles from "./modal.module.css";

const ExamResultModal = ({ open, onCancel, isError, examResults = [] }) => {
  

  const dataSource = examResults;

  const columns = [
    {
      title: 'SL',
      dataIndex: 'sl',
      key: 'sl',
      width: 60,
      align: 'center',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Exam Date',
      dataIndex: 'exam_date',
      key: 'exam_date',
      width: 130,
    },
    
    {
      title: 'Total Question',
      dataIndex: 'total_qus',
      key: 'total_qus',
      width: 130,
      align: 'center',
    },
    {
      title: 'Correct Answer',
      dataIndex: 'correct_ans',
      key: 'correct_ans',
      width: 130,
      align: 'center',
      render: (text) => (
        <span style={{ color: '#52c41a', fontWeight: 500 }}>
          <CheckCircleOutlined /> {text}
        </span>
      ),
    },
    {
      title: 'Wrong Answer',
      dataIndex: 'wrong_ans',
      key: 'wrong_ans',
      width: 130,
      align: 'center',
      render: (text) => (
        <span style={{ color: '#ff4d4f', fontWeight: 500 }}>
          <CloseCircleOutlined /> {text}
        </span>
      ),
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
      width: 100,
      align: 'center',
      render: (text) => (
        <span style={{ 
          color: text >= 80 ? '#52c41a' : text >= 60 ? '#faad14' : '#ff4d4f',
          fontWeight: 600,
          fontSize: '16px'
        }}>
          <TrophyOutlined /> {text}%
        </span>
      ),
    },
  ];

  if (isError) {
    return (
      <Modal
        title="Your Exam Results"
        open={open}
        onCancel={onCancel}
        footer={[
          <Button key="close" type="primary" onClick={onCancel}>
            Close
          </Button>
        ]}
        width={928}
      >
        <Alert
          message="Error"
          description="Failed to load exam results. Please try again later."
          type="error"
          showIcon
        />
      </Modal>
    );
  }

  return (
    <Modal
      title={
        <div className={styles.modalHeader}>
          <TrophyOutlined style={{ marginRight: 8, color: '#1890ff' }} />
          <span className={styles.modalTitle}>Your Exam Reports</span>
        </div>
      }
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="close" type="primary" size="large" onClick={onCancel}>
          Close
        </Button>
      ]}
      width={928}
      centered
      className={styles.examResultModal}
    >
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 5,
          showSizeChanger: false,
          showTotal: (total) => `Total ${total} results`,
        }}
        locale={{
          emptyText: (
            <Empty
              description="No exam results found"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ),
        }}
        scroll={{ x: 800 }}
      />
    </Modal>
  );
};

export default ExamResultModal;