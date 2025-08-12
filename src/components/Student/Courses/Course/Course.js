"use client";

import React, { useState } from "react";
import { FaArrowUp, FaSearch, FaStar } from "react-icons/fa";
import FiltersSidebar from "./FiltersSidebar";
import CourseCard from "./CourseCard";
import styles from "./course.module.css";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    waysToLearn: {
      all: false,
      coreCourses: false,
      expandedCourses: false,
      labs: false,
    },
    skillLevel: { advanced: false, beginner: false, intermediate: false },
    subject: {
      businessProfessional: false,
      creativeProfessional: false,
      dataProfessional: false,
      digitalMarketer: false,
      itOps: false,
      productManager: false,
    },
  });

  const handleFilterChange = (category, option) => {
    setFilters((prev) => ({
      ...prev,
      [category]: { ...prev[category], [option]: !prev[category][option] },
    }));
  };

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
            value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <button className={styles.scrollTopButton} aria-label="Scroll to top">
          <FaArrowUp className={styles.scrollTopIcon} />
        </button>
      </div>

      <div className={styles.contentWrapper}>
        <FiltersSidebar
          filters={filters}
          handleFilterChange={handleFilterChange}
        />

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
