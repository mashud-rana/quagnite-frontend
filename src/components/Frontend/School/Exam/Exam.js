import React from "react";
import styles from "./exam.module.css";
import Image from "next/image";
import image1 from "@/assets/images/all/dashboard.png";
import image2 from "@/assets/images/all/woman.png";
import image3 from "@/assets/images/all/exam.png";

const Exam = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.examSection}>
          <div></div>

          <div className={styles.imageWrapper}>
            <Image
              src={image1}
              height={537}
              width={860}
              alt="Main Exam"
              className={styles.image1}
            />
            <Image
              src={image2}
              height={700}
              width={650}
              alt="Woman Studying"
              className={styles.image2}
            />
            <Image
              src={image3}
              height={110}
              width={340}
              alt="Small Icon"
              className={styles.image3}
            />

            <div className={styles.examContent}>
              <h6>EXAMS</h6>
              <h4 className={`${styles.examTitle} mb_16`}>
                Smart Contracts Developer Proficiency Test
              </h4>
              <div className={styles.ic_btn_des_wrapper}>
                <p className={styles.examDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  dignissim dui id lobortis vulputate. Nulla sodales enim quis
                  euismod consectetur. Ut in laoreet diam, nec efficitur felis.
                  Suspendisse potenti.
                </p>
                <div>
                  <button className={styles.examButton}>Start Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exam;
