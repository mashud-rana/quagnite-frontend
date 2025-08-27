"use client";
import { FaArrowLeft, FaShare, FaUpload } from "react-icons/fa";
import styles from "./resume.module.css";
import img from "@/assets/images/all/resume2.png";
import Image from "next/image";
import Link from "next/link";
import ResumeModal from "./ResumeModal";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const resumes = [
  {
    id: "1",
    title: "Amilia fox resume 2024",
    createdDate: "2024-01-15",
  },
  {
    id: "2",
    title: "Amilia fox resume 2024",
    createdDate: "2024-01-14",
  },
  {
    id: "3",
    title: "Amilia fox resume 2024",
    createdDate: "2024-01-13",
  },
  {
    id: "4",
    title: "Amilia fox resume 2024",
    createdDate: "2024-01-12",
  },
];

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Link href="#" className={styles.ic_back_button} aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">My Resume</h1>
        </div>
        <button className={styles.ic_btn}>upload resume</button>
      </div>

      {/* Resumes Grid */}
      <div className={styles.resumesGrid}>
        {resumes.map((resume) => (
          <div key={resume.id} className={styles.resumeCard}>
            {/* Card Header */}
            <div className={styles.cardHeader}>
              <h3 className={styles.resumeTitle}>{resume.title}</h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className={styles.shareButton}
                title="Share Resume"
              >
                <FaShare className={styles.shareIcon} />
              </button>
            </div>

            {/* Resume Preview */}
            <div className={styles.resumePreview}>
              <Image
                src={img}
                alt={resume.title}
                className={styles.previewImage}
              />
            </div>

            <hr className={styles.ic_hr} />

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <button className={`${styles.ic_btn}`}>DOWNLOAD</button>
              {/* <button className={`${styles.ic_btn}`}>VIEW</button> */}
              <PhotoProvider maskOpacity={0.7}>
                <PhotoView src={img.src}>
                  <button className={`${styles.ic_btn}`}>VIEW</button>
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>
        ))}
      </div>

      <ResumeModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Resume;
