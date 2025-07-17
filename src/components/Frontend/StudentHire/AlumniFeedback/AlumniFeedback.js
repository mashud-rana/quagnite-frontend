"use client";
import React from "react";
import styles from "./alumniFeedback.module.css";
import Slider from "react-slick";
import img1 from "@/assets/images/student-hire/slider-img1.png";
import img2 from "@/assets/images/student-hire/slider-img2.png";
import img3 from "@/assets/images/student-hire/slider-img3.png";
import Image from "next/image";

export default function AlumniFeedback() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <section className={`${styles.ic_alumni_feedback} ic_section_space`}>
      <div className="container">
        <div className={styles.ic_alumni_feedback_main}>
          <div className="ic_section_heading">
            <h6 className="mb_16">ALUMNI FEEDBACK</h6>
            <h3>Pathways to Success</h3>
          </div>
          <div className={styles.ic_slider}>
            <Slider {...settings}>
              <div className={styles.ic_slider_item}>
                <Image src={img1} alt="img" />
              </div>
              <div className={styles.ic_slider_item}>
                <Image src={img2} alt="img" />
              </div>
              <div className={styles.ic_slider_item}>
                <Image src={img3} alt="img" />
              </div>
              <div className={styles.ic_slider_item}>
                <Image src={img1} alt="img" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
