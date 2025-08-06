"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./coachDetails.module.css";
import { Col, Row } from "antd";
import Slider from "react-slick";
import img1 from "@/assets/images/coach-details/coach-details.png";
import img2 from "@/assets/images/apply-scholarship/service-img.png";
import img3 from "@/assets/images/apply-scholarship/service-img2.png";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import icon from "@/assets/images/coach-details/icon.svg";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

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
          <Col xs={24} md={10} lg={11}>
            <div className={styles.ic_left}>
              <CardAnimation index={0} direction="up">
                <Slider {...mainSettings} ref={slider1}>
                  {data.map((item, idx) => (
                    <div key={idx} className={styles.ic_slider_main_img}>
                      <Image src={item.image} alt={item.title} />
                    </div>
                  ))}
                </Slider>

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
          </Col>

          <Col xs={24} md={14} lg={12}>
            <div className={styles.ic_right}>
              <CardAnimation index={0} direction="down">
                <h6 className="mb-35">Coach Details</h6>
                <h4 className="mb-24">Mr.Lorem Ipsum Dola</h4>
                <p className={`${styles.ic_designation} mb-24`}>
                  Bio & Experience
                </p>
                <p className="mb-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  dignissim dui id lobortis vulputate. Nulla sodales enim quis
                  euismod consectetur. Ut in laoreet diam, nec efficitur felis.
                  Suspendisse potenti. Pellentesque rutrum nec diam sed
                  pharetra. Maecenas pulvinar varius efficitur.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Duis dignissim dui id
                  lobortis vulputate. Nulla sodales enim quis euismod
                  consectetur.
                </p>

                <div className={`${styles.ic_expertise} mb-24`}>
                  <p className={`${styles.ic_designation} mb_16`}>Expertise</p>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </div>

                <div className={`${styles.ic_courses} ic_section_heading`}>
                  <p className={`${styles.ic_designation} mb_16`}>
                    Industry & Brands
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
                <div className={`${styles.ic_expertise} ic_section_heading`}>
                  <h6 className="mb-24">Book slot</h6>
                  <h4 className="mb-24">Mr.Lorem Ipsum Dola</h4>
                </div>
                <div className={`${styles.ic_input} mb-35`}>
                  <div className={styles.inputWrapper}>
                    <input
                      type="date"
                      placeholder="Date"
                      className={styles.customInput}
                      name="date"
                    />
                    <span>
                      <CiCalendar />
                    </span>
                  </div>
                  <div className={styles.inputWrapper}>
                    <input
                      type="time"
                      placeholder="Time"
                      className={styles.customInput}
                      name="time"
                    />
                    <span>
                      <Image src={icon} alt="icon" />
                    </span>
                  </div>
                </div>
                <button type="submit" className="ic_btn">
                  add to cart
                </button>
              </CardAnimation>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
