"use client";
import React, { useState } from "react";
import styles from "./scholarship.module.css";
import { Col, Row } from "antd";
import ScholarshipInfo from "../ScholarshipInfo/ScholarshipInfo";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const stepData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function Scholarship() {
  const [scholarshipActiveStep, setScholarshipActiveStep] = useState(1);
  return (
    <section className={`${styles.ic_scholarship} ic_section_space`}>
      <div className="container">
        <div className={styles.ic_scholarship_main}>
          <CardAnimation index={0} direction="up">
            <h6 className="mb_16">Apply to sponsor a scholarship</h6>
            <h4 className="mb-35">Take the first step.</h4>

            <Row gutter={24} justify="center" className="ic_section_heading">
              <Col xs={24} sm={20} md={16} lg={12}>
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
