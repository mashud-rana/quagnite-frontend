import Image from "next/image";
import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { RiShareForwardLine } from "react-icons/ri";
import styles from "./details.module.css";
import img from "@/assets/images/all/instractor.png";

const BlogDetailsPage = () => {
  return (
    <div>
      <div className={styles.ic_end}>
        <button className="ic_common_primary_btn">Write a blog</button>
      </div>
      <div className={styles.ic_card}>
        <div className={styles.ic_header}>
          <Image src={img} alt="" className={styles.ic_image} />
          <div>
            <h5 className={`${styles.ic_name} ic_text_36 mb-12`}>
              Lorem Ipsum
            </h5>
            <p className={styles.ic_title}>Lorem Ipsum</p>
          </div>
        </div>

        <p className={styles.ic_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Lorem ipsum dolor sit amet, consectetur adipiscing read
          more
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

export default BlogDetailsPage;
