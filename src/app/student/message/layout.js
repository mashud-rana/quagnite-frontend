"use client"

import styles from "./layout.module.css";
import ChatInterface from "@/components/Student/Message/ChatInterface";
import MessageProfile from "@/components/Student/Message/MessageProfile";
import { HiMenu, HiX } from "react-icons/hi";
import { BiUser, BiMessageRoundedDots } from "react-icons/bi";
import { useState } from "react";

const MessageLayout = ({ children }) => {
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);

  const toggleLeftSidebar = () => {
    setShowLeftSidebar(!showLeftSidebar);
    setShowRightSidebar(false); // Close right sidebar when opening left
  };

  const toggleRightSidebar = () => {
    setShowRightSidebar(!showRightSidebar);
    setShowLeftSidebar(false); // Close left sidebar when opening right
  };

  const closeSidebars = () => {
    setShowLeftSidebar(false);
    setShowRightSidebar(false);
  };

  return (
    <div>
      {/* Mobile Header */}
      <div className={styles.mobileHeader}>
        <button 
          className={styles.mobileMenuBtn}
          onClick={toggleLeftSidebar}
          aria-label="Toggle conversations"
        >
          <BiMessageRoundedDots />
        </button>
        
        <h3 className={styles.mobileTitle}>Messages</h3>
        
        <button 
          className={styles.mobileMenuBtn}
          onClick={toggleRightSidebar}
          aria-label="Toggle profile"
        >
          <BiUser />
        </button>
      </div>

      <div className={styles.container}>
        {/* Left Sidebar */}
        <div className={`${styles.leftSidebar} ${showLeftSidebar ? styles.sidebarOpen : ''}`}>
          <div className={styles.sidebarHeader}>
            <span className={styles.sidebarTitle}>Conversations</span>
            <button 
              className={styles.closeBtn}
              onClick={closeSidebars}
            >
              <HiX />
            </button>
          </div>
          <ChatInterface />
        </div>

        {/* Main Chat Area */}
        <div className={styles.mainChat}>
          {children}
        </div>

        {/* Right Sidebar */}
        <div className={`${styles.rightSidebar} ${showRightSidebar ? styles.sidebarOpen : ''}`}>
          <div className={styles.sidebarHeader}>
            <span className={styles.sidebarTitle}>Group Info</span>
            <button 
              className={styles.closeBtn}
              onClick={closeSidebars}
            >
              <HiX />
            </button>
          </div>
          <MessageProfile />
        </div>

        {/* Overlay for mobile */}
        {(showLeftSidebar || showRightSidebar) && (
          <div className={styles.overlay} onClick={closeSidebars}></div>
        )}
      </div>
    </div>
  );
};

export default MessageLayout;
