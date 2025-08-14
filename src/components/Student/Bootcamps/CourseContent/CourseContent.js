import { FaPlay } from "react-icons/fa";
import styles from "./courseContent.module.css";

const courseModules = [
  { id: "1", title: "Orientation", duration: "3:36" },
  { id: "2", title: "Orientation", duration: "3:36" },
  { id: "3", title: "Orientation", duration: "3:36" },
  { id: "4", title: "Orientation", duration: "3:36" },
  { id: "5", title: "Orientation", duration: "3:36" },
];

const CourseContent = () => {
  return (
    <div className={styles.ic_content_section}>
      <div className={styles.ic_content_header}>
        <div className={styles.ic_duration_info}>
          <span className={styles.ic_total_duration}>
            Total duration- 4h 35 min
          </span>
        </div>
      </div>

      <div className={styles.ic_modules_list}>
        {courseModules.map((module) => (
          <div key={module.id} className={styles.ic_module_item}>
            <div className={styles.ic_module_content}>
              <button className={styles.ic_play_button}>
                <FaPlay className={styles.ic_play_icon} />
              </button>
              <span className={styles.ic_module_title}>{module.title}</span>
            </div>
            <span className={styles.ic_module_duration}>
              ({module.duration})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
