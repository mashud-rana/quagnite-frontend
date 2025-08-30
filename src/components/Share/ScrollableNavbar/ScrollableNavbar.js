"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./scrollableNavbar.module.css";

const ScrollableNavbar = ({ tabs = [], showArrows = true }) => {
  const pathname = usePathname();
  const tabsRef = useRef(null);
  const [showArrowButtons, setShowArrowButtons] = useState(false);

  // Utility: check active tab
  const isActive = (path, exact = false) => {
    if (exact) return pathname === path;
    return pathname.startsWith(path);
  };

  // Check scroll to show arrows
  useEffect(() => {
    if (!tabsRef.current) return;
    const checkScroll = () => {
      if (tabsRef.current) {
        setShowArrowButtons(
          tabsRef.current.scrollWidth > tabsRef.current.clientWidth
        );
      }
    };
    const observer = new ResizeObserver(checkScroll);
    observer.observe(tabsRef.current);
    checkScroll();
    return () => observer.disconnect();
  }, []);

  // Scroll function
  const scrollTabs = (direction) => {
    if (!tabsRef.current) return;
    const scrollAmount = tabsRef.current.clientWidth || 200;
    tabsRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.ic_header_container}>
      {showArrows && showArrowButtons && (
        <button
          className={styles.ic_arrow}
          onClick={() => scrollTabs("left")}
          aria-label="Scroll left"
        >
          <FaChevronLeft />
        </button>
      )}

      <div className={styles.ic_tabs_wrapper} ref={tabsRef}>
        <nav className={styles.ic_tabs}>
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`${styles.ic_tab_item} ${
                isActive(tab.href, tab.exact) ? styles.ic_active : ""
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>

      {showArrows && showArrowButtons && (
        <button
          className={styles.ic_arrow}
          onClick={() => scrollTabs("right")}
          aria-label="Scroll right"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default ScrollableNavbar;
