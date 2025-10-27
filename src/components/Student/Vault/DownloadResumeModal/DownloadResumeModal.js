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
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, InstagramShareButton, XIcon, FacebookIcon, LinkedinIcon} from "react-share";

const DownloadResumeModal = ({ open, onCancel, fileUrl, isError, certificateNumber, onDownload, downloadIsLoading, certificateUuid }) => {

  // const shareUrl = `${process.env.NEXT_PUBLIC_APP_URL}/certificate/${certificateUuid}`;
  const shareUrl = `https://itclanbd.com`;
  const title = `Certificate Number: ${certificateNumber}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    toastSuccess("Link copied to clipboard!");
 
  };

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
          title={title}
        ></iframe>
      </div>

      <h6 className={styles.sectionTitle}>Share on social Media</h6>

      {/* Social Media Icons */}
      <div className={styles.socialIcons}>
        
        
           <FacebookShareButton
            url={shareUrl}
             className={styles.icon}
          >
             <FacebookIcon size={32} round/>
          </FacebookShareButton>
            <TwitterShareButton
            url={shareUrl}
             title={title}
            className={styles.icon}
          >
            <XIcon size={32} round />
          </TwitterShareButton>
           <LinkedinShareButton
            url={shareUrl}
            className={styles.icon}
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        
      </div>

      <hr className={styles.ic_hr} />

      <div className={styles.ic_copy_container}>
        <p className={styles.ic_copy_link}>
          {/* https://loremipsumdolorsitametconsecteturadipiscingelit */}
          {
            shareUrl
          }
        </p>
        <button className="ic_common_primary_btn" onClick={handleCopy}>copy link</button>
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
