"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import styles from "./reset.module.css";
import bg from "@/assets/images/auth/register.png";
import logo from "@/assets/images/auth/logo.png";

const ResetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Resetting password to:", data.newPassword);
    // Add backend logic here
  };

  const newPassword = watch("newPassword");

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
                    errors.newPassword ? styles.inputError : ""
                  }`}
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.newPassword && (
                  <span className={styles.ic_error_message}>
                    {errors.newPassword.message}
                  </span>
                )}
              </div>

              {/* Confirm Password */}
              <div className={styles.ic_input_group}>
                <label className={styles.label}>Confirm Your Passowrd</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className={`${styles.input} ${
                    errors.confirmPassword ? styles.inputError : ""
                  }`}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === newPassword || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <span className={styles.ic_error_message}>
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              <button type="submit" className={styles.ic_btn}>
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
