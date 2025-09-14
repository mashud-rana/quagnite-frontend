import React from "react";
import styles from "./layout.module.css";
import ChatInterface from "@/components/Student/Message/ChatInterface";
import MessageProfile from "@/components/Student/Message/MessageProfile";

const MessageLayout = ({ children }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftSidebar}>
          <ChatInterface />
        </div>

        <div className={styles.mainChat}> {children}</div>

        <div className={styles.rightSidebar}>
          <MessageProfile />
        </div>
      </div>
    </div>
  );
};

export default MessageLayout;
