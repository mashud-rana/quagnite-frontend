"use client";

import React from "react";
import { useForm } from "react-hook-form";
import styles from "./acoount.module.css";

const AccountPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "amiliafox2727127@gmail.com",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // You can make API call here
  };

  return (
    <div className={styles.ic_info_container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.ic_info_header}>
          <p className={styles.ic_info_title}>Account Settings</p>
          <button type="submit" className={styles.ic_edit_button}>
            SAVE
          </button>
        </div>

        <div className={`${styles.ic_info_grid} ${styles.ic_edit_mode_grid}`}>
          {/* Email */}
          <div className={`${styles.ic_info_row} ${styles.ic_edit_mode_row}`}>
            <span className={styles.ic_info_label}>Email Address</span>
            <div>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className={styles.ic_info_value}
              />
              {errors.email && (
                <span className={styles.ic_error_msg}>
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          {/* Current Password */}
          <div className={`${styles.ic_info_row} ${styles.ic_edit_mode_row}`}>
            <span className={styles.ic_info_label}>Current Password</span>
            <div>
              <input
                type="password"
                placeholder="Enter your current password"
                {...register("currentPassword", {
                  required: "Current password is required",
                })}
                className={styles.ic_info_value}
              />
              {errors.currentPassword && (
                <span className={styles.ic_error_msg}>
                  {errors.currentPassword.message}
                </span>
              )}
            </div>
          </div>

          {/* New Password */}
          <div className={`${styles.ic_info_row} ${styles.ic_edit_mode_row}`}>
            <span className={styles.ic_info_label}>New Password</span>
            <div>
              <input
                type="password"
                placeholder="Enter your new password"
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={styles.ic_info_value}
              />
              {errors.newPassword && (
                <span className={styles.ic_error_msg}>
                  {errors.newPassword.message}
                </span>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className={`${styles.ic_info_row} ${styles.ic_edit_mode_row}`}>
            <span className={styles.ic_info_label}>Confirm Password</span>
            <div>
              <input
                type="password"
                placeholder="Confirm your new password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value, formValues) =>
                    value === formValues.newPassword ||
                    "Passwords do not match",
                })}
                className={styles.ic_info_value}
              />
              {errors.confirmPassword && (
                <span className={styles.ic_error_msg}>
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountPage;
