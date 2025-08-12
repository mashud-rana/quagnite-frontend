import React from "react";
import { FaClock, FaCalendarAlt, FaStar, FaChartBar } from "react-icons/fa";
import styles from "./course.module.css";
import Image from "next/image";
import img from "@/assets/images/all/subscription.png";

const CourseCard = ({ course, renderStars }) => {
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseThumbnail}>
        <Image
          src={img}
          width={300}
          height={100}
          alt={course.title}
          className={styles.thumbnailImage}
        />
      </div>

      <div className={styles.courseDetails}>
        <h3 className={styles.courseTitle}>{course.title}</h3>
        <p className={styles.courseDescription}>{course.description}</p>

        <div className={styles.courseMetadata}>
          <div className={styles.metadataItem}>
            <FaChartBar className={styles.metadataIcon} />
            <span className={styles.metadataText}>{course.level}</span>
          </div>
          <div className={styles.metadataItem}>
            <FaClock className={styles.metadataIcon} />
            <span className={styles.metadataText}>{course.duration}</span>
          </div>
          <div className={styles.metadataItem}>
            <FaCalendarAlt className={styles.metadataIcon} />
            <span className={styles.metadataText}>{course.date}</span>
          </div>
        </div>

        <div className={styles.courseRating}>
          <div className={styles.stars}>{renderStars(course.rating)}</div>
          <span className={styles.studentCount}>{course.students}</span>
        </div>
      </div>

      <div className={styles.courseAction}>
        <button className={styles.startButton}>START YOUR JOURNEY</button>
      </div>
    </div>
  );
};

export default CourseCard;
