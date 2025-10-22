'use client';
import React from "react";
import styles from "./skillchart.module.css";
import { useRouter } from "next/navigation";

const ProgressInfo = ({attempt, examUuid, enrollUuid}) => {
  const router = useRouter();
  return (
    <div className={styles.ic_text_container}>
      <p className={styles.performanceText}>
        Last time, you did better than 7% of your peers.
      </p>
      <p>Where do you stand now?</p>

      <div className={styles.buttonGroup}>
        {
          attempt < 3 &&   <button className="ic_common_primary_btn"
          onClick={() => router.push(`/student/exams/start-exam/${examUuid}/${enrollUuid}/retake`)}
          >RETAKE NOW</button>
        }
     
        <button className="ic_common_primary_btn">CHECK YOUR ANSWERS</button>
      </div>
      <p className={styles.chancesText}>{attempt} of 3 chances remaining</p>
    </div>
  );
};

export default ProgressInfo;
