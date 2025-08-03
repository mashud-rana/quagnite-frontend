"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./eventCarousel.module.css";
import img from "@/assets/images/all/carousel-img.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const PrevArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
    <IoIosArrowBack />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick}>
    <IoIosArrowForward />
  </div>
);

const events = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: img,
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: img,
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: img,
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: img,
  },
];

const EventCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="ic_section_space event">
      <div className="container">
        <CardAnimation index={0} direction="up">
          <Slider {...settings}>
            {events.map((event) => (
              <div key={event.id} className={styles.slide}>
                <div className={styles.card}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={500}
                    height={200}
                    className={styles.image}
                  />
                  <div className={styles.content}>
                    <p className={styles.title}>{event.title}</p>
                    <p className={styles.description}>{event.description}</p>
                    <button className={styles.button}>Register now</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </CardAnimation>
      </div>
    </section>
  );
};

export default EventCarousel;
