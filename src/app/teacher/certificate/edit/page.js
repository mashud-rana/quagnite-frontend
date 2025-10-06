"use client";
import { useState } from "react";
import styles from "./edit.module.css";
import CertificatePreview from "@/components/Teacher/Certificate/CertificatePreview";

export default function CertificateEditor() {
  const [certificateData, setCertificateData] = useState({
    certificateName: "Name",
    changeTitle: "Change Title",
    positionX: 200,
    positionY: 200,
    fontSize: 30,
    fontColor: "#000000",
    nameChange: "Certificate Name Change",
    bodyText: "Certificate Body Text",
    founderText: "Certificate Founder Text Change",
    dateChange: "Certificate Date Change",
    signatureChange: "Certificate Signature Change",
    recipientName: "Oliver Williams",
    bodyContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat lobortis nisl ut aliquip consequat.",
    date: "DATE",
    signature: "SIGNATURE",
  });

  const handleInputChange = (field, value) => {
    setCertificateData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <div className={styles.header}>
          <button className={styles.backButton}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className={styles.title}>Change Certificate Details</h1>
        </div>

        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              {/* Certificate Name {certificateData.certificateName} */}
            </label>
            <select
              className={styles.select}
              value={certificateData.changeTitle}
              onChange={(e) => handleInputChange("changeTitle", e.target.value)}
            >
              <option>Change Title</option>
              <option>Certificate of Achievement</option>
              <option>Certificate of Completion</option>
              <option>Certificate of Excellence</option>
            </select>
          </div>

          <div className={styles.rowGroup}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Position X</label>
              <input
                type="number"
                className={styles.input}
                value={certificateData.positionX}
                onChange={(e) =>
                  handleInputChange(
                    "positionX",
                    Number.parseInt(e.target.value)
                  )
                }
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Position Y</label>
              <input
                type="number"
                className={styles.input}
                value={certificateData.positionY}
                onChange={(e) =>
                  handleInputChange(
                    "positionY",
                    Number.parseInt(e.target.value)
                  )
                }
              />
            </div>
          </div>

          <div className={styles.rowGroup}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Font Size</label>
              <input
                type="number"
                className={styles.input}
                value={certificateData.fontSize}
                onChange={(e) =>
                  handleInputChange("fontSize", Number.parseInt(e.target.value))
                }
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Font Color</label>
              <input
                type="text"
                className={styles.input}
                value={certificateData.fontColor}
                onChange={(e) => handleInputChange("fontColor", e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <select
              className={styles.select}
              value={certificateData.nameChange}
              onChange={(e) => handleInputChange("nameChange", e.target.value)}
            >
              <option>Certificate Name Change</option>
              <option>John Doe</option>
              <option>Jane Smith</option>
              <option>Oliver Williams</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <select
              className={styles.select}
              value={certificateData.bodyText}
              onChange={(e) => handleInputChange("bodyText", e.target.value)}
            >
              <option>Certificate Body Text</option>
              <option>Standard Text</option>
              <option>Custom Text</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <select
              className={styles.select}
              value={certificateData.founderText}
              onChange={(e) => handleInputChange("founderText", e.target.value)}
            >
              <option>Certificate Founder Text Change</option>
              <option>Founder Name 1</option>
              <option>Founder Name 2</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <select
              className={styles.select}
              value={certificateData.dateChange}
              onChange={(e) => handleInputChange("dateChange", e.target.value)}
            >
              <option>Certificate Date Change</option>
              <option>Todays Date</option>
              <option>Custom Date</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <select
              className={styles.select}
              value={certificateData.signatureChange}
              onChange={(e) =>
                handleInputChange("signatureChange", e.target.value)
              }
            >
              <option>Certificate Signature Change</option>
              <option>Signature 1</option>
              <option>Signature 2</option>
            </select>
          </div>

          <button className={styles.updateButton}>UPDATE CERTIFICATE</button>
        </div>
      </div>

      <div className={styles.previewSection}>
        <CertificatePreview data={certificateData} />
      </div>
    </div>
  );
}
