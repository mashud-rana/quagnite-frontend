"use client";

import React, { useState } from "react";
import styles from "./profileinfo.module.css";

const ProfileInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState([
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
  ]);

  // Update specific field
  const handleChange = (index, newValue) => {
    setProfileData((prev) =>
      prev.map((item, i) => (i === index ? { ...item, value: newValue } : item))
    );
  };

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoHeader}>
        <p className={styles.infoTitle}>Profile Info</p>
        <button
          className={styles.editButton}
          onClick={() => setIsEditing((prev) => !prev)}
        >
          {isEditing ? "SAVE" : "EDIT"}
        </button>
      </div>
      <div
        className={`${styles.infoGrid} ${isEditing ? styles.editModeGrid : ""}`}
      >
        {profileData.map((item, index) => (
          <div
            key={index}
            className={`${styles.infoRow} ${
              isEditing ? styles.editModeRow : ""
            }`}
          >
            <span className={styles.infoLabel}>{item.label}</span>

            {item.label === "Bio" ? (
              <textarea
                value={item.value}
                onChange={(e) => handleChange(index, e.target.value)}
                disabled={!isEditing}
                className={`${styles.infoValue} ${styles.textArea} ${
                  isEditing ? styles.editModeInput : ""
                }`}
                rows={3}
              />
            ) : (
              <input
                type="text"
                value={item.value}
                onChange={(e) => handleChange(index, e.target.value)}
                disabled={!isEditing}
                className={`${styles.infoValue} ${
                  isEditing ? styles.editModeInput : ""
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfo;
