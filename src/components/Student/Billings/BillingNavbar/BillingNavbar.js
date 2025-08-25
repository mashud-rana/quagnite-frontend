// "use client";
// import styles from "./navbar.module.css";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useRef, useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const BillingNavbar = () => {
//   const pathname = usePathname();
//   const tabsRef = useRef(null);
//   const [showArrows, setShowArrows] = useState(false);

//   useEffect(() => {
//     const checkScroll = () => {
//       if (tabsRef.current) {
//         setShowArrows(
//           tabsRef.current.scrollWidth > tabsRef.current.clientWidth
//         );
//       }
//     };

//     checkScroll();
//     window.addEventListener("resize", checkScroll);
//     return () => window.removeEventListener("resize", checkScroll);
//   }, []);

//   const scrollTabs = (direction) => {
//     if (!tabsRef.current) return;
//     const scrollAmount = 200;
//     tabsRef.current.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className={styles.ic_header_container}>
//       {showArrows && (
//         <button className={styles.ic_arrow} onClick={() => scrollTabs("left")}>
//           <FaChevronLeft />
//         </button>
//       )}

//       <div className={styles.ic_tabs_wrapper} ref={tabsRef}>
//         <nav className={styles.ic_tabs}>
//           <Link
//             href="/student/billings"
//             className={`${styles.ic_tab_item} ${
//               pathname === "/student/billings" ? styles.ic_active : ""
//             }`}
//           >
//             Billing details
//           </Link>
//           <Link
//             href="/student/billings/invoices"
//             className={`${styles.ic_tab_item} ${
//               pathname.startsWith("/student/billings/invoices")
//                 ? styles.ic_active
//                 : ""
//             }`}
//           >
//             Invoices
//           </Link>
//           <Link
//             href="/student/billings/payment"
//             className={`${styles.ic_tab_item} ${
//               pathname.startsWith("/student/billings/payment")
//                 ? styles.ic_active
//                 : ""
//             }`}
//           >
//             Payment method
//           </Link>
//           <Link
//             href="/student/billings/purchase"
//             className={`${styles.ic_tab_item} ${
//               pathname.startsWith("/student/billings/purchase")
//                 ? styles.ic_active
//                 : ""
//             }`}
//           >
//             Purchase history
//           </Link>
//         </nav>
//       </div>

//       {showArrows && (
//         <button className={styles.ic_arrow} onClick={() => scrollTabs("right")}>
//           <FaChevronRight />
//         </button>
//       )}
//     </div>
//   );
// };

// export default BillingNavbar;

"use client";

import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const tabs = [
  { href: "/student/billings", label: "Billing details", exact: true },
  { href: "/student/billings/invoices", label: "Invoices" },
  { href: "/student/billings/payment", label: "Payment method" },
  { href: "/student/billings/purchase", label: "Purchase history" },
];

const BillingNavbar = () => {
  const pathname = usePathname();
  const tabsRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  // Utility: check if path is active
  const isActive = (path, exact = false) => {
    if (exact) {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  // Observe container resize to determine arrow visibility
  useEffect(() => {
    if (!tabsRef.current) return;

    const checkScroll = () => {
      if (tabsRef.current) {
        setShowArrows(
          tabsRef.current.scrollWidth > tabsRef.current.clientWidth
        );
      }
    };

    const observer = new ResizeObserver(checkScroll);
    observer.observe(tabsRef.current);

    // Initial check
    checkScroll();

    return () => observer.disconnect();
  }, []);

  // Scroll function
  const scrollTabs = (direction) => {
    if (!tabsRef.current) return;
    const scrollAmount = tabsRef.current.clientWidth || 200; // dynamic
    tabsRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.ic_header_container}>
      {showArrows && (
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

      {showArrows && (
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

export default BillingNavbar;
