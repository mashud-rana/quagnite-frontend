import React from "react";
import styles from "./exploreCourse.module.css";
import Image from "next/image";
import img from "@/assets/images/all/explore-course.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const ExploreCourse = () => {
  return (
    <div>
      <section className="ic_section_space_bottom">
        <div className="container">
          <CardAnimation index={0} direction="up">
            <div className={styles.courseCard}>
              {/* Animated decorative elements */}
              <div className={styles.decorativeElements}>
                <div
                  className={`${styles.purpleCircle} ${styles.circle1}`}
                ></div>
                <div
                  className={`${styles.purpleCircle} ${styles.circle2}`}
                ></div>
                <div
                  className={`${styles.purpleCircle} ${styles.circle3}`}
                ></div>
                <div className={`${styles.blueCircle} ${styles.circle4}`}></div>
                <div className={`${styles.blueCircle} ${styles.circle5}`}></div>
                <div className={`${styles.orangeLine} ${styles.line1}`}></div>
                <div className={`${styles.orangeLine} ${styles.line2}`}></div>
                <div className={`${styles.blueArrow} ${styles.arrow1}`}></div>
                <div
                  className={`${styles.purpleCircle} ${styles.circle6}`}
                ></div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.textColumn}>
                  <h6 className="mb_16">EXPLORE COURSES</h6>
                  <h4 className="mb_16">Not ready for a coach?</h4>
                  <p className="fw_300 mb-24">
                    Explore our courses offering in this same area.
                  </p>
                  <button className="ic_btn">EXPLORE</button>
                </div>

                <div className={styles.imageColumn}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={img}
                      alt="Smiling man with glasses and headphones working on laptop"
                      className={styles.manImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardAnimation>
        </div>
      </section>
    </div>
  );
};

export default ExploreCourse;
