import { FaPencilAlt } from "react-icons/fa";
import styles from "./profileBanner.module.css";
import Image from "next/image";

const ProfileBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerBackground}></div>
      <div className={styles.profileDetails}>
        <div className={styles.avatarWrapper}>
          {/* <Avatar
            src="/placeholder.svg?height=150&width=150"
            alt="Amalia Fox"
            fallback="AF"
            className={styles.profileAvatar}
          /> */}
          <Image
            src={"/placeholder.svg"}
            alt=""
            className={styles.profileAvatar}
            width={200}
            height={100}
          />
          \
          <button
            className={styles.editAvatarButton}
            aria-label="Edit profile picture"
          >
            <FaPencilAlt className={styles.editAvatarIcon} />
          </button>
        </div>
        <div className={styles.userInfo}>
          <h2 className={styles.userName}>Amalia fox</h2>
          <p className={styles.userId}>User ID -1234567890</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
