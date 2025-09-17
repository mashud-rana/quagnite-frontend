import React from "react";
import styles from "./create.module.css";

const CreateQuestion = () => {
  return (
    <div>
      <div className={`ic_flex2 mb-24 ${styles.ic_header}`}>
        <h5>Question Name</h5>
        <p>Microservices with Node JS and React</p>
      </div>

      <div className={styles.ic_form}>
        <div className={styles.formRow}>
          <label className={styles.label}>Bootcamp subtitle</label>
          <div className={styles.inputContainer}>
            <input className={styles.input} placeholder="Course Subtitle" />
          </div>
        </div>

        <hr className={styles.ic_hr} />

        <div className={styles.formRow}>
          <label className={styles.label}>Bootcamp subtitle</label>
          <div className={styles.inputContainer}>
            <input className={styles.input} placeholder="Course Subtitle" />
          </div>
        </div>

        <hr className={styles.ic_hr} />

        <div className={styles.formRow}>
          <label className={styles.label}>Answer 01</label>
          <div className={styles.inputContainer}>
            <input className={styles.input} placeholder="Answer 01" />
          </div>
        </div>

        <hr className={styles.ic_hr} />

        <div className={styles.formRow}>
          <label className={styles.label}>Answer 01</label>
          <div className={styles.inputContainer}>
            <input className={styles.input} placeholder="Answer 02" />
          </div>
        </div>

        <div className="ic_flex">
          <button className="ic_btn">cancel</button>
          <button className="ic_btn">save question</button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuestion;
