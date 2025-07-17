"use client";
import React from "react";
import styles from "./topRatedAlumni.module.css";
import Image from "next/image";
import { Row, Col } from "antd";
import img1 from "@/assets/images/student-hire/img1.png";

const alumniData = [
  {
    name: "Lorem Ipsum Dolar Sit Amet",
    image: img1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lorem Ipsum Dolar Sit Amet",
    image: img1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lorem Ipsum Dolar Sit Amet",
    image: img1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function TopRatedAlumni() {
  return (
    <section className="">
      <div className="container">
        <div className={styles.ic_top_rated_main}>
          <div className={`${styles.ic_top_header} ic_section_heading`}>
            <h3>Top Rated Alumni</h3>
            <button type="primary" className="ic-btn1 ic-btn2">
              See All
            </button>
          </div>

          <Row gutter={24}>
            {alumniData.map((alumni, index) => (
              <Col xs={24} sm={12} md={12} lg={8} key={index} className="mb-24">
                <div className={styles.ic_alumni_card}>
                  <div className={`${styles.ic_alumni_img} mb-12`}>
                    <Image src={alumni.image} alt={alumni.name} />
                  </div>
                  <p className="mb_16">{alumni.name}</p>
                  <p className="mb-24">{alumni.description}</p>
                  <button type="default" className="ic-btn1 ic-btn2">
                    View
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
}
