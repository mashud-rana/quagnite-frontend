import { Modal } from "antd";
import React, { useState } from "react";
import styles from "./session.module.css";

const ScheduleModal = ({ open, onCancel, onOk }) => {
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 1, time: "10:30 AM", date: "Wednesday 15 Jan" },
    { id: 2, time: "11:30 AM", date: "Thursday 16 Jan" },
    { id: 3, time: "12:30 PM", date: "Friday 17 Jan" },
    { id: 4, time: "02:00 PM", date: "Saturday 18 Jan" },
    { id: 5, time: "03:30 PM", date: "Sunday 19 Jan" },
  ];

  return (
    <Modal
      title="Schedule a session"
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      style={{ maxWidth: "90vw" }}
      width={928}
      okText="Start Exam"
      cancelText="Cancel"
    >
      <div className={styles.gridContainer}>
        {options.map((opt) => (
          <div
            key={opt.id}
            className={`${styles.optionBox} ${
              selected === opt.id ? styles.active : ""
            }`}
            onClick={() => setSelected(opt.id)}
          >
            <div className={styles.time}>{opt.time}</div>
            <div className={styles.date}>{opt.date}</div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ScheduleModal;
