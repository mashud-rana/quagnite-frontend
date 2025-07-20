"use client";
import React from "react";
import styles from "./banner.module.css";
import { Row, Col } from "antd";
import Image from "next/image";
import bg from "@/assets/images/be-a-sponsor/bg.png";
import img from "@/assets/images/be-a-sponsor/banner-right.png";

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
              <h4 className="mb_16">Commit to the future of tech</h4>
              <p>
                There’s no better way to demonstrate your dedication to the
                {`industry's`} future than by sponsoring a scholarship. Not only
                do sponsors gain demonstrated social capital, but by building a
                loyal cadre of scholars who are dedicated to making the world
                better than it was, scholarships help create a perpetuating
                engine of advancement. Sponsor a scholarship and take us into
                the future.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.ic_banner_right}>
        <Image src={img} alt="banner-right" />
      </div>
    </section>
  );
}
