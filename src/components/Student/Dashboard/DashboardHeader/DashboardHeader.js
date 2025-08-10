import React from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaBell,
  FaBars,
} from "react-icons/fa";
import styles from "./header.module.css";
import Image from "next/image";
import {
  MdAddShoppingCart,
  MdNotificationsNone,
  MdOutlineFavoriteBorder,
} from "react-icons/md";

const DashboardHeader = ({ onOpenSidebar }) => {
  return (
    <header className={styles.header}>
      <button
        className={`${styles.iconButton} ${styles.mobileMenuButton}`}
        aria-label="Open Sidebar"
        onClick={onOpenSidebar}
      >
        <FaBars className={styles.actionIcon} />
      </button>
      <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="search"
          placeholder="Search"
          className={styles.searchInput}
        />
      </div>
      <div className={styles.actions}>
        <button className={styles.iconButton} aria-label="Favorites">
          <MdOutlineFavoriteBorder className={styles.actionIcon} />
        </button>
        <button className={styles.iconButton} aria-label="Shopping Cart">
          <MdAddShoppingCart className={styles.actionIcon} />
        </button>
        <button className={styles.iconButton} aria-label="Notifications">
          <MdNotificationsNone className={styles.actionIcon} />
        </button>

        <div className={styles.avatar}>
          <Image
            src="/placeholder.svg?height=36&width=36"
            alt="avater"
            className={styles.image}
            width={500}
            height={200}
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
