"use client";
import React, { useState } from "react";
import styles from "./diversityAndInclusion.module.css";
import { Col, Row } from "antd";
import Image from "next/image";
import { toast, Bounce } from "react-toastify";
import img1 from "@/assets/images/apply-jobs/Diversity-img.png";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

export default function DiversityAndInclusion() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    gender: "",
    race: "",
    ethnicity: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    ["gender", "race", "ethnicity"].forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Submitted:", formData);
      toast.success("Your Application is Complete! Thank you for applying.", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });

      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  };

  return (
    <div className={styles.ic_diversity}>
      <CardAnimation index={0} direction="down">
        <h3 className="ic_section_heading">Diversity & Inclusion</h3>
      </CardAnimation>
      <Row gutter={24}>
        <Col xs={24} md={14}>
          <div className={styles.ic_apply_for_job_left}>
            <div className={styles.ic_form_main}>
              <CardAnimation index={0} direction="left">
                <form onSubmit={handleSubmit}>
                  {[
                    {
                      name: "gender",
                      label: "Gender",
                      options: ["Male", "Female"],
                    },
                    {
                      name: "race",
                      label: "Race",
                      options: ["Asian", "Black", "White", "Mixed", "Other"],
                    },
                    {
                      name: "ethnicity",
                      label: "Ethnicity",
                      options: [
                        "Hispanic",
                        "Non-Hispanic",
                        "Prefer not to say",
                      ],
                    },
                  ].map((field) => (
                    <div key={field.name} className="mb-24">
                      <div className={styles.select_wrapper}>
                        <select
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className={styles.ic_real_file_input}
                        >
                          <option value="">Select {field.label}</option>
                          {field.options.map((opt, i) => (
                            <option key={i} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <IoIosArrowDown className={styles.select_arrow_icon} />
                      </div>
                      {errors[field.name] && (
                        <p className={styles.error}>{errors[field.name]}</p>
                      )}
                    </div>
                  ))}

                  <p className={`${styles.ic_disclaimer_text} mb-24`}>
                    Disclaimer: These questions are voluntary and for
                    statistical purposes only.
                  </p>

                  <div className="mb-24">
                    <label
                      htmlFor="additionalInfo"
                      className={`${styles.ic_title} `}
                    >
                      Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      className={styles.ic_textarea}
                    />
                  </div>

                  <button type="submit" className={styles.ic_submit_btn}>
                    submit
                  </button>
                </form>
              </CardAnimation>
            </div>
          </div>
        </Col>
        <Col xs={24} md={10}>
          <div className={styles.ic_apply_for_job_right}>
            <CardAnimation index={0} direction="right">
              <Image src={img1} alt="img" />
            </CardAnimation>
          </div>
        </Col>
      </Row>
    </div>
  );
}
