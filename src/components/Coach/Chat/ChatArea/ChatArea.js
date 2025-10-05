import React from "react";
import styles from "./chatarea.module.css";
import { BiPhone, BiSend } from "react-icons/bi";
import { Video } from "@fancyapps/ui";
import { FiMoreVertical } from "react-icons/fi";

const ChatArea = () => {
  const stories = [
    { id: 1, name: "User 1", image: "/person-avatar-1.png" },
    { id: 2, name: "User 2", image: "/diverse-person-avatar-2.png" },
    { id: 3, name: "User 3", image: "/person-avatar-3.png" },
    { id: 4, name: "User 4", image: "/person-avatar-4.png" },
    { id: 5, name: "User 5", image: "/diverse-person-avatars.png" },
  ];

  const messages = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      sender: "other",
      time: null,
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      sender: "me",
      time: "Sunday, 8 Sep 2023",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna.",
      sender: "other",
      time: null,
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      sender: "other",
      time: null,
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna.",
      sender: "me",
      time: "Monday, 09 Sep 2023",
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna.",
      sender: "other",
      time: null,
    },
    {
      id: 7,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      sender: "other",
      time: null,
    },
  ];

  return (
    <div className={styles.chat_area}>
      <div className={styles.header}>
        <div className={styles.stories}>
          {stories.map((story) => (
            <div key={story.id} className={styles.storyAvatar}>
              <img src={story.image || "/placeholder.svg"} alt={story.name} />
            </div>
          ))}
        </div>

        <div className={styles.searchBar}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="#999" strokeWidth="2" />
            <path
              d="M21 21L16.65 16.65"
              stroke="#999"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <input type="text" placeholder="Search" />
        </div>
      </div>

      {/* <div className={styles.chatHeader}>
        <div className={styles.contactInfo}>
          <div className={styles.contactAvatar}>
            <img src="/diverse-woman-avatar.png" alt="Jenny Wilson" />
          </div>
          <span className={styles.contactName}>Jenny Wilson</span>
        </div>

        <div className={styles.actions}>
          <button className={styles.actionButton}>
            <BiPhone size={20} />
          </button>
          <button className={styles.actionButton}>
            <Video size={20} />
          </button>
          <button className={styles.actionButton}>
            <FiMoreVertical size={20} />
          </button>
        </div>
      </div> */}

      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div key={message.id}>
            {message.time && (
              <div className={styles.dateLabel}>{message.time}</div>
            )}
            <div
              className={`${styles.message} ${
                message.sender === "me" ? styles.messageMe : styles.messageOther
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.inputArea}>
        <input type="text" placeholder="Type your message" />
        <button className={styles.sendButton}>
          <BiSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatArea;
