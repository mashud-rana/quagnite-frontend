"use client";

import React, { useEffect, useState } from "react";
import styles from "./details.module.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";

// ✅ Schema validation
const schema = yup.object({
  billing_name: yup.string().nullable(),
  billing_email: yup.string().email("Invalid email").nullable(),
  billing_address: yup.string().nullable(),
  billing_phone: yup
    .string()
    .required("Phone number is required")
    .max(16, "Phone number must be at most 16 characters"),
});

const BillingDetails = ({ title = "Details", fields = {}, onSave, buttonIsLoading }) => {
  const [isEditing, setIsEditing] = useState(false);

  // ✅ Initialize react-hook-form with default values
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: fields, // initial load
  });

  // ✅ Whenever "fields" prop changes (like after API load), update form values
  useEffect(() => {
    if (fields) reset(fields);
  }, [fields, reset]);

  // ✅ Handle save with validation
  const onSubmit = (data) => {
    if (onSave) onSave(data);
    setIsEditing(false);
  };

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoHeader}>
        <p className={styles.infoTitle}>{title}</p>
        <button
          type="button"
          className="ic_common_primary_btn"
          onClick={() =>
            isEditing ? handleSubmit(onSubmit)() : setIsEditing(true)
          }
        >
          {isEditing ? "SAVE" : "Edit"}
          {buttonIsLoading && <Spin indicator={antIcon} />}
        </button>
      </div>

      <div
        className={`${styles.infoGrid} ${
          isEditing ? styles.editModeGrid : ""
        }`}
      >
        {/* Name */}
        <div
          className={`${styles.infoRow} ${
            isEditing ? styles.editModeRow : ""
          }`}
        >
          <span className={styles.infoLabel}>Name</span>
          <input
            type="text"
            disabled={!isEditing}
            className={`${styles.infoValue} ${
              isEditing ? styles.editModeInput : ""
            }`}
            {...register("billing_name")}
          />
          {errors.billing_name && (
            <small className="text-danger">{errors.billing_name.message}</small>
          )}
        </div>

        {/* Email */}
        <div
          className={`${styles.infoRow} ${
            isEditing ? styles.editModeRow : ""
          }`}
        >
          <span className={styles.infoLabel}>Email Address</span>
          <input
            type="text"
            disabled={!isEditing}
            className={`${styles.infoValue} ${
              isEditing ? styles.editModeInput : ""
            }`}
            {...register("billing_email")}
          />
          {errors.billing_email && (
            <small className="text-danger">{errors.billing_email.message}</small>
          )}
        </div>

        {/* Address */}
        <div
          className={`${styles.infoRow} ${
            isEditing ? styles.editModeRow : ""
          }`}
        >
          <span className={styles.infoLabel}>Billing Address</span>
          <input
            type="text"
            disabled={!isEditing}
            className={`${styles.infoValue} ${
              isEditing ? styles.editModeInput : ""
            }`}
            {...register("billing_address")}
          />
          {errors.billing_address && (
            <small className="text-danger">
              {errors.billing_address.message}
            </small>
          )}
        </div>

        {/* Phone */}
        <div
          className={`${styles.infoRow} ${
            isEditing ? styles.editModeRow : ""
          }`}
        >
          <span className={styles.infoLabel}>Phone Number</span>
          <input
            type="text"
            disabled={!isEditing}
            className={`${styles.infoValue} ${
              isEditing ? styles.editModeInput : ""
            }`}
            {...register("billing_phone")}
          />
          {errors.billing_phone && (
            <small className="text-danger">{errors.billing_phone.message}</small>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
