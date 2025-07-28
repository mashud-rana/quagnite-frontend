import React from "react";
import styles from "./application.module.css";
import bg from "@/assets/images/scholarship/application-bg.png";
import { Col, Row } from "antd";
import img from "@/assets/images/scholarship/application-img.png";
import Image from "next/image";

export default function Application() {
  return (
    <section className={styles.ic_application}>
      <div className="container">
        <div
          className={styles.ic_application_main}
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        >
          <Row gutter={24} align="middle" justify="space-between">
            <Col xs={24} md={12}>
              <div className={styles.ic_left}>
                <Image src={img} alt="img" />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className={styles.ic_right}>
                <h6 className="mb_16">START YOUR APPLICATION</h6>
                <h4 className="mb_16">Begin your journey</h4>
                <p className="mb-24">
                  We want you to join our elite Quagnite Scholars alumni.
                  Excellence, passion, and tech, all embodied in you.
                </p>
                <button className="ic-btn1">explore</button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
