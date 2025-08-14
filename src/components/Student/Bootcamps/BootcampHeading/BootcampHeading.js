import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaPlay } from "react-icons/fa";
import styles from "./heading.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";

const BootcampHeading = () => {
  return (
    <div>
      <div className={styles.ic_course_info}>
        <h1 className="ic_text_36">Introduction to Product Development</h1>
        <div className={styles.ic_instructor_info}>
          <span className={styles.ic_instructor_name}>John Smith</span>
          <span className={styles.ic_instructor_role}>Sr. Web Designer</span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.ic_main_content}>
        {/* Video Section */}
        <div className={styles.ic_video_section}>
          <div className={styles.ic_video_container}>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Course video thumbnail"
              className={styles.ic_video_thumbnail}
            />
            <button className={styles.ic_resume_button}>
              <FaPlay className={styles.ic_resume_icon} />
              RESUME COURSE
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className={styles.ic_sidebar}>
          <div className={styles.ic_instructor_card}>
            <h6 className={styles.ic_sidebar_title}>Instructor</h6>
            <hr className={styles.ic_hr} />
            <div className={styles.ic_instructor_profile}>
              <Image
                src={img}
                alt="Leslie Alexander"
                className={styles.ic_instructor_avatar}
              />
              <div className={styles.ic_instructor_details}>
                <h6 className={styles.ic_instructor_name_main}>
                  Leslie Alexander
                </h6>
                <p className={styles.ic_instructor_title}>
                  Web Developer | Founder, Hex hybrids
                </p>
                <div className={styles.ic_instructor_meta}>
                  <div className={styles.ic_meta_item}>
                    <FaMapMarkerAlt className={styles.ic_meta_icon} />
                    <span>London, UK</span>
                  </div>
                  <div className={styles.ic_meta_item}>
                    <FaCalendarAlt className={styles.ic_meta_icon} />
                    <span>Since April 1, 2022</span>
                  </div>
                </div>
                <div className={styles.ic_level_badge}>
                  <span>Level: Beginner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootcampHeading;
