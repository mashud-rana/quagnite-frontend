"use client";

import React from "react";
import Slider from "react-slick";
import styles from "./videoCarousel.module.css";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import Fancybox from "@/components/Share/Frontend/Fancybox/Fancybox";
import Link from "next/link";
import img from "@/assets/images/all/video-banner.png";

import icon from "@/assets/images/scholarship/play-icon.svg";
import { IoPlaySharp } from "react-icons/io5";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const videoData = [
  { id: 1, title: "Video One", src: "/videos/coding.mp4" },
  { id: 2, title: "Video Two", src: "/videos/coding.mp4" },
  { id: 3, title: "Video Three", src: "/videos/coding.mp4" },
  { id: 4, title: "Video Four", src: "/videos/coding.mp4" },
  { id: 5, title: "Video Five", src: "/videos/coding.mp4" },
];

const VideoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="ic_section_space_top">
      <div className="container ic_white">
        <CardAnimation index={0} direction="left">
          <h6 className="mb_16">PODCAST</h6>
        </CardAnimation>
        <CardAnimation index={0} direction="down">
          <h4 className="mb-24">Lorem ipsum</h4>
        </CardAnimation>

        <CardAnimation index={0} direction="up">
          <Slider {...settings}>
            {videoData.map((video) => (
              <div key={video.id} className={styles.videoCard}>
                <div className={styles.videoWrapper}>
                  <Link
                    data-fancybox="video-gallery"
                    href="https://youtu.be/v8JbaHScYzU?si=Aaoo6KJnfvX-wJOY"
                    className={styles.playButton}
                  >
                    <Image src={img} alt="img" className={styles.video} />
                    <div className={styles.ic_fancy}>
                      <Fancybox>
                        <div className={styles.playIcon}>
                          <IoPlaySharp
                            size={22}
                            className={styles.ic_play_icn}
                          />
                        </div>
                      </Fancybox>
                    </div>

                    {/* <video
                    className={styles.video}
                    src={video.src}
                    muted
                    loop
                    autoPlay
                  />
                  <div className={styles.playIcon}>
                    <FaPlay />
                  </div> */}
                  </Link>
                </div>
                <p className={styles.title}>{video.title}</p>
              </div>
            ))}
          </Slider>
        </CardAnimation>
      </div>
    </section>
  );
};

export default VideoCarousel;
