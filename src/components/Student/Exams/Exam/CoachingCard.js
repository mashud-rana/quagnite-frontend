import Image from "next/image";
import React from "react";
import { FaRegClock } from "react-icons/fa";
import { PiCalendarBlankBold } from "react-icons/pi";
import styles from "./examCard.module.css";
import img from "@/assets/images/all/exams.png";

const CoachingCard = ({ exam }) => {
  return (
    <div key={exam.id} className={styles.examCard}>
      {/* Card Image */}
      <div className={styles.cardImageContainer}>
        <Image src={img} alt={exam.title} className={styles.cardImage} />
      </div>

      {/* Card Content */}
      <div>
        <div className={styles.ic_text_container}>
          <h4 className={styles.examTitle}> {exam.title}</h4>
        </div>

        {/* <p>{exams.description}</p> */}

        {/* <div className={styles.examDetailsRow}>
          <span className={styles.examDetail}>Exam Id - {exams.examId}</span>
          <span className={styles.examDetail}>
            No of Attempts - {exams.attempts}
          </span>
        </div> */}

        <div className={styles.ic_coaching_icon_text_wrapper}>
          <div className={styles.timeDetail}>
            <FaRegClock className={styles.timeIcon} />
            <span>Start time :{exam.time}</span>
          </div>
          <div className={styles.timeDetail}>
            <PiCalendarBlankBold className={styles.timeIcon} />
            <span>{exam.date}</span>
          </div>
        </div>

        <button className="ic_common_primary_btn">start exam</button>
      </div>
    </div>
  );
};

export default CoachingCard;
