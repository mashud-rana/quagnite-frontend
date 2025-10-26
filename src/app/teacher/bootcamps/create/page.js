"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useEffect, useMemo, useRef, useState} from "react";
import styles from "./create.module.css";
// import JoditEditor from "jodit-react";
import { BiChevronDown, BiChevronDownCircle, BiUpload } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import dynamic from "next/dynamic";
import { RiUploadCloud2Line } from "react-icons/ri";
import ProgressStepper from "@/components/Teacher/Courses/ProgressStepper/ProgressStepper";
import Link from "next/link";
import { useBootcampCategoriesQuery }  from "@/redux/features/teacher/bootcamp/bootcampApi";
import {useCourseTagsQuery} from "@/redux/features/teacher/course/courseApi";

const schema = yup.object({
  bootcampTitle: yup.string().required("Bootcamp title is required"),
  bootcampCategory: yup.string().required("Bootcamp category is required"),
  bootcampSubCategory: yup
    .string()
    .required("Bootcamp sub category is required"),
  // whatYoullLearn: yup.string().required("What student learn is required"),
  // whoShouldAttend: yup.string().required("Target audience is required"),
  bootCampTags: yup.string().required("Boot camp tags are required"),
  bootCampPrice: yup
    .number()
    .required("Boot camp price is required")
    .positive("Price must be positive"),
  // bootcampOverview: yup.string().required("Bootcamp overview is required"),
  bootcampAnnouncements: yup
    .string()
    .required("Bootcamp announcements are required"),
  bootcampBenefits: yup.string().required("Bootcamp benefits are required"),
  // videoType: yup.string().oneOf(["upload", "youtube"]).required(),
  // youtubeId: yup.string().when("videoType", {
  //   is: "youtube",
  //   then: (schema) => schema.required("YouTube ID is required"),
  //   otherwise: (schema) => schema.notRequired(),
  // }),
  // videoFile: yup.mixed().when("videoType", {
  //   is: "upload",
  //   then: (schema) => schema.required("Video file is required"),
  //   otherwise: (schema) => schema.notRequired(),
  // }),
});

const CreateBootcampPage = () => {
  const editor = useRef(null);
  const [bootcampCategory, setBootcampCategory] = useState([]);
  const [bootcampTags, setBootcampTags] = useState([]);
  const [replyContent, setReplyContent] = useState("");


  console.log('bootcampTags', bootcampTags)

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

  // API Call
  const { data: bootcampCategoriesData,
          isLoading: bootcampCategoriesLoading,
          isError: bootcampCategoriesError
      } = useBootcampCategoriesQuery();

  const {
    data: bootcampTagsData,
    isLoading: bootcampTagsIsLoading,
    isError: bootcampTagsIsError
  }= useCourseTagsQuery();


  //  API Call end

  // bootcamp Category
  useEffect(() => {
      setBootcampCategory([]);

      if(bootcampCategoriesData)
      {
        bootcampCategoriesData?.data.map((item) => {
          setBootcampCategory((prev) => [...prev, {label: item?.name, value: item?.id}])
        })
      }
  },[bootcampCategoriesData, bootcampCategoriesLoading , bootcampCategoriesError]);

  // Tags
  useEffect(() => {
    setBootcampTags([]);
    if(bootcampTagsData?.data?.data)
    {
      bootcampTagsData?.data?.data.map((item) => {
        setBootcampTags((prev) => [...prev, {label: item?.name, value: item?.id}])
      })
    }
  },[bootcampTagsData,bootcampTagsIsLoading,bootcampTagsIsError])





  const editorConfig = useMemo(
    () => ({
      readonly: false,
      placeholder: "Write bootcamp overview here...",
      height: 200,
      toolbar: true,
      toolbarSticky: false,
      showCharsCounter: false,
      showWordsCounter: false,
      showXPathInStatusbar: false,
      buttons: [
        "bold",
        "italic",
        "underline",
        "|",
        "ul",
        "ol",
        "|",
        "fontsize",
        "brush",
        "|",
        "paragraph",
        "align", // ✅ alignment
        "|",
        "link",
        "image",
        "video", // ✅ video insert
        "file",
        "table",
      ],
      removeButtons: ["about"],
      uploader: {
        insertImageAsBase64URI: true,
      },
    }),
    []
  );
  const videoType = watch("videoType");

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div>
      <ProgressStepper currentStep={1} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="ic_text_36 mb-24">Bootcamp Course Details</h1>

        <div className={styles.section}>
          <div className={styles.ic_details_wrapper}>
            <div className={styles.formRow}>
              <label className={styles.label}>Bootcamp Title *</label>
              <div className={styles.inputContainer}>
                <input
                  {...register("title")}
                  className={styles.input}
                  placeholder="Enter bootcamp title"
                />
                {errors.title && (
                  <span className={styles.error}>
                    {errors.title.message}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.formRow}>
              <label className={styles.label}>Bootcamp Subtitle *</label>
              <div className={styles.inputContainer}>
                <input
                    {...register("subtitle")}
                    className={styles.input}
                    placeholder="Enter bootcamp subtitle"
                />
                {errors.subtitle && (
                    <span className={styles.error}>
                    {errors.subtitle.message}
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
                      {...register("bootcamp_category_id")}
                      className={styles.select}
                    >
                      <option value="">Select category</option>
                      <option value="programming">Programming</option>
                      <option value="design">Design</option>
                      <option value="marketing">Marketing</option>
                    </select>
                    <BiChevronDown className={styles.selectIcon} />
                  </div>
                  {errors.bootcamp_category_id && (
                    <span className={styles.error}>
                      {errors.bootcamp_category_id.message}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <label className={styles.label}>Bootcamp Subcategory</label>
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
                <label className={styles.label}>Bootcamp Tags</label>
                <div className={styles.inputContainer}>
                  <input
                    {...register("tag_id")}
                    className={styles.input}
                    placeholder="Enter tags"
                  />
                  {errors.tag_id && (
                    <span className={styles.error}>
                      {errors.tag_id.message}
                    </span>
                  )}
                </div>
              </div>
            </div>


            <div className={styles.ic_grid}>

              <div className={styles.formRow}>
                <label className={styles.label}>Start date</label>
                <div className={styles.inputContainer}>
                  <input
                    {...register("start_date")}
                    type="date"
                    className={styles.input}
                    placeholder="Enter price"
                  />
                  {errors.start_date && (
                    <span className={styles.error}>
                      {errors.start_date.message}
                    </span>
                  )}
                </div>
              </div>


              <div className={styles.formRow}>
                <label className={styles.label}>End Date</label>
                <div className={styles.inputContainer}>
                  <input
                      {...register("end_date")}
                      type="date"
                      className={styles.input}
                      placeholder="Enter price"
                  />
                  {errors.end_date && (
                      <span className={styles.error}>
                      {errors.end_date.message}
                    </span>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h5 className={styles.sectionTitle}>Bootcamp Overview</h5>
          <JoditEditor
              {...register("description")}
            ref={editor}
            value={replyContent}
            config={editorConfig}
            tabIndex={2}
            onChange={(newContent) => setReplyContent(newContent)}
          />

           {errors.description && (
              <span className={styles.error}>
                {errors.description.message}
              </span>
            )}
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
          <button
            // href="/teacher/bootcamps/upload-video"
            type="submit"
            className="ic_btn"
          >
            SAVE AND CONTINUE
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBootcampPage;
