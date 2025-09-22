'use client';

import React, {useState, useEffect} from "react";
import { FaCircle } from "react-icons/fa";
import styles from "./CourseOverview.module.css";
import { FaCircleCheck } from "react-icons/fa6";

export function CourseOverview({ courseDetails }) {
  const [course, setCourse] = useState(null);


  useEffect(()=>{
      setCourse(courseDetails);
    },[courseDetails])
    // console.log('CourseOverview courseDetails', course);

  return (
    <div className={styles.overviewContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <h2 className={styles.title}>About this course</h2>
        <p className={styles.subtitle}>
          {course?.subtitle}
        </p>
      </div>

      {/* Stats and Features Section - Two Column Layout */}
      <div className={styles.topSection}>
        <div className={styles.leftColumn}>
          <p className={styles.sectionTitle}>By the numbers :</p>

          <div className={styles.ic_list_container}>
            <div className={styles.statsList}>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Skill level:</span>
                <span className={styles.statValue}>{course?.difficulty?.title}</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Students:</span>
                <span className={styles.statValue}>{course?.total_enrolled_students}</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Lectures:</span>
                <span className={styles.statValue}>{course?.lectures_count}</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Video:</span>
                <span className={styles.statValue}>{course?.lectures_video_duration}</span>
              </div>
            </div>

            <div className={styles.statsList}>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Languages:</span>
                <span className={styles.statValue}>{course?.language?.title}</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Captions:</span>
                <span className={styles.statValue}>Yes</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <h3 className={styles.sectionTitle}>Features :</h3>
          <div className={styles.featuresContent}>
            <span className={styles.featureText}>Available on </span>
            <a href="#" className={styles.featureLink}>
              iOS
            </a>
            <span className={styles.featureText}> and </span>
            <a href="#" className={styles.featureLink}>
              Android
            </a>
          </div>
        </div>
      </div>


      <div className={styles.descriptionSection}>
        <p className={styles.sectionTitle}>Description :</p>
        <div className={styles.descriptionContent}>
          <div
          className={styles.descriptionParagraph}
          dangerouslySetInnerHTML={{ __html: course?.description }}
            />
          </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.leftColumn2}>
          <h3 className={styles.sectionTitle}>What you&#39;ll learn</h3>
          <div className={styles.learningList}>
            {course && course.course_tags.length > 0 && course.course_tags.map((item, index) => (
              <div key={index} className={styles.learningItem}>
                <FaCircleCheck className={styles.bulletPoint} />
                <span className={styles.learningText}>{item?.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightColumn}>
          <h3 className={styles.sectionTitle}>Who this course is for</h3>
          <div className={styles.learningList}>
            {/* {whoThisCourseIsFor.map((item, index) => (
              <div key={index} className={styles.learningItem}>
                <FaCircle className={styles.bulletPoint} />
                <span className={styles.learningText}>{item}</span>
              </div>
            ))} */}
            <div className={styles.learningItem}>
                <FaCircle className={styles.bulletPoint} />
                <span className={styles.learningText}>{course?.difficulty?.title}</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
