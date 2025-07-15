"use client";
import React, { useState } from "react";
import { Row, Col } from "antd";
import styles from "./applyforjob.module.css";
import Image from "next/image";
import img1 from "@/assets/images/apply-jobs/form-right.png";

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
                  <p>{step.label}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <h3 className="ic_section_heading">Personal Information</h3>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12} xl={14}>
            <div className={styles.ic_apply_for_job_left}>
              <div className={styles.ic_form_main}>
                <form>
                  <div className={styles.ic_apply_for_job_name}>
                    <div className="mb-18">
                      <input
                        type="text"
                        placeholder="First Name"
                        autoComplete="first-name"
                      />
                    </div>
                    <div className="mb-18">
                      <input
                        type="text"
                        placeholder="Last Name"
                        autoComplete="last-name"
                      />
                    </div>
                  </div>

                  <div className="mb-18">
                    <input
                      type="email"
                      placeholder="Mail Id"
                      autoComplete="email"
                    />
                  </div>

                  <div className="mb-18">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      autoComplete="tel"
                    />
                  </div>
                  <div className="mb-18">
                    <input
                      type="text"
                      placeholder="Current Organization (optional) "
                    />
                  </div>
                  <div className="mb-18">
                    <input
                      type="text"
                      placeholder="Designation applying for "
                    />
                  </div>
                  <div className="mb-18">
                    <input
                      type="text"
                      placeholder="How you got to know about this role"
                    />
                  </div>
                  <div className="mb-18">
                    <input type="text" placeholder="Availability" />
                  </div>
                  <div className="mb-18">
                    <input
                      type="text"
                      placeholder="Designation specific question"
                    />
                  </div>
                  <div className="mb-18">
                    <input
                      type="text"
                      placeholder="Education (Highest level of education completed)"
                    />
                  </div>
                  <div className="mb-18">
                    <input type="text" placeholder="Work Experience" />
                  </div>
                  <div className="mb-18">
                    <input type="text" placeholder="Previous employer" />
                  </div>
                  <div className="mb-18">
                    <input
                      type="text"
                      placeholder="Brief descriptions of duties and responsibilities"
                    />
                  </div>
                  <div className="mb-18">
                    <input
                      type="text"
                      placeholder="Reasons for leaving previous jobs"
                    />
                  </div>

                  <button type="submit">Next</button>
                </form>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={10}>
            <div className={styles.ic_apply_for_job_right}>
              <Image src={img1} alt="img" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
