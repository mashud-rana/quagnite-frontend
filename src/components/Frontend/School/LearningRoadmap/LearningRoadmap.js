import React from "react";
import styles from "./learningroadmap.module.css";
import { FaStar } from "react-icons/fa";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

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
  },
];

const LearningRoadmap = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
        <h4 className={styles.title}>
          Learning <span className={styles.highlight}>roadmap</span>
        </h4>

        <div className={styles.coursesGrid}>
          {courses.map((course, index) => (
            <CardAnimation index={index} key={course.id}>
              <div className={styles.courseCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.ic_number_container}>
                    <span className={styles.courseNumber}>{course.number}</span>
                  </div>
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

                <h5 className={styles.courseTitle}>{course.title}</h5>
                <p className={styles.courseDescription}>{course.description}</p>

                <button className={`${styles.exploreButton}`}>EXPLORE</button>
              </div>
            </CardAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningRoadmap;
