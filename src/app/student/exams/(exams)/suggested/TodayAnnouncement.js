'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from "./suggested.module.css";
import img2 from "@/assets/images/all/session.png";
import { useGetTodayAnnouncementQuery } from '@/redux/features/common/announcement/announcementApi';
import WhatsTodayListSkeleton from '@/components/Student/Exams/Exam/Skeleton/WhatsTodayListSkeleton';
import NotDataFound from '@/components/Empty/NotDataFound';
import InfiniteScroll from 'react-infinite-scroll-component';
import { truncateHtml } from '@/utils/helper';

const TodayAnnouncement = () => {

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
    } = useGetTodayAnnouncementQuery(params);

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
    
    return (
       <>
        {
            announcements && announcements.length > 0  && (
            <div>
                <h6 className={styles.ic_today_title}>What&#39;s today</h6>
                <div
                    id="scrollableDiv"
                    style={{
                        maxHeight: "500px",
                        overflowY: "auto",
                        scrollbarWidth: "thick", // For Firefox
                        msOverflowStyle: "auto", // For IE/Edge
                    }}
                    className={styles.ic_today_scrollable}
                >
                    <style jsx>{`
                        #scrollableDiv::-webkit-scrollbar {
                            width: 14px;
                        }
                        #scrollableDiv::-webkit-scrollbar-thumb {
                            background: #c1c1c1;
                            border-radius: 8px;
                        }
                        #scrollableDiv::-webkit-scrollbar-track {
                            background: #f1f1f1;
                            border-radius: 8px;
                        }
                    `}</style>
                    {
                        isLoading && params.page === 1 ? <WhatsTodayListSkeleton /> : 
                        error ? (
                            <div style={{ textAlign: "center", marginTop: "20px" }}>
                                <NotDataFound message="Error loading today announcements. Please try again" />
                                <button onClick={() => refetch()} className="ic_common_primary_btn">
                                Retry
                                </button>
                            </div>
                        ) : (
                            <InfiniteScroll
                            dataLength={announcements.length}
                            next={fetchMoreData}
                            hasMore={params.page < totalPages}
                            loader={ <WhatsTodayListSkeleton /> }
                            endMessage={
                            <p style={{ textAlign: "center", marginTop: "10px" }}>
                                {announcements.length > 0 && <b>No more today announcements</b>}
                            </p>
                            }
                                scrollableTarget="scrollableDiv"
                        >
                            <div >
                            {announcements.length > 0
                                ? announcements.map((item) => {
                                    const isExpanded = expandedItems[item.id];
                                    const shortDescription = truncateHtml(
                                    item?.description || "",
                                    250
                                    );
                
                                    return (
                                        <div className={styles.ic_today_card} key={item.id} style={{ display: "flex", alignItems: "flex-start" }}>
                                            <div>
                                                <Image
                                                    src={img2}
                                                    alt=""
                                                    className={styles.ic_today_img}
                                                    style={{ width: "120px", height: "120px", objectFit: "cover", minWidth: "120px", minHeight: "120px" }}
                                                />
                                            </div>
                                            <div style={{ flex: 1, marginLeft: "10px" }}>
                                                <p className={styles.ic_subtitle}>{item?.title}</p>
                                                <p
                                                    className={styles.ic_des}
                                                    dangerouslySetInnerHTML={{
                                                        __html: isExpanded ? item?.description || "" : shortDescription,
                                                    }}
                                                />
                                                {item?.description &&
                                                    item?.description.replace(/<[^>]+>/g, "").length > 250 && (
                                                        <button
                                                            onClick={() => toggleExpand(item.id)}
                                                            className={styles.ic_btn}
                                                            style={{
                                                                marginTop:'10px;'
                                                            }}
                                                        >
                                                            {isExpanded ? "See less" : "See more"}
                                                        </button>
                                                    )}
                                            </div>
                                        </div>
                                    );
                                })
                                : !isLoading && (
                                    <NotDataFound message="No announcements available at the moment." />
                                )}
                            </div>
                        </InfiniteScroll>
                        )
                    }
                </div>
            </div>
        )
    }
       </>
         
    )
}

export default TodayAnnouncement;