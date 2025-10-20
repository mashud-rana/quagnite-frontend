"use client";
import Notification from "@/components/Share/Notification/Notification";
import Link from "next/link";
import React,{useState, useEffect} from "react";
import { FaArrowLeft } from "react-icons/fa";
import { set } from 'nprogress';
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";
import { useRouter } from "next/navigation";

const NotificationsPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-24">
        <div className="ic_title_section">
          <Link href="#" onClick={()=>router.back()} className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Announcements</h1>
        </div>
      </div>

    
    <Notification />
    </div>
  );
};

export default NotificationsPage;
