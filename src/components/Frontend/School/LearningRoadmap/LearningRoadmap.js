import React from "react";
import styles from "./learningroadmap.module.css";
import { FaStar } from "react-icons/fa";

const courses = [
  {
    id: 1,
    number: "01",
    level: "BEGINNER",
    duration: "2 MONTHS",
    rating: 4,
    title: "Course name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante tincidunt, aliquet erat non, faucibus libero. Donec laoreet elementum condimentum. Pellentesque ornare rhoncus venenatis. Sed massa est, sodales vel posuere a, fringilla in augue.",
    buttonStyle: styles.primaryButton,
  },
  {
    id: 2,
    number: "02",
    level: "INTERMEDIATE",
    duration: "3 MONTHS",
    rating: 4,
    title: "Course name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante tincidunt, aliquet erat non, faucibus libero. Donec laoreet elementum condimentum. Pellentesque ornare rhoncus venenatis. Sed massa est, sodales vel posuere a, fringilla in augue.",
    buttonStyle: styles.secondaryButton,
  },
  {
    id: 3,
    number: "03",
    level: "EXPERT",
    duration: "2 MONTHS",
    rating: 4,
    title: "Course name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante tincidunt, aliquet erat non, faucibus libero. Donec laoreet elementum condimentum. Pellentesque ornare rhoncus venenatis. Sed massa est, sodales vel posuere a, fringilla in augue.",
    buttonStyle: styles.secondaryButton,
  },
];

const LearningRoadmap = () => {
  return (
    <section className={styles.roadmapSection}>
      <div className={styles.networkBackground}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Learning <span className={styles.highlight}>roadmap</span>
        </h2>

        <div className={styles.coursesGrid}>
          {courses.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <div className={styles.cardHeader}>
                <span className={styles.courseNumber}>{course.number}</span>
                <div className={styles.courseInfo}>
                  <span className={styles.courseLevel}>
                    {course.level} | {course.duration}
                  </span>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        size={16}
                        className={
                          index < course.rating
                            ? styles.starFilled
                            : styles.starEmpty
                        }
                        fill={index < course.rating ? "#f59e0b" : "none"}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <h3 className={styles.courseTitle}>{course.title}</h3>
              <p className={styles.courseDescription}>{course.description}</p>

              <button
                className={`${styles.exploreButton} ${course.buttonStyle}`}
              >
                EXPLORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningRoadmap;
