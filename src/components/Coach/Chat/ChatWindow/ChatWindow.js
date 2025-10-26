"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./chatWindow.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const ChatWindow = ({ user, messages = [], onSend }) => {
  const [text, setText] = useState("");
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const submit = (e) => {
    e?.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  const activeUsers = [
    { id: 1, name: "Johan", img: img, active: true },
    { id: 2, name: "Ema", img: img, active: true },
    { id: 3, name: "Ariana", img: img, active: false },
    { id: 4, name: "Junaid", img: img, active: true },
    { id: 5, name: "Mira", img: img, active: false },
  ];

  return (
    <section className={styles.chatWrap}>
      <div className={styles.topBar}>
        <div className={styles.avatars}>
          {activeUsers.map((u) => (
            <div
              key={u.id}
              className={`${styles.avatarWrap} ${
                u.active ? styles.active : ""
              }`}
              title={u.name}
            >
              <Image src={img} alt={u.name} className={styles.avatar} />
            </div>
          ))}
        </div>

        <input type="text" className={styles.input} placeholder="Search..." />
      </div>

      <div className={styles.header}>
        <div className={styles.user}>
          <div>
            <Image className={styles.avaSmall} src={img} alt="" />
          </div>
          <div>
            <div className={styles.title}>{user.name}</div>
            <div className={styles.online}>Online</div>
          </div>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.iconBtn} aria-label="call">
            <FaPhoneAlt />
          </button>
          <button className={styles.iconBtn} aria-label="video">
            <FaVideo />
          </button>
          <button className={styles.iconBtn} aria-label="more">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>

      <hr className={styles.ic_hr} />

      <div className={styles.messages} ref={scrollRef}>
        {messages.length === 0 && (
          <div className={styles.empty}>No messages yet</div>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.msgRow} ${
              msg.from === "me" ? styles.me : styles.other
            }`}
          >
            <div className={styles.msgBubble}>
              <div className={styles.ic_titme_img_container}>
                <p className={styles.msgDate}>
                  Natasha Stark Saturday 10:12 am
                </p>
                <Image className={styles.ic_small_img} src={img} alt="" />
              </div>
              <div className={styles.msgText}>
                {msg.text}

                {msg.reactions && msg.reactions.length > 0 && (
                  <div className={styles.ic_wrapper}>
                    <div className={styles.reactionsWrap}>
                      {msg.reactions.map((reaction, i) => (
                        <span key={i} className={styles.reaction}>
                          {reaction.emoji}{" "}
                          <span className={styles.reactionCount}>
                            {reaction.count}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <form className={styles.inputWrap} onSubmit={submit}>
        <input
          placeholder="Type your message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
        />
        <button className={styles.sendBtn} type="submit">
          ➤
        </button>
      </form>
    </section>
  );
};

export default ChatWindow;
