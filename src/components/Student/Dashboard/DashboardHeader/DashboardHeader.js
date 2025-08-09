import React from "react";
import { FaSearch, FaShoppingCart, FaHeart, FaBell, FaBars } from "react-icons/fa";
import styles from "./header.module.css";
import { Avatar } from "../Avatar/Avatar";

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
          <FaHeart className={styles.actionIcon} />
        </button>
        <button className={styles.iconButton} aria-label="Shopping Cart">
          <FaShoppingCart className={styles.actionIcon} />
        </button>
        <button className={styles.iconButton} aria-label="Notifications">
          <FaBell className={styles.actionIcon} />
        </button>
        <Avatar
          src="/placeholder.svg?height=36&width=36"
          alt="User Profile"
          fallback="CN"
          className={styles.avatar}
        />
      </div>
    </header>
  );
};

export default DashboardHeader;
