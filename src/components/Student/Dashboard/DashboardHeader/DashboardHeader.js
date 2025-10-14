// import React, { useState } from "react";
// import {
//   FaSearch,
//   FaShoppingCart,
//   FaHeart,
//   FaBell,
//   FaBars,
// } from "react-icons/fa";
// import styles from "./header.module.css";
// import Image from "next/image";
// import {
//   MdAddShoppingCart,
//   MdNotificationsNone,
//   MdOutlineFavoriteBorder,
// } from "react-icons/md";
// import { IoIosSearch } from "react-icons/io";
// import Link from "next/link";
// import img from "@/assets/images/all/instractor.png";
// import { useSelector } from "react-redux";
// import Logout from "@/components/Student/Auth/Logout";

// const DashboardHeader = ({ onOpenSidebar }) => {
//   const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
//   const { user } = useSelector((state) => state.auth);

//   return (
//     <>
//       <header className={styles.header}>
//         <button
//           className={`${styles.iconButton} ${styles.mobileMenuButton}`}
//           aria-label="Open Sidebar"
//           onClick={onOpenSidebar}
//         >
//           <FaBars className={styles.actionIcon} />
//         </button>
//         <div className={styles.searchContainer}>
//           <FaSearch className={styles.searchIcon} />
//           <input
//             type="search"
//             placeholder="Search"
//             className={styles.searchInput}
//           />
//         </div>
//         <div className={styles.actions}>
//           {/* Mobile search toggle button (only visible on small devices via CSS) */}
//           <button
//             className={`${styles.iconButton} ${styles.mobileSearchIcon}`}
//             aria-label="Search"
//             onClick={() => setIsMobileSearchOpen((v) => !v)}
//           >
//             <IoIosSearch className={styles.actionIcon} />
//           </button>
//           <Logout />

//           <button className={styles.iconButton} aria-label="Favorites">
//             <MdOutlineFavoriteBorder className={styles.actionIcon} />
//           </button>
//           <Link
//             href="/student/cart"
//             className={styles.iconButton}
//             aria-label="Shopping Cart"
//           >
//             <MdAddShoppingCart className={styles.actionIcon} />
//           </Link>
//           <button className={styles.iconButton} aria-label="Notifications">
//             <MdNotificationsNone className={styles.actionIcon} />
//           </button>

//           <div>
//             <Image
//               src={user?.avatar_url || img}
//               alt="avater"
//               className={styles.avatar}
//               width={500}
//               height={200}
//             />
//           </div>
//         </div>
//       </header>

//       {isMobileSearchOpen && (
//         <div className={styles.mobileSearchContainer}>
//           <div className={styles.mobileSearchWrapper}>
//             <FaSearch className={styles.searchIcon} />
//             <input
//               type="search"
//               placeholder="Search"
//               className={styles.searchInput}
//               autoFocus
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default DashboardHeader;

import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
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
import { useSelector } from "react-redux";
import Logout from "@/components/Student/Auth/Logout";
import { GrAnnounce } from "react-icons/gr";

const DashboardHeader = ({ onOpenSidebar }) => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <header className={styles.header}>
        {/* Sidebar open button (mobile) */}
        <button
          className={`${styles.iconButton} ${styles.mobileMenuButton}`}
          aria-label="Open Sidebar"
          onClick={onOpenSidebar}
        >
          <FaBars className={styles.actionIcon} />
        </button>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="search"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>

        {/* Right Side Actions */}
        <div className={styles.actions}>
          {/* Mobile search toggle button */}
          <button
            className={`${styles.iconButton} ${styles.mobileSearchIcon}`}
            aria-label="Search"
            onClick={() => setIsMobileSearchOpen((v) => !v)}
          >
            <IoIosSearch className={styles.actionIcon} />
          </button>

          <Logout />

          {/* Favorite */}
          <button className={styles.iconButton} aria-label="Favorites">
            <MdOutlineFavoriteBorder className={styles.actionIcon} />
          </button>

          {/* Cart */}
          <Link
            href="/student/cart"
            className={styles.iconButton}
            aria-label="Shopping Cart"
          >
            <MdAddShoppingCart className={styles.actionIcon} />
          </Link>

          {/* Notification with dropdown */}
          <div
            className={styles.notificationWrapper}
            onMouseEnter={() => setShowNotifications(true)}
            onMouseLeave={() => setShowNotifications(false)}
          >
            <button className={styles.iconButton} aria-label="Notifications">
              <MdNotificationsNone className={styles.actionIcon} />
            </button>

            {showNotifications && (
              <div className={styles.notificationDropdown}>
                <div className={styles.notification_header}>
                  <h4 className={styles.notificationTitle}>Notifications</h4>
                  <Link href="/student/notification" className={styles.ic_btn}>
                    See all
                  </Link>
                </div>
                <ul className={styles.notificationList}>
                  <li className={styles.notificationItem}>
                    <Image src={img} alt="" className={styles.ic_img} />
                    <div>
                      <p className="fw_600"> Notification title </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam quis venenatis magna.
                      </p>
                    </div>
                    <p className={styles.ic_time}>03.22</p>
                  </li>

                  <li className={styles.notificationItem}>
                    <Image src={img} alt="" className={styles.ic_img} />
                    <div>
                      <p className="fw_600"> Notification title </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam quis venenatis magna.
                      </p>
                    </div>
                    <p className={styles.ic_time}>03.22</p>
                  </li>

                  <li className={styles.notificationItem}>
                    <Image src={img} alt="" className={styles.ic_img} />
                    <div>
                      <p className="fw_600"> Notification title </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam quis venenatis magna.
                      </p>
                    </div>
                    <p className={styles.ic_time}>03.22</p>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Avatar */}
          <div>
            <Image
              src={user?.avatar_url || img}
              alt="avatar"
              className={styles.avatar}
              width={500}
              height={200}
            />
          </div>
        </div>
      </header>

      {/* Mobile Search (for small screens) */}
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
