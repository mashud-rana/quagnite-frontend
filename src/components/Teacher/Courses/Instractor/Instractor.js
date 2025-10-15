import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./instractor.module.css";

const Instractor = () => {
  return (
    <div>
      <div className="mb-24">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Other Teacher Added</h1>
        </div>
      </div>

      <div className={`${styles.formRow} mb-24`}>
        <label className={styles.label}>Select Teacher</label>
        <input type="text" className={styles.input} />
      </div>

      <div className="ic_flex">
        <button className="ic_btn">Back</button>
        <button className="ic_btn">Save and continue</button>
      </div>
    </div>
  );
};

export default Instractor;
