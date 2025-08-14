"use client";

import { FaArrowLeft } from "react-icons/fa";
import styles from "./navber.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BootcampNavber = () => {
  const pathname = usePathname();

  return (
    // <div className={styles.ic_header_container}>
    //   <nav className={styles.ic_tabs}>
    //     <Link
    //       href="/student/bootcamps"
    //       className={`${styles.ic_tab_item} ${
    //         pathname === "/student/bootcamps" ? styles.ic_active : ""
    //       }`}
    //     >
    //       Course Content
    //     </Link>

    //     <Link
    //       href="/student/account"
    //       className={`${styles.ic_tab_item} ${
    //         pathname.startsWith("/student/account") ? styles.ic_active : ""
    //       }`}
    //     >
    //       Course Overview
    //     </Link>

    //     <Link
    //       href="/student/subscriptions"
    //       className={`${styles.ic_tab_item} ${
    //         pathname.startsWith("/student/subscriptions")
    //           ? styles.ic_active
    //           : ""
    //       }`}
    //     >
    //       Announcements
    //     </Link>

    //     <Link
    //       href="/student/subscriptions"
    //       className={`${styles.ic_tab_item} ${
    //         pathname.startsWith("/student/subscriptions")
    //           ? styles.ic_active
    //           : ""
    //       }`}
    //     >
    //       Reviews
    //     </Link>

    //     <Link
    //       href="/student/subscriptions"
    //       className={`${styles.ic_tab_item} ${
    //         pathname.startsWith("/student/subscriptions")
    //           ? styles.ic_active
    //           : ""
    //       }`}
    //     >
    //       Discussions
    //     </Link>

    //     <Link
    //       href="/student/subscriptions"
    //       className={`${styles.ic_tab_item} ${
    //         pathname.startsWith("/student/subscriptions")
    //           ? styles.ic_active
    //           : ""
    //       }`}
    //     >
    //       Notes
    //     </Link>
    //   </nav>

    //   <div>
    //     <button className={styles.ic_btn}>Playground</button>
    //   </div>
    // </div>

    <div className={styles.ic_header_container}>
      <div className={styles.ic_tabs_wrapper}>
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
            href="/student/account"
            className={`${styles.ic_tab_item} ${
              pathname.startsWith("/student/account") ? styles.ic_active : ""
            }`}
          >
            Course Overview
          </Link>
          <Link
            href="/student/subscriptions"
            className={`${styles.ic_tab_item} ${
              pathname.startsWith("/student/subscriptions")
                ? styles.ic_active
                : ""
            }`}
          >
            Announcements
          </Link>
          <Link
            href="/student/subscriptions"
            className={`${styles.ic_tab_item} ${
              pathname.startsWith("/student/subscriptions")
                ? styles.ic_active
                : ""
            }`}
          >
            Reviews
          </Link>
          <Link
            href="/student/subscriptions"
            className={`${styles.ic_tab_item} ${
              pathname.startsWith("/student/subscriptions")
                ? styles.ic_active
                : ""
            }`}
          >
            Discussions
          </Link>
          <Link
            href="/student/subscriptions"
            className={`${styles.ic_tab_item} ${
              pathname.startsWith("/student/subscriptions")
                ? styles.ic_active
                : ""
            }`}
          >
            Notes
          </Link>
        </nav>
      </div>

      <button className={styles.ic_btn}>Playground</button>
    </div>
  );
};

export default BootcampNavber;
