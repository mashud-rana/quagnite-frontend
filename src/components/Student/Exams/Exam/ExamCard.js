"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import { PiCalendarBlankBold } from "react-icons/pi";
import img from "@/assets/images/all/exams.png";
import styles from "./examCard.module.css";
import ExamStartModal from "./ExamStartModal";
import {truncateHtml} from "@/utils/helper";

const ExamCard = ({ enrollExam, type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const shortDescription = truncateHtml(
            enrollExam?.exam?.description || "",
            250
          );

  return (
    <div key={enrollExam.id} className={styles.examCard}>
      {/* Card Image */}
      <div className={styles.cardImageContainer}>
        <Image src={enrollExam?.exam?.image_url} alt={enrollExam?.exam?.title} className={styles.cardImage}
         width={200} height={100} />
      </div>

      {/* Card Content */}
      <div>
        <div className={styles.ic_text_container}>
          <h4 className={styles.examTitle}>{enrollExam?.exam?.title}</h4>
          <span className={styles.statusBadge}>{type == 'upcoming' ? 'Upcoming exam' : 'Ongoing exam'}</span>
        </div>

        <div dangerouslySetInnerHTML={{ __html: shortDescription }} />

        <div className={styles.examDetailsRow}>
          <span className={styles.examDetail}>Exam Id - {enrollExam?.id}</span>
          <span className={styles.examDetail}>
            No of Attempts - {enrollExam?.attempt}
          </span>
        </div>

        <div className={styles.timeDetailsRow}>
          <div className={styles.timeDetail}>
            <FaRegClock className={styles.timeIcon} />
            <span>{enrollExam?.formatted_time}</span>
          </div>
          <div className={styles.timeDetail}>
            <PiCalendarBlankBold className={styles.timeIcon} />
            <span>{enrollExam?.formatted_created_at}</span>
          </div>
        </div>

        <button
          className="ic_common_primary_btn"
          onClick={() => setIsModalOpen(true)}
        >
          start exam
        </button>
      </div>

      <ExamStartModal
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        enrollExam={enrollExam}
      />
    </div>
  );
};

export default ExamCard;
