import React from "react";
import styles from "./acoount.module.css";

const AccountPage = () => {
  return (
    <div>
      <div className={styles.infoHeader}>
        <p className={styles.infoTitle}>Profile Info</p>
        <button className={styles.ic_btn}>Upadate</button>
      </div>
    </div>
  );
};

export default AccountPage;
