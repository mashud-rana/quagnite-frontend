"use client";
import React, { useState } from "react";
import styles from "./scholarship.module.css";
import { Col, Row } from "antd";

const stepData = [
  { id: 1, },
  { id: 2,},
  { id: 3, },
  { id: 4, },
];

export default function Scholarship() {
    const [scholarshipActiveStep, setScholarshipActiveStep] = useState(1);
    return (
    <section className={`${styles.ic_scholarship} ic_section_space`}>
      <div className="container">
                <div className={styles.ic_scholarship_main}>
                    <h6 className="mb_16">Apply For Job</h6>
                    <h4 className="mb-35">Take the first step.</h4>
          <Row gutter={24} justify="center">
            <Col xs={24} md={12}>
                <div className={styles.ic_step}>
              {stepData.map((step) => (
                <div key={step.id} className={styles.ic_step_item}>
                  <div
                    className={`${styles.ic_step_item_circle} ${
                      scholarshipActiveStep === step.id ? styles.active : ""
                    }`}
                  >
                    <h6>{step.id}</h6>
                  </div>
                </div>
              ))}
            </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}   