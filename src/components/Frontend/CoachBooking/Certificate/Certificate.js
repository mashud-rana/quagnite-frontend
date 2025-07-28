"use client";
import React, { useState } from "react";
import styles from "./certificate.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Slider from "react-slick";
import img1 from "@/assets/images/coach-details/coach-details.png";
import img2 from "@/assets/images/apply-scholarship/service-img.png";
import img3 from "@/assets/images/apply-scholarship/service-img2.png";
import Image from "next/image";

const data = [{ image: img1 }, { image: img2 }, { image: img3 }];

export default function Certificate() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15px",
    beforeChange: (_, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  const dotWidth = 100 / data.length;

  return (
    <section className={`${styles.ic_certificate} ic_certificate`}>
      <div className="container">
        <div className={styles.ic_certificate_main}>
          <div className={`${styles.ic_top_header}`}>
            <h4>Certificates this coach can help you get</h4>
            <button type="button" className="ic-btn1 ic-btn2">
              See All
            </button>
          </div>

          <CardAnimation index={0} direction="left">
            <Slider {...settings} className={styles.customSlider}>
              {data.map((item, idx) => (
                <div key={idx} className={styles.ic_slider_main_img}>
                  <Image src={item.image} alt={`Certificate ${idx + 1}`} />
                </div>
              ))}
            </Slider>

            <div className={styles.ic_dot_main}>
              <div className={styles.dotTrack}>
                <div
                  className={styles.dot}
                  style={{
                    width: `${dotWidth}%`,
                    left: `${activeIndex * dotWidth}%`,
                  }}
                />
              </div>
            </div>
          </CardAnimation>
        </div>
      </div>
    </section>
  );
}
