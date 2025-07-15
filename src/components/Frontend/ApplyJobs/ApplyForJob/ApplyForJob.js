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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentOrg: "",
    designation: "",
    source: "",
    availability: "",
    specificQ: "",
    education: "",
    experience: "",
    prevEmployer: "",
    duties: "",
    reasonLeaving: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setActiveStep(2);
    }
  };

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
        <h3 className="ic_section_heading">Personal Information</h3>
        <Row gutter={24}>
          <Col xs={24} md={14}>
            <div className={styles.ic_apply_for_job_left}>
              <div className={styles.ic_form_main}>
                <form onSubmit={handleSubmit}>
                  <div className={styles.ic_apply_for_job_name}>
                    <div className="mb-18">
                      <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && (
                        <p className={styles.error}>{errors.firstName}</p>
                      )}
                    </div>
                    <div className="mb-18">
                      <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && (
                        <p className={styles.error}>{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {[
                    { name: "email", placeholder: "Mail Id", type: "email" },
                    { name: "phone", placeholder: "Phone Number" },
                    {
                      name: "currentOrg",
                      placeholder: "Current Organization (optional)",
                    },
                    {
                      name: "designation",
                      placeholder: "Designation applying for",
                    },
                    {
                      name: "source",
                      placeholder: "How you got to know about this role",
                    },
                    { name: "availability", placeholder: "Availability" },
                    {
                      name: "specificQ",
                      placeholder: "Designation specific question",
                    },
                    {
                      name: "education",
                      placeholder: "Education (Highest level completed)",
                    },
                    { name: "experience", placeholder: "Work Experience" },
                    { name: "prevEmployer", placeholder: "Previous employer" },
                    {
                      name: "duties",
                      placeholder: "Brief description of responsibilities",
                    },
                    {
                      name: "reasonLeaving",
                      placeholder: "Reasons for leaving previous jobs",
                    },
                  ].map((field) => (
                    <div key={field.name} className="mb-18">
                      <input
                        type={field.type || "text"}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                      />
                      {errors[field.name] && (
                        <p className={styles.error}>{errors[field.name]}</p>
                      )}
                    </div>
                  ))}

                  <button type="submit">Next</button>
                </form>
              </div>
            </div>
          </Col>
          <Col xs={24} md={10}>
            <div className={styles.ic_apply_for_job_right}>
              <Image src={img1} alt="img" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
