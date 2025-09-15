"use client";
import { FaPencilAlt } from "react-icons/fa";
import styles from "./profileBanner.module.css";
import Image from "next/image";
import profile from "@/assets/images/all/profile.png";
import bgGradient from "@/assets/images/all/bg-gradient.png"; // Import the image
import { MdOutlineEdit } from "react-icons/md";
import { useSelector } from "react-redux";

const ProfileBanner = () => {
  const { user } = useSelector((state) => state.auth);
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
              src={profile}
              alt=""
              className={styles.profileAvatar}
              width={105}
              height={145}
            />
          </div>

          <button
            className={styles.editAvatarButton}
            aria-label="Edit profile picture"
          >
            <MdOutlineEdit />
          </button>
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
