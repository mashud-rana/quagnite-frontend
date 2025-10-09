import ScrollableNavbar from "@/components/Share/ScrollableNavbar/ScrollableNavbar";
import ProfileBanner from "@/components/Student/Profile/ProfileBanner/ProfileBanner";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const StudentProfileLayout = ({ children }) => {
  const profileTabs = [
    { href: "/teacher/profile", label: "Profile", exact: true },
    { href: "/teacher/account", label: "Account settings" },
  ];
  return (
    <>
      <div className="mb-24">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Profile Management</h1>
        </div>
      </div>

      <ScrollableNavbar tabs={profileTabs} />

      <ProfileBanner />
      <div>{children}</div>
    </>
  );
};

export default StudentProfileLayout;
