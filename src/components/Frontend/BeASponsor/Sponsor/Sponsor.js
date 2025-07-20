import React from "react";
import styles from "./sponsor.module.css";
import { Col, Row } from "antd";
import Image from "next/image";
import img1 from "@/assets/images/be-a-sponsor/sponsor-left-img.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const sponsorData = {
  heading: "SPONSOR",
  title: "Create The Future",
  points: [
    {
      subtitle: "Demonstrate Commitment",
      description:
        "By sponsoring a scholarship, you show the world you care about the future.",
    },
    {
      subtitle: "A Cadre of Scholars",
      description:
        "Educated people bound together by a common core can take any team to new heights. Sponsor a scholarship and begin building your team's future.",
    },
    {
      subtitle: "Start the Engine",
      description:
        "Progress begets progress. Sponsoring a scholarship will take us all higher, as a rising tide lifts all boats.",
    },
  ],
  image: img1,
};

export default function Sponsor() {
  return (
    <section className={`${styles.ic_sponsor} ic_section_space`}>
      <div className="container">
        <div className={styles.ic_sponsor_main}>
          <Row gutter={24} justify="space-between">
            <Col xs={24} md={12} xl={11}>
              <CardAnimation index={0} direction="left">
                <div className={styles.ic_left}>
                  <div className={`${styles.ic_mainImage} mb_20`}>
                    <Image src={sponsorData.image} alt="Sponsor" />
                  </div>
                </div>
              </CardAnimation>
            </Col>
            <Col xs={24} md={12} xl={11}>
              <CardAnimation index={0} direction="right">
                <div className={styles.ic_right}>
                  <h6 className="mb-35">{sponsorData.heading}</h6>
                  <h4 className="mb-24">{sponsorData.title}</h4>
                  {sponsorData.points.map((point, index) => (
                    <div key={index}>
                      <h5 className={`${styles.ic_designation} mb_16`}>
                        {point.subtitle}
                      </h5>
                      <p className="ic_section_heading">{point.description}</p>
                    </div>
                  ))}
                </div>
              </CardAnimation>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
