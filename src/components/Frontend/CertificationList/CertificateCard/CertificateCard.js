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
    <div className={`${styles.card}`}>
      {/* Left - Certificate Image */}
      <div className={styles.certificate_image_container}>
        <Image
          src={certificateImage}
          alt="Certificate"
          width={350}
          height={250}
          className={styles.ic_certificate_image}
        />
      </div>

      {/* Right - Content */}
      <div className={styles.ic_center}>
        <div className={`${styles.ic_content_right} `}>
          <h5 className={styles.title}>{title}</h5>
          <p className={styles.description}>{description}</p>
          <div className={styles.details}>
            <p>
              <span>Location:</span> {location}
            </p>
            <p>
              <span>Experience required:</span> {experience}
            </p>
            <p>
              <span>Availability:</span> {availability}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.ic_btn_container}>
        <button className={styles.ic_btn}>explore</button>
      </div>
    </div>
  );
};

export default CertificateCard;
