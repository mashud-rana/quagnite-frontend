"use client";

import React, { useState } from "react";
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

const Sidebar = () => {
  const [state, setState] = useState("expanded");

  const toggleSidebar = () => {
    setState((prev) => (prev === "expanded" ? "collapsed" : "expanded"));
  };

  const isExpanded = state === "expanded";
  return (
    <aside
      className={`${styles.sidebar} ${
        isExpanded ? styles.expanded : styles.collapsed
      }`}
    >
      <div className={styles.header}>
        {/* Large Logo (expanded state) */}
        <div className={`${styles.logo} ${!isExpanded ? styles.hidden : ""}`}>
          <FaFeatherAlt className={styles.logoIcon} />
          <span className={styles.logoText}>QUAGNITE</span>
        </div>

        {/* Small Logo (collapsed state) */}
        <div
          className={`${styles.smallLogo} ${isExpanded ? styles.hidden : ""}`}
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
        <div className={styles.menuGroup}>
          <div
            className={`${styles.menuLabel} ${
              !isExpanded ? styles.hidden : ""
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
                  title={!isExpanded ? item.title : undefined}
                >
                  <item.icon className={styles.menuIcon} />
                  <span
                    className={`${styles.menuText} ${
                      !isExpanded ? styles.hidden : ""
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

        <div className={styles.menuGroup}>
          <div
            className={`${styles.menuLabel} ${
              !isExpanded ? styles.hidden : ""
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
                  title={!isExpanded ? item.title : undefined}
                >
                  <item.icon className={styles.menuIcon} />
                  <span
                    className={`${styles.menuText} ${
                      !isExpanded ? styles.hidden : ""
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
