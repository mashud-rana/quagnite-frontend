"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./createCourse.module.css";
import ProgressStepper from "@/components/Teacher/Courses/ProgressStepper/ProgressStepper";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiUploadCloud2Line } from "react-icons/ri";

const schema = yup.object({
  courseTitle: yup.string().required("Bootcamp title is required"),
  bootcampCategory: yup.string().required("Bootcamp category is required"),
  bootcampSubCategory: yup
    .string()
    .required("Bootcamp sub category is required"),
  bootCampTags: yup.string().required("Boot camp tags are required"),
});

const CreateCoursePage = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      videoType: "upload",
      whatYoullLearn: [],
      whoShouldAttend: [],
    },
  });

  const videoType = watch("videoType");

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div>
      <ProgressStepper currentStep={1} />

      <div className="mb-24">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Create New Course</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.section}>
          <div className={styles.ic_details_wrapper}>
            <div className={styles.formRow}>
              <label className={styles.label}>Bootcamp Title</label>
              <div className={styles.inputContainer}>
                <input
                  {...register("courseTitle")}
                  className={styles.input}
                  placeholder="Enter bootcamp title"
                />
                {errors.courseTitle && (
                  <span className={styles.error}>
                    {errors.courseTitle.message}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>Bootcamp subtitle</label>
              <div className={styles.inputContainer}>
                <input
                  {...register("bootcampTitle")}
                  className={styles.input}
                  placeholder="Enter bootcamp title"
                />
                {errors.bootcampTitle && (
                  <span className={styles.error}>
                    {errors.bootcampTitle.message}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.ic_grid}>
              <div className={styles.formRow}>
                <label className={styles.label}>Bootcamp Category</label>
                <div className={styles.inputContainer}>
                  <div className={styles.selectWrapper}>
                    <select
                      {...register("bootcampCategory")}
                      className={styles.select}
                    >
                      <option value="">Select category</option>
                      <option value="programming">Programming</option>
                      <option value="design">Design</option>
                      <option value="marketing">Marketing</option>
                    </select>
                    <BiChevronDown className={styles.selectIcon} />
                  </div>
                  {errors.bootcampCategory && (
                    <span className={styles.error}>
                      {errors.bootcampCategory.message}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <label className={styles.label}>Bootcamp Sub Category</label>
                <div className={styles.inputContainer}>
                  <div className={styles.selectWrapper}>
                    <select
                      {...register("bootcampSubCategory")}
                      className={styles.select}
                    >
                      <option value="">Enable</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">
                        Mobile Development
                      </option>
                      <option value="data-science">Data Science</option>
                    </select>
                    <BiChevronDown className={styles.selectIcon} />
                  </div>
                  {errors.bootcampSubCategory && (
                    <span className={styles.error}>
                      {errors.bootcampSubCategory.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.ic_grid}>
              <div className={styles.formRow}>
                <label className={styles.label}>What You will Learn</label>
                <div className={styles.inputContainer}>
                  <div className={styles.textareaWithButton}>
                    <input
                      // {...register("whatYoullLearn")}
                      className={styles.input}
                      placeholder="Enter what students will learn"
                    />

                    <button type="button" className="ic_common_primary_btn">
                      ADD
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.formRow}>
                <label className={styles.label}>
                  Who All Should Attend The Bootcamp
                </label>
                <div className={styles.inputContainer}>
                  <div className={styles.textareaWithButton}>
                    <input
                      className={styles.input}
                      placeholder="Enter target audience"
                    />
                    <button type="button" className="ic_common_primary_btn">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.ic_grid}>
              <div className={styles.formRow}>
                <label className={styles.label}>Boot Camp Tags</label>
                <div className={styles.inputContainer}>
                  <input
                    {...register("bootCampTags")}
                    className={styles.input}
                    placeholder="Enter tags separated by commas"
                  />
                  {errors.bootCampTags && (
                    <span className={styles.error}>
                      {errors.bootCampTags.message}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <label className={styles.label}>Boot Camp Price</label>
                <div className={styles.inputContainer}>
                  <input
                    {...register("bootCampPrice")}
                    type="number"
                    className={styles.input}
                    placeholder="Enter price"
                  />
                  {errors.bootCampPrice && (
                    <span className={styles.error}>
                      {errors.bootCampPrice.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h5 className={styles.sectionTitle}>Bootcamp Course Details</h5>
          <div className={styles.ic_details_container}>
            <div className={styles.ic_grid}>
              <div className={styles.formRow}>
                <label className={styles.label}>
                  Select Bootcamp Announcements
                </label>
                <div className={styles.inputContainer}>
                  <div className={styles.selectWrapper}>
                    <select
                      {...register("bootcampAnnouncements")}
                      className={styles.select}
                    >
                      <option value="">Select announcements</option>
                      <option value="email">Email Notifications</option>
                      <option value="sms">SMS Notifications</option>
                      <option value="both">Both Email & SMS</option>
                    </select>
                    <IoMdArrowDropdown className={styles.selectIcon} />
                  </div>
                  {errors.bootcampAnnouncements && (
                    <span className={styles.error}>
                      {errors.bootcampAnnouncements.message}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <label className={styles.label}>Select Bootcamp Benefits</label>
                <div className={styles.inputContainer}>
                  <div className={styles.selectWrapper}>
                    <select
                      {...register("bootcampBenefits")}
                      className={styles.select}
                    >
                      <option value="">Enable</option>
                      <option value="certificate">Certificate</option>
                      <option value="job-assistance">Job Assistance</option>
                      <option value="lifetime-access">Lifetime Access</option>
                    </select>
                    <IoMdArrowDropdown className={styles.selectIcon} />
                  </div>
                  {errors.bootcampBenefits && (
                    <span className={styles.error}>
                      {errors.bootcampBenefits.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h5 className={styles.sectionTitle}>Bootcamp Introduction Video</h5>

          <div className={styles.videoSection}>
            <div className={styles.ic_file_input_container}>
              <div className={styles.uploadArea}>
                <input
                  {...register("bootcampThumbnail")}
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  id="bootcampThumbnail"
                  className={styles.fileInput} // hidden input (CSS e display:none / hidden korte paren)
                />
                <label
                  htmlFor="bootcampThumbnail"
                  className={styles.uploadLabel}
                >
                  <RiUploadCloud2Line className={styles.uploadIcon} />
                  <p className={styles.uploadText}>
                    Accepted Image format & size: 575px X 450px (1MB)
                  </p>
                  <p className={styles.uploadSubtext}>
                    Accepted Image filetypes: jpg, jpeg, png
                  </p>
                </label>
                {errors.bootcampThumbnail && (
                  <span className={styles.error}>
                    {errors.bootcampThumbnail.message}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.videoOptions}>
              <h6 className={styles.videoTitle}>
                Introduction Video (Optional)
              </h6>

              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    {...register("videoType")}
                    type="radio"
                    value="upload"
                    className={styles.radio}
                  />
                  Video Upload
                </label>

                <label className={styles.radioLabel}>
                  <input
                    {...register("videoType")}
                    type="radio"
                    value="youtube"
                    className={styles.radio}
                  />
                  Youtube Video (write only video id)
                </label>
              </div>

              {videoType === "youtube" && (
                <input
                  {...register("youtubeId")}
                  className={styles.input}
                  placeholder="Type your youtube ID"
                />
              )}

              {videoType === "upload" && (
                <div className={styles.fileUpload}>
                  <input
                    {...register("videoFile")}
                    type="file"
                    accept="video/*"
                    className={styles.fileInput}
                    id="videoFile"
                  />
                  <label htmlFor="videoFile" className={styles.fileLabel}>
                    + Choose File
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="ic_flex">
          <button type="button" className="ic_btn">
            BACK
          </button>
          <Link
            href="/teacher/bootcamps/upload-video"
            type="submit"
            className="ic_btn"
          >
            SAVE AND CONTINUE
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateCoursePage;
