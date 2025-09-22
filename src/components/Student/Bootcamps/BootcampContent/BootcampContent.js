"use client";

import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import styles from "./BootcampContent.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { MdVideocam } from "react-icons/md";

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

const BootcampContent = () => {
  const [expandedModules, setExpandedModules] = useState(new Set());

  const toggleModule = (moduleId) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  return (
    <div className={styles.ic_content_section}>
      <div className={styles.ic_modules_list}>
        {courseModules.map((module) => (
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
                  ({module.duration})
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
            <div
              className={`${styles.ic_videos_container} ${
                expandedModules.has(module.id) ? styles.ic_videos_expanded : ""
              }`}
            >
              {module.videos.map((video) => (
                <div key={video.id} className={styles.ic_video_item}>
                  <div className={styles.ic_video_content}>
                    <button className={styles.ic_play_button}>
                      <MdVideocam
                        className={`${styles.ic_play_icon} ic_color_primary`}
                      />
                    </button>
                    <span className={styles.ic_video_title}>{video.title}</span>
                  </div>
                  <span className={styles.ic_video_duration}>
                    ({video.duration})
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootcampContent;
