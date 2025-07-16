"use client";
import React, { useState } from "react";
import styles from "./documentation.module.css";
import { Col, Row } from "antd";
import Image from "next/image";
import img1 from "@/assets/images/apply-jobs/form-right.png";
import { FaArrowUpLong, FaCheck, FaPlus } from "react-icons/fa6";
import { toast, Bounce } from "react-toastify";

const initialFields = [
  { name: "Cover Letter", placeholder: "Cover Letter" },
  { name: "Resume", placeholder: "Resume" },
  { name: "Legal Declaration", placeholder: "Legal Declaration" },
  { name: "Certificate 1", placeholder: "Certificate 1" },
];

export default function Documentation({ setActiveStep }) {
  const [fields, setFields] = useState(initialFields);
  const [uploaded, setUploaded] = useState({});
  const [errors, setErrors] = useState({});

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setUploaded((prev) => ({ ...prev, [fieldName]: file }));
      setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    }
  };

  const handleAddMore = () => {
    const newField = {
      name: `Document ${fields.length + 1}`,
      placeholder: `Additional Document ${fields.length + 1}`,
    };
    setFields([...fields, newField]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    fields.forEach((field) => {
      if (!uploaded[field.name]) {
        newErrors[field.name] = "This document is required";
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("Documents submitted successfully!", {
        position: "top-right",
        autoClose: 2000,
        transition: Bounce,
      });

      setTimeout(() => {
        if (typeof setActiveStep === "function") {
          setActiveStep(3);
        }
      }, 2000);
    }
  };

  return (
    <div className={styles.ic_document}>
      <h3 className="ic_section_heading">Documentations</h3>
      <Row gutter={24}>
        <Col xs={24} md={14}>
          <div className={styles.ic_apply_for_job_left}>
            <div className={styles.ic_form_main}>
              <form onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                  <div key={field.name + index} className="mb-24">
                    <div className={styles.ic_custom_file_wrapper}>
                      <label className={styles.ic_custom_file_input}>
                        <span className={styles.ic_placeholder_text}>
                          {field.placeholder}
                        </span>
                        {uploaded[field.name] ? (
                          <FaCheck className={styles.ic_check_icon} />
                        ) : (
                          <FaArrowUpLong className={styles.ic_upload_icon} />
                        )}
                        <input
                          type="file"
                          name={field.name}
                          className={styles.ic_real_file_input}
                          onChange={(e) => handleFileChange(e, field.name)}
                        />
                      </label>
                    </div>
                    {errors[field.name] && (
                      <p className={styles.error}>{errors[field.name]}</p>
                    )}
                  </div>
                ))}

                <div
                  className={`${styles.ic_custom_file_wrapper} mb-18`}
                  onClick={handleAddMore}
                >
                  <label htmlFor="" className={`${styles.ic_title} mb-18`}>
                    Add title
                  </label>
                  <div className={styles.ic_custom_file_input}>
                    <span className={styles.ic_placeholder_text}>
                      Certificate {fields.length + 1}
                    </span>
                    <FaPlus className={styles.ic_upload_icon} />
                  </div>
                </div>

                <button type="submit" className={styles.ic_submit_btn}>
                  Next
                </button>
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
  );
}
