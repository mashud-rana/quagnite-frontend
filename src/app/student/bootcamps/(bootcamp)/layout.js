import ScrollableNavbar from "@/components/Share/ScrollableNavbar/ScrollableNavbar";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const BootcampLayout = ({ children }) => {
  const profileTabs = [
    { href: "/student/bootcamps", label: "Upcoming", exact: true },
    { href: "/student/bootcamps/ongoing", label: "Ongoing" },
    { href: "/student/bootcamps/completed", label: "Completed" },
  ];

  return (
    <div>
      <div className="mb-24">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">My Bootcamps</h1>
        </div>
      </div>

      <ScrollableNavbar tabs={profileTabs} />

      <div>{children}</div>
    </div>
  );
};

export default BootcampLayout;
