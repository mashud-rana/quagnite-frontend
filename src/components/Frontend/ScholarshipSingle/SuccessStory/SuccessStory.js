import { Col, Row } from "antd";
import React from "react";
import styles from "./successStory.module.css";
import img from "@/assets/images/scholarship/success.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

export default function SuccessStory() {
  return (
    <section className={`ic_section_space_bottom ${styles.ic_success}`}>
      <div className="container">
        <Row gutter={24}>
          <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
            <div className={styles.ic_left}>
              <CardAnimation index={0} direction="up">
                <h6 className="mb_16">SUCCESS STORIES</h6>
                <h4 className="mb-35">
                  Lorem ipsum, consecte adipiscing elit.
                </h4>
                <p className="mb-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  dignissim dui id lobortis vulputate. Nulla sodales enim quis
                  euismod consectetur.
                </p>
                <button className="ic_btn">explore</button>
              </CardAnimation>
            </div>
          </Col>

          <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
            <div className={styles.ic_right}>
              <CardAnimation index={0} direction="down">
                <Image src={img} alt="img" />
              </CardAnimation>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
