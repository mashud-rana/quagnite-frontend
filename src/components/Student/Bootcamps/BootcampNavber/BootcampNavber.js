"use client";
import styles from "./navber.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BootcampNavber = () => {
  const pathname = usePathname();
  const tabsRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (tabsRef.current) {
        setShowArrows(
          tabsRef.current.scrollWidth > tabsRef.current.clientWidth
        );
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollTabs = (direction) => {
    if (!tabsRef.current) return;
    const scrollAmount = 200;
    tabsRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.ic_header_container}>
      {showArrows && (
        <button className={styles.ic_arrow} onClick={() => scrollTabs("left")}>
          <FaChevronLeft />
        </button>
      )}

      <div className={styles.ic_tabs_wrapper} ref={tabsRef}>
        <nav className={styles.ic_tabs}>
          <Link
            href="/student/bootcamps"
            className={`${styles.ic_tab_item} ${
              pathname === "/student/bootcamps" ? styles.ic_active : ""
            }`}
          >
            Course Content
          </Link>
          <Link
            href="/student/bootcamps/overview"
            className={`${styles.ic_tab_item} ${
              pathname.startsWith("/student/bootcamps/overview")
                ? styles.ic_active
                : ""
            }`}
          >
            Course Overview
          </Link>
          <Link
            href="/student/bootcamps/announcement"
            className={`${styles.ic_tab_item} ${
              pathname.startsWith("/student/bootcamps/announcement")
                ? styles.ic_active
                : ""
            }`}
          >
            Announcements
          </Link>
          <Link
            href="/student/bootcamps/reviews"
            className={`${styles.ic_tab_item} ${
              pathname.startsWith("/student/bootcamps/reviews")
                ? styles.ic_active
                : ""
            }`}
          >
            Reviews
          </Link>
          <Link
            href="/student/bootcamps/discussions"
            className={`${styles.ic_tab_item} ${
              pathname.startsWith("/student/bootcamps/discussions")
                ? styles.ic_active
                : ""
            }`}
          >
            Discussions
          </Link>
          <Link
            href="/student/bootcamps/notes"
            className={`${styles.ic_tab_item} ${
              pathname.startsWith("/student/bootcamps/notes")
                ? styles.ic_active
                : ""
            }`}
          >
            Notes
          </Link>
        </nav>
      </div>

      {showArrows && (
        <button className={styles.ic_arrow} onClick={() => scrollTabs("right")}>
          <FaChevronRight />
        </button>
      )}

      <button className={styles.ic_btn}>Playground</button>
    </div>
  );
};

export default BootcampNavber;
