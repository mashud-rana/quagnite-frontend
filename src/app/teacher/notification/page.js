import Notification from "@/components/Share/Notification/Notification";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

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

      {/* <div className={styles.list}>
        {notifications.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt="Notification" className={styles.image} />
            <div className={styles.info}>
              <p>{item.message}</p>
              <div className={styles.meta}>
                {item.source && <span>{item.source}</span>}
                <span>{item.date}</span>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <Notification />
    </div>
  );
};

export default NotificationsPage;
