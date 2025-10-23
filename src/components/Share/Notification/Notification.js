"use client";
import React, { useState, useEffect } from "react";
import styles from "./notification.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";
import SectionSpinner from "@/components/Spinner/SectionSpinner";
import NotDataFound from "@/components/Empty/NotDataFound";
import InfiniteScroll from "react-infinite-scroll-component";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";
import {
  useGetAnnouncementQuery,
  useMakeAsReadAnnouncementMutation,
} from "@/redux/features/common/announcement/announcementApi";
import NotificationSkeleton from "./Skeleton/NotificationSkeleton";

const Notification = () => {
  const [params, setParams] = useState({
    page: Number(process.env.NEXT_PUBLIC_CURRENT_PAGE) || 1,
    per_page: Number(process.env.NEXT_PUBLIC_PAGE_SIZE) || 10,
  });
  const [announcements, setAnnouncements] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  //fetch announcements
  const { data, isSuccess, isLoading, error, refetch, isFetching } =
    useGetAnnouncementQuery(params);

  //make as read mutation
  const [
    makeAsReadAnnouncement,
    {
      data: makeAsReadData,
      isLoading: makeAsReadIsLoading,
      isSuccess: makeAsReadIsSuccess,
      isError: makeAsReadIsError,
      error: makeAsReadError,
    },
  ] = useMakeAsReadAnnouncementMutation();

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
    if (!announcementId) return;
    let find = announcements.find((a) => a.id === announcementId);
    if (!find || find.read_at) return; //already read
    makeAsReadAnnouncement(announcementId);
    setSelectedId(announcementId);
  };

  //make as announcement success
  useEffect(() => {
    console.log("makeAsReadData", makeAsReadData, announcements);
    if (makeAsReadIsSuccess && makeAsReadData) {
      setAnnouncements((prev) => {
        return prev.map((item) => {
          if (item.id === makeAsReadData?.data?.announcement_id) {
            return { ...item, read_at: new Date().toISOString() };
          }
          return item;
        });
      });
      setSelectedId(null);
    }
  }, [makeAsReadIsSuccess, makeAsReadData]);

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

  return (
    <div className={styles.list}>
      {isLoading && params.page === 1 ? (
        // <SectionSpinner message="Loading for announcements.." />
        <NotificationSkeleton />
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
          hasMore={params.page < totalPages}
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
                      onClick={() => makeAsReadHandler(item.id)}
                    >
                      <div className={styles.ic_flex}>
                        <div className={styles.ic_flex}>
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
                                    selectedId === item.id &&
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
