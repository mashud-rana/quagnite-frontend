"use client";

import React, {useEffect} from "react";
import Image from "next/image";
import styles from "./forget.module.css"; // Reuse the same CSS
import bg from "@/assets/images/auth/register.png";
import logo from "@/assets/images/auth/logo.png";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForgetPasswordMutation} from "@/redux/features/auth/authApi";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email address"
      ),
  })
  .required();

const ForgotPasswordPage = () => {

    const [
      forgetPassword,
      {
        data: forgetPasswordData,
        isLoading: isForgetPasswordLoading,
        isSuccess: isForgetPasswordSuccess,
        isError: isForgetPasswordError,
        error: forgetPasswordError,
      },
    ] = useForgetPasswordMutation();
  const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
      setError,
      reset,
    } = useForm({
      mode: "onBlur",
      resolver: yupResolver(schema),
      defaultValues:{
        email:"",
      }
    });

    useEffect(()=>{
      if (isForgetPasswordSuccess && forgetPasswordData && forgetPasswordData.success) {
        // Handle successful update
        toastSuccess(forgetPasswordData?.message || "Password reset link sent successfully.");
        reset({ email: "" }); // Reset the email field
      }
      if (isForgetPasswordError) {
        toastError(forgetPasswordError?.data?.message || "Profile update failed. Please try again.");
      }
    }, [isForgetPasswordSuccess, forgetPasswordData, isForgetPasswordError, forgetPasswordError, reset]);

  const onSubmit = async (data) => {
    await forgetPassword({email:data.email});
    // Handle password reset logic here
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
        {/* Logo top-right */}
        <div className={styles.ic_logo_container}>
          <Image src={logo} alt="Logo" className={styles.ic_logo_image} />
        </div>

        <div className={styles.ic_form_container}>
          <div className={styles.ic_form_card}>
            <div className={styles.header}>
              <h4 className="ic_white">Forgot Password?</h4>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.ic_input_group}>
                <label className={styles.label}>Email address*</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className={`${styles.input} ${
                    errors.email ? styles.inputError : ""
                  }`}
                  {...register("email")}
                />

                {errors.email && (
                  <span className={styles.ic_error_message}>
                    {errors.email.message}
                  </span>
                )}
              </div>

              <button type="submit" className={styles.ic_btn}>
                Send Password Reset Link {isForgetPasswordLoading && <Spin indicator={antIcon} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
