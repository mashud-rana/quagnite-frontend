"use client";

import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaCircle, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./BootcampOverview.module.css";
import { FaCircleCheck } from "react-icons/fa6";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";

export function BootcampOverview() {
  const course = {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Learn HTML, CSS, JavaScript, React, Node.js, and more to become a full-stack web developer.",
    course_tags: [
      { id: 1, name: "HTML & CSS Basics" },
      { id: 2, name: "JavaScript Fundamentals" },
      { id: 3, name: "React.js with Hooks" },
      { id: 4, name: "Node.js & Express.js" },
      { id: 5, name: "MongoDB Database" },
      { id: 6, name: "REST API Development" },
      { id: 7, name: "Authentication & JWT" },
      { id: 8, name: "Deployment & Hosting" },
    ],
  };

  return (
    <div className={styles.overviewContainer}>
      <div className={styles.ic_flex}>
        <h3 className={styles.sectionTitle}>Description :</h3>
        <div className={styles.descriptionContent}>
          Throughout this course, you will be learning various essential things
          that are mostly used by a flutter developer when he/she is working at
          some firm. This course will help you learn how to create fast and
          stunning mobile applications with so much ease. The projects/apps
          which you will be making throughout the course will be working on
          android as well as ios. Some changes to the projects make them
          compatible will web browsers as well. You will also be building a
          large number of apps with the difficulty level ranging from beginner
          to advanced and these projects/apps will help you get better with the
          concepts eventually. I will also be covering some of the most used
          flutter packages which are generally used while we are developing a
          flutter app. Flutter is Google’s UI toolkit for building beautiful,
          natively compiled applications for mobile, web, and desktop from a
          single codebase. Delight your users with Flutters built-in beautiful
          Material Design. Flutters hot reload helps you quickly and easily
          experiment, build UIs, add features, and fix bugs faster.
          Cross-platform development with Flutter. Flutter’s widgets incorporate
          all critical platform differences such as scrolling, navigation,
          icons, and fonts to provide full native performance on both iOS and
          Android. Happy Learning!!
        </div>
      </div>

      <div className={styles.ic_flex}>
        <h3 className={styles.sectionTitle}>What you&#39;ll learn</h3>
        <div className={styles.learningList}>
          {course &&
            course.course_tags.length > 0 &&
            course.course_tags.map((item, index) => (
              <div key={index} className={styles.learningItem}>
                <FaCircleCheck className={styles.bulletPoint} />
                <span className={styles.learningText}>{item?.name}</span>
              </div>
            ))}
        </div>
      </div>

      <div className={styles.ic_flex}>
        <h3 className={styles.sectionTitle}>Who this course is for</h3>
        <div className={styles.learningList}>
          {course &&
            course.course_tags.length > 0 &&
            course.course_tags.map((item, index) => (
              <div key={index} className={styles.learningItem}>
                <FaCircleCheck className={styles.bulletPoint} />
                <span className={styles.learningText}>{item?.name}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Instructor Section */}
      <div className={styles.ic_flex}>
        <h3 className={styles.sectionTitle}>Instructor</h3>
        <div className={styles.instructorContent}>
          <Image
            src={img}
            alt="Instructor"
            className={styles.instructorImage}
          />
          <div className={styles.instructorInfo}>
            <h4 className={styles.instructorName}>Leslie Alexander</h4>
            <p className={styles.ic_instractor_title}>
              Web Developer | Founder, Hex Hybrids
            </p>
            <div className={styles.instructorMeta}>
              <div className={styles.metaItem}>
                <FaMapMarkerAlt className={styles.metaIcon} />
                <span>London, UK</span>
              </div>
              <div className={styles.metaItem}>
                <FaCalendarAlt className={styles.metaIcon} />
                <span>Since April 1, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
