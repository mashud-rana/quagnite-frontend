"use client";

import React from "react";
import { Modal } from "antd";
import styles from "./examCard.module.css";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { SlMicrophone } from "react-icons/sl";
import { useRouter } from "next/navigation";

const ExamStartModal = ({ open, onCancel }) => {
  const router = useRouter();

  const handleStartExam = () => {
    onCancel?.();
    router.push("/student/exams/start-exam");
  };
  return (
    <Modal
      title={
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>
            To ensure a fair and secure exam experience, please follow these
            steps before starting:
          </span>
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
      {/* Instruction List */}
      <ul className={styles.ic_list_container}>
        <li>
          Close all other apps & browser tabs - Only the exam page should be
          open.
        </li>
        <li>
          Enable Camera & Microphone Access - This is required for exam
          monitoring.
        </li>
        <li>
          Ensure Stable Internet Connection - Avoid disruptions during your
          exam.
        </li>
        <li>
          Find a Quiet & Well-Lit Environment - Make sure you’re in a
          distraction-free space.
        </li>
      </ul>

      <hr className={styles.ic_hr} />
      {/* Second Title */}
      <h6 className={styles.sectionTitle}>Select Camera & Microphone</h6>

      <div className={styles.flexRow}>
        {/* Camera Select */}
        <div className={styles.inputWrapper}>
          <HiOutlineVideoCamera className={styles.inputIcon} />
          <select className={styles.customSelect}>
            <option value="default">Default Camera</option>
            <option value="external">External Camera</option>
          </select>
        </div>

        {/* Microphone Select */}
        <div className={styles.inputWrapper}>
          <SlMicrophone className={styles.inputIcon} />
          <select className={styles.customSelect}>
            <option value="default">Default Microphone</option>
            <option value="external">External Microphone</option>
          </select>
        </div>

        {/* Test Button */}
        <button
          className="ic_common_primary_btn"
          onClick={() => alert("Testing Camera & Mic")}
        >
          Test Camera & Mic
        </button>
      </div>

      <hr className={styles.ic_hr} />

      {/* Warning Notes */}
      <p className={styles.warningNote}>
        ⚠️ Please ensure your devices are working properly before starting the
        exam.
      </p>
    </Modal>
  );
};

export default ExamStartModal;
