import React, { useState } from "react";
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
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import img from "@/assets/images/all/instractor.png";

const DashboardHeader = ({ onOpenSidebar }) => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <>
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
          {/* Mobile search toggle button (only visible on small devices via CSS) */}
          <button
            className={`${styles.iconButton} ${styles.mobileSearchIcon}`}
            aria-label="Search"
            onClick={() => setIsMobileSearchOpen((v) => !v)}
          >
            <IoIosSearch className={styles.actionIcon} />
          </button>

          <button className={styles.iconButton} aria-label="Favorites">
            <MdOutlineFavoriteBorder className={styles.actionIcon} />
          </button>
          <Link
            href="/student/cart"
            className={styles.iconButton}
            aria-label="Shopping Cart"
          >
            <MdAddShoppingCart className={styles.actionIcon} />
          </Link>
          <button className={styles.iconButton} aria-label="Notifications">
            <MdNotificationsNone className={styles.actionIcon} />
          </button>

          <div>
            <Image
              src={img}
              alt="avater"
              className={styles.avatar}
              width={500}
              height={200}
            />
          </div>
        </div>
      </header>

      {isMobileSearchOpen && (
        <div className={styles.mobileSearchContainer}>
          <div className={styles.mobileSearchWrapper}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="search"
              placeholder="Search"
              className={styles.searchInput}
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardHeader;
