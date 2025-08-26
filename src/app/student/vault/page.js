"use client";

import { useState } from "react";
import { FaDownload, FaEye, FaPlus } from "react-icons/fa";
import styles from "./vault.module.css";
import certificate from "@/assets/images/all/certificate.png";
import resume from "@/assets/images/all/resume.png";
import Image from "next/image";
import bg from "@/assets/images/all/community-bg.png"; // example bg

const mockCertificates = [
  {
    id: "1",
    title: "App Development",
    date: "1st feb,2023",
    certificateNo: "3123466",
    thumbnail: "/formal-certificate.png",
  },
];

const mockResumes = [
  {
    id: "1",
    title: "Myresume123",
    date: "1st feb,2023",
    fileType: "PDF",
    thumbnail: "/modern-resume-template.png",
  },
];

const VaultPage = () => {
  const [certificates] = useState(mockCertificates);
  const [resumes] = useState(mockResumes);

  return (
    <div className={styles.vaultContainer}>
      {/* Page Header */}
      <h1 className="ic_text_36 ic_white fw_400">Vault</h1>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Certificates Card */}
        <div className={styles.vaultCard}>
          <div
            className={styles.cardGradient}
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <h2 className="ic_text_36 ic_white fw_400">Certificates</h2>

            <div className={styles.cardBottom}>
              <h3 className="ic_text_36 ic_white fw_400">Recent Certificate</h3>
              <hr className={styles.ic_hr} />

              <div className={styles.itemDetails}>
                <div className={styles.itemInfo}>
                  <p className={styles.itemTitle}>App Development</p>
                  <div className={styles.itemMeta}>
                    <span className={styles.metaItem}>Date- 1st feb,2023</span>
                    <span className={styles.metaItem}>
                      Certificate no.-3123466
                    </span>
                  </div>
                </div>

                <Image
                  src={certificate}
                  alt="Certificate preview"
                  className={styles.previewImage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Resumes Card */}
        <div className={styles.vaultCard}>
          <div
            className={styles.cardGradient}
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <h2 className="ic_text_36 ic_white fw_400">Resumes</h2>

            <div className={styles.cardBottom}>
              <h3 className="ic_text_36 ic_white fw_400">
                Last Updated Resume
              </h3>
              <hr className={styles.ic_hr} />

              <div className={styles.itemDetails}>
                <div className={styles.itemInfo}>
                  <p className={styles.itemTitle}>Myresume123</p>
                  <div className={styles.itemMeta}>
                    <span className={styles.metaItem}>Date- 1st feb,2023</span>
                    <span className={styles.metaItem}>File type- PDF</span>
                  </div>
                </div>

                <Image
                  src={resume}
                  alt="Resume preview"
                  className={styles.previewImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaultPage;
