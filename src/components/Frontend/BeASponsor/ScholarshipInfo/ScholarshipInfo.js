import { Col, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/assets/images/be-a-sponsor/scholarship-img.png";
import styles from "./scholarshipinfo.module.css";
import { toast, Bounce } from "react-toastify";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

export default function ScholarshipInfo({ setScholarshipActiveStep }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    orgType: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
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
      toast.success("Personal information saved!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      setTimeout(() => {
        if (typeof setScholarshipActiveStep === "function") {
          setScholarshipActiveStep(2);
        }
      }, 1000);
    }
  };

  return (
      <Row gutter={24}>
          
          <Col xs={24} md={14}>
              <CardAnimation index={0} direction="left">
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

                    <div className="mb-18">
                        <input
                        name="orgType"
                        type="text"
                        placeholder="Organisation Type"
                        value={formData.orgType}
                        onChange={handleChange}
                        />
                        {errors.orgType && (
                        <p className={styles.error}>{errors.orgType}</p>
                        )}
                    </div>

                    <div className="mb-18">
                        <input
                        name="email"
                        type="email"
                        placeholder="Mail ID"
                        value={formData.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p className={styles.error}>{errors.email}</p>}
                    </div>

                    <div className="mb-18">
                        <input
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        />
                        {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                    </div>

                    <div className="mb-18">
                        <input
                        name="companyName"
                        type="text"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                        />
                        {errors.companyName && (
                        <p className={styles.error}>{errors.companyName}</p>
                        )}
                    </div>

                    <div className="mb-18">
                        <textarea
                        name="message"
                        placeholder="message"
                        value={formData.message}
                                        onChange={handleChange}
                                        className={styles.ic_apply_for_job_left_textarea}
                        />
                        {errors.message && (
                        <p className={styles.error}>{errors.message}</p>
                        )}
                    </div>

                    <button type="submit">submit</button>
                    </form>
                </div>
                </div>
              </CardAnimation>
          </Col>
          <Col xs={24} md={10}>
              <CardAnimation index={0} direction="right">
                <div className={styles.ic_scholarship_right}>
                <Image src={img1} alt="img" />
                </div>
              </CardAnimation>
          </Col>
    </Row>
  );
}
