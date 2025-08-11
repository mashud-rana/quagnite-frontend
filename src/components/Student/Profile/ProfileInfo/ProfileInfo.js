import React from "react";
import styles from "./profileinfo.module.css";

const ProfileInfo = () => {
  const profileData = [
    { label: "Email address", value: "amiliafox2727127@gmail.com" },
    { label: "Subscription type", value: "Personal" },
    { label: "Phone Number", value: "+0987654211" },
    { label: "Country", value: "USA" },
    { label: "State", value: "Alaska" },
    {
      label: "Address",
      value: "23475 Glacier View Dr, Eagle River, Alaska 99577, USA",
    },
    { label: "Gender", value: "Female" },
    {
      label: "Bio",
      value:
        "Beautiful super large botanical garden - amazing it's in NYC. Getting into the garden with my voucher was easy and seamless! Just went up to the ticket counter and went right in.",
    },
  ];

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoHeader}>
        <p className={styles.infoTitle}>Profile Info</p>
        <button className={styles.editButton}>EDIT</button>
      </div>
      <div className={styles.infoGrid}>
        {profileData.map((item, index) => (
          <div key={index} className={styles.infoRow}>
            <span className={styles.infoLabel}>{item.label}</span>
            <span className={styles.infoValue}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfo;
