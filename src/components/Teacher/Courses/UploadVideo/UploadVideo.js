import React, { useState } from "react";
import CourseUploadModal from "../CourseUploadModal/CourseUploadModal";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./uploadvideo.module.css";

const UploadVideo = ({ setCurrentStep }) => {
  const lessons = [
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
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="mb-24 ic_flex">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Upload Course Video</h1>
        </div>
      </div>

      <div className="mb-24">
        <div className={styles.lessonsGrid}>
          {lessons.map((lesson) => (
            <UploadVideo
              setIsModalOpen={setIsModalOpen}
              lesson={lesson}
              key={lesson.id}
            />
          ))}
        </div>
      </div>

      <div className="ic_flex">
        <button className="ic_btn">SAVE & CONTINUE</button>
        <button className="ic_btn">ADD NEW SECTION</button>
      </div>

      <CourseUploadModal
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      />
    </div>
  );
};

export default UploadVideo;
