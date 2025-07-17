import React from "react";
import styles from "./refer.module.css";
import Image from "next/image";
import img1 from "@/assets/images/apply-jobs/refer-bg.png";
import img2 from "@/assets/images/apply-jobs/announcement.png";

export default function Refer() {
  return (
    <section className={`${styles.ic_refer} ic_section_margin_top`}>
      <div className="container">
        <div className={styles.ic_refer_main}>
          <Image className={styles.ic_img1} src={img1} alt="img" />
          <div className={styles.ic_refer_friend}>
            <h6 className="mb_16">REFER A FRIEND</h6>
            <h4 className="mb-35">Not a Right Fit for You?</h4>
            <button>refer</button>
          </div>
          <div className={styles.ic_available}>
            <h5 className="mb-12">Available Position </h5>
            <p className="mb-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dignissim dui id lobortis vulputate.{" "}
            </p>
            <p className="mb-24">Location: Lorem Ipsum</p>
            <p className="mb-24">Experience required: Lorem Ipsum</p>
            <p>Availability: Lorem Ipsum</p>
          </div>
          <div className={styles.ic_available_two}>
            <h5 className="mb-12">Lorem ipsum dolor sit </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              non minus voluptatem laborum rerum. Cumque, sed!
            </p>
          </div>
        </div>
      </div>
      <Image src={img2} alt="announcement" className={styles.ic_announcement} />
    </section>
  );
}
