"use client";

import React, {useState, useEffect} from "react";
import styles from "./profileinfo.module.css";
import {useGetProfileDetailsQuery, useProfileUpdateMutation} from "@/redux/features/student/profileInto/profileApi"
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";
//schema validation

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is required"),
    subscription_type: yup.string().nullable(),
    phone: yup.string().required("Phone number is required").max(16, "Phone number must be at most 16 characters"),
    country: yup.string().nullable(),
    state: yup.string().nullable(),
    address: yup.string().nullable(),
    gender: yup.string().required("Gender is required").oneOf(["male", "female"], "Gender must be either 'male' or 'female'"),
    about_me: yup.string().nullable(),
  })
  .required();

const ProfileInfo = () => {
  const [isEditing,
    setIsEditing] = useState(false);
    const { user } = useSelector((state) => state.auth);
    
    // Get user profile details
  const {
    data: profileQueryData,
    isSuccess: profileQuerySuccess,
    isLoading: profileQueryLoading,
    error: profileQueryError,
    refetch: profileQueryRefetch,
    isFetching: profileQueryFetching
  } = useGetProfileDetailsQuery();

  // Update  User
  const [
    updateUser,
    {
      data: updateData,
      isLoading: isUpdateDataLoading,
      isSuccess: isUpdateDataSuccess,
      isError: isUpdateDataError,
      error: updateDataResponseError,
    },
  ] = useProfileUpdateMutation();

      // Form Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  
  useEffect(()=>{
      if (profileQueryData?.success && profileQueryData.data) {
      const d = profileQueryData.data;
        setValue("email", d.email || "");
        setValue("subscription_type", d.subscription_type || "");
        setValue("phone", d.phone || "");
        setValue("gender", d.gender || "");
        setValue("country", d.student_info?.country || "");
        setValue("state", d.student_info?.state || "");
        setValue("address", d.student_info?.address || "");
        setValue("about_me", d.student_info?.about_me || "");
    }
  },[profileQueryData])
  
  useEffect(()=>{
    if (isUpdateDataSuccess && updateData && updateData.success) {
      // Handle successful update
      toastSuccess(updateData?.message || "Profile updated successfully");
    }
    if (isUpdateDataError) {
      toastError(updateDataResponseError?.data?.message || "Profile update failed. Please try again.");
    }
  }, [isUpdateDataSuccess, updateData, isUpdateDataError, updateDataResponseError])


    const handleEditSave = () => {
    if (!isEditing) {
      // Switch to edit mode
      setIsEditing(true);
    } else {
      // Trigger form validation + submit
      handleSubmit(onSubmit)();
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("_method", "PUT");
    await updateUser({
        data: formData,
        userId: user?.id,
      }).unwrap();
      setIsEditing(false);
  }
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoHeader}>
        <p className={styles.infoTitle}>Profile Info</p>
      
          <button
          className="ic_common_primary_btn"
          onClick={handleEditSave}>
          {isEditing
            ? "SAVE"
            : "EDIT"}  {isUpdateDataLoading && <Spin indicator={antIcon} />}
        </button>
      </div>
      <div
        className={`${styles.infoGrid} ${isEditing
        ? styles.editModeGrid
        : ""}`}>
        <div
          className={`${styles.infoRow} ${isEditing
          ? styles.editModeRow
          : ""}`}>
          <span className={styles.infoLabel}>Email address</span>
          <div>
              <input
              type="email"
              disabled={!isEditing}
              className={`${styles.infoValue} ${isEditing
              ? styles.editModeInput
              : ""}`}
                {...register("email")}
              />
                <small className="text-danger" style={{color: "red"}}>
                          {errors.email?.message}
                        </small>
          </div>
        
        </div>
        <div
          className={`${styles.infoRow} ${isEditing
          ? styles.editModeRow
          : ""}`}>
          <span className={styles.infoLabel}>Subscription type</span>
          <div>
            <input
            type="text"
            disabled={!isEditing}
            className={`${styles.infoValue} ${isEditing
            ? styles.editModeInput
            : ""}`}   {...register("subscription_type")}/>
              <small className="text-danger" style={{color: "red"}}>
                          {errors.subscription_type?.message}
                        </small>
          </div>
        </div>
        <div
          className={`${styles.infoRow} ${isEditing
          ? styles.editModeRow
          : ""}`}>
          <span className={styles.infoLabel}>Phone Number</span>
          <div>
              <input
              type="phone"
              disabled={!isEditing}
              className={`${styles.infoValue} ${isEditing
              ? styles.editModeInput
              : ""}`}   {...register("phone")}/>
              <small className="text-danger" style={{color: "red"}}>
                            {errors.phone?.message}
                          </small>
          </div>
        </div>
        <div
          className={`${styles.infoRow} ${isEditing
          ? styles.editModeRow
          : ""}`}>
          <span className={styles.infoLabel}>Country</span>
          <div>
            <input
            type="text"
            disabled={!isEditing}
            className={`${styles.infoValue} ${isEditing
            ? styles.editModeInput
            : ""}`}   {...register("country")}/>
              <small className="text-danger" style={{color: "red"}}>
                          {errors.country?.message}
                        </small>
          </div>
        </div>
        <div
          className={`${styles.infoRow} ${isEditing
          ? styles.editModeRow
          : ""}`}>
          <span className={styles.infoLabel}>State</span>
          <div>
              <input
            type="text"
            disabled={!isEditing}
            className={`${styles.infoValue} ${isEditing
            ? styles.editModeInput
            : ""}`}   {...register("state")}/>
              <small className="text-danger" style={{color: "red"}}>
                          {errors.state?.message}
                        </small>
          </div>
        </div>
        <div
          className={`${styles.infoRow} ${isEditing
          ? styles.editModeRow
          : ""}`}>
          <span className={styles.infoLabel}>Address</span>
          <div>
            <input
            type="text"
            disabled={!isEditing}
            className={`${styles.infoValue} ${isEditing
            ? styles.editModeInput
            : ""}`}   {...register("address")}/>
                <small className="text-danger" style={{color: "red"}}>
                            {errors.address?.message}
                          </small>
          </div>
        </div>
        <div
          className={`${styles.infoRow} ${isEditing
          ? styles.editModeRow
          : ""}`}>
          <span className={styles.infoLabel}>Gender</span>
          <div>
            <select   disabled={!isEditing}
            className={`${styles.infoValue} ${isEditing
            ? styles.editModeInput
            : ""}`}   {...register("gender")}>
              <option value="male">Male</option>
              <option value="female">Female</option>
          
            </select>
              <small className="text-danger" style={{color: "red"}}>
                          {errors.gender?.message}
                        </small>
          </div>
        
        </div>
        <div
          className={`${styles.infoRow} ${isEditing
          ? styles.editModeRow
          : ""}`}>
          <span className={styles.infoLabel}>Bio</span>
            <div>
                <textarea
              disabled={!isEditing}
              className={`${styles.infoValue} ${styles.textArea} ${isEditing
              ? styles.editModeInput
              : ""}`}
              rows={3}   {...register("about_me")}/>
              <small className="text-danger" style={{color: "red"}}>
                            {errors.about_me?.message}
                          </small>
            </div>
        </div>
      
      </div>
    </div>
  );
};

export default ProfileInfo;
