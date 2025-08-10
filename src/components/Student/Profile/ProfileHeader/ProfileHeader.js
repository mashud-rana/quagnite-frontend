import { FaArrowLeft } from "react-icons/fa";
import styles from "./profileHeader.module.css";
import Image from "next/image";
import Link from "next/link";

const ProfileHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleSection}>
        <Link href="#" className={styles.backButton} aria-label="Go back">
          <FaArrowLeft className={styles.backIcon} />
        </Link>
        <h1 className={styles.pageTitle}>Profile Management</h1>
      </div>
      <nav className={styles.tabs}>
        <Link href="#" className={`${styles.tabItem} ${styles.active}`}>
          Profile
        </Link>
        <Link href="/account" className={styles.tabItem}>
          Account settings
        </Link>
        <Link href="#" className={styles.tabItem}>
          Subscriptions
        </Link>
      </nav>
    </div>
  );
};

export default ProfileHeader;
