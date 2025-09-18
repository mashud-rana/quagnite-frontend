import Image from "next/image";
import React from "react";
import { FaChartBar } from "react-icons/fa";
import { FaRegClock, FaStar } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import styles from "./course.module.css";
import img from "@/assets/images/all/subscription.png";

const ProgressCard = ({ course }) => {
    const renderStars = (rating) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <FaStar
            key={i}
            className={`${styles.ic_star} ${i <= rating ? styles.ic_star_filled : styles.ic_star_empty}`}
          />
        );
      }
      return stars;
    };
  

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
              {renderStars(course.course_review?.average_rating || 0)}
            </div>
            <span className={styles.ic_student_count}>{course.course_review?.total_review || 0}</span>
          </div>
        </div>

        <div className={styles.ic_course_info}>
          <h3 className={styles.ic_course_title}>{course.course_title}</h3>
          {/* <p className={styles.ic_course_description}>{course.description}</p> */}
            <div
              className={styles.ic_course_description}
              dangerouslySetInnerHTML={{ __html: course.course_description }}
            />
          <div className={styles.ic_course_action2}>
            <div>
              {course.completed_percentage}% Complete
              <div className={styles.ic_progress_bar}>
                <div
                  className={styles.ic_progress_fill}
                  style={{ width: `${course.completed_percentage}%` }}
                ></div>
              </div>
            </div>

            <button className={styles.ic_start_button}>Finish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
