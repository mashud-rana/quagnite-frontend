"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./coachDetails.module.css";
import { Col, Row } from "antd";
import Slider from "react-slick";
import img1 from "@/assets/images/coach-details/coach-details.png";
import img2 from "@/assets/images/apply-scholarship/service-img.png";
import img3 from "@/assets/images/apply-scholarship/service-img2.png";
import Image from "next/image";

const data = [
  {
    title: "Title One",
    image: img1,
  },
  {
    title: "Title Two",
    image: img2,
  },
  {
    title: "Title Three",
    image: img3,
  },
];

export default function CoachDetails() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const mainSettings = {
    asNavFor: nav2,
    arrows: false,
    fade: true,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  const thumbSettings = {
    asNavFor: nav1,
    slidesToShow: data.length,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
  };

  const dotWidth = 100 / data.length;

  return (
    <section className={`${styles.ic_coach_details} ic_coach_details`}>
      <div className="container">
        <Row gutter={24} justify="space-between">
          <Col xs={24} md={11}>
            <div className={styles.ic_left}>
              {/* Main Slider */}
              <Slider {...mainSettings} ref={slider1}>
                {data.map((item, idx) => (
                  <div key={idx} className={styles.ic_slider_main_img}>
                    <Image src={item.image} alt={item.title} />
                  </div>
                ))}
              </Slider>

              {/* Thumbnail Slider */}
              <Slider
                {...thumbSettings}
                ref={slider2}
                className={styles.navSlider}
              >
                {data.map((item, idx) => (
                  <div key={idx} className={styles.ic_bottom_slider}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={60}
                      className="mb_16"
                    />
                    <div className={styles.title}>{item.title}</div>
                  </div>
                ))}
              </Slider>

              {/* Moving Dot */}
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
            </div>
          </Col>

          {/* Right Column */}
          <Col xs={24} md={12}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              laborum, molestiae corrupti cumque, ea voluptatem aspernatur rerum
              qui cum veritatis voluptatum, tempore possimus necessitatibus?
              Maiores, quaerat voluptatem laborum amet veniam animi nulla
              accusantium...
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
}
