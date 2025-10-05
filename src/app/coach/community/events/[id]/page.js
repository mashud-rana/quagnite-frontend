import Image from "next/image";
import React from "react";
import img from "@/assets/images/all/case-studies.png";
import styles from "./details.module.css";

const EventDetailsPage = () => {
  return (
    <div>
      <Image src={img} alt="" className={styles.ic_img} />

      <div className={styles.ic_text_container}>
        <div className={styles.ic_publish}>
          <p>Event Name</p>
          <p>Saturday 11/04/25</p>
          <p>04:00 PM</p>
        </div>

        <p className={styles.ic_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
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
          consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut lab
        </p>
      </div>
    </div>
  );
};

export default EventDetailsPage;
