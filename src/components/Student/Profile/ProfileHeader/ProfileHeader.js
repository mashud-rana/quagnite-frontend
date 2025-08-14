"use client";

import { FaArrowLeft } from "react-icons/fa";
import styles from "./profileHeader.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileHeader = () => {
  const pathname = usePathname();

  return (
    <div className={styles.ic_header_container}>
      {/* Title Section */}
      <div className={styles.ic_title_section}>
        <Link href="#" className={styles.ic_back_button} aria-label="Go back">
          <FaArrowLeft className={styles.ic_back_icon} />
        </Link>
        <h1 className="ic_text_36">Profile Management</h1>
      </div>

      {/* Tabs */}
      <nav className={styles.ic_tabs}>
        <Link
          href="/student"
          className={`${styles.ic_tab_item} ${
            pathname === "/student" ||
            (!pathname.startsWith("/student/account") &&
              !pathname.startsWith("/student/subscriptions"))
              ? styles.ic_active
              : ""
          }`}
        >
          Profile
        </Link>

        <Link
          href="/student/account"
          className={`${styles.ic_tab_item} ${
            pathname.startsWith("/student/account") ? styles.ic_active : ""
          }`}
        >
          Account settings
        </Link>

        <Link
          href="/student/subscriptions"
          className={`${styles.ic_tab_item} ${
            pathname.startsWith("/student/subscriptions")
              ? styles.ic_active
              : ""
          }`}
        >
          Subscriptions
        </Link>
      </nav>
    </div>
  );
};

export default ProfileHeader;
