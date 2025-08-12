"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaRegQuestionCircle } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { PiMonitorBold, PiCirclesThreeBold } from "react-icons/pi";
import { GrPlay } from "react-icons/gr";
import { BiBookContent, BiMoneyWithdraw } from "react-icons/bi";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import { GiFeather } from "react-icons/gi";

import styles from "./sidebar.module.css";

import logo from "@/assets/images/auth/logo.png";
import logo2 from "@/assets/images/auth/small-logo.png";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

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
    url: "/student/courses",
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

  const toggleSidebar = () => {
    if (isMobile) return;
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
      <div className={styles.ic_header_container}>
        <div className={`${styles.header} ${isExpanded ? "g-15" : ""}`}>
          {/* Large Logo (expanded state) */}
          <Image
            className={`${styles.logo} ${
              !isExpandedEffective ? styles.hidden : ""
            }`}
            src={logo}
            alt=""
          />

          {/* Small Logo + collapse toggle (collapsed state) */}
          {!isExpandedEffective && (
            <div className={styles.collapsedLogoWrapper}>
              <Image className={styles.smallLogo} src={logo2} alt="" />
              <button
                className={styles.collapseIcon}
                onClick={toggleSidebar}
                aria-label="Expand Sidebar"
              >
                <IoIosArrowForward size={20} />
                {/* Rotated so it looks like ">" */}
              </button>
            </div>
          )}

          {/* Toggle button (expanded state only) */}
          {isExpandedEffective && (
            <button
              className={styles.toggleButton}
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
            >
              <FaBars className={styles.toggleIcon} />
            </button>
          )}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.scrollArea}>
          <div className={styles.menuGroup}>
            <div
              className={`${styles.menuLabel} ${
                !isExpandedEffective ? styles.menuhidden : ""
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
                    } ${isExpanded ? "g-15" : ""}`}
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
    </aside>
  );
};

export default Sidebar;
