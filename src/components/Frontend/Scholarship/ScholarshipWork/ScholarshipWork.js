"use client";
import React from "react";
import styles from "./scholarshipWork.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import { Col, Row } from "antd";
import Image from "next/image";

import img1 from "@/assets/images/scholarship/work-img1.png";
import img2 from "@/assets/images/scholarship/work-img2.png";
import img3 from "@/assets/images/scholarship/work-img3.png";
import img4 from "@/assets/images/scholarship/work-img4.png";

const workSteps = [
  {
    id: 1,
    image: img1,
    text: "Quagnite is a multimodal platform that offers learners their choice of instruction. It delivers cutting-edge content and certifications across a broad range of technology subjects.",
  },
  {
    id: 2,
    image: img2,
    text: "Our curriculum is tailored to meet industry needs, giving students the skills necessary to succeed in real-world scenarios.",
  },
  {
    id: 3,
    image: img3,
    text: "We connect learners with top mentors who guide them through personalized learning journeys.",
  },
  {
    id: 4,
    image: img4,
    text: "Once training is complete, we assist with job placements through our network of partners.",
  },
];

export default function ScholarshipWork() {
  return (
    <section className={`ic_section_space ${styles.ic_scholarship_work}`}>
      <div className="container">
        <div className={styles.ic_scholarship_work_main}>
          <CardAnimation index={0} direction="up">
            <h6 className="mb_16">How the scholarship works</h6>
            <h4 className="mb-35">Lorem Ipsum dolar sit amet</h4>
          </CardAnimation>
          <Row gutter={24}>
            {workSteps.map((step, index) => (
              <Col key={step.id} sm={12} md={8} lg={6}>
                <div className={styles.ic_scholarship_work_item}>
                  <CardAnimation index={index} direction="up">
                    <Image
                      src={step.image}
                      alt={`work-step-${step.id}`}
                      className="mb-18"
                    />
                    <p>{step.text}</p>
                  </CardAnimation>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
}
