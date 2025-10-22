"use client";

import { useSelector } from "react-redux";
import {Controller, useForm} from "react-hook-form";
import styles from "./createform.module.css";

import { BiChevronDown } from "react-icons/bi";
import { RiUploadCloud2Line } from "react-icons/ri";
import Image from "next/image";
import {useEffect, useState, useRef} from "react";
import { Select } from 'antd';
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

import {
  useCourseCategoriesQuery,
  useCourseSubCategoriesQuery,
  useCourseBenefitsQuery,
  useCourseLanguagesQuery,
  useCourseDifficultyQuery,
  useCourseTagsQuery,
} from "@/redux/features/teacher/course/courseApi";
import {useAnnouncementsQuery} from "@/redux/features/teacher/announcements/announcementsApi";
import { CloseOutlined } from '@ant-design/icons';

import { FilePond, registerPlugin } from 'react-filepond';

// Import the plugins you want to use
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
// Register plugins
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType, FilePondPluginFileValidateSize);



const CreateCourseForm = ({register,
                            control,
                            watch,
                            setValue,
                            getValues,
                            errors}) => {
  const navigator = useRouter();
  const token = useSelector((state) => state.auth.access_token);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [courseCategory, setCourseCategory] = useState([]);
  const [courseSubCategory, setCourseSubCategory] = useState([]);
  const [courseAnnouncements, setCourseAnnouncements] = useState([]);
  const [courseBenefits, setCourseBenefits] = useState([]);
  const [courseLanguage, setCourseLanguage] = useState([]);
  const [courseDifficulty, setCourseDifficulty] = useState([]);
  const [courseTags, setCourseTags] = useState([]);
  const [files, setFiles] = useState([]);
  const thumbnailInputRef = useRef(null);

  console.log('thumbnailInputRef', thumbnailInputRef)
  // console.log('biggner', biggner)
  // console.log('course and course subcategoyr', courseCategory, courseSubCategory,watch('course_category_id'));


    // Fetch API
    const {
      data: categoriesData,
      isLoading: categoriesLoading,
      isError: categoriesError
    }
    = useCourseCategoriesQuery();

  const {
    data: subCategoriesData,
    isLoading: subCategoriesLoading,
    isError: subCategoriesError
  } = useCourseSubCategoriesQuery({
        id: watch('course_category_id')
      },
      {
        skip: !watch('course_category_id')
      });

    const {
      data: announcementsData,
      isLoading: announcementsLoading,
      isError: announcementsError
    }= useAnnouncementsQuery();

  const {
    data: courseBenefitsData,
    isLoading: courseBenefitsLoading,
    isError: courseBenefitsError
  }= useCourseBenefitsQuery();


  const {
    data: courseLanguagesData,
    isLoading: courseLanguagesLoading,
    isError: courseLanguagesError
  }= useCourseLanguagesQuery();


  const {
    data: courseDifficultyData,
    isLoading: courseDifficultyLoading,
    isError: courseDifficultyError
  }= useCourseDifficultyQuery();

  const {
    data: courseTagsData,
    isLoading: courseTagsLoading,
    isError: courseTagsError
  }= useCourseTagsQuery();
  // End API Fetch


  // Course Categories
  useEffect(() => {
    setCourseCategory([]);
    if(categoriesData?.data?.data && !categoriesLoading && !categoriesError)
    {
      categoriesData?.data?.data.map((item) => {
        setCourseCategory((prev) => [...prev, {label: item?.name, value: item?.id}])
      })
    }
  },[categoriesLoading, categoriesData, categoriesError]);

    // Sub Categories
  useEffect(() => {
    setCourseSubCategory([]);
    if(subCategoriesData?.data && !subCategoriesLoading && !subCategoriesError)
    {
      subCategoriesData?.data.subcategories.map((item) => {
        console.log('item', item)
        setCourseSubCategory((prev) => [...prev, {label: item?.name, value: item?.id}])
      })
    }
  },[subCategoriesData, subCategoriesLoading, subCategoriesError])


  // Announcements
  useEffect(() => {
    setCourseAnnouncements([]);
    if(announcementsData?.data?.data && !announcementsLoading && !announcementsError)
    {
      announcementsData?.data?.data.map((item) => {
        setCourseAnnouncements((prev) => [...prev, {label: item?.title, value: item?.id}])
      })
    }
  },[announcementsData, announcementsLoading])

  // benefits
  useEffect(() => {
    setCourseBenefits([]);
    if(courseBenefitsData?.data?.data && !courseBenefitsLoading && !courseBenefitsError)
    {
      courseBenefitsData?.data?.data.map((item) => {
        setCourseBenefits((prev) => [...prev, {label: item?.title, value: item?.id}])
      })
    }
  },[courseBenefitsData, courseBenefitsLoading,courseBenefitsError])


  // Language
  useEffect(() => {
    setCourseLanguage([]);
    if(courseLanguagesData?.data?.data && !courseLanguagesLoading && !courseLanguagesError)
    {
      courseLanguagesData?.data?.data.map((item) => {
        setCourseLanguage((prev) => [...prev, {label: item?.title, value: item?.id}])
      })
    }
  },[courseLanguagesData, courseLanguagesLoading,courseLanguagesError])


  // Difficulty
  useEffect(() => {
    setCourseDifficulty([]);
    if(courseDifficultyData?.data?.data && !courseDifficultyLoading && !courseDifficultyError)
    {
      courseDifficultyData?.data?.data.map((item) => {
        setCourseDifficulty((prev) => [...prev, {label: item?.title, value: item?.id}])
      })
    }
  },[courseDifficultyData, courseDifficultyLoading, courseDifficultyError])

  // Tags
  useEffect(() => {
    setCourseTags([]);
    if(courseTagsData?.data?.data && !courseTagsLoading && !courseTagsError)
    {
      courseTagsData?.data?.data.map((item) => {
        setCourseTags((prev) => [...prev, {label: item?.name, value: item?.id}])
      })
    }
  },[courseTagsData,courseTagsLoading,courseTagsError])


  const selectCourseCategory = (categoryId) => {
    setCourseSubCategory([]);
    setSelectCourseCategoryId(categoryId);
  }

  return (
      <>

        <div className="mb-24">
          <div className="ic_title_section">
            <Link href="/teacher" className="ic_back_button" aria-label="Go back">
              <FaArrowLeft />
            </Link>
            <h1 className="ic_text_36">Create New Course</h1>
          </div>
        </div>

      {/* 1st section  */}
      <div className={styles.section}>
        <h5 className={styles.sectionTitle}>Course Details</h5>
        <div className={styles.ic_details_wrapper}>
          <div className={styles.formRow}>
            <label className={styles.label}>Course Type</label>
            <div className={styles.inputContainer}>
              <input
                  {...register("courseType")}
                  className={styles.input}
                  placeholder="Course Type"
              />
              {errors.courseType && (
                  <span className={styles.error}>
                  {errors.courseType.message}
                </span>
              )}
            </div>
          </div>


          <div className={styles.formRow}>
            <label className={styles.label}>Course Title *</label>
            <div className={styles.inputContainer}>
              <input
                  {...register("title")}
                  className={styles.input}
                  placeholder="Course Title"
              />

              {errors.title && (
                  <span className={styles.error}>
                  {errors.title.message}
                </span>
              )}
            </div>
          </div>


          <div className={styles.formRow}>
            <label className={styles.label}>Course Subtitle *</label>
            <div className={styles.inputContainer}>
              <input
                {...register("subtitle")}
                className={styles.input}
                placeholder="Course Subtitle"
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
            <label className={styles.label}>Course Category *</label>
            <div className={styles.inputContainer}>
              <div className={styles.selectWrapper}>
                <Controller
                    name="course_category_id"
                    control={control}
                    render={({field}) => (
                        <Select
                            {...field}
                            allowClear
                            showSearch
                            style={{width: '100%', height: '40px'}}
                            placeholder="Select category"
                            optionFilterProp="label"
                            onChange={(value) => {
                              field.onChange(value);
                              selectCourseCategory(value);
                            }}
                            options={[...courseCategory]}
                        />
                    )}
                />
              </div>
              {errors.course_category_id && (
                <span className={styles.error}>
                  {errors.course_category_id.message}
                </span>
              )}
            </div>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>Course Subcategory</label>
            <div className={styles.inputContainer}>
              <div className={styles.selectWrapper}>
                <Controller
                    name="course_subcategory_id"
                    control={control}
                    render={({field}) => (
                        <Select
                            {...field}
                            allowClear
                            showSearch
                            style={{width: '100%', height: '40px'}}
                            placeholder="Select Subcategory"
                            optionFilterProp="label"
                            options={[...courseSubCategory]}
                        />
                    )}
                />
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
        <h5 className={styles.sectionTitle}>Learners Accessibility & others</h5>
        <div className={styles.ic_details_wrapper}>
          <div className={styles.formRow}>
            <label className={styles.label}>Select Course Announcements</label>
            <div className={styles.inputContainer}>
              <div className={styles.selectWrapper}>
                <Controller
                    name="course_announcement_id"
                    control={control}
                    render={({field}) => (
                        <Select
                            {...field}
                            allowClear
                            showSearch
                            style={{width: '100%', height: '40px'}}
                            placeholder="Select Course Announcements"
                            optionFilterProp="label"
                            options={[...courseAnnouncements]}
                        />
                    )}
                />
              </div>
              {errors.course_announcement_id && (
                <span className={styles.error}>
                  {errors.course_announcement_id.message}
                </span>
              )}
            </div>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>Select Course Benefits</label>
            <div className={styles.inputContainer}>
              <div className={styles.selectWrapper}>
                <Controller
                    name="benefits_id"
                    control={control}
                    render={({field}) => (
                        <Select
                            {...field}
                            mode="multiple"
                            allowClear
                            showSearch
                            style={{width: '100%', height: '40px'}}
                            placeholder="Select Course Benefits"
                            optionFilterProp="label"
                            options={[...courseBenefits]}
                        />
                    )}
                />
              </div>
              {errors.bootcampCategory && (
                <span className={styles.error}>
                  {errors.bootcampCategory.message}
                </span>
              )}
            </div>
          </div>


          <div className={styles.formRow}>
            <label className={styles.label}>Course Access Period *</label>
            <div className={styles.inputContainer}>
              <div className={styles.selectWrapper}>
                <input
                    type="number"
                    min={0}
                    defaultValue={0}
                    {...register("access_period")}
                    className={styles.input}
                    placeholder="Course Access Period"
                />
              </div>
              {errors.access_period && (
                <span className={styles.error}>
                  {errors.access_period.message}
                </span>
              )}
            </div>
          </div>
          <small>Enrollment will expire after this number of days. Set 0 for no expiration</small>

          <div className={styles.formRow}>
            <label className={styles.label}>Learners Accessibility *</label>
            <div className={styles.inputContainer}>
              <div className={styles.selectWrapper}>
                <Controller
                    name="learner_accessibility"
                    control={control}
                    render={({field}) => (
                        <Select
                            {...field}
                            allowClear
                            showSearch
                            style={{width: '100%', height: '40px'}}
                            placeholder="Select Learners Accessibility"
                            optionFilterProp="label"
                            options={[
                                {label: 'Free', value: 'free'},
                                {label: 'Paid', value: 'paid'}
                            ]}
                        />
                    )}
                />
                {errors.learner_accessibility && (
                    <span className={styles.error}>
                  {errors.learner_accessibility.message}
                </span>
                )}
              </div>
            </div>
          </div>



          {watch('learner_accessibility') === 'paid' && (
              <>
                <div className={styles.formRow}>
                  <label className={styles.label}>Course Price *</label>
                  <div className={styles.inputContainer}>
                    <div className={styles.selectWrapper}>
                      <input
                          type="number"
                          {...register("price")}
                          className={styles.input}
                          placeholder="Course Price"
                      />
                      {errors.price && (
                          <span className={styles.error}>
                          {errors.price.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <label className={styles.label}>Old Price</label>
                  <div className={styles.inputContainer}>
                    <div className={styles.selectWrapper}>
                      <input
                          type="number"
                          {...register("old_price")}
                          className={styles.input}
                          placeholder="Old Price"
                      />
                      {errors.old_price && (
                          <span className={styles.error}>
                          {errors.old_price.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </>)}

          <div className={styles.formRow}>
            <label className={styles.label}>Language *</label>
            <div className={styles.inputContainer}>
              <div className={styles.selectWrapper}>
                <Controller
                    name="course_language_id"
                    control={control}
                    render={({field}) => (
                        <Select
                            {...field}
                            allowClear
                            showSearch
                            style={{width: '100%', height: '40px'}}
                            placeholder="Select language"
                            optionFilterProp="label"
                            options={[...courseLanguage]}
                        />
                    )}
                />

                {errors.course_language_id && (<span className={styles.error}>
                  {errors.course_language_id.message}
                </span>)}
              </div>
            </div>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>Course Difficulty Level *</label>
            <div className={styles.inputContainer}>
              <div className={styles.selectWrapper}>
                <Controller
                    name="difficulty_level_id"
                    control={control}
                    render={({field}) => (
                        <Select
                            {...field}
                            allowClear
                            showSearch
                            style={{width: '100%', height: '40px'}}
                            placeholder="Select Course Difficulty Level"
                            optionFilterProp="label"
                            options={[...courseDifficulty]}
                        />
                    )}
                />
                {errors.difficulty_level_id && (<span className={styles.error}>
                  {errors.difficulty_level_id.message}
                </span>)}
              </div>
            </div>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>Course Tags</label>
            <div className={styles.inputContainer}>
              <div className={styles.selectWrapper}>
                <Controller
                    name="tag_id"
                    control={control}
                    render={({field}) => (
                        <Select
                            {...field}
                            mode="multiple"
                            allowClear
                            showSearch
                            style={{width: '100%', height: '40px'}}
                      placeholder="Select Course Tags"
                      optionFilterProp="label"
                      options={[...courseTags]}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video section  */}
      <div className={styles.section}>

        <div className={styles.videoSection}>

          <div className={styles.ic_file_input_container}>

            <div className={styles.uploadArea}>
              {thumbnailPreview ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                        src={thumbnailPreview}
                        alt="Thumbnail Preview"
                        width={400}
                        height={100}
                        unoptimized
                        style={{
                          objectFit: "cover",
                          borderRadius: "8px",
                          height: "100%",
                          width: "100%",
                        }}
                    />
                    <button
                        type="button"
                        onClick={() => {
                          setThumbnailPreview(null);
                          // onChange(null);
                          if (thumbnailInputRef.current) {
                            thumbnailInputRef.current.value = ""; // 👈 clears the input
                          }
                          control._formValues.image = null; // 👈 ensures RHF knows it's cleared
                        }}
                        style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          background: 'rgba(0, 0, 0, 0.6)',
                          border: 'none',
                          borderRadius: '50%',
                          width: '32px',
                          height: '32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'}
                    >
                      <CloseOutlined style={{ color: 'white', fontSize: '16px' }} />
                    </button>
                  </div>
              ) : (
                  <>
                    <Controller
                        name="image"
                        control={control}
                        defaultValue={null}
                        render={({ field: { onChange } }) => (
                            <input
                                ref={thumbnailInputRef}
                                type="file"
                                accept="image/png, image/jpeg, image/jpg"
                                id="bootcampThumbnail"
                                className={styles.fileInput}
                                onChange={(e) => {
                                  const file = e.target.files?.[0] ?? null;

                                  if (file) {
                                    const previewUrl = URL.createObjectURL(file);
                                    setThumbnailPreview(previewUrl);
                                  } else {
                                    setThumbnailPreview(null);
                                  }

                                  onChange(file); // store single File object
                                }}

                            />
                        )}
                    />

                    <label
                        htmlFor="bootcampThumbnail"
                        className={styles.uploadLabel}
                    >
                      <RiUploadCloud2Line className={styles.uploadIcon} />
                      <p className={styles.uploadText}>
                        Accepted Image format & size: 575px X 450px (2MB)
                      </p>
                      <p className={styles.uploadSubtext}>
                        Accepted Image filetypes: jpg, jpeg, png
                      </p>
                    </label>
                  </>
              )}
              {errors.image && (
                  <span className={styles.error}>
        {errors.image.message}
      </span>
              )}
            </div>
          </div>

          <div className={styles.videoOptions}>
            <h6 className={styles.videoTitle}>Introduction Video (Optional)</h6>

            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  {...register("thumb_type")}
                  type="radio"
                  value="upload"
                  className={styles.radio}
                />
                Video Upload
              </label>

              <label className={styles.radioLabel}>
                <input
                  {...register("thumb_type")}
                  type="radio"
                  value="youtube"
                  className={styles.radio}
                />
                Youtube Video (write only video id)
              </label>
            </div>

            {watch('thumb_type') === "youtube" && (
                <>
                  <input
                      {...register("video_link")}
                      className={styles.input}
                      placeholder="Type your youtube ID"
                  />

                  {errors.video_link && (
                      <span className={styles.error}>
                    {errors.video_link.message}
                  </span>
                  )}
                </>
            )}



            {watch('thumb_type') === "upload" && <div className="filepond-wrapper">
              <FilePond
                  {...register("video")}
                  files={files}
                  onupdatefiles={setFiles}
                  allowMultiple={false}
                  acceptedFileTypes={[
                    'video/*',
                  ]}
                  labelFileTypeNotAllowed="Only video files are allowed"
                  fileValidateTypeLabelExpectedTypes="Expects video files"
                  name="video"
                  labelIdle='Drag & Drop your video or <span class="filepond--label-action">Browse</span>'

                  /** ✅ File size validation */
                  maxFileSize="5MB"
                  labelMaxFileSizeExceeded="File is too large"
                  labelMaxFileSize="Maximum file size is 5MB"

                  server={{
                    process: {
                      url: `${process.env.NEXT_PUBLIC_API_URL}/teacher/course/chunk-upload`,
                      method: "POST",
                      headers: (file) => ({
                        Authorization: `Bearer ${token}`, // ✅ Dynamic header for all chunks
                        "Upload-Length": file.size.toString(),
                      }),
                      withCredentials: false,
                      onload: (response) => {
                        setValue('video', response?.response);
                        return response?.response; // if your backend returns an ID
                      },
                      onerror: (error) => {
                        console.error("Upload failed:", error);
                      },
                    },
                    patch: {
                      url: `${process.env.NEXT_PUBLIC_API_URL}/teacher/course/chunk-upload?patch=`,
                      method: "PATCH",
                      headers: (file) => ({
                        Authorization: `Bearer ${token}`,
                      }),
                      withCredentials: false,
                    },
                    // ✅ This handles file removal
                    revert: (uniqueFileId, load, error) => {
                      // uniqueFileId is returned from process's onload
                      fetch(`${process.env.NEXT_PUBLIC_API_URL}/teacher/course/chunk-upload`, {
                        method: "DELETE",
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      })
                          .then((res) => {
                            if (!res.ok) throw new Error("Failed to delete file");
                            load(); // signal FilePond the file is removed
                          })
                          .catch((err) => {
                            console.error(err);
                            error("Could not delete file"); // signal error to FilePond
                          });
                    },
                  }}
                  chunkUploads={true}          // ✅ Enable chunked uploads
                  chunkSize={process.env.FILE_CHUNK_SIZE}  // ✅ 5MB chunks (you can change this)
                  chunkForce={true}            // ✅ Always use chunking, even for small files
              />
              {errors.video && (
                  <span className={styles.error}>
                    {errors.video.message}
                  </span>
              )}
            </div>}


          </div>
        </div>
      </div>


        <div className="ic_flex">
          <button onClick={(e) => navigator.push('/teacher')} type="button" className="ic_btn">
            BACK
          </button>
          <button type="submit" className="ic_btn">
            SAVE AND CONTINUE
          </button>
        </div>
      </>
  );
};

export default CreateCourseForm;
