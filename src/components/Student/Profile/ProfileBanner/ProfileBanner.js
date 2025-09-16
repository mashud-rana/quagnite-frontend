"use client";
import React,{useEffect} from 'react'
import { FaPencilAlt } from "react-icons/fa";
import styles from "./profileBanner.module.css";
import Image from "next/image";
import profile from "@/assets/images/all/profile.png";
import bgGradient from "@/assets/images/all/bg-gradient.png"; // Import the image
import { MdOutlineEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import {useProfileUpdatePhotoMutation} from "@/redux/features/student/profileInto/profileApi"
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";

const ProfileBanner = () => {
  const { user } = useSelector((state) => state.auth);
  // Update  User
    const [
      updateUserPhoto,
      {
        data: updatePhotoData,
        isLoading: isUpdatePhotoLoading,
        isSuccess: isUpdatePhotoSuccess,
        isError: isUpdatePhotoError,
        error: updatePhotoResponseError,
      },
    ] = useProfileUpdatePhotoMutation();

    useEffect(()=>{
      if (isUpdatePhotoSuccess && updatePhotoData && updatePhotoData.success) {
        // Handle successful update
        toastSuccess(updatePhotoData?.message || "Profile photo updated successfully");
      }
      if (isUpdatePhotoError) {
        toastError(updatePhotoResponseError?.message || "Profile photo update failed. Please try again.");
      }
    }, [isUpdatePhotoSuccess, updatePhotoData, isUpdatePhotoError, updatePhotoResponseError]);

  // Ref for the hidden file input
  const fileInputRef = React.useRef(null);

  // Handle button click to trigger file input
  const handleEditAvatarClick = () => {
    fileInputRef.current?.click();
  };

  // Handle file selection and update profile (mocked)
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
    
      formData.append("avatar", file);
      formData.append("_method", "PUT");

      try {
        await updateUserPhoto({
          data: formData,
          userId: user?.id,
        }).unwrap();
      
      } catch (error) {
        // Optionally handle error here
        toastError(error?.message || "Update failed. Please try again.");
      }
    
    }
  };

  return (
    <div className={styles.bannerContainer}>
      <div
        className={styles.bannerBackground}
        style={{
          backgroundImage: `url(${bgGradient.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
        }}
      ></div>

      <div className={styles.profileDetails}>
        <div className={styles.avatarWrapper}>
          <div className={styles.ic_img_wrapper}>
            <Image
              src={user ? user.avatar_url : profile}
              alt=""
              className={styles.profileAvatar}
              width={105}
              height={145}
            />
          </div>

          <button
            className={styles.editAvatarButton}
            aria-label="Edit profile picture"
            type="button"
            onClick={handleEditAvatarClick}
          >
            {isUpdatePhotoLoading ? <Spin indicator={antIcon} /> : <MdOutlineEdit />}
            
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>

        <div className={styles.userInfo}>
          <h5 className={styles.userName}>{user?.full_name}</h5>
          <p className={styles.userId}>User ID -{user?.details?.student_code}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
