"use client";

import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import styles from "./register.module.css";
import bg from "@/assets/images/auth/register.png";
import google from "@/assets/images/auth/google.png";
import Image from "next/image";
import logo from "@/assets/images/auth/logo.png";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRegisterUserMutation, useSocialLoginMutation} from "@/redux/features/auth/authApi";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";
import {useRouter   } from "next/navigation";
import firebase from './../../lib/firebase';

const schema = yup.object({
  first_name: yup.string().required("Full name is required"),
  email: yup
        .string()
        .email("Invalid email")
        .required("Email is required")
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          "Invalid email address"
        ),
  password: yup
    .string()
    .required("New password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[^a-zA-Z0-9]/, "Password must contain at least one symbol"),
    agree_to_terms: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
});


const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [
      registerUser,
    {
      data ,
      isLoading ,
      isSuccess ,
      isError ,
      error,
    },
  ] = useRegisterUserMutation();

  const [socialLogin,
    {
      data: socialLoginData,
      socialIsLoading,
      socialIsSuccess,
      socialIsError,
      socialError
    }] = useSocialLoginMutation();

  const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
      setError,
      reset,
    } = useForm({
      
      resolver: yupResolver(schema),
    
    });


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

  const onSubmit =  (data) => {
      const payload ={
        first_name: data.first_name,
        email: data.email,
        password: data.password,
        agree_to_terms: data.agree_to_terms,
      }
     registerUser(payload);

  };


    useEffect(() => {
      if (isSuccess) {
        toastSuccess(data?.message || "Registration successful.");
        reset();
        if(data?.user?.user_type === "member"){
          router.push('/teacher');
        }
      }
      if (isError) {
        toastError(error?.data?.message || "Registration failed. Please try again.");
      }
    }, [isSuccess, data, isError, error, reset, router]);


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
              <h1 className={styles.title}>
                Create an Account <span className={styles.handEmoji}>👋</span>
              </h1>
              <p className={styles.subtitle}>
                Kindly fill in your details to create an account
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.ic_input_group}>
                <label className={styles.label}>Your full name*</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className={`${styles.input} ${
                    errors.first_name ? styles.inputError : ""
                  }`}
                  {...register("first_name")}
                />
                {errors.first_name && (
                  <span className={styles.errorMessage}>
                    {errors.first_name.message}
                  </span>
                )}
              </div>

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
                <label className={styles.label}>Create password*</label>
                <div className={styles.passwordContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
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
              </div>

              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  id="agree_to_terms"
                  className={styles.checkbox}
                  {...register("agree_to_terms")}
                />
                <label htmlFor="agree_to_terms" className={styles.checkboxLabel}>
                  I agree to terms & conditions
                </label>
              </div>
              {errors.agree_to_terms && (
                <span className={styles.errorMessage}>
                  {errors.agree_to_terms.message}
                </span>
              )}

              <button type="submit" className={styles.registerButton}>
                Register Account {isLoading && <Spin indicator={antIcon} />}
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
                Register with Google
              </button>
            </form>

            <div className={styles.loginPrompt} style={{ textAlign: "center", marginTop: "20px" }}>
              Already have an Account?{" "}
              <span
                style={{ color: "#0070f3", cursor: "pointer", textDecoration: "underline" }}
                onClick={() => router.push("/auth/login")}
              >
                Log In
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
