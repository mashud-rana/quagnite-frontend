import React from "react";
import styles from "./review.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";
import { GrFavorite } from "react-icons/gr";
import { FiMessageSquare } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";

const ReviewCard = ({ review }) => {
  return (
    <div key={review.id} className={styles.ic_card}>
      <div className={styles.ic_header}>
        <Image src={img} alt={review.name} className={styles.ic_image} />
        <div>
          <h5 className={styles.ic_name}>{review.name}</h5>
          <p className={styles.ic_title}>{review.title}</p>
        </div>
      </div>

      <p className={styles.ic_text}>{review.review}</p>

      <div className={styles.ic_actions}>
        <button className={styles.ic_iconBtn}>
          <GrFavorite />
        </button>
        <button className={styles.ic_iconBtn}>
          <FiMessageSquare />
        </button>
        <button className={styles.ic_iconBtn}>
          <RiShareForwardLine />
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
