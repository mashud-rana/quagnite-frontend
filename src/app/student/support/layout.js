import ScrollableNavbar from "@/components/Share/ScrollableNavbar/ScrollableNavbar";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const SupportLayout = ({ children }) => {
  const profileTabs = [
    { href: "/student/support", label: "Your Ticket", exact: true },
    { href: "/student/support/community", label: "Community" },
    { href: "/student/support/coaching", label: "Coaching Support" },
  ];

  return (
    <>
      <div className="mb-24 ic_flex">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Support</h1>
        </div>

        <div>
          <button className="ic_common_primary_btn">create new ticket</button>
        </div>
      </div>

      <ScrollableNavbar tabs={profileTabs} />

      {children}
    </>
  );
};

export default SupportLayout;
