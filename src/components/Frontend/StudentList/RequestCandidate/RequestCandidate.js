"use client";
import React from "react";
import { useState } from "react";
import styles from "./requestCandidate.module.css";
import img from "@/assets/images/all/candidate.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const designationOptions = [
  "Software Engineer",
  "Product Manager",
  "Data Scientist",
  "UI/UX Designer",
  "Marketing Manager",
  "Sales Executive",
  "Business Analyst",
  "Project Manager",
  "DevOps Engineer",
  "Quality Assurance",
];

const industryOptions = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
  "Retail",
  "Consulting",
  "Media & Entertainment",
  "Real Estate",
  "Transportation",
];

const RequestCandidate = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    mailId: "",
    phoneNumber: "",
    currentOrganisation: "",
    candidateDesignation: "",
    industry: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <section>
      <div className="container">
        <div className={styles.ic_wrapper}>
          <div className={styles.headerSection}>
            <CardAnimation index={0} direction="left">
              <h6 className="mb_16">REQUEST CANDIDATE</h6>
            </CardAnimation>
            <CardAnimation index={0} direction="up">
              <h4 className={styles.title}>
                Did not find a suitable candidate for your workforce? Request
                one from us directly.
              </h4>
            </CardAnimation>
          </div>
          <div className={styles.content}>
            {/* Form Section */}

            <div className={styles.formSection}>
              <CardAnimation index={0} direction="up">
                <form className={styles.form} onSubmit={handleSubmit}>
                  {/* First Name and Last Name */}

                  <div className={styles.formRow}>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      required
                    />
                  </div>

                  {/* Designation Dropdown */}
                  <select
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                    required
                  >
                    <option value="">Designation</option>
                    {designationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  {/* Mail ID */}
                  <input
                    type="email"
                    name="mailId"
                    placeholder="Mail ID"
                    value={formData.mailId}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />

                  {/* Phone Number */}
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />

                  {/* Current Organisation */}
                  <input
                    type="text"
                    name="currentOrganisation"
                    placeholder="Current Organisation (optional)"
                    value={formData.currentOrganisation}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />

                  {/* Candidate Designation */}
                  <input
                    type="text"
                    name="candidateDesignation"
                    placeholder="Candidate Designation"
                    value={formData.candidateDesignation}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />

                  {/* Industry */}
                  <input
                    type="text"
                    name="industry"
                    placeholder="Industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />

                  {/* Submit Button */}
                  <button type="submit" className={styles.ic_btn}>
                    SUBMIT
                  </button>
                </form>
              </CardAnimation>
            </div>

            {/* Image Section */}
            <div className={styles.imageSection}>
              <CardAnimation index={0} direction="right">
                <div className={styles.imageContainer}>
                  <div className={styles.purpleGradient}></div>
                  <Image
                    src={img}
                    alt="Professional Woman with Glasses"
                    className={styles.professionalImage}
                    width={650}
                    height={650}
                  />
                </div>
              </CardAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestCandidate;
