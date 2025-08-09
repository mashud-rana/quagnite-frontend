"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFeatherAlt,
  FaGraduationCap,
  FaAward,
  FaPlay,
  FaBookOpen,
  FaLock,
  FaWallet,
  FaLifeRing,
  FaChevronUp,
  FaBars,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { PiMonitorBold, PiCirclesThreeBold } from "react-icons/pi";
import { GrPlay } from "react-icons/gr";
import { BiBookContent, BiMoneyWithdraw } from "react-icons/bi";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import { GiFeather } from "react-icons/gi";

import styles from "./sidebar.module.css";
import { Avatar } from "../Avatar/Avatar";

// Menu items
const mainMenu = [
  {
    title: "Explore",
    url: "#",
    icon: GiFeather,
    isActive: true,
  },
  {
    title: "Courses",
    url: "#",
    icon: LuGraduationCap,
  },
  {
    title: "Bootcamps",
    url: "#",
    icon: PiMonitorBold,
  },
  {
    title: "Exams",
    url: "#",
    icon: PiCirclesThreeBold,
  },
  {
    title: "Playground",
    url: "#",
    icon: GrPlay,
  },
  {
    title: "E-book",
    url: "#",
    icon: BiBookContent,
  },
  {
    title: "Academe",
    url: "#",
    icon: RiGraduationCapLine,
  },
  {
    title: "Vault",
    url: "#",
    icon: MdLockOutline,
  },

  {
    title: "Playground",
    url: "#",
    icon: GrPlay,
  },
  {
    title: "E-book",
    url: "#",
    icon: BiBookContent,
  },
  {
    title: "Academe",
    url: "#",
    icon: RiGraduationCapLine,
  },
  {
    title: "Vault",
    url: "#",
    icon: MdLockOutline,
  },

  {
    title: "Playground",
    url: "#",
    icon: GrPlay,
  },
  {
    title: "E-book",
    url: "#",
    icon: BiBookContent,
  },
  {
    title: "Academe",
    url: "#",
    icon: RiGraduationCapLine,
  },
  {
    title: "Vault",
    url: "#",
    icon: MdLockOutline,
  },
];

const otherMenu = [
  {
    title: "Billings",
    url: "#",
    icon: BiMoneyWithdraw,
  },
  {
    title: "Support",
    url: "#",
    icon: FaRegQuestionCircle,
  },
];

const Sidebar = ({ isMobileOpen = false, onClose }) => {
  const [state, setState] = useState("expanded");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
      if (isNowMobile) {
        // Always force expanded visuals on small devices
        setState("expanded");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) return; // disable collapse on small devices
    setState((prev) => (prev === "expanded" ? "collapsed" : "expanded"));
  };

  const isExpanded = state === "expanded";
  const isExpandedEffective = isMobile ? true : isExpanded;
  const handleLinkClick = () => {
    if (onClose) onClose();
  };
  return (
    <aside
      className={`${styles.sidebar} ${
        isExpandedEffective ? styles.expanded : styles.collapsed
      } ${isMobileOpen ? styles.open : ""}`}
      role="complementary"
      aria-hidden={!isMobileOpen}
    >
      <div className={styles.header}>
        {/* Large Logo (expanded state) */}
        <div className={`${styles.logo} ${!isExpandedEffective ? styles.hidden : ""}`}>
          <FaFeatherAlt className={styles.logoIcon} />
          <span className={styles.logoText}>QUAGNITE</span>
        </div>

        {/* Small Logo (collapsed state) */}
        <div
          className={`${styles.smallLogo} ${isExpandedEffective ? styles.hidden : ""}`}
        >
          <FaFeatherAlt className={styles.logoIcon} />
        </div>

        <button
          className={styles.toggleButton}
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <FaBars className={styles.toggleIcon} />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.scrollArea}>
          <div className={styles.menuGroup}>
            <div
              className={`${styles.menuLabel} ${
                !isExpandedEffective ? styles.hidden : ""
              }`}
            >
              Main Menu
            </div>
            <ul className={styles.menu}>
              {mainMenu.map((item, index) => (
                <li key={index} className={styles.menuItem}>
                <Link
                    href={item.url}
                    className={`${styles.menuLink} ${
                      item.isActive ? styles.active : ""
                    }`}
                    title={!isExpandedEffective ? item.title : undefined}
                  onClick={handleLinkClick}
                  >
                    <item.icon className={styles.menuIcon} />
                    <span
                      className={`${styles.menuText} ${
                        !isExpandedEffective ? styles.hidden : ""
                      }`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.separator}></div>
        </div>

        <div className={`${styles.menuGroup} ${styles.otherMenuFixed}`}>
          <div
            className={`${styles.menuLabel} ${
              !isExpandedEffective ? styles.hidden : ""
            }`}
          >
            Other Menu
          </div>
          <ul className={styles.menu}>
            {otherMenu.map((item) => (
              <li key={item.title} className={styles.menuItem}>
                <Link
                  href={item.url}
                  className={styles.menuLink}
                  title={!isExpandedEffective ? item.title : undefined}
                  onClick={handleLinkClick}
                >
                  <item.icon className={styles.menuIcon} />
                  <span
                    className={`${styles.menuText} ${
                      !isExpandedEffective ? styles.hidden : ""
                    }`}
                  >
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className={styles.footer}>
        <div className={styles.userProfile}>
          <Avatar
            src="/placeholder.svg?height=32&width=32"
            alt="User Avatar"
            fallback="U"
            className={styles.avatar}
          />
          <span
            className={`${styles.username} ${!isExpanded ? styles.hidden : ""}`}
          >
            Username
          </span>
          {isExpanded && <FaChevronUp className={styles.chevron} />}
        </div>
      </div> */}
    </aside>
  );
};

export default Sidebar;
