import { Col, Row } from "antd";
import React from "react";
import styles from "./banner.module.css";
import bgImage from "@/assets/images/scholarship/banner.png";
import img from "@/assets/images/scholarship/scholarship-right.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

export default function Banner() {
  return (
    <section
      className={styles.ic_banner}
      style={{ backgroundImage: `url(${bgImage?.src})` }}
    >
      <div className="container">
        <Row gutter={24}>
          <Col md={12}>
            <CardAnimation index={0} direction="left">
              <div className={styles.ic_banner_left}>
                <h4 className="mb-24">Scholarship Name</h4>
                <p className="mb_16 fw_900">Scholarship sponsor name</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  dignissim dui id lobortis vulputate. Nulla sodales enim quis
                  euismod consectetur. Ut in laoreet diam, nec efficitur felis.
                  Suspendisse potenti. Pellentesque rutrum nec diam sed
                  pharetra. Maecenas pulvinar varius efficitur.Lorem ipsum dolor
                  sit amet, consectetur adipiscing consectetur.
                </p>
              </div>
            </CardAnimation>
          </Col>
        </Row>
      </div>
      <div className={styles.ic_right}>
        <CardAnimation index={0} direction="down">
          <Image src={img} alt="img" />
        </CardAnimation>
      </div>
    </section>
  );
}
