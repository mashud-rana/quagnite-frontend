"use client";
import React, { useState } from "react";
import { Row, Col } from "antd";
import styles from "./applyforjob.module.css";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Documentation from "../Documentation/Documentation";

const stepData = [
  { id: 1, label: "Personal Information" },
  { id: 2, label: "Documentation" },
  { id: 3, label: "Diversity and Inclusion" },
];

export default function ApplyForJob() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className={`${styles.ic_apply_for_job} ic_section_space`}>
      <div className="container">
        <h6 className="mb-35">Apply For Job</h6>
        <Row justify="center" align="middle" className="ic_section_heading">
          <Col xs={24} sm={24} md={20} lg={16} xl={14}>
            <div className={styles.ic_step}>
              {stepData.map((step) => (
                <div key={step.id} className={styles.ic_step_item}>
                  <div
                    className={`${styles.ic_step_item_circle} ${
                      activeStep === step.id ? styles.active : ""
                    }`}
                  >
                    <h6>{step.id}</h6>
                  </div>
                  <p className={activeStep === step.id ? styles.active : ""}>
                    {step.label}
                  </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {activeStep === 1 && <PersonalInfo setActiveStep={setActiveStep} />}
        {activeStep === 2 && <Documentation setActiveStep={setActiveStep} />}
        {/* {activeStep === 3 && <DiversityAndInclusion />} */}
      </div>
    </section>
  );
}
