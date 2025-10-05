import React from "react";
import styles from "./reviews.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";
import { GrFavorite } from "react-icons/gr";
import { FiMessageSquare } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const ReviewDetailsPage = () => {
  return (
    <div>
      <div className="mb-24">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Back to main all reviews</h1>
        </div>
      </div>

      <div className={styles.ic_card}>
        <div className={styles.ic_header}>
          <Image src={img} alt="" className={styles.ic_image} />
          <div>
            <h5 className={styles.ic_name}>Lorem Ipsum</h5>
            <p className={styles.ic_title}>Lorem Ipsum</p>
          </div>
        </div>

        <p className={styles.ic_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor inc{" "}
        </p>

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
    </div>
  );
};

export default ReviewDetailsPage;
