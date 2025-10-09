import React from "react";
import styles from "./communitycard.module.css";
import Image from "next/image";
import img from "@/assets/images/all/case-studies.png";

const CommunityCard = ({ news }) => {
  return (
    <div className={styles.coachCard}>
      <div className={styles.coachImage}>
        <Image src={img} alt="" className={styles.coachPhoto} />
      </div>
      <div className={styles.coachInfo}>
        <p className={styles.ic_publish}>Name of Publisher 21/2/24</p>
        <h3 className={styles.coachName}>{news.name}</h3>
        <p className={styles.coachDescription}>{news.description}</p>
      </div>
    </div>
  );
};

export default CommunityCard;
