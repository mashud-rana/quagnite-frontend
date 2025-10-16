import Image from "next/image";
import React from "react";
import { BiBell, BiChevronRight, BiUserPlus } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { FiChevronRight, FiSettings } from "react-icons/fi";
import { PiNeedle } from "react-icons/pi";
import styles from "./messag.module.css";
import img from "@/assets/images/all/boy.png";
import img2 from "@/assets/images/all/webinar.png";

const MessageProfile = () => {
  const mediaItems = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      thumbnail: "/diverse-media-landscape.png" + (i + 1),
    }));

  const files = [
    {
      id: 1,
      name: "642 TB-DSHN-0001.pdf",
      size: "3.32MB",
      date: "12 Nov 2024",
    },
    {
      id: 2,
      name: "642 TB-DSHN-0001.pdf",
      size: "3.32MB",
      date: "12 Nov 2024",
    },
  ];

  return (
    <div className={styles.group_container}>
      <h6 className={styles.groupInfoTitle}>Group Information</h6>
      <hr className={styles.ic_hr} />

      <div className={styles.groupProfile}>
        <Image
          height={100}
          width={100}
          src={img}
          alt="Coding Team"
          className={styles.groupAvatar}
        />
        <h5 className={styles.groupName}>Coding Team</h5>
      </div>

      <div className={styles.groupActions}>
        <button className={styles.groupActionBtn}>
          <BiBell className={styles.ic_icn} />
          <span>Notification</span>
        </button>
        <button className={styles.groupActionBtn}>
          <BiUserPlus className={styles.ic_icn} />
          <span>Add Member</span>
        </button>
        <button className={styles.groupActionBtn}>
          <FiSettings className={styles.ic_icn} />
          <span>Settings</span>
        </button>
        <button className={styles.groupActionBtn}>
          <PiNeedle className={styles.ic_icn} />
          <span>Pin Group</span>
        </button>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoHeader}>
          <span className={styles.infoTitle}>Members</span>
          <BiChevronRight size={16} />
        </div>
        <div className={styles.memberCount}>
          <span>👥 50 members</span>
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoHeader}>
          <span className={styles.infoTitle}>Shared Media</span>
          <BsChevronRight size={16} />
        </div>
        <div className={styles.mediaGrid}>
          {mediaItems.map((item) => (
            <Image
              key={item.id}
              src={img2}
              alt="Shared media"
              className={styles.mediaThumbnail}
            />
          ))}
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoHeader}>
          <span className={styles.infoTitle}>Files</span>
          <FaChevronRight size={16} />
        </div>
        <div className={styles.filesList}>
          {files.map((file) => (
            <div key={file.id} className={styles.fileItem}>
              <div className={styles.fileIcon}>📄</div>
              <div className={styles.fileInfo}>
                <div className={styles.fileName}>{file.name}</div>
                <div className={styles.fileDetails}>{file.size}</div>
              </div>
              <div className={styles.fileDate}>{file.date}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoHeader}>
          <span className={styles.infoTitle}>Links</span>
          <FiChevronRight size={16} />
        </div>
        <div className={styles.linkItem}>
          <span className={styles.linkUrl}>www.quagnite.com</span>
          <span className={styles.linkDate}>12 Nov 2024</span>
        </div>
      </div>
    </div>
  );
};

export default MessageProfile;
