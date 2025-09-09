"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import styles from "./sidebar.module.css";
import logo from "@/assets/images/auth/logo.png";
import logo2 from "@/assets/images/auth/small-logo.png";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = ({
  otherMenu,
  mainMenu,
  isMobileOpen = false,
  onClose,
  onToggleCollapse,
  isCollapsed = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Function to check if a menu item is active
  const isMenuActive = (menuUrl) => {
    if (!menuUrl) return false;

    // URL-এর শেষে থাকা "/" সরাই
    const normalizePath = (url) => url.replace(/\/+$/, "");

    const current = normalizePath(pathname);
    const target = normalizePath(menuUrl);

    // panel root detect (যেমন "/student", "/teacher", "/admin")
    const isRootLevel = /^\/[^/]+$/.test(target);

    if (isRootLevel) {
      return current === target; // শুধু exact match এ active
    }

    // অন্য সবগুলোর জন্য: exact বা nested match
    return current === target || current.startsWith(target + "/");
  };

  // const isMenuActive = (menuUrl) => {
  //   if (menuUrl === "/student") {
  //     return pathname === "/student";
  //   }
  //   return pathname.startsWith(menuUrl);
  // };

  const toggleSidebar = () => {
    if (isMobile) return;
    if (onToggleCollapse) {
      onToggleCollapse();
    }
  };

  const isExpanded = !isCollapsed;
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
                      isMenuActive(item.url) ? styles.active : ""
                    } ${isExpanded ? "g-15" : ""}`}
                    // className={`${styles.menuLink} ${
                    //   isMenuActive(item.url) ? styles.active : ""
                    // } ${isExpanded ? "g-15" : ""}`}
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
                  className={`${styles.menuLink} ${
                    isMenuActive(item.url) ? styles.active : ""
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
      </div>
    </aside>
  );
};

export default Sidebar;
