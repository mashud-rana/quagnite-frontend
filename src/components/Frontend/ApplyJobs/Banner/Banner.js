"use client";
import React from "react";
import styles from "./banner.module.css";
import { Row, Col } from "antd";
import Image from "next/image";
import bg from "@/assets/images/apply-jobs/banner.png";
import img from "@/assets/images/apply-jobs/banner-right.png";
import shape from "@/assets/images/apply-jobs/banner-shape.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

export default function Banner() {
  return (
    <section
      className={styles.ic_banner}
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <Row gutter={24} align="middle">
          <Col xs={24} sm={24} md={14} lg={14} xl={12}>
            <div className={styles.ic_banner_left}>
              <CardAnimation index={0} direction="left">
                <h4 className="mb_16">
                  Lorem ipsum dolor sit amet. (Job Title)
                </h4>
                <p>
                  (Job Description)Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis dignissim dui id lobortis vulputate.
                  Nulla sodales enim quis euismod consectetur. Ut in laoreet
                  diam, nec efficitur felis. Suspendisse potenti. Pellentesque
                  rutrum nec diam sed pharetra. Maecenas pulvinar varius
                  efficitur.
                </p>
              </CardAnimation>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.ic_banner_right}>
        <Image src={img} alt="banner-right" />
      </div>
      <Image
        src={shape}
        alt="banner-shape"
        className={styles.ic_banner_shape}
      />
    </section>
  );
}
