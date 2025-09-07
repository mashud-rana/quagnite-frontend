import Image from "next/image";
import React from "react";
import { BiPhone, BiSend, BiVideo } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { GiPaperClip } from "react-icons/gi";
import styles from "./messag.module.css";
import img from "@/assets/images/all/boy.png";
import img2 from "@/assets/images/all/webinar.png";

const Chat = () => {
  const messages = [
    {
      id: 1,
      sender: "Tina Brook",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "Friday 3:56 Pm",
      avatar: "/tina.jpg",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "Saturday 10:12 am",
      avatar: "/abstract-self-reflection.png",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Nick Banner",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna.",
      time: "Saturday 10:12 am",
      avatar: "/nick.jpg",
      isOwn: false,
    },
    {
      id: 4,
      sender: "Chris White",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna.",
      time: "Saturday 10:12 am",
      avatar: "/person-contemplating.png",
      isOwn: true,
    },
    {
      id: 5,
      sender: "Donald Musk",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna.",
      time: "Saturday 10:12 am",
      avatar: "/donald.jpg",
      isOwn: false,
    },
    {
      id: 6,
      sender: "Tina Brook",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "Friday 3:56 Pm",
      avatar: "/tina2.jpg",
      isOwn: false,
      isTyping: true,
    },

    {
      id: 6,
      sender: "Tina Brook",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "Friday 3:56 Pm",
      avatar: "/tina2.jpg",
      isOwn: false,
      isTyping: true,
    },

    {
      id: 6,
      sender: "Tina Brook",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "Friday 3:56 Pm",
      avatar: "/tina2.jpg",
      isOwn: false,
      isTyping: true,
    },

    {
      id: 6,
      sender: "Tina Brook",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "Friday 3:56 Pm",
      avatar: "/tina2.jpg",
      isOwn: false,
      isTyping: true,
    },

    {
      id: 6,
      sender: "Tina Brook",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "Friday 3:56 Pm",
      avatar: "/tina2.jpg",
      isOwn: false,
      isTyping: true,
    },
  ];

  return (
    <div className={styles.mainChat_wrapper}>
      <div className={styles.chatHeader}>
        <div className={styles.chatHeaderLeft}>
          <Image
            height={100}
            width={100}
            src={img}
            alt="Coding Team"
            className={styles.chatAvatar}
          />
          <h6 className={styles.chatTitle}>Coding Team</h6>
        </div>
        <div className={styles.chatHeaderActions}>
          <button className={styles.actionBtn}>
            <BiPhone size={20} />
          </button>
          <button className={styles.actionBtn}>
            <BiVideo size={20} />
          </button>
          <button className={styles.actionBtn}>
            <FiMoreHorizontal size={20} />
          </button>
        </div>
      </div>

      <div className={styles.messagesContainer}>
        <div className={styles.dateLabel}>Today</div>

        {messages.map((message, index) => (
          <div key={message.id}>
            {index === 4 && <div className={styles.unreadLabel}>Unread</div>}
            <div
              className={`${styles.message} ${
                message.isOwn ? styles.messageOwn : ""
              }`}
            >
              {!message.isOwn && (
                <Image
                  height={100}
                  width={100}
                  src={img}
                  alt={message.sender}
                  className={styles.messageAvatar}
                />
              )}
              <div className={styles.messageContent}>
                {!message.isOwn && (
                  <div className={styles.messageHeader}>
                    <span className={styles.messageSender}>
                      {message.sender}
                    </span>
                    <span className={styles.messageTime}>{message.time}</span>
                  </div>
                )}
                <div
                  className={`${styles.messageBubble} ${
                    message.isOwn ? styles.messageBubbleOwn : ""
                  }`}
                >
                  {message.message}
                  {message.isOwn && (
                    <div className={styles.messageReactions}>
                      <span>❤️</span>
                      <span>👍</span>
                      <span>😂</span>
                      <span>+3</span>
                    </div>
                  )}
                </div>
                {message.isTyping && (
                  <div className={styles.typingIndicator}>Typing...</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.messageInput}>
        <input
          type="text"
          placeholder="Type your message"
          className={styles.textInput}
        />
        <button className={styles.attachBtn}>
          <GiPaperClip size={20} />
        </button>
        <button className={styles.sendBtn}>
          <BiSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
