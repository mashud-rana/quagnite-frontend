"use client";

import React, { useState } from "react";
import styles from "./acoount.module.css";

const AccountPage = () => {
  const [formData, setFormData] = useState({
    email: "amiliafox2727127@gmail.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // handle input change
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Form submitted:", formData);
    // API call or validation here
  };
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoHeader}>
        <p className={styles.infoTitle}>Account Settings</p>
        <button className={styles.editButton} onClick={handleSave}>
          SAVE
        </button>
      </div>

      <div className={`${styles.infoGrid} ${styles.editModeGrid}`}>
        {/* Email */}
        <div className={`${styles.infoRow} ${styles.editModeRow}`}>
          <span className={styles.infoLabel}>Email Address</span>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`${styles.infoValue}`}
          />
        </div>

        {/* Current Password */}
        <div className={`${styles.infoRow} ${styles.editModeRow}`}>
          <span className={styles.infoLabel}>Current Password</span>
          <input
            type="password"
            value={formData.currentPassword}
            onChange={(e) => handleChange("currentPassword", e.target.value)}
            className={`${styles.infoValue}`}
          />
        </div>

        {/* New Password */}
        <div className={`${styles.infoRow} ${styles.editModeRow}`}>
          <span className={styles.infoLabel}>New Password</span>
          <input
            type="password"
            value={formData.newPassword}
            onChange={(e) => handleChange("newPassword", e.target.value)}
            className={`${styles.infoValue} `}
          />
        </div>

        {/* Confirm Password */}
        <div className={`${styles.infoRow} ${styles.editModeRow}`}>
          <span className={styles.infoLabel}>Confirm Password</span>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            className={`${styles.infoValue} `}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
