"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./testimonialCard.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const NextArrow = ({ onClick }) => (
  <div className={`${styles.ic_arrow} ${styles.ic_next}`} onClick={onClick}>
    <IoIosArrowForward size={24} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className={`${styles.ic_arrow} ${styles.ic_prev}`} onClick={onClick}>
    <IoIosArrowBack size={24} />
  </div>
);

export default function Testimonial({
  bgImage,
  bgColor = "transparent",
  title = "TESTIMONIALS",
  subtitle = "What people are saying",
  testimonials = [],
  ratingFilledIcon,
  ratingEmptyIcon,
}) {
  const backgroundStyle = bgImage
    ? {
        backgroundImage: `url(${bgImage.src})`,
      }
    : { backgroundColor: bgColor };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className={`${styles.ic_testimonial} ic_section_space`}
      style={backgroundStyle}
    >
      <div className="container">
        <CardAnimation index={0} direction="down">
          <h6 className="mb_20">{title}</h6>
          <h3>{subtitle}</h3>
        </CardAnimation>

        <CardAnimation index={0} direction="up">
          <Slider {...settings}>
            {testimonials.map((item) => (
              <div key={item.id} className={`${styles.ic_slide} mb_30`}>
                <div className={`${styles.ic_rating} mb_16`}>
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={i < item.rating ? ratingFilledIcon : ratingEmptyIcon}
                      alt="rating icon"
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
                <p className="mb_16">{item.feedback}</p>
                <p className="fw_500">{item.name}</p>
              </div>
            ))}
          </Slider>
        </CardAnimation>
      </div>
    </section>
  );
}
