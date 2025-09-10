"use client";

import React from "react";
import { Modal } from "antd";
import styles from "./modal.module.css";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { SlMicrophone } from "react-icons/sl";
import { useRouter } from "next/navigation";

const DownloadResumeModal = ({ open, onCancel }) => {
  const router = useRouter();

  const handleStartExam = () => {
    onCancel?.();
    router.push("/student/exams/start-exam");
  };
  return (
    <Modal
      title={
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>Your certificate</span>
          <a href="#" className={styles.helpLink}>
            Need Help?
          </a>
        </div>
      }
      open={open}
      onCancel={onCancel}
      onOk={handleStartExam}
      style={{ maxWidth: "90vw" }}
      width={928}
      okText="Start Exam"
      cancelText="Cancel"
    >
      <hr className={styles.ic_hr} />

      <h6 className={styles.sectionTitle}>Share on social Media</h6>

      <hr className={styles.ic_hr} />
    </Modal>
  );
};

export default DownloadResumeModal;
