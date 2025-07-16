"use client";
import React, { useState } from "react";
import styles from "./documentation.module.css";
import { Col, Row } from "antd";
import Image from "next/image";
import img1 from "@/assets/images/apply-jobs/form-right.png";
import { FaArrowUpLong, FaCheck } from "react-icons/fa6";

const fileFields = [
  { name: "Cover Letter", placeholder: "Cover Letter" },
  { name: "Resume", placeholder: "Resume" },
  { name: "Legal Declaration", placeholder: "Legal Declaration" },
  { name: "Certificate 1", placeholder: "Certificate 1" },
];

export default function Documentation() {
  const [uploaded, setUploaded] = useState({});

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setUploaded((prev) => ({ ...prev, [fieldName]: true }));
    }
  };

  return (
    <div className={styles.ic_document}>
      <h3 className="ic_section_heading">Documentations</h3>
      <Row gutter={24}>
        <Col xs={24} md={14}>
          <div className={styles.ic_apply_for_job_left}>
            <div className={styles.ic_form_main}>
              <form>
                {fileFields.map((field) => (
                  <div
                    key={field.name}
                    className={`${styles.ic_custom_file_wrapper} mb-18`}
                  >
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
                ))}

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
