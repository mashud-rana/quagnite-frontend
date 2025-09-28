"use client";

import { FaPlay } from "react-icons/fa";
import { useState, useEffect } from "react";
import styles from "./courseContent.module.css";
import { IoIosArrowDown } from "react-icons/io";
import {
  PiMonitorPlayBold,
  PiFilePdfFill,
  PiImage,
  PiFileAudio,
  PiVideo,
  PiSlideshow,
  PiCircle,
  PiCheckCircleFill,
} from "react-icons/pi";
import { MdOutlinePlayLesson } from "react-icons/md";
import Link from "next/link";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLessonLecturePreviewMutation } from "@/redux/features/student/course/courseApi";

const CourseContent = ({ lessonsDetails, lessonsTotalDuration }) => {
  const [expandedModules, setExpandedModules] = useState(new Set());
  const [lessons, setLessons] = useState(null);
  const searchParams = useSearchParams();
  const pathname = usePathname(); // current path (without query)
  const router = useRouter();

  //Preview Lesson Lecture
   const [lessonLecturePreview, {
        data:previewData,
        isLoading:previewIsLoading,
        isSuccess:previewIsSuccess,
        isError:previewIsError,
        error:previewError
      }
    ] = useLessonLecturePreviewMutation();

  const params = useParams();
  const slug = params.slug;

  const toggleModule = (moduleId) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };



  // Helper: Map lecture format to icon component
  const formatIconMap = {
    video: PiMonitorPlayBold,
    pdf: PiFilePdfFill,
    image: PiImage,
    audio: PiFileAudio,
    slide: PiSlideshow,
  };

  //preview lecture handler
 const previewLessonLectureHandler = async (lesson, lecture) => {
  let selectedLecture = { ...lecture };

  // Call API
  await lessonLecturePreview(selectedLecture.uuid);

  // Update lessons state so UI reflects "completed = true"
  setLessons((prevLessons) =>
    prevLessons.map((mod) =>
      mod.uuid === lesson.uuid
        ? {
            ...mod,
            lectures: mod.lectures.map((lec) =>
              lec.uuid === selectedLecture.uuid
                ? { ...lec, completed: true } // mark this lecture completed
                : lec
            ),
          }
        : mod
    )
  );

  // Update URL query params
  const params = new URLSearchParams(searchParams.toString());
  params.set("lessonUuid", lesson.uuid);
  params.set("lectureUuid", selectedLecture.uuid);
  router.push(`${pathname}?${params.toString()}`, { scroll: false });

  console.log("Preview lecture UUID:", selectedLecture.uuid);
};


  useEffect(() => {
    setLessons(lessonsDetails);
    // console.log("Lessons details in CourseContent:", lessonsDetails);
  }, [lessonsDetails]);

  return (
    <div className={styles.ic_content_section}>
      <div className={styles.ic_content_header}>
        <div className={styles.ic_duration_info}>
          <span className={styles.ic_total_duration}>
            Total duration - {lessonsTotalDuration || "0:00"}
          </span>
        </div>
      </div>

      <div className={styles.ic_modules_list}>
        {lessons &&
          lessons.map((module) => {
            const isExpanded = expandedModules.has(module.id);
            return (
              <div key={module.id} className={styles.ic_module_item}>
                {/* Module Header */}
                <div
                  className={styles.ic_module_header}
                  onClick={() => toggleModule(module.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                >
                  <div className={styles.ic_module_content}>
                    <button
                      className={styles.ic_play_button}
                      tabIndex={-1}
                      aria-label={`Play ${module.title}`}
                    >
                      <MdOutlinePlayLesson className={styles.ic_play_icon} />
                    </button>
                    <span className={styles.ic_module_title}>
                      {module.title}
                    </span>
                  </div>
                  <div className={styles.ic_module_right}>
                    <span className={styles.ic_module_duration}>
                      ({module.file_duration})
                    </span>
                    <div
                      className={`${styles.ic_arrow_icon} ${
                        isExpanded ? styles.ic_arrow_rotated : ""
                      }`}
                    >
                      <IoIosArrowDown />
                    </div>
                  </div>
                </div>

                {/* Lectures List */}
                <div
                  className={`${styles.ic_videos_container} ${
                    isExpanded ? styles.ic_videos_expanded : ""
                  }`}
                >
                  <div className={styles.ic_lesson_container}>
                    {module.lectures.length > 0 &&
                      module?.lectures.map((lecture) => {
                        const Icon =
                          formatIconMap[lecture.lecture_format] ||
                          PiMonitorPlayBold;
                        return (
                          <Link
                            href="#"
                            key={lecture.id}
                            className={styles.ic_video_item}
                            onClick={() => previewLessonLectureHandler(module, lecture)}
                          >
                            <div className={styles.ic_video_content}>
                              {lecture.completed ? (
                                <PiCheckCircleFill
                                  className={styles.ic_play_icon}
                                />
                              ) : (
                                <PiCircle className={styles.ic_play_icon} />
                              )}

                              <button
                                className={styles.ic_play_button}
                                tabIndex={-1}
                                aria-label={`Open ${lecture.title}`}
                              >
                                <Icon className={styles.ic_play_icon} />
                              </button>
                              <span className={styles.ic_video_title}>
                                {lecture.title}
                              </span>
                            </div>

                            {lecture.lecture_format === "video" && (
                              <span className={styles.ic_video_duration}>
                                ({lecture.file_duration_formatted})
                              </span>
                            )}
                          </Link>
                        );
                      })}
                  </div>

                  <Link
                    href={`/student/courses/${slug}/abc/quiz`}
                    className={styles.ic_btn}
                  >
                    Start Quize
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CourseContent;
