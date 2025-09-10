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
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";

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

  //handle form submit

  const onSubmit = (data) => {
    console.log("Login submitted:", data);
    login(data);
    // Handle login here
  };

  //handle google login

  const handleGoogleLogin = () => {
    console.log("Login with Google clicked");
    // Handle Google login here
  };

  //login success or error handling can be done here

  useEffect(() => {
    if (isSuccess) {
      toastSuccess(loginData?.message || "Login successful");
    }
    if (isError) {
      toastError(error?.data?.message || "Login failed. Please try again.");
    }
  }, [isSuccess, isError, error, loginData]);

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
