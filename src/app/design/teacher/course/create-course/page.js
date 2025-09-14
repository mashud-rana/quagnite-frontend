"use client";

import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import styles from "./createCourse.module.css";
import ProgressStepper from "@/components/Teacher/Courses/ProgressStepper/ProgressStepper";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const CreateCoursePage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    courseType: "",
    courseSubtitle: "",
    courseTitle: "",
    courseDescription: "",
    courseCategory: "",
    courseSubcategory: "",
    whatYoullLearn: "",
    whoShouldAttend: "",
    courseAnnouncements: "",
    courseBenefits: "",
    courseAccessPeriod: "10",
    learnersAccessibility: "",
    coursePrice: "$45",
    oldPrice: "$65",
    language: "English",
    courseDifficulty: "",
    courseTags: "",
    enableSubscription: "Enable",
    videoUploadType: "video",
  });

  return (
    <div className={styles.container}>
      <ProgressStepper currentStep={1} />

      <div className="mb-24">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Create New Course</h1>
        </div>
      </div>

      <form>
        {/* Course Details Section */}
        <div className={styles.section}>
          <h6 className={styles.sectionTitle}>Course Details</h6>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Course Type</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Course Type"
                value={formData.courseType}
                onChange={(e) =>
                  setFormData({ ...formData, courseType: e.target.value })
                }
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Course Subtitle*</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Course Subtitle"
                value={formData.courseSubtitle}
                onChange={(e) =>
                  setFormData({ ...formData, courseSubtitle: e.target.value })
                }
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Course Title</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Course Title"
                value={formData.courseTitle}
                onChange={(e) =>
                  setFormData({ ...formData, courseTitle: e.target.value })
                }
              />
            </div>

            <div className={styles.formGroupWithButton}>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Course Description Key Points *
                </label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Type Key Point Name"
                  value={formData.courseDescription}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      courseDescription: e.target.value,
                    })
                  }
                />
              </div>
              <button type="button" className={styles.addButton}>
                ADD
              </button>
              <div className={styles.enableDropdown}>
                <label className={styles.label}>Enable For Subscription</label>
                <select
                  className={styles.select}
                  value={formData.enableSubscription}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      enableSubscription: e.target.value,
                    })
                  }
                >
                  <option value="Enable">Enable</option>
                  <option value="Disable">Disable</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Category & Features Section */}
        <div className={styles.section}>
          <h6 className={styles.sectionTitle}>Category & Features</h6>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Course Category</label>
              <select
                className={styles.select}
                value={formData.courseCategory}
                onChange={(e) =>
                  setFormData({ ...formData, courseCategory: e.target.value })
                }
              >
                <option value="">Select Category</option>
                <option value="programming">Programming</option>
                <option value="design">Design</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Course Subcategory</label>
              <select
                className={styles.select}
                value={formData.courseSubcategory}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    courseSubcategory: e.target.value,
                  })
                }
              >
                <option value="">Select Subcategory</option>
                <option value="javascript">JavaScript</option>
                <option value="react">React</option>
              </select>
            </div>

            <div className={styles.formGroupWithButton}>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  What You will Learn Course
                </label>
                <select
                  className={styles.select}
                  value={formData.whatYoullLearn}
                  onChange={(e) =>
                    setFormData({ ...formData, whatYoullLearn: e.target.value })
                  }
                >
                  <option value="">Select Subcategory</option>
                  <option value="basics">Basics</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <button type="button" className={styles.addButton}>
                ADD
              </button>
            </div>

            <div className={styles.formGroupWithButton}>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Who Should Attend The Course
                </label>
                <input
                  type="text"
                  className={styles.input}
                  value={formData.whoShouldAttend}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      whoShouldAttend: e.target.value,
                    })
                  }
                />
              </div>
              <button type="button" className={styles.addButton}>
                ADD
              </button>
            </div>
          </div>
        </div>

        {/* Learners Accessibility & others Section */}
        <div className={styles.section}>
          <h6 className={styles.sectionTitle}>
            Learners Accessibility & others
          </h6>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Select Course Announcements
              </label>
              <select
                className={styles.select}
                value={formData.courseAnnouncements}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    courseAnnouncements: e.target.value,
                  })
                }
              >
                <option value="">Select Course Announcement</option>
                <option value="email">Email</option>
                <option value="sms">SMS</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Select Course Benefits</label>
              <select
                className={styles.select}
                value={formData.courseBenefits}
                onChange={(e) =>
                  setFormData({ ...formData, courseBenefits: e.target.value })
                }
              >
                <option value="">Select Course Benefit</option>
                <option value="certificate">Certificate</option>
                <option value="lifetime">Lifetime Access</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Course Access Period</label>
              <select
                className={styles.select}
                value={formData.courseAccessPeriod}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    courseAccessPeriod: e.target.value,
                  })
                }
              >
                <option value="10">10</option>
                <option value="30">30</option>
                <option value="90">90</option>
              </select>
              <p className={styles.helperText}>
                Enrollment will expire after this number of days. Set 0 for no
                expiration
              </p>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Learners Accessibility</label>
              <select
                className={styles.select}
                value={formData.learnersAccessibility}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    learnersAccessibility: e.target.value,
                  })
                }
              >
                <option value="">Select Option</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Course Price</label>
              <select
                className={styles.select}
                value={formData.coursePrice}
                onChange={(e) =>
                  setFormData({ ...formData, coursePrice: e.target.value })
                }
              >
                <option value="$45">$45</option>
                <option value="$99">$99</option>
                <option value="$199">$199</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Old Price</label>
              <select
                className={styles.select}
                value={formData.oldPrice}
                onChange={(e) =>
                  setFormData({ ...formData, oldPrice: e.target.value })
                }
              >
                <option value="$65">$65</option>
                <option value="$149">$149</option>
                <option value="$299">$299</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Language</label>
              <select
                className={styles.select}
                value={formData.language}
                onChange={(e) =>
                  setFormData({ ...formData, language: e.target.value })
                }
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Course Difficulty Level</label>
              <select
                className={styles.select}
                value={formData.courseDifficulty}
                onChange={(e) =>
                  setFormData({ ...formData, courseDifficulty: e.target.value })
                }
              >
                <option value="">Select Course Difficulty Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Course Tags</label>
              <select
                className={styles.select}
                value={formData.courseTags}
                onChange={(e) =>
                  setFormData({ ...formData, courseTags: e.target.value })
                }
              >
                <option value="">Select</option>
                <option value="javascript">JavaScript</option>
                <option value="react">React</option>
                <option value="nodejs">Node.js</option>
              </select>
            </div>
          </div>
        </div>

        {/* Course Thumbnail Or Introduction Video Section */}
        <div className={styles.section}>
          <h6 className={styles.sectionTitle}>
            Course Thumbnail Or Introduction Video
          </h6>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Course Type</label>
              <input
                type="text"
                className={styles.input}
                value={formData.courseType}
                onChange={(e) =>
                  setFormData({ ...formData, courseType: e.target.value })
                }
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Course Subtitle*</label>
              <input
                type="text"
                className={styles.input}
                value={formData.courseSubtitle}
                onChange={(e) =>
                  setFormData({ ...formData, courseSubtitle: e.target.value })
                }
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Course Title</label>
              <input
                type="text"
                className={styles.input}
                value={formData.courseTitle}
                onChange={(e) =>
                  setFormData({ ...formData, courseTitle: e.target.value })
                }
              />
            </div>

            <div className={styles.formGroupWithButton}>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Course Description Key Points *
                </label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Type Key Point Name"
                  value={formData.courseDescription}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      courseDescription: e.target.value,
                    })
                  }
                />
              </div>
              <button type="button" className={styles.addButton}>
                ADD
              </button>
              <div className={styles.enableDropdown}>
                <label className={styles.label}>Enable For Subscription</label>
                <select
                  className={styles.select}
                  value={formData.enableSubscription}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      enableSubscription: e.target.value,
                    })
                  }
                >
                  <option value="Enable">Enable</option>
                  <option value="Disable">Disable</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.videoSection}>
            <h6 className={styles.sectionTitle}>
              Course Thumbnail Or Introduction Video
            </h6>

            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="videoType"
                  value="video"
                  checked={formData.videoUploadType === "video"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      videoUploadType: e.target.value,
                    })
                  }
                />
                <span className={styles.radioText}>Video Upload</span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="videoType"
                  value="youtube"
                  checked={formData.videoUploadType === "youtube"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      videoUploadType: e.target.value,
                    })
                  }
                />
                <span className={styles.radioText}>
                  Youtube Video (write only video id)
                </span>
              </label>
            </div>

            {formData.videoUploadType === "youtube" && (
              <input
                type="text"
                className={styles.input}
                placeholder="Type your youtube ID"
              />
            )}

            <div className={styles.uploadArea}>
              <FaCloudUploadAlt size={48} className={styles.uploadIcon} />
              <p className={styles.uploadText}>
                Accepted image format & size: 575px X 450px (1MB)
                <br />
                Accepted image filetypes: jpg, jpeg, png
              </p>
              <button type="button" className={styles.chooseFileButton}>
                📁 Choose file
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className={styles.submitSection}>
          <Link
            href="/teacher/course/upload-course"
            type="submit"
            className="ic_common_primary_btn"
          >
            SAVE AND CONTINUE
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateCoursePage;
