"use client";

import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import {
  FaPlay,
  FaEye,
  FaTrash,
  FaEdit,
  FaUpload,
  FaRegEdit,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import styles from "./upload.module.css";
import ProgressStepper from "@/components/Teacher/Courses/ProgressStepper/ProgressStepper";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { GoVideo } from "react-icons/go";
import { MdDeleteOutline, MdOutlineAccessTime } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";

const UploadCoursePage = () => {
  const router = useRouter();
  const [lessons] = useState([
    {
      id: 1,
      title: "JavaScript Fundamentals — Part 1",
      videoLecture: "Video Lecture (HD)",
      duration: "Duration (0)",
      thumbnail: "/javascript-code-editor-dark-theme.jpg",
    },
    {
      id: 2,
      title: "JavaScript Fundamentals — Part 2",
      videoLecture: "Video Lecture (HD)",
      duration: "Duration (0)",
      thumbnail: "/javascript-code-editor-dark-theme.jpg",
    },
  ]);

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div>
      <ProgressStepper currentStep={2} />

      {/* Header */}
      <div className="mb-24 ic_flex">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Upload Course Video</h1>
        </div>
      </div>

      <div className={styles.formContainer}>
        {/* Video Lessons Grid */}
        <div className={styles.lessonsGrid}>
          {lessons.map((lesson) => (
            <div key={lesson.id} className={styles.lessonCard}>
              <div className={styles.ic_title_icon_container}>
                <div>
                  <h3 className={styles.lessonTitle}>{lesson.title}</h3>

                  <div className={styles.lessonInfo}>
                    <div className={styles.infoItem}>
                      <GoVideo size={20} className="ic_color_primary" />
                      <span>{lesson.videoLecture}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <MdOutlineAccessTime
                        size={20}
                        className="ic_color_primary"
                      />
                      <span>{lesson.duration}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.ic_flex}>
                  <button href="#" className="ic_back_button">
                    <MdDeleteOutline size={18} />
                  </button>
                  <Link href="#" className="ic_back_button">
                    <BiSolidEdit />
                  </Link>
                </div>
              </div>

              <div className={styles.actionButtons}>
                <button className={styles.actionBtn}>
                  <span>CREATE EXAM</span>
                </button>
                <button className={styles.actionBtn}>
                  <FaEdit size={14} />
                  <span>EDIT LESSON</span>
                </button>
                <button className={styles.actionBtn}>
                  <FaTrash size={14} />
                  <span>DELETE LESSON</span>
                </button>
              </div>

              <div className={styles.lessonThumbnail}>
                <img
                  src={lesson.thumbnail || "/placeholder.svg"}
                  alt={lesson.title}
                  className={styles.thumbnailImage}
                />
                <div className={styles.playOverlay}>
                  <FaPlay size={24} />
                </div>
              </div>

              <div className={styles.lessonFooterButtons}>
                <button className={styles.actionBtn}>
                  <FaUpload size={14} />
                  <span>UPLOAD</span>
                </button>
                <button className={styles.actionBtn}>
                  <FaEye size={14} />
                  <span>PREVIEW</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className={styles.bottomNavigation}>
          <button className={styles.saveButton}>SAVE & CONTINUE</button>
          <button className={styles.addSectionButton}>ADD NEW SECTION</button>
        </div>
      </div>
    </div>
  );
};

export default UploadCoursePage;
