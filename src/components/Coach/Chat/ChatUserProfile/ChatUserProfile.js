import React from "react";
import { BiPhone } from "react-icons/bi";
import { CiCircleAlert } from "react-icons/ci";
import { FiAtSign } from "react-icons/fi";
import styles from "./ChatUserProfile.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";

const ChatUserProfile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <button className={styles.backButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className={styles.title}>Messages</h1>
      </div>

      <div className={styles.userCard}>
        <div className={styles.avatar}>
          <Image src={img} alt="Savannah Nguyen" />
        </div>
        <h2 className={styles.userName}>Savannah Nguyen</h2>

        <div className={styles.infoItem}>
          <BiPhone size={16} />
          <div>
            <div className={styles.infoValue}>+625648539485</div>
            <div className={styles.infoLabel}>Phone</div>
          </div>
        </div>

        <div className={styles.infoItem}>
          <FiAtSign size={16} />
          <div>
            <div className={styles.infoValue}>savannah</div>
            <div className={styles.infoLabel}>username</div>
          </div>
        </div>

        <div className={styles.infoItem}>
          <CiCircleAlert size={16} />
          <div>
            <div className={styles.infoValue}>Product designer</div>
            <div className={styles.infoLabel}>Status</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUserProfile;
