"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./chatWindow.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";

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
          <div className={styles.avaSmall}>{user.initials}</div>
          <div>
            <div className={styles.title}>{user.name}</div>
            <div className={styles.online}>Online</div>
          </div>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.iconBtn} aria-label="call">
            📞
          </button>
          <button className={styles.iconBtn} aria-label="video">
            🎥
          </button>
          <button className={styles.iconBtn} aria-label="more">
            ⋯
          </button>
        </div>
      </div>

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
              <div className={styles.msgText}>{msg.text}</div>
              <div className={styles.msgDate}>{msg.date}</div>
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
