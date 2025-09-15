"use client";

import React,{useEffect} from "react";
import styles from "./acoount.module.css";
import {useGetProfileDetailsQuery, useProfileUpdatePasswordMutation} from "@/redux/features/student/profileInto/profileApi"
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import { data } from "framer-motion/client";
//schema validation

const schema = yup.object({
  email: yup
    .string()
    .matches(/^\S+@\S+$/i, "Invalid email address")
    .email("Invalid email address")
    .required("Email is required"),
  current_password: yup
    .string()
    .required("Current password is required"),
  new_password: yup
    .string()
    .required("New password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[^a-zA-Z0-9]/, "Password must contain at least one symbol"),
  new_password_confirmation: yup
    .string()
    .oneOf([yup.ref("new_password")], "Passwords do not match")
    .min(6, "Password must be at least 6 characters")
    .required("Please confirm your password"),
});

const AccountPage = () => {
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
      updatePassword,
      {
        data: updatePasswordData,
        isLoading: isUpdatePasswordDataLoading,
        isSuccess: isUpdatePasswordDataSuccess,
        isError: isUpdatePasswordDataError,
        error: updatePasswordDataResponseError,
      },
    ] = useProfileUpdatePasswordMutation();

    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
      setError,
    } = useForm({
      mode: "onBlur",
      resolver: yupResolver(schema),
      defaultValues: {
        email: "",
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
      },
    });

    useEffect(() => {
      
      if (profileQueryData?.success && profileQueryData.data) {
        const d = profileQueryData.data;
        setValue("email", d.email || "");
        setValue("current_password", '');
        setValue("new_password", "");
        setValue("new_password_confirmation",  "");
      }
    }, [profileQueryData]);

    useEffect(()=>{
      if (isUpdatePasswordDataSuccess && updatePasswordData && updatePasswordData.success) {
        // Handle successful update
        toastSuccess(updatePasswordData?.message || "Profile password updated successfully");
      }
      if (isUpdatePasswordDataError) {
        console.log('update password error',updatePasswordDataResponseError)
        toastError(updatePasswordDataResponseError?.data?.message || "Profile update failed. Please try again.");
      }
    }, [isUpdatePasswordDataSuccess, updatePasswordData, isUpdatePasswordDataError, updatePasswordDataResponseError]);

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("_method", "PUT");

    await updatePassword({
        data: formData,
        userId: user?.id,
      }).unwrap();
    // You can make API call here
  };

  return (
    <div className={styles.ic_info_container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.ic_info_header}>
          <p className={styles.ic_info_title}>Account Settings</p>
          <button type="submit" className={styles.ic_edit_button}>
            SAVE {isUpdatePasswordDataLoading && <Spin indicator={antIcon} />}
          </button>
        </div>

        <div className={`${styles.ic_info_grid} ${styles.ic_edit_mode_grid}`}>
          {/* Email */}
          <div className={`${styles.ic_info_row} ${styles.ic_edit_mode_row}`}>
            <span className={styles.ic_info_label}>Email Address</span>
            <div>
              <input
                type="email"
                {...register("email")}
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
                {...register("current_password")}
                className={styles.ic_info_value}
              />
              {errors.current_password && (
                <span className={styles.ic_error_msg}>
                  {errors.current_password.message}
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
                {...register("new_password")}
                className={styles.ic_info_value}
              />
              {errors.new_password && (
                <span className={styles.ic_error_msg}>
                  {errors.new_password.message}
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
                {...register("new_password_confirmation")}
                className={styles.ic_info_value}
              />
              {errors.new_password_confirmation && (
                <span className={styles.ic_error_msg}>
                  {errors.new_password_confirmation.message}
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
