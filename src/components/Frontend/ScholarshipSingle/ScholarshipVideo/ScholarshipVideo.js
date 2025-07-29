"use client";
import React from "react";
import styles from "./scholarshipVideo.module.css";
import { Col, Row } from "antd";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import img from "@/assets/images/scholarship/scholarship-video.png";
import Image from "next/image";
import icon from "@/assets/images/scholarship/play-icon.svg";
import Fancybox from "@/components/Share/Frontend/Fancybox/Fancybox";
import Link from "next/link";

export default function ScholarshipVideo() {
  return (
    <section className={styles.ic_scholarship_video}>
      <div className="container">
        <Row gutter={24} align="middle" justify="space-between">
          <Col xs={24} md={11} lg={11}>
            <CardAnimation index={0} direction="left">
              <div className={styles.ic_left}>
                <Image src={img} alt="img" className={styles.ic_bg_img} />
                <div className={styles.ic_fancy}>
                  <Fancybox>
                    <Link
                      data-fancybox="video-gallery"
                      href="https://youtu.be/v8JbaHScYzU?si=Aaoo6KJnfvX-wJOY"
                      className={styles.playButton}
                    >
                      <Image
                        className={styles.ic_icon}
                        src={icon}
                        alt="play icon"
                        width={60}
                        height={60}
                      />
                    </Link>
                  </Fancybox>
                </div>
              </div>
            </CardAnimation>
          </Col>
          <Col xs={24} md={13} lg={12}>
            <CardAnimation index={0} direction="right">
              <div className={styles.ic_right}>
                <h4 className="mb_16">Lorem Ipsum dolar sit amet</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  pretium odio eget eros tempor sagittis. Sed mollis nunc sed
                  tempor mollis. Nam euismod tortor ut augue lacinia, a rhoncus
                  nibh tempor. Sed purus dui, molestie ac neque non, mattis
                  aliquam velit. Proin aliquam quam egestas volutpat mollis.
                  Nulla nec lacus risus. Praesent eu elit eget tortor efficitur
                  ullamcorper...
                </p>
              </div>
            </CardAnimation>
          </Col>
        </Row>
      </div>
    </section>
  );
}
