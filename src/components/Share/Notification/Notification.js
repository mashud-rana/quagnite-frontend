import React from "react";
import styles from "./notification.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";

const Notification = () => {
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

  return (
    <div className={styles.list}>
      {notifications.map((item) => (
        <div key={item.id} className={styles.ic_flex}>
          <div className={styles.ic_flex}>
            <Image src={img} alt="Notification" className={styles.image} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit
            </p>
          </div>

          <div className={styles.meta}>
            {item.source && <span>{item.source}</span>}
            <span>{item.date}</span>
            <span>{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
