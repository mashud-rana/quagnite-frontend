"use client";
import React from "react";
import styles from "./bannerCard.module.css";
import { Row, Col } from "antd";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

export default function Banner({ bgImage, rightImage, heading, paragraph }) {
  return (
    <section
      className={styles.ic_banner}
      style={{ backgroundImage: `url(${bgImage?.src})` }}
    >
      <div className="container">
        <Row gutter={24} align="middle">
          <Col xs={24} sm={24} md={14} lg={14} xl={12}>
            <CardAnimation index={0} direction="left">
              <div className={styles.ic_banner_left}>
                <h4 className="mb_16">{heading}</h4>
                <p>{paragraph}</p>
              </div>
            </CardAnimation>
          </Col>
        </Row>
      </div>
      {rightImage && (
        <div className={styles.ic_banner_right}>
          <CardAnimation index={0} direction="down">
            <Image src={rightImage} alt="banner-right" />
          </CardAnimation>
        </div>
      )}
    </section>
  );
}
