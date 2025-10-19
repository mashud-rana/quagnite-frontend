"use client";

import { useForm } from "react-hook-form";
import styles from "./createform.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BiChevronDown } from "react-icons/bi";
import { RiUploadCloud2Line } from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
const schema = yup.object({
  coursesubTitle: yup.string().required("Course sub title is required"),
  courseDescription: yup.string().required("Course key point name is required"),
  courseSubDescription: yup
    .string()
    .required("Course sub description is required"),
});

const CreateCourseForm = ({ onStepChange, currentStep }) => {
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

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
    if (currentStep < 3) {
      onStepChange(currentStep + 1);
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      onStepChange(currentStep - 1);
    }
  };

  return (
    <div>
      <div className="mb-24">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Create New Course</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 1st section  */}
        <div className={styles.section}>
          <h5 className={styles.sectionTitle}>Course Details</h5>
          <div className={styles.ic_details_wrapper}>
            <div className={styles.formRow}>
              <label className={styles.label}>Course Type</label>
              <div className={styles.inputContainer}>
                <input className={styles.input} placeholder="Course Type" />
              </div>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>Course subtitle</label>
              <div className={styles.inputContainer}>
                <input
                  {...register("coursesubTitle")}
                  className={styles.input}
                  placeholder="Course Subtitle"
                />
                {errors.coursesubTitle && (
                  <span className={styles.error}>
                    {errors.coursesubTitle.message}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>Course Title</label>
              <div className={styles.inputContainer}>
                <input className={styles.input} placeholder="Course Title" />
              </div>
            </div>

            <div className={styles.ic_grid}>
              <div className={styles.formRow}>
                <label className={styles.label}>
                  Course Description Key Points *
                </label>
                <div className={styles.inputContainer}>
                  <div className={styles.textareaWithButton}>
                    <input
                      {...register("courseDescription")}
                      className={styles.input}
                      placeholder="type key point name"
                    />

                    <button type="button" className="ic_common_primary_btn">
                      ADD
                    </button>
                  </div>

                  {errors.courseDescription && (
                    <span className={styles.error}>
                      {errors.courseDescription.message}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <label className={styles.label}>Enable For Subscription</label>
                <div className={styles.inputContainer}>
                  <div className={styles.selectWrapper}>
                    <select
                      {...register("courseSubDescription")}
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
                  {errors.courseSubDescription && (
                    <span className={styles.error}>
                      {errors.courseSubDescription.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd section  */}
        <div className={styles.section}>
          <h5 className={styles.sectionTitle}>Category & Features</h5>
          <div className={styles.ic_details_wrapper}>
            <div className={styles.formRow}>
              <label className={styles.label}>Course Category</label>
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
              <label className={styles.label}>Course Subcategory</label>
              <div className={styles.inputContainer}>
                <div className={styles.selectWrapper}>
                  <select className={styles.select}>
                    <option value="">Select Subcategory</option>
                    <option value="programming">Programming</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                  </select>
                  <BiChevronDown className={styles.selectIcon} />
                </div>
              </div>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>What You will Learn Course</label>
              <div className={styles.inputContainer}>
                <div className={styles.textareaWithButton}>
                  <input
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
                Who All Should Attend The Course
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
        </div>

        {/* 3rd section  */}
        <div className={styles.section}>
          <h5 className={styles.sectionTitle}>
            Learners Accessibility & others
          </h5>
          <div className={styles.ic_details_wrapper}>
            <div className={styles.formRow}>
              <label className={styles.label}>
                Select Course Announcements
              </label>
              <div className={styles.inputContainer}>
                <div className={styles.selectWrapper}>
                  <select
                    {...register("bootcampCategory")}
                    className={styles.select}
                  >
                    <option value="">Select option</option>
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
              <label className={styles.label}>Select Course Benefits</label>
              <div className={styles.inputContainer}>
                <div className={styles.selectWrapper}>
                  <select
                    {...register("bootcampCategory")}
                    className={styles.select}
                  >
                    <option value="">Select Course Benefits</option>
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
              <label className={styles.label}>Course Access Period</label>
              <div className={styles.inputContainer}>
                <div className={styles.selectWrapper}>
                  <input
                    type="number"
                    {...register("courseDescription")}
                    className={styles.input}
                    placeholder="Course Access Period"
                  />
                </div>
                {errors.bootcampCategory && (
                  <span className={styles.error}>
                    {errors.bootcampCategory.message}
                  </span>
                )}
              </div>
            </div>
            <small>
              Enrollment will expire after this number of days. Set 0 for no
              expiration
            </small>

            <div className={styles.formRow}>
              <label className={styles.label}>Learners Accessibility</label>
              <div className={styles.inputContainer}>
                <div className={styles.selectWrapper}>
                  <select className={styles.select}>
                    <option value="">Learners Accessibility</option>
                    <option value="45">$45</option>
                    <option value="45">$55</option>
                    <option value="80">$80</option>
                  </select>
                  <BiChevronDown className={styles.selectIcon} />
                </div>
              </div>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>Course Price</label>
              <div className={styles.inputContainer}>
                <div className={styles.selectWrapper}>
                  <select className={styles.select}>
                    <option value="">Select price</option>
                    <option value="45">$45</option>
                    <option value="45">$55</option>
                    <option value="80">$80</option>
                  </select>
                  <BiChevronDown className={styles.selectIcon} />
                </div>
              </div>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>Old Price</label>
              <div className={styles.inputContainer}>
                <div className={styles.selectWrapper}>
                  <select className={styles.select}>
                    <option value="">Select old price</option>
                    <option value="45">$45</option>
                    <option value="45">$55</option>
                    <option value="80">$80</option>
                  </select>
                  <BiChevronDown className={styles.selectIcon} />
                </div>
              </div>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>Language</label>
              <div className={styles.inputContainer}>
                <div className={styles.selectWrapper}>
                  <select className={styles.select}>
                    <option value="">Select language</option>
                    <option value="english">English</option>
                    <option value="bangla">Bangladesh</option>
                    <option value="hindi">Hindi</option>
                  </select>
                  <BiChevronDown className={styles.selectIcon} />
                </div>
              </div>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>Course Difficulty Level</label>
              <div className={styles.inputContainer}>
                <div className={styles.selectWrapper}>
                  <select className={styles.select}>
                    <option value="">Select Course Difficulty Level</option>
                    <option value="english">English</option>
                    <option value="bangla">Bangladesh</option>
                    <option value="hindi">Hindi</option>
                  </select>
                  <BiChevronDown className={styles.selectIcon} />
                </div>
              </div>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>Course Tags</label>
              <div className={styles.inputContainer}>
                <div className={styles.selectWrapper}>
                  <select className={styles.select}>
                    <option value="">Select</option>
                    <option value="english">English</option>
                    <option value="bangla">Bangladesh</option>
                    <option value="hindi">Hindi</option>
                  </select>
                  <BiChevronDown className={styles.selectIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4th section  */}
        <div className={styles.section}>
          <h5 className={styles.sectionTitle}>
            Course Thumbnail Or Introduction Video
          </h5>
          <div className={styles.ic_details_wrapper}>
            <div className={styles.formRow}>
              <label className={styles.label}>Course Type</label>
              <div className={styles.inputContainer}>
                <input className={styles.input} placeholder="Course Type" />
              </div>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>Course subtitle</label>
              <div className={styles.inputContainer}>
                <input
                  {...register("coursesubTitle")}
                  className={styles.input}
                  placeholder="Course Subtitle"
                />
                {errors.coursesubTitle && (
                  <span className={styles.error}>
                    {errors.coursesubTitle.message}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>Course Title</label>
              <div className={styles.inputContainer}>
                <input className={styles.input} placeholder="Course Title" />
              </div>
            </div>

            <div className={styles.ic_grid}>
              <div className={styles.formRow}>
                <label className={styles.label}>
                  Course Description Key Points *
                </label>
                <div className={styles.inputContainer}>
                  <div className={styles.textareaWithButton}>
                    <input
                      {...register("courseDescription")}
                      className={styles.input}
                      placeholder="type key point name"
                    />

                    <button type="button" className="ic_common_primary_btn">
                      ADD
                    </button>
                  </div>

                  {errors.courseDescription && (
                    <span className={styles.error}>
                      {errors.courseDescription.message}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <label className={styles.label}>Enable For Subscription</label>
                <div className={styles.inputContainer}>
                  <div className={styles.selectWrapper}>
                    <select
                      {...register("courseSubDescription")}
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
                  {errors.courseSubDescription && (
                    <span className={styles.error}>
                      {errors.courseSubDescription.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* video section  */}
        <div className={styles.section}>
          <h5 className={styles.sectionTitle}>Bootcamp Introduction Video</h5>

          <div className={styles.videoSection}>
            <div className={styles.ic_file_input_container}>
              <div className={styles.uploadArea}>
                {thumbnailPreview ? (
                  <Image
                    src={thumbnailPreview}
                    alt="Thumbnail Preview"
                    width={400}
                    height={100}
                    style={{
                      objectFit: "cover",
                      borderRadius: "8px",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                ) : (
                  <>
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      id="bootcampThumbnail"
                      className={styles.fileInput}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file)
                          setThumbnailPreview(URL.createObjectURL(file));
                      }}
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
                  </>
                )}
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
          <button type="button" className="ic_btn" onClick={handleBack}>
            BACK
          </button>
          <button type="submit" className="ic_btn">
            SAVE AND CONTINUE
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourseForm;
