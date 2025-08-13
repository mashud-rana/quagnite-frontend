"use client";

import { FaArrowLeft } from "react-icons/fa";
import styles from "./courseHeader.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CoursesHeader = () => {
  const pathname = usePathname();
  return (
    <div className={styles.ic_header_container}>
      {/* Title Section */}
      <div className={styles.ic_title_section}>
        <h1 className={styles.ic_page_title}>My Courses</h1>
      </div>

      {/* Tabs */}
      <nav className={styles.ic_tabs}>
        <Link
          href="/student/courses"
          className={`${styles.ic_tab_item} ${
            pathname === "/student/courses" ||
            (!pathname.startsWith("/student/courses/inprogress") &&
              !pathname.startsWith("/student/courses/completed"))
              ? styles.ic_active
              : ""
          }`}
        >
          Enrolled courses
        </Link>

        <Link
          href="/student/courses/inprogress"
          className={`${styles.ic_tab_item} ${
            pathname.startsWith("/student/courses/inprogress")
              ? styles.ic_active
              : ""
          }`}
        >
          Inprogress pourses
        </Link>

        <Link
          href="/student/courses/completed"
          className={`${styles.ic_tab_item} ${
            pathname.startsWith("/student/courses/completed")
              ? styles.ic_active
              : ""
          }`}
        >
          Completed Courses
        </Link>
      </nav>
    </div>
  );
};

export default CoursesHeader;
