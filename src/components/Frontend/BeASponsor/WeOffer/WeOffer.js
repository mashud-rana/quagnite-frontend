import React from "react";
import styles from "./weOffer.module.css";
import { Col, Row } from "antd";
import bg from "@/assets/images/be-a-sponsor/we-offer-bg.png";
import img from "@/assets/images/be-a-sponsor/offer-left.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

export default function WeOffer() {
  return (
    <section
      className={`${styles.ic_we_offer} ic_section_space`}
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <div className={styles.ic_we_offer_main}>
          <Row gutter={24} align="middle" justify="space-between">
            <Col xs={24} md={10}>
              <CardAnimation index={0} direction="down">
                <div className={styles.ic_we_offer_left}>
                  <Image src={img} alt="img" />
                </div>
              </CardAnimation>
            </Col>
            <Col xs={24} md={13}>
              <CardAnimation index={0} direction="up">
                <div className={styles.ic_we_offer_right}>
                  <h3 className="mb_16">
                    We offer scholarship to those in need{" "}
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis dignissim dui id lobortis vulputate. Nulla sodales enim
                    quis euismod consectetur. 
                  </p>
                </div>
              </CardAnimation>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
