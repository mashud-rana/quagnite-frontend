'use client';
import React from "react";
import styles from "./skillchart.module.css";
import { useParams, useRouter } from "next/navigation";
import {useSearchParams} from "next/navigation";

const ProgressInfo = ({attempt}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cameraId = searchParams.get("camera");
  const micId = searchParams.get("mic");
  const { examUuid, enrollUuid } = useParams()

  return (
    <div className={styles.ic_text_container}>
      <p className={styles.performanceText}>
        Last time, you did better than 7% of your peers.
      </p>
      <p>Where do you stand now?</p>

      <div className={styles.buttonGroup}>
        {
          attempt < 3 &&   <button className="ic_common_primary_btn"
          onClick={() => router.push(`/student/exams/start-exam/${examUuid}/${enrollUuid}?camera=${cameraId}&mic=${micId}`)}
          >RETAKE NOW</button>
        }
     
        <button className="ic_common_primary_btn">CHECK YOUR ANSWERS</button>
      </div>
      <p className={styles.chancesText}>{attempt} of 3 chances remaining</p>
    </div>
  );
};

export default ProgressInfo;
