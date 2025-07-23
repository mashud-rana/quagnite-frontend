"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./testimonial.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import icon1 from "@/assets/images/apply-scholarship/ratings1.svg";
import icon2 from "@/assets/images/apply-scholarship/ratings2.svg";
import bg from "@/assets/images/apply-scholarship/testimonials-bg.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    rating: 4,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 2,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

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

export default function Testimonial() {
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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className={`${styles.ic_testimonial} ic_section_space`}
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <CardAnimation index={0} direction="down">
          <h6 className="mb_20">TESTIMONIALS</h6>
          <h3>Lorem Ipsum Dolar Sit Amet</h3>
        </CardAnimation>
        <CardAnimation index={0} direction="up">
          <Slider {...settings}>
            {testimonials.map((item) => (
              <div key={item.id} className={`${styles.ic_slide} mb_30`}>
                <div className={`${styles.ic_rating} mb_16`}>
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={i < item.rating ? icon1 : icon2}
                      alt="rating icon"
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
                <p className="mb_16">{item.feedback}</p>
                <p className="fw_500 ">{item.name}</p>
              </div>
            ))}
          </Slider>
        </CardAnimation>
      </div>
    </section>
  );
}
