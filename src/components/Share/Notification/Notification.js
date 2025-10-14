import React, { useState } from "react";
import styles from "./notification.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";
import SectionSpinner from "@/components/Spinner/SectionSpinner";
import NotDataFound from "@/components/Empty/NotDataFound";
import InfiniteScroll from "react-infinite-scroll-component";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";

const Notification = ({
  isLoading,
  announcements,
  page,
  totalPages,
  error,
  refetch,
  onFetchMoreData,
  onMakeAsRead,
  makingAsReadId,
  makeAsReadIsLoading,
}) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 🧩 Helper to truncate HTML text safely
  const truncateHtml = (html, limit = 250) => {
    // Remove HTML tags to count plain text characters
    const plainText = html.replace(/<[^>]+>/g, "");
    if (plainText.length <= limit) return html;

    // Slice text safely
    const truncatedText = plainText.slice(0, limit) + "...";
    return truncatedText;
  };

  const fetchMoreData = () => {
    if (onFetchMoreData) {
      onFetchMoreData();
    }
  };

  return (
    <div className={styles.list}>
      {isLoading && page === 1 ? (
        <SectionSpinner message="Loading for announcements.." />
      ) : error ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <NotDataFound message="Error loading announcements. Please try again" />
          <button onClick={() => refetch()} className="ic_common_primary_btn">
            Retry
          </button>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={announcements.length}
          next={fetchMoreData}
          hasMore={page < totalPages}
          loader={<p className="text-center">Loading more...</p>}
          endMessage={
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              {announcements.length > 0 && <b>No more announcements</b>}
            </p>
          }
        >
          <div className={styles.ic_grid}>
            {announcements.length > 0
              ? announcements.map((item) => {
                  const isExpanded = expandedItems[item.id];
                  const shortDescription = truncateHtml(
                    item?.description || "",
                    250
                  );

                  return (
                    <div
                      key={item.id}
                      className={`${styles.ic_card} ${
                        item.read_at == null ? styles.unread : ""
                      }`}
                      onClick={() => onMakeAsRead(item.id)}
                    >
                      <div className={styles.ic_flex}>
                        <div>
                          <Image
                            src={img}
                            alt="Notification"
                            className={styles.image}
                          />
                          <div>
                            <b>{item?.title}</b>

                            <p
                              className={styles.ic_despt}
                              dangerouslySetInnerHTML={{
                                __html: isExpanded
                                  ? item?.description || ""
                                  : shortDescription,
                              }}
                            />

                            {item?.description &&
                              item?.description.replace(/<[^>]+>/g, "").length >
                                250 && (
                                <button
                                  onClick={() => toggleExpand(item.id)}
                                  className={styles.ic_btn}
                                >
                                  {isExpanded ? "See less" : "See more"}
                                  {makeAsReadIsLoading &&
                                    makingAsReadId === item.id &&
                                    ` (Loading...)`}
                                </button>
                              )}
                          </div>
                        </div>

                        <div className={styles.meta}>
                          <span>{item?.formatted_date}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              : !isLoading && (
                  <NotDataFound message="No announcements available at the moment." />
                )}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Notification;
