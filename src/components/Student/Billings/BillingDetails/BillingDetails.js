"use client";

import React, { useState } from "react";
import styles from "./details.module.css";

const BillingDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState([
    { label: "Name", value: "Amiliafox" },
    { label: "Email address", value: "amiliafox2727127@gmail.com" },
    {
      label: "Billing address",
      value: "23475 Glacier View Dr, Eagle River, Alaska 99577, USA",
    },
    { label: "Phone Number", value: "+0987654211" },
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
          className="ic_common_primary_btn"
          //   className={styles.editButton}
          onClick={() => setIsEditing((prev) => !prev)}
        >
          {isEditing ? "SAVE" : "edit billing details"}
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

            <input
              type="text"
              value={item.value}
              onChange={(e) => handleChange(index, e.target.value)}
              disabled={!isEditing}
              className={`${styles.infoValue} ${
                isEditing ? styles.editModeInput : ""
              }`}
            />

            {/* {item.label === "Bio" ? (
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
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingDetails;
