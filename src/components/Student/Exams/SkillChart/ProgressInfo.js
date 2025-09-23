import React from "react";
import styles from "./skillchart.module.css";

const ProgressInfo = () => {
  return (
    <div className={styles.ic_text_container}>
      <p className={styles.performanceText}>
        Last time, you did better than 7% of your peers.
      </p>
      <p>Where do you stand now?</p>

      <div className={styles.buttonGroup}>
        <button className="ic_common_primary_btn">RETAKE NOW</button>
        <button className="ic_common_primary_btn">CHECK YOUR ANSWERS</button>
      </div>
      <p className={styles.chancesText}>2 of 3 chances remaining</p>
    </div>
  );
};

export default ProgressInfo;
