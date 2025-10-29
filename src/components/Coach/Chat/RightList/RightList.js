"use client";
import React from "react";
import styles from "./rightList.module.css";
import img from "@/assets/images/all/boy.png";
import Image from "next/image";
import { FaBars, FaRegUser } from "react-icons/fa";

const RightList = ({
  users = [],
  activeUserId,
  setActiveUserId,
  onShowSidebar,
  // handleProfileSidebar,
}) => {
  return (
    <aside className={styles.right}>
      <div className={styles.card}>
        <div className={styles.ic_flex}>
          <h5 className={styles.sectionTitle}>Chats</h5>
          <button className={styles.sidebarToggleBtn} onClick={onShowSidebar}>
            <FaRegUser />
          </button>
        </div>
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
                <p className={styles.last}>Lorem Ipsum Dolat sit amet...</p>
              </div>
              <div className={styles.time}>04:45 pm</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.card} style={{ marginTop: 16 }}>
        <h5 className={styles.sectionTitle}>Groups</h5>
        <div className={styles.list}>
          {users.map((u) => (
            <div key={"g" + u.id} className={styles.item}>
              <div>
                <Image className={styles.ava} src={img} alt="" />
              </div>
              <div className={styles.meta}>
                <div className={styles.ic_flex}>
                  <p className={styles.name}>Lorem Ipsum</p>
                  <span className={styles.time}>04:45 pm</span>
                </div>
                <div className={styles.ic_flex}>
                  <p className={styles.last}>Hi,What new project?</p>
                  <div className={styles.ic_notification}>02</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightList;
