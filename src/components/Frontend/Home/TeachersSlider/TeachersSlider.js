"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { useState } from "react";
import styles from "./teachers.module.css";
import teacher1 from "@/assets/images/teachers/t1.png";
import teacher2 from "@/assets/images/teachers/t2.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: teacher2,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: teacher1,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Emily Davis",
    image: teacher2,
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    name: "John Morris",
    image: teacher1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    image: teacher2,
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    name: "David Wilson",
    image: teacher1,
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    id: 7,
    name: "Rachel Brown",
    image: teacher2,
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
  },
];

export default function TeachersSlider() {
  const [activeIndex, setActiveIndex] = useState(4); // Start with middle slide active

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.quote}>{testimonials[activeIndex]?.quote}</div>

        <div className={styles.sliderContainer}>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            initialSlide={4}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, EffectCoverflow]}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className={styles.swiper}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className={styles.slide}>
                <div className={styles.imageContainer}>
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className={styles.profileImage}
                    height={300}
                    width={300}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.activeName}>
          {testimonials[activeIndex]?.name}
        </div>
      </div>
    </div>
  );
}
