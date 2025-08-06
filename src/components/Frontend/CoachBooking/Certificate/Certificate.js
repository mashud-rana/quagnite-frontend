"use client";
import React, { useState } from "react";
import styles from "./certificate.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Slider from "react-slick";
import img1 from "@/assets/images/coach-details/slider-img.png";
import Image from "next/image";

const data = [{ image: img1 }, { image: img1 }, { image: img1 }];

export default function Certificate() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15px",
    beforeChange: (_, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 767,
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
    <section
      className={`${styles.ic_certificate} ic_certificate ic_section_space_top`}
    >
      <div className="container">
        <div>
          <CardAnimation index={0} direction="left">
            <div className="ic_title_see_btn_container">
              <h4 className="ic_center">
                Certificates this coach can help you get
              </h4>
              <div>
                <button className="ic_see_all_btn">See All</button>
              </div>
            </div>
          </CardAnimation>

          <CardAnimation index={0} direction="up">
            <Slider {...settings} className="mb-24">
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
