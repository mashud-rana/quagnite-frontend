"use client";

import { FaArrowLeft } from "react-icons/fa";
import styles from "./profileHeader.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileHeader = () => {
  const pathname = usePathname();

  return (
    <div className={styles.headerContainer}>
      {/* Title Section */}
      <div className={styles.titleSection}>
        <Link href="#" className={styles.backButton} aria-label="Go back">
          <FaArrowLeft className={styles.backIcon} />
        </Link>
        <h4 className={styles.pageTitle}>Profile Management</h4>
      </div>

      {/* Tabs */}
      <nav className={styles.tabs}>
        <Link
          href="/student"
          className={`${styles.tabItem} ${
            pathname === "/student" ||
            (!pathname.startsWith("/student/account") &&
              !pathname.startsWith("/student/subscriptions"))
              ? styles.active
              : ""
          }`}
        >
          Profile
        </Link>

        <Link
          href="/student/account"
          className={`${styles.tabItem} ${
            pathname.startsWith("/student/account") ? styles.active : ""
          }`}
        >
          Account settings
        </Link>

        <Link
          href="/student/subscriptions"
          className={`${styles.tabItem} ${
            pathname.startsWith("/student/subscriptions") ? styles.active : ""
          }`}
        >
          Subscriptions
        </Link>
      </nav>
    </div>
  );
};

export default ProfileHeader;
