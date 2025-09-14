"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import styles from "./register.module.css";
import bg from "@/assets/images/auth/register.png";
import google from "@/assets/images/auth/google.png";
import Image from "next/image";
import logo from "@/assets/images/auth/logo.png";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Handle form submission here
  };

  const handleGoogleRegister = () => {
    console.log("Register with Google clicked");
    // Handle Google registration here
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
        <div className={styles.ic_logo_container}>
          <Image src={logo} alt="Logo" className={styles.ic_logo_image} />
        </div>

        <div className={styles.ic_form_container}>
          <div className={styles.ic_form_card}>
            <div className={styles.header}>
              {/* <h1 className={styles.title}>Create an Account 👋</h1> */}
              <h1 className={styles.title}>
                Create an Account <span className={styles.handEmoji}>👋</span>
              </h1>
              <p className={styles.subtitle}>
                Kindly fill in your details to create an account
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.ic_input_group}>
                <label className={styles.label}>Your fullname*</label>
                <input
                  type="text"
                  placeholder="John James"
                  className={`${styles.input} ${
                    errors.fullname ? styles.inputError : ""
                  }`}
                  {...register("fullname", {
                    required: "Full name is required",
                  })}
                />
                {errors.fullname && (
                  <span className={styles.errorMessage}>
                    {errors.fullname.message}
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
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
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
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
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
                  id="agreeToTerms"
                  className={styles.checkbox}
                  {...register("agreeToTerms", {
                    required: "You must agree to terms & conditions",
                  })}
                />
                <label htmlFor="agreeToTerms" className={styles.checkboxLabel}>
                  I agree to terms & conditions
                </label>
              </div>
              {errors.agreeToTerms && (
                <span className={styles.errorMessage}>
                  {errors.agreeToTerms.message}
                </span>
              )}

              <button type="submit" className={styles.registerButton}>
                Register Account
              </button>

              <div className={styles.divider}>
                <span className={styles.dividerText}>Or</span>
              </div>

              <button
                type="button"
                className={styles.googleButton}
                onClick={handleGoogleRegister}
              >
                <Image src={google} alt="google" />
                Register with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
