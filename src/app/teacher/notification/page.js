import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const Notifications = () => {
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
    </div>
  );
};

export default Notifications;
