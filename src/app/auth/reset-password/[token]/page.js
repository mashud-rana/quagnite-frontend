"use client";
import React, {useEffect, useState} from 'react'
import Image from "next/image";
import styles from "./reset.module.css";
import bg from "@/assets/images/auth/register.png";
import logo from "@/assets/images/auth/logo.png";
import { useParams } from 'next/navigation'
import { useVerifyTokenQuery, useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { useRouter } from 'next/navigation'

const schema = yup.object({

  password: yup
    .string()
    .required("New password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[^a-zA-Z0-9]/, "Password must contain at least one symbol"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .min(6, "Password must be at least 6 characters")
    .required("Please confirm your password"),
});

const ResetPasswordPage = () => {
  const router = useRouter();
  const { token } = useParams()
  const { 
    data:verifyTokenData, 
    isSuccess:isVerifySuccess, 
    isLoading:isVerifying, 
    error:verifyTokenError, 
    refetch:refetchVerifyToken,
    isFetching:isVerifyFetching } = useVerifyTokenQuery({ token });

  const [isVerified, setIsVerified] = useState(false)

  const [
      resetPassword,
      {
        data: resetPasswordData,
        isLoading: isResetPasswordDataLoading,
        isSuccess: isResetPasswordDataSuccess,
        isError: isResetPasswordDataError,
        error: resetPasswordDataResponseError,
      },
    ] = useResetPasswordMutation();

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
          password: "",
          password_confirmation: ""
        },
      });

  useEffect(()=>{
    
      if (isVerifySuccess && verifyTokenData && verifyTokenData.success) {
        setIsVerified(true)
        // Handle successful update
        toastSuccess(verifyTokenData?.message || "Valid token.");
      }
      if (verifyTokenError) {
        setIsVerified(false)
        toastError(verifyTokenError?.data?.message || "Token is invalid or expired. Please try again.");
      }
    }, [isVerifySuccess, verifyTokenData, verifyTokenError]);

  useEffect(()=>{
    if (isResetPasswordDataSuccess && resetPasswordData && resetPasswordData.success) {
      // Handle successful update
      toastSuccess(resetPasswordData?.message || "Password has been reset successfully");
      setTimeout(() => {
        router.push('/auth/login');
      }, 100);
    }
    if (isResetPasswordDataError) {
      console.log('reset password error',resetPasswordDataResponseError)
      toastError(resetPasswordDataResponseError?.data?.message || "Password Reset failed. Please try again.");
    }
  }, [isResetPasswordDataSuccess, resetPasswordData, isResetPasswordDataError, resetPasswordDataResponseError]);

  const onSubmit =async (data) => {
    
    console.log("Form submitted:", data);
    const formData = new FormData();
    formData.append("password", data.password);
    formData.append("password_confirmation", data.password_confirmation);
    formData.append("token", token);

    await resetPassword(formData).unwrap();
    // You can make API call here
    // Add backend logic here
  };

  

  return (
    <div className={styles.ic_container}>
      <div
        className={styles.ic_background_image}
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Logo */}
        <div className={styles.ic_logo_container}>
          <Image src={logo} alt="Logo" className={styles.ic_logo_image} />
        </div>

        <div className={styles.ic_form_container}>
          <div className={styles.ic_form_card}>
            <div className={styles.header}>
              <h4 className="ic_white">Reset Password</h4>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              {/* New Password */}
              <div className={styles.ic_input_group}>
                <label className={styles.label}>Enter New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className={`${styles.input} ${
                    errors.password ? styles.inputError : ""
                  }`}
                    disabled={!isVerified}
                  {...register("password")}
                />
                {errors.password && (
                  <span className={styles.ic_error_message}>
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Confirm Password */}
              <div className={styles.ic_input_group}>
                <label className={styles.label}>Confirm Your Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className={`${styles.input} ${
                    errors.password_confirmation ? styles.inputError : ""
                  }`}
                    disabled={!isVerified}
                  {...register("password_confirmation")}
                />
                {errors.password_confirmation && (
                  <span className={styles.ic_error_message}>
                    {errors.password_confirmation.message}
                  </span>
                )}
              </div>

              <button type="submit" className={styles.ic_btn} disabled={!isVerified || isVerifying || isVerifyFetching}>
                Reset Password {isVerifying && <Spin indicator={antIcon} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
