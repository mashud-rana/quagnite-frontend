"use client";

import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from "./BootcampContent.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { MdVideocam } from "react-icons/md";
import { FaRegCircleCheck, FaRegCircleRight } from "react-icons/fa6";
import { set } from 'nprogress';
import Card from "@/components/Share/Card/Card";


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
