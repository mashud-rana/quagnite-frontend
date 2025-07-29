"use client";
import React, { useState } from "react";
import styles from "./askUs.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import { Col, Row } from "antd";
import StepCard from "@/components/Share/Frontend/StepCard/StepCard";
import ScholarshipInfo from "../../BeASponsor/ScholarshipInfo/ScholarshipInfo";
const stepData = [
  { id: 1, label: "A" },
  { id: 2, label: "B" },
  { id: 3, label: "C" },
  { id: 4, label: "D" },
];

export default function AskUs() {
  const [scholarshipActiveStep, setScholarshipActiveStep] = useState(1);
  return (
    <section className={`${styles.ic_ask} ic_section_space`}>
      <div className="container">
        <div className={styles.ic_ask_main}>
          <CardAnimation index={0} direction="up">
            <h4 className="mb-35">Ask Us</h4>

            <Row gutter={24} justify="center" className="ic_section_heading">
              <Col xs={24} sm={20} md={16} lg={12}>
                <StepCard steps={stepData} activeStep={scholarshipActiveStep} />
              </Col>
            </Row>
          </CardAnimation>
          {scholarshipActiveStep === 1 && (
            <ScholarshipInfo
              currentStep={1}
              setScholarshipActiveStep={setScholarshipActiveStep}
            />
          )}
          {scholarshipActiveStep === 2 && (
            <ScholarshipInfo
              currentStep={2}
              setScholarshipActiveStep={setScholarshipActiveStep}
            />
          )}
          {scholarshipActiveStep === 3 && (
            <ScholarshipInfo
              currentStep={3}
              setScholarshipActiveStep={setScholarshipActiveStep}
            />
          )}
          {scholarshipActiveStep === 4 && <ScholarshipInfo currentStep={4} />}
        </div>
      </div>
    </section>
  );
}
