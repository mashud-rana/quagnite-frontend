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

import React, { useState, useEffect } from "react";
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
import { useGetAnnouncementQuery, useMakeAsReadAnnouncementMutation } from "@/redux/features/common/announcement/announcementApi";
import InfiniteScroll from "react-infinite-scroll-component";
import NotDataFound from "@/components/Empty/NotDataFound";

const DashboardHeader = ({ onOpenSidebar }) => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { user } = useSelector((state) => state.auth);

  
  //notification code
  const [params, setParams] = useState({
    page: Number(process.env.NEXT_PUBLIC_CURRENT_PAGE) || 1,
    per_page: Number(process.env.NEXT_PUBLIC_PAGE_SIZE) || 10,
  });
  const [announcements, setAnnouncements] = useState([]);
      const [totalPages, setTotalPages] = useState(1);
      const [selectedId, setSelectedId] = useState(null);
    //fetch announcements
      const { 
      data,
      isSuccess, 
      isLoading, 
      error, 
      refetch,
      isFetching 
      } = useGetAnnouncementQuery(params);
    
      //make as read mutation
      const [makeAsReadAnnouncement, 
        { 
          data:makeAsReadData,
          isLoading: makeAsReadIsLoading, 
          isSuccess: makeAsReadIsSuccess,
          isError: makeAsReadIsError,
          error: makeAsReadError }] = useMakeAsReadAnnouncementMutation();
    
      //scroll fetch
     const fetchMoreData = () => {
        console.log("Fetching next page...");
        setParams((prev) => {
          if (prev.page < totalPages) {
            return { ...prev, page: prev.page + 1 };
          }
          console.log("Reached last page");
          return prev;
        });
      };
    
      //mark as read
      const makeAsReadHandler = (announcementId) => {
        if(!announcementId) return;
        let find = announcements.find(a => a.id === announcementId);
        if(!find || find.read_at) return; //already read
        makeAsReadAnnouncement(announcementId);
        setSelectedId(announcementId);
      }
    
      //make as announcement success
      useEffect(()=>{
        console.log("makeAsReadData",makeAsReadData, announcements)
        if(makeAsReadIsSuccess && makeAsReadData){
          setAnnouncements((prev) =>{
            return prev.map(item => {
              if(item.id === makeAsReadData?.data?.announcement_id){
                return {...item, read_at: new Date().toISOString()};
              }
              return item;
            });
          });
          setSelectedId(null);
        }
      },[makeAsReadIsSuccess, makeAsReadData])
    
      //set announcements
     useEffect(() => {
        if (isSuccess && data?.data?.data) {
          const newItems = data.data.data;
    
          if (params.page === 1) {
            setAnnouncements(newItems);
          } else {
            setAnnouncements((prev) => {
              // avoid duplicates
              const ids = new Set(prev.map((a) => a.id));
              const uniqueNew = newItems.filter((a) => !ids.has(a.id));
              return [...prev, ...uniqueNew];
            });
          }
    
          setTotalPages(data?.data?.meta?.last_page || 1);
        }
      }, [isSuccess, data, params.page]);
    
    
      // console.log("1 announcementData", announcements);
    // const [expandedItems, setExpandedItems] = useState({});
  
    // const toggleExpand = (id) => {
    //   setExpandedItems((prev) => ({
    //     ...prev,
    //     [id]: !prev[id],
    //   }));
    // };
  
    // 🧩 Helper to truncate HTML text safely
    const truncateHtml = (html, limit = 150) => {
      // Remove HTML tags to count plain text characters
      const plainText = html.replace(/<[^>]+>/g, "");
      if (plainText.length <= limit) return html;
  
      // Slice text safely
      const truncatedText = plainText.slice(0, limit) + "...";
      return truncatedText;
    };

   
  //notification code

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
       
          { showNotifications && (
            <div
            
              className={styles.notificationDropdown}
            >
              <div className={styles.notification_header}>
                <h4 className={styles.notificationTitle}>Notifications</h4>
                <Link href="/student/notification" className={styles.ic_btn}>
                  See all
                </Link>
              </div>

              <ul className={styles.notificationList} id="scrollableDiv">
                <InfiniteScroll
                  dataLength={announcements.length}
                  next={fetchMoreData}
                  hasMore={params.page < totalPages}
                  loader={<p className="text-center">Loading more...</p>}
                  endMessage={
                    <p style={{ textAlign: "center", marginTop: "10px" }}>
                      {announcements.length > 0 && <b>No more announcements</b>}
                    </p>
                  }
                   scrollableTarget="scrollableDiv"
                  
                >
                  {announcements.length > 0 ? (
                    announcements.map((item, index) => {
                      const shortDescription = truncateHtml(item?.description || "", 150);
                      return (
                        <li
                          key={item.id}
                          className={`${styles.notificationItem} ${
                            item.read_at == null ? styles.unread : ""
                          }`}
                          onClick={() => makeAsReadHandler(item.id)}
                        >
                          <Image src={img} alt="" className={styles.ic_img} />
                          <div>
                            <p className="fw_600">
                              {item?.title}
                            </p>
                            <p>{shortDescription}</p>
                          </div>
                          <p className={styles.ic_time}>{item?.formatted_date}</p>
                        </li>
                      );
                    })
                  ) : (
                    !isLoading && <NotDataFound message="No announcements available at the moment." />
                  )}
                </InfiniteScroll>
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
