"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./certificateCard.module.css";

const CertificateCard = ({
  certificateImage,
  title,
  description,
  location,
  experience,
  availability,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left - Certificate Image */}
      <div className={styles.certificateImageContainer}>
        <Image
          src={certificateImage || "/placeholder.svg"}
          alt="Certificate"
          width={350}
          height={250}
          className={styles.certificateImage}
        />
      </div>

      {/* Right - Content */}
      <div
        className={`${styles.contentRight} ${
          isHovered ? styles.hoverBackground : ""
        }`}
      >
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.details}>
          <p>
            <span className={styles.detailLabel}>Location:</span> {location}
          </p>
          <p>
            <span className={styles.detailLabel}>Experience required:</span>{" "}
            {experience}
          </p>
          <p>
            <span className={styles.detailLabel}>Availability:</span>{" "}
            {availability}
          </p>
        </div>
        <button
          className={`${styles.exploreButton} ${
            isHovered ? styles.hoverButton : ""
          }`}
        >
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default CertificateCard;
