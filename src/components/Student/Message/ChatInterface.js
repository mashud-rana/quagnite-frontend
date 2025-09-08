import Image from "next/image";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import styles from "./messag.module.css";
import img from "@/assets/images/all/boy.png";
import img2 from "@/assets/images/all/webinar.png";
import Link from "next/link";

const ChatInterface = () => {
  const conversations = [
    {
      id: 1,
      name: "Lorem Ipsum",
      message: "Lorem Ipsum Dolor selt amet...",
      time: "04:45 pm",
      avatar: "/diverse-person-portrait.png",
      unread: 27,
      isOnline: true,
    },
    {
      id: 2,
      name: "Lorem Ipsum",
      message: "Hi What new project?",
      time: "04:45 pm",
      avatar: "/diverse-group-conversation.png",
      unread: 0,
      isOnline: false,
    },
    {
      id: 3,
      name: "Lorem Ipsum",
      message: "Lorem Ipsum Dolor selt amet, consectetur adipiscing",
      time: "04:45 pm",
      avatar: "/diverse-group-meeting.png",
      unread: 0,
      isOnline: true,
    },
    {
      id: 4,
      name: "Lorem Ipsum",
      message: "Lorem Ipsum Dolor selt amet, consectetur adipiscing",
      time: "04:45 pm",
      avatar: "/diverse-group-meeting.png",
      unread: 0,
      isOnline: false,
    },
  ];

  const groupConversations = [
    {
      id: 1,
      name: "Lorem Ipsum",
      message: "Lorem Ipsum Dolor selt amet...",
      time: "04:45 pm",
      avatar: "/diverse-group-brainstorming.png",
      unread: 27,
      isOnline: true,
    },
    {
      id: 2,
      name: "Lorem Ipsum",
      message: "Hi What new project?",
      time: "04:45 pm",
      avatar: "/diverse-group-meeting.png",
      unread: 0,
      isOnline: false,
    },
  ];

  return (
    <div className={styles.ic_leftSidebar_wrapper}>
      <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
      </div>

      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.tabActive}`}>
          Inbox <span className={styles.badge}>02</span>
        </button>
        <button className={styles.tab}>
          Explore <span className={styles.badge}>10</span>
        </button>
      </div>

      <button className={styles.createGroupBtn}>CREATE A NEW GROUP</button>

      <div className={styles.section}>
        <h5 className={styles.sectionTitle}>Individual</h5>

        <Link className={styles.ic_link} href="/student/message/5">
          <div className={styles.conversationList}>
            {conversations.map((conv) => (
              <div key={conv.id} className={styles.conversation}>
                <div className={styles.avatarContainer}>
                  <Image
                    height={100}
                    width={100}
                    src={img}
                    alt={conv.name}
                    className={styles.avatar}
                  />
                  {conv.isOnline && <div className={styles.onlineIndicator} />}
                </div>
                <div className={styles.conversationContent}>
                  <div className={styles.conversationHeader}>
                    <span className={styles.conversationName}>{conv.name}</span>
                    <span className={styles.conversationTime}>{conv.time}</span>
                  </div>
                  <div className={styles.ic_flex}>
                    <p className={styles.conversationMessage}>{conv.message}</p>
                    {conv.unread > 0 && (
                      <div className={styles.unreadBadge}>{conv.unread}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>

      <div className={styles.section}>
        <h5 className={styles.sectionTitle}>Groups</h5>
        <div className={styles.conversationList}>
          {groupConversations.map((conv) => (
            <div key={conv.id} className={styles.conversation}>
              <div className={styles.avatarContainer}>
                <Image
                  width={100}
                  height={100}
                  src={img}
                  alt={conv.name}
                  className={styles.avatar}
                />
                {conv.isOnline && <div className={styles.onlineIndicator} />}
              </div>
              <div className={styles.conversationContent}>
                <div className={styles.conversationHeader}>
                  <span className={styles.conversationName}>{conv.name}</span>
                  <span className={styles.conversationTime}>{conv.time}</span>
                </div>
                <div className={styles.ic_flex}>
                  <p className={styles.conversationMessage}>{conv.message}</p>
                  {conv.unread > 0 && (
                    <div className={styles.unreadBadge}>{conv.unread}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
