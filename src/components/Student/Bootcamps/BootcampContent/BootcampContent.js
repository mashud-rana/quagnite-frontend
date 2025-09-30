"use client";

import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from "./BootcampContent.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { MdVideocam } from "react-icons/md";
import { FaRegCircleCheck, FaRegCircleRight } from "react-icons/fa6";
import { set } from 'nprogress';
import Card from "@/components/Share/Card/Card";

const courseModules = [
  {
    id: "1",
    title: "Orientation",
    duration: "3:36",
    videos: [
      { id: "1.1", title: "Welcome to the Course", duration: "2:15" },
      { id: "1.2", title: "Course Overview", duration: "1:21" },
    ],
  },
  {
    id: "2",
    title: "Getting Started",
    duration: "5:42",
    videos: [
      { id: "2.1", title: "Setup Your Environment", duration: "3:18" },
      { id: "2.2", title: "First Steps", duration: "2:24" },
    ],
  },
  {
    id: "3",
    title: "Core Concepts",
    duration: "8:15",
    videos: [
      { id: "3.1", title: "Understanding Basics", duration: "4:32" },
      { id: "3.2", title: "Advanced Techniques", duration: "3:43" },
    ],
  },
  {
    id: "4",
    title: "Practical Examples",
    duration: "12:30",
    videos: [
      { id: "4.1", title: "Example 1", duration: "6:15" },
      { id: "4.2", title: "Example 2", duration: "6:15" },
    ],
  },
  {
    id: "5",
    title: "Final Project",
    duration: "15:20",
    videos: [
      { id: "5.1", title: "Project Setup", duration: "7:45" },
      { id: "5.2", title: "Implementation", duration: "7:35" },
    ],
  },
];

const BootcampContent = ({bootcampData}) => {
  const [expandedModules, setExpandedModules] = useState(new Set());
  const [bootcamp, setBootcamp] = useState( {});
  const [lessons, setLessons] = useState([]);

  const toggleModule = (moduleId) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  //set bootcamp data from props
  useEffect(()=>{
    if(bootcampData){
      setBootcamp({...bootcampData});
    }
    if(bootcampData?.lessons){
      setLessons([...bootcampData.lessons]);
    }
  },[bootcampData])

  console.log('2. bootcamp content', lessons)

  return (
    <div className={styles.ic_content_section}>
      <div className={styles.ic_modules_list}>
        {lessons.length > 0 && lessons.map((module) => (
          <div key={module.id} className={styles.ic_module_item}>
            {/* Module Header - Clickable */}
            <div
              className={styles.ic_module_header}
              onClick={() => toggleModule(module.id)}
            >
              <div className={styles.ic_module_content}>
                <button className={`${styles.ic_play_button} ic_white`}>
                  <MdVideocam className={styles.ic_play_icon} />
                </button>
                <span className={styles.ic_module_title}>{module.title}</span>
              </div>
              <div className={styles.ic_module_right}>
                <span className={styles.ic_module_duration}>
                  ({module?.lessons_total_duration})
                </span>
                <div
                  className={`${styles.ic_arrow_icon} ${
                    expandedModules.has(module.id)
                      ? styles.ic_arrow_rotated
                      : ""
                  }`}
                >
                  <IoIosArrowDown />
                </div>
              </div>
            </div>

            {/* Videos List - Expandable */}
            {
              module.lectures.length > 0 && module.lectures.map((lecture)=>(
               
                  <div
                    className={`${styles.ic_videos_container} ${
                      expandedModules.has(module.id) ? styles.ic_videos_expanded : ""
                    }`}
                    key={`${module.id}-${lecture.id}-${lecture.uuid}`}
                  >
                     <Card >
                      <div className={`${styles.ic_flex} mb-12`}>
                        <MdVideocam
                          className={`${styles.ic_play_icon} ic_color_primary`}
                        />
                        <span className={styles.ic_video_title}>
                          {lecture?.title}
                        </span>
                      </div>

                      <div className={`${styles.ic_flex} mb-12 ic_color_primary`}>
                        {/* Date */}
                        <div className="text-sm ">{lecture?.formatted_start_date}</div>
                        <hr className={styles.ic_hr} />

                        {/* Time */}
                        <div className="text-sm ">{lecture?.formatted_start_time}</div>
                        <hr className={styles.ic_hr} />

                        {/* Left for */}
                        <div className="text-sm">Left for {lecture?.lesson_duration_formatted}</div>
                      </div>

                      <p dangerouslySetInnerHTML={{ __html: lecture?.description }}>
                      </p>

                      <ul className={styles.ic_video_points}>
                        <li className={styles.ic_flex}>
                          <FaRegCircleCheck className={styles.ic_point_icon} />
                          Live, interactive class
                        </li>
                        <li className={styles.ic_flex}>
                          <FaRegCircleCheck className={styles.ic_point_icon} />
                          Experienced instructor teaching over Zoom
                        </li>
                      </ul>
                      <button
                        href='#'
                        className={styles.ic_btn}
                        type="button"
                      >
                        Join Live Class
                      </button>

                 
                  </Card>
                  </div>
              ))
            }
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootcampContent;
