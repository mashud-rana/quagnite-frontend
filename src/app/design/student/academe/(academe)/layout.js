import ScrollableNavbar from "@/components/Share/ScrollableNavbar/ScrollableNavbar";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const AcademeLayout = ({ children }) => {
  const academeTabs = [
    { href: "/student/academe", label: "Coaches", exact: true },
    { href: "/student/academe/sessions", label: "Sessions" },
    { href: "/student/academe/all", label: "All" },
  ];

  return (
    <div>
      <div className="mb-24 ic_flex">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Academe</h1>
        </div>
        <div>
          <button className="ic_btn">+ Get a new coach </button>
        </div>
      </div>

      <ScrollableNavbar tabs={academeTabs} />

      {children}
    </div>
  );
};

export default AcademeLayout;
