"use client";

import React, { useState } from "react";
import styles from "./chat.module.css";
import ChatSidebar from "@/components/Coach/Chat/ChatSidebar/ChatSidebar";
import ChatWindow from "@/components/Coach/Chat/ChatWindow/ChatWindow";
import RightList from "@/components/Coach/Chat/RightList/RightList";

const users = [
  {
    id: 1,
    name: "Savannah Nguyen",
    phone: "+2564 8539485",
    role: "Product designer",
    initials: "SN",
  },
  { id: 2, name: "Jenny Wilson", initials: "JW" },
  { id: 3, name: "John Doe", initials: "JD" },
  { id: 4, name: "Alex Kim", initials: "AK" },
  { id: 5, name: "Maya Roy", initials: "MR" },
];

const chats = [
  {
    id: 2,
    messages: [
      {
        id: 1,
        from: "other",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2023-09-08",
      },
      {
        id: 2,
        from: "me",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2023-09-08",
        reactions: [
          { emoji: "❤️", count: 2 },
          { emoji: "😂", count: 1 },
        ],
      },
      {
        id: 3,
        from: "other",
        text: "Aliquam quis venenatis magna.",
        date: "2023-09-09",
      },
      {
        id: 4,
        from: "me",
        text: "Sure — I'll check and send update.",
        date: "2023-09-09",
        reactions: [
          { emoji: "❤️", count: 2 },
          { emoji: "😂", count: 1 },
        ],
      },
    ],
  },
  {
    id: 3,
    messages: [
      { id: 1, from: "other", text: "Hi! Want to start a new project?" },
    ],
  },
];

const StudentChatPage = () => {
  const [activeUserId, setActiveUserId] = useState(2);
  const [allChats, setAllChats] = useState(chats);

  const activeUser = users.find((u) => u.id === activeUserId) || users[0];

  const handleSend = (text) => {
    if (!text.trim()) return;
    setAllChats((prev) => {
      const copy = [...prev];
      const idx = copy.findIndex((c) => c.id === activeUserId);
      const newMsg = {
        id: Date.now(),
        from: "me",
        text,
        date: new Date().toISOString().slice(0, 10),
      };
      if (idx === -1) {
        copy.push({ id: activeUserId, messages: [newMsg] });
      } else {
        copy[idx].messages.push(newMsg);
      }
      return copy;
    });
  };

  return (
    <div className={styles.pageWrap}>
      <div className={styles.container}>
        <ChatSidebar user={users[0]} />
        <ChatWindow
          user={activeUser}
          messages={
            (allChats.find((c) => c.id === activeUserId) || { messages: [] })
              .messages
          }
          onSend={handleSend}
        />
        <RightList
          users={users}
          activeUserId={activeUserId}
          setActiveUserId={setActiveUserId}
        />
      </div>
    </div>
  );
};

export default StudentChatPage;
