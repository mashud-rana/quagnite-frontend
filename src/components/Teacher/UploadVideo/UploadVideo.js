import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaEdit, FaEye, FaUpload } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineAccessTime } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { BiSolidEdit } from "react-icons/bi";
import { PiQuestionBold } from "react-icons/pi";
import styles from "./upload.module.css";
import img from "@/assets/images/all/code.png";

const UploadVideo = ({ lesson }) => {
  return (
    <div className={styles.lessonCard}>
      <div>
        <div className={styles.ic_title_icon_container}>
          <h6 className={styles.lessonTitle}>{lesson.title}</h6>

          <div className={styles.ic_flex}>
            <button href="#" className="ic_back_button">
              <MdDeleteOutline size={18} />
            </button>
            <Link href="#" className="ic_back_button">
              <BiSolidEdit />
            </Link>
          </div>
        </div>

        <div className={styles.lessonInfo}>
          <div className={styles.infoItem}>
            <GoVideo size={20} className="ic_color_primary" />
            <span>{lesson.videoLecture}</span>
          </div>
          <div className={styles.infoItem}>
            <MdOutlineAccessTime size={20} className="ic_color_primary" />
            <span>{lesson.duration}</span>
          </div>
        </div>
      </div>
      <div className={styles.actionButtons}>
        <button className={styles.ic_icn_btn}>
          <PiQuestionBold size={20} />
          CREATE EXAM
        </button>
        <button className={styles.ic_icn_btn}>
          <FaEdit size={18} />
          EDIT LESSON
        </button>
        <button className={styles.ic_icn_btn}>
          <MdDeleteOutline size={20} />
          DELETE LESSON
        </button>
      </div>

      {/* <div className={styles.lessonThumbnail}>
                  <Image
                    src={img}
                    alt={lesson.title}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playOverlay}>
                    <FaPlay size={24} />
                  </div>
                </div> */}

      <div className={styles.lessonThumbnail}>
        <video
          className={styles.thumbnailImage}
          controls
          poster={img.src} // thumbnail image দেখাবে
        >
          <source src="/videos/coding.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* <div className={styles.playOverlay}>
                    <FaPlay size={24} />
                  </div> */}
      </div>

      <div className={styles.lessonFooterButtons}>
        <button className={styles.ic_icn_btn}>
          <FaUpload size={14} />
          UPLOAD
        </button>
        <button className={styles.ic_icn_btn}>
          <FaEye size={14} />
          PREVIEW
        </button>
      </div>
    </div>
  );
};

export default UploadVideo;
