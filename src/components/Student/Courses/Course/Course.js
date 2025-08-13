"use client";

import React, { useState } from "react";
import { FaArrowUp, FaSearch, FaStar } from "react-icons/fa";
import FiltersSidebar from "./FiltersSidebar";
import CourseCard from "./CourseCard";
import styles from "./course.module.css";
import { FaAnglesUp } from "react-icons/fa6";

const mockCourses = [
  {
    id: "1",
    title: "Blockchain Mastery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada ex. Ut ultrices nulla ut tortor ullamcorper fermentum. Praesent sagittis enim sit amet ligula pharetra mattis id facilisis purus. Sed eu ante semper, varius velit vitae, sagittis turpis. Donec et posuere lectus. Praesent dignissim vulputate ipsum a molestie. Quisque ullamcorper non ligula ut tempus. Nullam tempor consectetur ultricies.",
    level: "Beginner",
    duration: "1h 10m",
    date: "22 Nov 2024",
    rating: 4,
    students: 210,
    thumbnail: "/placeholder.svg?height=120&width=200",
  },
  {
    id: "2",
    title: "Blockchain Mastery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada ex. Ut ultrices nulla ut tortor ullamcorper fermentum. Praesent sagittis enim sit amet ligula pharetra mattis id facilisis purus. Sed eu ante semper, varius velit vitae, sagittis turpis. Donec et posuere lectus. Praesent dignissim vulputate ipsum a molestie. Quisque ullamcorper non ligula ut tempus. Nullam tempor consectetur ultricies.",
    level: "Beginner",
    duration: "1h 10m",
    date: "22 Nov 2024",
    rating: 4,
    students: 210,
    thumbnail: "/placeholder.svg?height=120&width=200",
  },
  {
    id: "3",
    title: "Blockchain Mastery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada ex. Ut ultrices nulla ut tortor ullamcorper fermentum. Praesent sagittis enim sit amet ligula pharetra mattis id facilisis purus. Sed eu ante semper, varius velit vitae, sagittis turpis. Donec et posuere lectus. Praesent dignissim vulputate ipsum a molestie. Quisque ullamcorper non ligula ut tempus. Nullam tempor consectetur ultricies.",
    level: "Beginner",
    duration: "1h 10m",
    date: "22 Nov 2024",
    rating: 4,
    students: 210,
    thumbnail: "/placeholder.svg?height=120&width=200",
  },
];

const Course = () => {
  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${styles.star} ${
          index < rating ? styles.starFilled : styles.starEmpty
        }`}
      />
    ));

  return (
    <div className={styles.coursesContainer}>
      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>
        <div>
          <button className={styles.scrollTopButton} aria-label="Scroll to top">
            <FaAnglesUp className={styles.scrollTopIcon} />
          </button>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <FiltersSidebar />

        <div className={styles.coursesList}>
          {mockCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              renderStars={renderStars}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
