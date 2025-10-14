"use client";
import Notification from "@/components/Share/Notification/Notification";
import Link from "next/link";
import React,{useState, useEffect} from "react";
import { FaArrowLeft } from "react-icons/fa";
import {useGetAnnouncementQuery} from '@/redux/features/announcement/announcementApi';
import { set } from 'nprogress';

const notifications = [
  {
    id: 1,
    image: "/notification-thumb.jpg",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    source: "Quagnite.com",
    date: "01/01/25",
    time: "03:22",
  },
  {
    id: 2,
    image: "/notification-thumb.jpg",
    message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    source: "Quagnite.com",
    date: "01/01/25",
    time: "03:22",
  },
  {
    id: 3,
    image: "/notification-thumb.jpg",
    message: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    source: "",
    date: "01/01/25",
    time: "03:22",
  },
];

const NotificationsPage = () => {
   const [params, setParams] = useState({
    page: Number(process.env.NEXT_PUBLIC_CURRENT_PAGE) || 1,
    per_page: Number(process.env.NEXT_PUBLIC_PAGE_SIZE) || 10,
  });
  const [announcements, setAnnouncements] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
//fetch announcements
  const { 
  data,
  isSuccess, 
  isLoading, 
  error, 
  refetch,
  isFetching 
  } = useGetAnnouncementQuery(params);

  //scroll fetch
 const fetchMoreDataHandler = () => {
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


  console.log("1 announcementData", announcements);
  return (
    <div>
      <div className="mb-24">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Profile Management</h1>
        </div>
      </div>

      <Notification 
      isLoading={isLoading}
      announcements={announcements}
      page={params.page}
      totalPages={totalPages}
      error={error}
      refetch={refetch}
      onFetchMoreData={fetchMoreDataHandler}
    />
    </div>
  );
};

export default NotificationsPage;
