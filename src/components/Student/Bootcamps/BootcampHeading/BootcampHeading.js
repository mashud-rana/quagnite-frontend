"use client";

import React,{useState,useEffect} from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaPlay, FaPause } from "react-icons/fa";
import styles from "./heading.module.css";
import img from "@/assets/images/all/instractor.png";
import img2 from "@/assets/images/all/poster.png";
import Image from "next/image";
import logo from "@/assets/images/auth/logo.png";

const BootcampHeading = ({courseDetails, activeLectureDetails}) => {

  const [course, setCourse] = useState(null);
  const [activeLecture, setActiveLecture] = useState(null);

  // console.log('BootcampHeading', course, activeLecture);

  useEffect(()=>{
    setCourse(courseDetails);
    setActiveLecture(activeLectureDetails);
  },[courseDetails, activeLectureDetails])
  return (
    <div>
      <div className={styles.ic_course_info}>
        <h1 className="ic_text_36">{course?.title}</h1>
        <div className={styles.ic_instructor_info}>
          <span className={styles.ic_instructor_name}>{course?.teacher?.full_name}</span>
          <span className={styles.ic_instructor_role}>{course?.teacher?.teacher_details?.professional_title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.ic_main_content}>
        {/* Video Section */}
        <div className={styles.ic_video_section}>
          <div className={styles.ic_video_container}>
            {/* {
              activeLecture == "null" ? (
                course && (
                  <Image
                    src={logo}
                    alt={course?.title || "Course image"}
                    fill
                    className={styles.ic_video_thumbnail}
                  />
                )
              ) : (
                <video
                  className={styles.ic_video_thumbnail}
                  controls
                  poster={img2.src}
                >
                  <source src="/videos/coding.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )
            } */}

            {
              activeLecture ? (
                  <video
                  className={styles.ic_video_thumbnail}
                  controls
                  poster={img2.src}
                >
                  <source src="/videos/coding.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                course&& <Image
                    src={course?.image_url || logo}
                    alt={course?.title || "Course image"}
                    width={800}
                    height={450}
                    className={styles.ic_video_thumbnail}
                  />
              )
            }
            
          

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
                src={course?.teacher?.avatar_url || img}
                alt={course?.teacher?.full_name || "Instructor"}
                width={80}
                height={80}
                className={styles.ic_instructor_avatar}
              />
              <div className={styles.ic_instructor_details}>
                <h6 className={styles.ic_instructor_name_main}>
                  {course?.teacher?.full_name}
                </h6>
                <div className={styles.ic_text_content}>
                  <p className={styles.ic_instructor_title}>
                      {course?.teacher?.teacher_details?.professional_title}
                  </p>
                  <div className={styles.ic_instructor_meta}>
                    <div className={styles.ic_meta_item}>
                      <FaMapMarkerAlt className={styles.ic_meta_icon} />
                      <span>{course?.teacher?.teacher_details?.address}</span>
                    </div>
                    <div className={styles.ic_meta_item}>
                      <FaCalendarAlt className={styles.ic_meta_icon} />
                      <span>{course?.teacher?.since_from}</span>
                    </div>
                  </div>
                  <div>
                    <span>Level: {course?.teacher?.teacher_details?.teacher_category?.name}</span>
                      
                      {/* Beginner</span> */}
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
