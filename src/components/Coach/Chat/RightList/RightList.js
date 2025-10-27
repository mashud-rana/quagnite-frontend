"use client";
import React from "react";
import styles from "./rightList.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

const RightList = ({
  users = [],
  activeUserId,
  setActiveUserId,
  onShowSidebar,
}) => {
  return (
    <aside className={styles.right}>
      {/* {onShowSidebar && (
        <div className={styles.sidebarToggle}>
          <button className={styles.sidebarToggleBtn} onClick={onShowSidebar}>
            <FaBars size={20} />
          </button>
        </div>
      )} */}
      <div className={styles.card}>
        <div className={styles.sectionTitle}>Chats</div>
        <div className={styles.list}>
          {users.map((u) => (
            <div
              key={u.id}
              className={`${styles.item} ${
                activeUserId === u.id ? styles.active : ""
              }`}
              onClick={() => setActiveUserId(u.id)}
            >
              <div>
                <Image className={styles.ava} src={img} alt="" />
              </div>
              <div className={styles.meta}>
                <div className={styles.name}>{u.name}</div>
                <div className={styles.last}>Lorem Ipsum Dolat sit amet...</div>
              </div>
              <div className={styles.time}>04:45 pm</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.card} style={{ marginTop: 16 }}>
        <div className={styles.sectionTitle}>Groups</div>
        <div className={styles.list}>
          {users.map((u) => (
            <div key={"g" + u.id} className={styles.item}>
              <div>
                <Image className={styles.ava} src={img} alt="" />
              </div>
              <div className={styles.meta}>
                <div className={styles.name}>Lorem Ipsum</div>
                <div className={styles.last}>Hi,What new project?</div>
              </div>
              <div className={styles.time}>04:45 pm</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightList;
