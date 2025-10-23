"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import styles from "./login.module.css";
import bg from "@/assets/images/auth/register.png";
import google from "@/assets/images/auth/google.png";
import logo from "@/assets/images/auth/logo.png";
import { useLoginMutation, useSocialLoginMutation } from "@/redux/features/auth/authApi";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";
import { useRouter } from 'next/navigation'
import firebase from './../../lib/firebase';

//schema validation

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  })
  .required();

const LoginPage = () => {
  //component state
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  //react hook form

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //handle login mutation

  const [login, { data: loginData, isLoading, isSuccess, isError, error }] =
    useLoginMutation(); //useLoginMutation();

  const [socialLogin, { data: socialLoginData, socialIsLoading, socialIsSuccess, socialIsError, socialError }] =
  useSocialLoginMutation();

  //handle form submit

  const onSubmit = (data) => {
    console.log("Login submitted:", data);
    login(data);
    // Handle login here
  };

  //handle google login

  const  handleGoogleLogin = async () => {
    console.log("Login with Google clicked");
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const response = await firebase.auth().signInWithPopup(provider);
      if (response) {
        const socialLoginData = {
          social_id: response?.additionalUserInfo?.profile?.id,
          social_provider: response?.additionalUserInfo?.providerId,
          email: response?.additionalUserInfo?.profile?.email,
          first_name: response?.additionalUserInfo?.profile?.name,
          avatar_url: response?.additionalUserInfo?.profile?.picture,
        };

        console.log("Google login response:", socialLoginData);
        socialLogin(socialLoginData);
      }
    } catch (error) {}
  };

  //login success or error handling can be done here

  useEffect(() => {
    if (isSuccess) {
      toastSuccess(loginData?.message || "Login successful");
      if(loginData?.user?.user_type === "student"){
        router.push('/student');
      }else if(loginData?.user?.user_type === "teacher"){
        router.push('/teacher/overview');
      }
    }
    if (isError) {
      toastError(error?.message || "Login failed. Please try again.");
    }
  }, [isSuccess, isError, error, loginData]);

  //  Social login success or error handling can be done here
  useEffect(() => {
    console.log("Social login data changed:", socialLoginData);
    if (socialLoginData) {
      toastSuccess(socialLoginData?.message || "Login successful");
      if(socialLoginData?.user?.user_type === "student"){
        router.push('/student');
      }else if(socialLoginData?.user?.user_type === "teacher"){
        router.push('/teacher');
      }else if(socialLoginData?.user?.user_type === "member")
      {
        router.push('/student');
      }
    }
    if (isError) {
      toastError(error?.message || "Login failed. Please try again.");
    }
  }, [socialIsSuccess, socialIsError, socialError, socialLoginData]);

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
        <div className={styles.ic_logo_container}>
          <Image src={logo} alt="Logo" className={styles.ic_logo_image} />
        </div>

        <div className={styles.ic_form_container}>
          <div className={styles.ic_form_card}>
            <div className={styles.header}>
              <h4 className="ic_white">Welcome Back</h4>
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
                  <span className={styles.errorMessage}>
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className={styles.ic_input_group}>
                <label className={styles.label}>Password*</label>
                <div className={styles.passwordContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className={`${styles.input} ${styles.passwordInput} ${
                      errors.password ? styles.inputError : ""
                    }`}
                    {...register("password")}
                  />
                  <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <span className={styles.errorMessage}>
                    {errors.password.message}
                  </span>
                )}
                {/* Forget Password Link */}
                <div className={styles.forgetPasswordContainer} style={{ textAlign: "right", marginTop: "6px" }}>
                  <span
                    className={styles.forgetPassword}
                    style={{ color: "#1890ff", cursor: "pointer", fontSize: "0.95em" }}
                    onClick={() => router.push('/auth/forget-password')}
                  >
                    Forgot password?
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className={styles.registerButton}
                disabled={isLoading}
              >
                Login {isLoading && <Spin indicator={antIcon} />}
              </button>

              <div className={styles.divider}>
                <span className={styles.dividerText}>Or</span>
              </div>

              <button
                type="button"
                className={styles.googleButton}
                onClick={handleGoogleLogin}
              >
                <Image src={google} alt="google" />
                Login with Google
              </button>
            </form>

            {/* New user? Create an Account */}
            <div style={{ textAlign: "center", marginTop: "18px" }}>
              <span style={{ color: "#fff" }}>
                New user?{" "}
                <span
                  style={{ color: "#1890ff", cursor: "pointer", fontWeight: 500 }}
                  onClick={() => router.push('/auth/register')}
                >
                  Create an Account
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
