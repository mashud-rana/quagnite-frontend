import React from "react";
import styles from "./instructor.module.css";
import Image from "next/image";
import img from "@/assets/images/all/assist1.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Instructor = () => {
  return (
    <section className="ic_section_space">
      <CardAnimation index={0} direction="up">
        <div className={styles.ic_tutoring_section_wrapper}>
          <Image
            src={img}
            alt="Woman instructor helping a man with laptop"
            className={styles.ic_tutoring_image}
            width={894}
            height={576}
          />
          <div className="container">
            <div className={styles.contentWrapper}>
              <div></div>

              <div className={styles.cardColumn}>
                <div className={styles.card}>
                  <p className={`${styles.cardSubtitle} mb_16`}>
                    Need some one-on-one time?
                  </p>
                  <h4 className="mb_16">
                    Schedule tutoring direct with an instructor.
                  </h4>
                  <p className="mb-24">
                    Focused, individual or small group sessions on only what you
                    need to learn.
                  </p>
                  <button className="ic_btn">EXPLORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardAnimation>
    </section>
  );
};

export default Instructor;
