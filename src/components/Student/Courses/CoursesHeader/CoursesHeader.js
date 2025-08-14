"use client";

import { FaArrowLeft } from "react-icons/fa";
import styles from "./courseHeader.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NProgress from "nprogress";

const CoursesHeader = () => {
  //Router & pathname
  const pathname = usePathname();
  const router = useRouter();
  //navigate course
  const navigateToCourse = (slug) => {
    NProgress.start();
    router.push(`/student/${slug}`, {
      scroll: false,
    });
  };

  //nav data
  const navItems = [
    { title: "Enrolled courses", slug: "courses" },
    { title: "Inprogress courses", slug: "courses/inprogress" },
    { title: "Completed Courses", slug: "courses/completed" },
  ];

  return (
    <div className={styles.ic_header_container}>
      {/* Title Section */}
      <div className={styles.ic_title_section}>
        <h1 className={styles.ic_page_title}>My Courses</h1>
      </div>

      {/* Tabs */}
      <nav className={styles.ic_tabs}>
        {navItems?.map((item) => (
          <button
            key={item.slug}
            className={`${styles.ic_tab_item} ${
              pathname === `/student/${item.slug}` ? styles.ic_active : ""
            }`}
            onClick={() => navigateToCourse(item.slug)}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CoursesHeader;
