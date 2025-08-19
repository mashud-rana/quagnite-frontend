// "use client";

// import React, { useRef, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaPlay, FaPause } from "react-icons/fa";
import styles from "./heading.module.css";
import img from "@/assets/images/all/instractor.png";
import img2 from "@/assets/images/all/poster.png";
import Image from "next/image";

const BootcampHeading = () => {
  // const videoRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const handleResume = () => {
  //   if (videoRef.current) {
  //     if (videoRef.current.paused) {
  //       videoRef.current.play();
  //       setIsPlaying(true);
  //     } else {
  //       videoRef.current.pause();
  //       setIsPlaying(false);
  //     }
  //   }
  // };

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
            <video
              // ref={videoRef}
              className={styles.ic_video_thumbnail}
              controls
              poster={img2.src}
            >
              <source src="/videos/coding.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* <button className={styles.ic_resume_button} onClick={handleResume}>
              {isPlaying ? "PAUSE COURSE" : "RESUME COURSE"}
              {isPlaying ? (
                <FaPause className={styles.ic_resume_icon} />
              ) : (
                <FaPlay className={styles.ic_resume_icon} />
              )}
            </button> */}
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
                <div className={styles.ic_text_content}>
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
                  <div>
                    <span>Level: Beginner</span>
                  </div>
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
