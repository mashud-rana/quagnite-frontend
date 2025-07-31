"use client";

import React from "react";
import Slider from "react-slick";
import styles from "./videoCarousel.module.css";
import { FaPlay } from "react-icons/fa";

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
    <section>
      <div className="container">
        <div className={styles.carouselWrapper}>
          <Slider {...settings}>
            {videoData.map((video) => (
              <div key={video.id} className={styles.videoCard}>
                <div className={styles.videoWrapper}>
                  <video
                    className={styles.video}
                    src={video.src}
                    muted
                    loop
                    autoPlay
                  />
                  <div className={styles.playIcon}>
                    <FaPlay />
                  </div>
                </div>
                <p className={styles.title}>{video.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
