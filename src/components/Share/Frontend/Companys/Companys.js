"use client";

import React from "react";
import styles from "./companys.module.css";
import img1 from "@/assets/images/company/logo1.png";
import img2 from "@/assets/images/company/logo2.png";
import img3 from "@/assets/images/company/logo3.png";
import img4 from "@/assets/images/company/logo4.png";
import img5 from "@/assets/images/company/logo5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";

const logos = [img1, img2, img3, img4, img5, img1, img2, img4];

const Companys = () => {
  return (
    <section>
      <div className="container">
        <div>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className={styles.logoWrapper}>
                  <Image
                    src={logo}
                    alt={`Company Logo ${index + 1}`}
                    width={100}
                    height={50}
                    objectFit="contain"
                    className={styles.ic_img}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Companys;
