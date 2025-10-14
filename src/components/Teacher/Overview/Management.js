import React, { useState } from "react";
import styles from "./overview.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";

const Management = () => {
  const [activeChatTab, setActiveChatTab] = useState("Unread");

  const chatMessages = [
    {
      name: "Lorem Ipsum",
      message: "What is the meaning for this ?",
      avatar: "/abstract-geometric-shapes.png",
    },
    {
      name: "Lorem Ipsum",
      message: "Hi What new project?",
      avatar: "/abstract-geometric-shapes.png",
    },
  ];

  return (
    <div className={styles.tableSection}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>Upcoming Tasks List</h3>
        <button className={styles.ic_btn}>See ALL</button>
      </div>

      <div>
        <div className={styles.chatTabs}>
          <div
            className={`${styles.chatTab} ${
              activeChatTab === "Read" ? styles.active : ""
            }`}
            onClick={() => setActiveChatTab("Read")}
          >
            Read
          </div>
          <div
            className={`${styles.chatTab} ${
              activeChatTab === "Unread" ? styles.active : ""
            }`}
            onClick={() => setActiveChatTab("Unread")}
          >
            Unread
          </div>
          <div
            className={`${styles.chatTab} ${
              activeChatTab === "Pinned" ? styles.active : ""
            }`}
            onClick={() => setActiveChatTab("Pinned")}
          >
            Pinned
          </div>
        </div>
        <div>
          {chatMessages.map((message, index) => (
            <div key={index} className={styles.chatMessage}>
              <Image src={img} alt="Avatar" className={styles.avatar} />
              <div className={styles.messageContent}>
                <div className={styles.messageName}>{message.name}</div>
                <div className={styles.messageText}>{message.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;
