import React from "react";
import { FaChartBar } from "react-icons/fa";
import { FaRegClock, FaStar } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import styles from "./course.module.css";
import Image from "next/image";
import img from "@/assets/images/all/subscription.png";

const CourseCard = ({ course }) => {
  return (
    <div className={styles.ic_course_card}>
      <div className={styles.ic_img_text_wrapper}>
        <div className={styles.ic_course_thumbnail}>
          <Image
            src={course.course_image}
            width={300}
            height={100}
            alt={course.course_title}
            className={styles.ic_thumbnail_image}
          />

          <div className={styles.ic_course_metadata}>
            <div className={styles.ic_metadata_item}>
              <FaChartBar className={styles.ic_metadata_icon} />
              <span className={styles.ic_metadata_text}>{course.course_difficulty}</span>
            </div>
            <div className={styles.ic_metadata_item}>
              <FaRegClock className={styles.ic_metadata_icon} />
              <span className={styles.ic_metadata_text}>{course.course_duration}</span>
            </div>
            <div className={styles.ic_metadata_item}>
              <FiCalendar className={styles.ic_metadata_icon} />
              <span className={styles.ic_metadata_text}>{course.enroll_date}</span>
            </div>
          </div>

          <div className={styles.ic_course_rating}>
            {/* <div className={styles.ic_stars}>{renderStars(course.rating)}</div> */}
            <div className={styles.ic_stars}>
              <FaStar
                className={`${styles.ic_star} ${styles.ic_star_filled}`}
              />
              <FaStar
                className={`${styles.ic_star} ${styles.ic_star_filled}`}
              />
              <FaStar
                className={`${styles.ic_star} ${styles.ic_star_filled}`}
              />
              <FaStar
                className={`${styles.ic_star} ${styles.ic_star_filled}`}
              />

              <FaStar className={`${styles.ic_star} ${styles.ic_star_empty}`} />
            </div>
            <span className={styles.ic_student_count}>0</span>
          </div>
        </div>

        <div>
          <h3 className={styles.ic_course_title}>{course.course_title}</h3>
          <p className={styles.ic_course_description}>{course.course_description}</p>
          <div className={styles.ic_course_action}>
            <button className={styles.ic_start_button}>
              START YOUR JOURNEY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
