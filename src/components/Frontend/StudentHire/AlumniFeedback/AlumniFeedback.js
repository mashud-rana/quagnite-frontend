"use client";
import React from "react";
import styles from "./alumniFeedback.module.css";
import Slider from "react-slick";
import Image from "next/image";
import img1 from "@/assets/images/student-hire/slider-img1.png";
import img2 from "@/assets/images/student-hire/slider-img2.png";
import img3 from "@/assets/images/student-hire/slider-img3.png";
import icon from "@/assets/images/student-hire/play-icon.svg";
import Fancybox from "@/components/Share/Frontend/Fancybox/Fancybox";
import { RiPlayLargeLine } from "react-icons/ri";

const feedbackImages = [
  {
    thumb: img1,
    full: img1,
    alt: "Alumni 1",
  },
  {
    thumb: img2,
    full: img2,
    alt: "Alumni 2",
  },
  {
    thumb: img3,
    full: img3,
    alt: "Alumni 3",
  },
  {
    thumb: img1,
    full: img1,
    alt: "Alumni 4",
  },
];

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
            <Fancybox>
              <Slider {...settings}>
                {feedbackImages.map((item, index) => (
                  <div className={styles.ic_slider_item} key={index}>
                    <a
                      href={item.full.src}
                      data-fancybox="alumni-gallery"
                      data-caption={item.alt}
                      data-options='{"Image": {"zoom": false}}'
                    >
                      <Image
                        src={item.thumb}
                        alt={item.alt}
                        width={400}
                        height={267}
                        style={{ borderRadius: "16px" }}
                      />
                    </a>
                    <Image
                      src={icon}
                      alt="icon"
                      className={styles.ic_play_icon}
                    />
                  </div>
                ))}
              </Slider>
            </Fancybox>
          </div>
        </div>
      </div>
    </section>
  );
}
