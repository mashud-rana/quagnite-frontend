"use client";

import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaCircle, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./BootcampOverview.module.css";
import { FaCircleCheck } from "react-icons/fa6";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";

export default function BootcampOverview({bootcampData}) {
  const [bootcamp, setBootcamp] = useState(null);
 

  useEffect(()=>{
    if(bootcampData){
      setBootcamp(bootcampData)
    }
  },[bootcampData])

 

  return (
    <div className={styles.overviewContainer}>
      <div className={styles.ic_flex}>
        <h3 className={styles.sectionTitle}>Description :</h3>
        <div 
          className={styles.descriptionContent}
          dangerouslySetInnerHTML={{ __html: bootcamp?.description }}
        />
      </div>

      <div className={styles.ic_flex}>
        <h3 className={styles.sectionTitle}>What you&#39;ll learn</h3>
        <div className={styles.learningList}>
          {bootcamp &&
            bootcamp?.tags.length > 0 &&
            bootcamp?.tags.map((item, index) => (
              <div key={index} className={styles.learningItem}>
                <FaCircleCheck className={styles.bulletPoint} />
                <span className={styles.learningText}>{item?.tag_name}</span>
              </div>
            ))}
        </div>
      </div>

      <div className={styles.ic_flex}>
        <h3 className={styles.sectionTitle}>Who this course is for</h3>
        <div className={styles.learningList}>
          {/* {course &&
            course.course_tags.length > 0 &&
            course.course_tags.map((item, index) => (
              <div key={index} className={styles.learningItem}>
                <FaCircleCheck className={styles.bulletPoint} />
                <span className={styles.learningText}>{item?.name}</span>
              </div>
            ))} */}
            <div className={styles.learningItem}>
                <FaCircleCheck className={styles.bulletPoint} />
                <span className={styles.learningText}>{bootcamp?.category?.name}</span>
              </div>
        </div>
      </div>

      {/* Instructor Section */}
      <div className={styles.ic_flex}>
        <h3 className={styles.sectionTitle}>Instructor</h3>
        <div className={styles.instructorContent}>
          <Image
            src={bootcamp && bootcamp?.teacher?.avatar_url}
            alt="Instructor"
            width={100}
            height={100}
            className={styles.instructorImage}
          />
          <div className={styles.instructorInfo}>
            <h4 className={styles.instructorName}>{bootcamp?.teacher?.full_name}</h4>
            <p className={styles.ic_instractor_title}>
             
              {bootcamp?.teacher?.teacher_details?.professional_title}
            </p>
            <div className={styles.instructorMeta}>
              <div className={styles.metaItem}>
                <FaMapMarkerAlt className={styles.metaIcon} />
                <span>       {bootcamp?.teacher?.teacher_details?.address}</span>
              </div>
              <div className={styles.metaItem}>
                <FaCalendarAlt className={styles.metaIcon} />
                <span>{bootcamp?.teacher?.since_from}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
