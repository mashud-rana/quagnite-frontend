"use client";
import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { FaSignOutAlt } from "react-icons/fa";

import styles from "../Dashboard/DashboardHeader/header.module.css";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { userLoggedOut } from "@/redux/features/auth/authSlice";

export default function Logout() {
    const router = useRouter();
    const dispatch = useDispatch();

    // RTK Query logout mutation hook
    const [
        logout,
        {
            isLoading: isLogoutLoading,
            isSuccess: isLogoutSuccess,
            isError: isLogoutError,
            error: LogoutResponseError,
        },
    ] = useLogoutMutation();

    // Handle logout side effects
    useEffect(() => {
        if (isLogoutSuccess) {
            toastSuccess("Logged out successfully");
            dispatch(userLoggedOut());
            router.push("/auth/login");
        }
        if (LogoutResponseError) {
            toastError(LogoutResponseError?.data?.message || "Logout failed. Please try again.");
        }
    }, [isLogoutSuccess, isLogoutError, LogoutResponseError, router, dispatch]);

    return (
        <>
            {/* Logout button */}
            <button
                onClick={logout}
                className={styles.iconButton}
                aria-label="Logout"
            >
                {isLogoutLoading
                    ? <Spin indicator={antIcon} />
                    : <FaSignOutAlt className={styles.actionIcon} />}
            </button>
        </>
    );
}