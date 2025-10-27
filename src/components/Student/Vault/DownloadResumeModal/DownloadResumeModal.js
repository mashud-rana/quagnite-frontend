"use client";

import React from "react";
import { Modal } from "antd";
import styles from "./modal.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

import img from "@/assets/images/all/certificate.png";
import Image from "next/image";
import Link from "next/link";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";

const DownloadResumeModal = ({ open, onCancel, fileUrl, isError, certificateNumber, onDownload, downloadIsLoading }) => {
  if (open && (isError || !fileUrl)) return <p>Failed to load certificate.</p>;
  return (
    <Modal
      title={
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>Your certificate</span>
          <button onClick={onDownload} className={`ic_common_primary_btn ${styles.ic_btn}`}>
            Download {downloadIsLoading && <Spin indicator={antIcon} />}
          </button>
        </div>
      }
      open={open}
      onCancel={onCancel}
      footer={null} // 🔹 Remove default buttons
      style={{ maxWidth: "90vw" }}
      width={928}
    >
      <hr className={styles.ic_hr} />

      <div className={styles.ic_img_container}>
        {/* <Image src={img} alt="" className={styles.ic_img} width={400} /> */}
         <iframe
          src={fileUrl}
          width="100%"
          height="600px"
          style={{ border: "none" }}
          title={`Certificate Number: ${certificateNumber}`}
        ></iframe>
      </div>

      <h6 className={styles.sectionTitle}>Share on social Media</h6>

      {/* Social Media Icons */}
      <div className={styles.socialIcons}>
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaInstagram />
        </Link>
      </div>

      <hr className={styles.ic_hr} />

      <div className={styles.ic_copy_container}>
        <p className={styles.ic_copy_link}>
          https://loremipsumdolorsitametconsecteturadipiscingelit
        </p>
        <button className="ic_common_primary_btn">copy link</button>
      </div>

      {/* Custom footer with Close button */}
      <div className={styles.modalFooter}>
        <button onClick={onCancel} className="ic_common_primary_btn">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default DownloadResumeModal;
