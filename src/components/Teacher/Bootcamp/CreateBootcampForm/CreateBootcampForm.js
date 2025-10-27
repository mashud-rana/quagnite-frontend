"use client";

import {Controller, useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useEffect, useMemo, useRef, useState} from "react";
import styles from "./createBootcampFrom.module.css";
// import JoditEditor from "jodit-react";
import { BiChevronDown, BiChevronDownCircle, BiUpload } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import dynamic from "next/dynamic";
import { RiUploadCloud2Line } from "react-icons/ri";

import { FilePond, registerPlugin } from 'react-filepond';

// Import the plugins you want to use
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

import { useBootcampCategoriesQuery }  from "@/redux/features/teacher/bootcamp/bootcampApi";
import {
    useCourseTagsQuery as useBootcampTagsQuery,
    useCourseLanguagesQuery as useBootcampLanguagesQuery,
    useCourseDifficultyQuery as useBootcampDifficultyQuery,
    useCourseSubCategoriesQuery as useBootcampSubCategoriesQuery,
} from "@/redux/features/teacher/course/courseApi";
import {Select} from "antd";
import {useAnnouncementsQuery as useBootcampAnnouncementsQuery} from "@/redux/features/teacher/announcements/announcementsApi";
import Image from "next/image";
import {CloseOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const CreateBootcampForm = ({
                                register,
                                watch,
                                control,
                                setValue,
                                errors
                            }) => {
    const token = useSelector((state) => state.auth.access_token);
    const editor = useRef(null);
    const [bootcampCategory, setBootcampCategory] = useState([]);
    const [courseSubCategory, setBootcampSubCategory] = useState([]);
    const [bootcampTags, setBootcampTags] = useState([]);
    const [bootcampLanguage, setBootcampLanguage] = useState([]);
    const [bootcampDifficulty, setBootcampDifficulty] = useState([]);
    const [bootcampAnnouncements, setBootcampAnnouncements] = useState([]);
    const [replyContent, setReplyContent] = useState("");
    const thumbnailInputRef = useRef(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [files, setFiles] = useState([]);
    const [date, setDate] = useState(null);


    // API Call
    const { data: bootcampCategoriesData,
        isLoading: bootcampCategoriesLoading,
        isError: bootcampCategoriesError
    } = useBootcampCategoriesQuery();

    const {
        data: bootcampTagsData,
        isLoading: bootcampTagsIsLoading,
        isError: bootcampTagsIsError
    }= useBootcampTagsQuery();

    const {
        data: bootcampLanguagesData,
        isLoading: bootcampLanguagesLoading,
        isError: bootcampLanguagesError
    }= useBootcampLanguagesQuery();

    const {
        data: bootcampDifficultyData,
        isLoading: bootcampDifficultyLoading,
        isError: bootcampDifficultyError
    }= useBootcampDifficultyQuery();

    const {
        data: announcementsData,
        isLoading: announcementsLoading,
        isError: announcementsError
    }= useBootcampAnnouncementsQuery();

    const {
        data: subCategoriesData,
        isLoading: subCategoriesLoading,
        isError: subCategoriesError
    } = useBootcampSubCategoriesQuery({
            id: watch('bootcamp_category_id')
        },
        {
            skip: !watch('bootcamp_category_id')
        });


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

    // Language
    useEffect(() => {
        setBootcampLanguage([]);
        if(bootcampLanguagesData?.data?.data && !bootcampLanguagesLoading && !bootcampLanguagesError)
        {
            bootcampLanguagesData?.data?.data.map((item) => {
                setBootcampLanguage((prev) => [...prev, {label: item?.title, value: item?.id}])
            })
        }
    },[bootcampLanguagesData, bootcampLanguagesLoading,bootcampLanguagesError])

    // Difficulty
    useEffect(() => {
        setBootcampDifficulty([]);
        if(bootcampDifficultyData?.data?.data && !bootcampDifficultyLoading && !bootcampDifficultyError)
        {
            bootcampDifficultyData?.data?.data.map((item) => {
                setBootcampDifficulty((prev) => [...prev, {label: item?.title, value: item?.id}])
            })
        }
    },[bootcampDifficultyData, bootcampDifficultyLoading, bootcampDifficultyError])


    // Announcements
    useEffect(() => {
        setBootcampAnnouncements([]);
        if(announcementsData?.data?.data && !announcementsLoading && !announcementsError)
        {
            announcementsData?.data?.data.map((item) => {
                setBootcampAnnouncements((prev) => [...prev, {label: item?.title, value: item?.id}])
            })
        }
    },[announcementsData, announcementsLoading])

    // Sub Categories
    useEffect(() => {
        setBootcampSubCategory([]);
        if(subCategoriesData?.data && !subCategoriesLoading && !subCategoriesError)
        {
            subCategoriesData?.data.subcategories.map((item) => {
                setBootcampSubCategory((prev) => [...prev, {label: item?.name, value: item?.id}])
            })
        }
    },[subCategoriesData, subCategoriesLoading, subCategoriesError])


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



    return (
        <div>
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
                                <label className={styles.label}>Bootcamp Category *</label>
                                <div className={styles.inputContainer}>
                                    <div className={styles.selectWrapper}>
                                        <Controller
                                            name="bootcamp_category_id"
                                            control={control}
                                            render={({field}) => (
                                                <Select
                                                    {...field}
                                                    allowClear
                                                    showSearch
                                                    style={{width: '100%', height: '40px'}}
                                                    placeholder="Select bootcamp Category"
                                                    optionFilterProp="label"
                                                    options={[...bootcampCategory]}
                                                />
                                            )}
                                        />
                                    </div>
                                    {errors.bootcamp_category_id && (
                                        <span className={styles.error}>
                                          {errors.bootcamp_category_id.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <label className={styles.label}>Bootcamp Subcategory </label>
                                <div className={styles.inputContainer}>
                                    <div className={styles.selectWrapper}>
                                        <Controller
                                            name="bootcamp_subcategory_id"
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
                                                options={[...bootcampTags]}
                                            />
                                        )}
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
                                <label className={styles.label}>Start date *</label>
                                <div className={styles.inputContainer}>
                                    {/*<input*/}
                                    {/*    {...register("start_date", {*/}
                                    {/*        setValueAs: (value) => {*/}
                                    {/*            if (!value) return null;*/}
                                    {/*            const date = new Date(value);*/}
                                    {/*            // Format as YYYY-MM-DD (no time, no timezone)*/}
                                    {/*            const year = date.getFullYear();*/}
                                    {/*            const month = String(date.getMonth() + 1).padStart(2, "0");*/}
                                    {/*            const day = String(date.getDate()).padStart(2, "0");*/}
                                    {/*            return `${year}-${month}-${day}`;*/}
                                    {/*        },*/}
                                    {/*    })}*/}
                                    {/*    type="date"*/}
                                    {/*    className={styles.input}*/}
                                    {/*    placeholder="Enter price"*/}
                                    {/*/>*/}

                                    <Controller
                                        name="start_date"
                                        control={control}
                                        render={({field}) => (
                                            <DatePicker
                                                {...field}
                                                selected={field.value}
                                                onChange={(d) => {
                                                    field.onChange(d);
                                                    setDate(d);
                                                }}
                                                dateFormat="yyyy-MM-dd"
                                                placeholderText="Select a date"
                                                className={styles.input}
                                            />
                                        )}
                                    />



                                    {errors.start_date && (
                                        <span className={styles.error}>
                                          {errors.start_date.message}
                                        </span>
                                    )}
                                </div>
                            </div>


                            <div className={styles.formRow}>
                                <label className={styles.label}>End Date *</label>
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
                    <Controller
                        name="description"
                        control={control}
                        rules={{required: "Description is required"}}
                        render={({field}) => (
                            <JoditEditor
                                {...field}
                                ref={editor}
                                config={editorConfig}
                                tabIndex={2}
                                onChange={(content) => field.onChange(content)}
                            />
                        )}
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
                                    Select Bootcamp Announcements *
                                </label>
                                <div className={styles.inputContainer}>
                                    <Controller
                                        name="bootcamp_announcement_id"
                                        control={control}
                                        render={({field}) => (
                                            <Select
                                                {...field}
                                                allowClear
                                                showSearch
                                                style={{width: '100%', height: '40px'}}
                                                placeholder="Select Bootcamp Announcements"
                                                optionFilterProp="label"
                                                options={[...bootcampAnnouncements]}
                                            />
                                        )}
                                    />
                                    {errors.bootcamp_announcement_id && (
                                        <span className={styles.error}>
                                      {errors.bootcamp_announcement_id.message}
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

                            <div className={styles.formRow}>
                                <label className={styles.label}>Bootcamp Access Period *</label>
                                <div className={styles.inputContainer}>
                                    <div className={styles.selectWrapper}>
                                        <input
                                            type="number"
                                            min={0}
                                            defaultValue={0}
                                            {...register("access_period")}
                                            className={styles.input}
                                            placeholder="Bootcamp Access Period"
                                        />
                                    </div>
                                    {errors.access_period && (
                                        <span className={styles.error}>
                                          {errors.access_period.message}
                                        </span>
                                    )}
                                    <small>Enrollment will expire after this number of days. Set 0 for no expiration</small>

                                </div>
                            </div>

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
                                                    options={[...bootcampLanguage]}
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
                                <label className={styles.label}>Bootcamp Difficulty Level *</label>
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
                                                    placeholder="Select Bootcamp Difficulty Level"
                                                    optionFilterProp="label"
                                                    options={[...bootcampDifficulty]}
                                                />
                                            )}
                                        />
                                        {errors.difficulty_level_id && (<span className={styles.error}>
                                          {errors.difficulty_level_id.message}
                                        </span>)}
                                    </div>
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



                            {watch('thumb_type') === "upload" &&
                                (<div className="filepond-wrapper">
                                <FilePond
                                    {...register("file")}
                                    files={files}
                                    onupdatefiles={setFiles}
                                    allowMultiple={false}
                                    acceptedFileTypes={['video/*']}
                                    labelIdle='Drag & Drop your video or <span class="filepond--label-action">Browse</span>'

                                    /** ✅ File size validation */
                                    maxFileSize="5MB"
                                    labelMaxFileSizeExceeded="File is too large"
                                    labelMaxFileSize="Maximum file size is 5MB"

                                    server={{
                                        process: {
                                            url: `${process.env.NEXT_PUBLIC_API_URL}/teacher/bootcamp/chunk-upload`,
                                            method: "POST",
                                            headers: {
                                                Authorization: `Bearer ${token}`,
                                            },
                                            withCredentials: true,
                                            onload: (response) => {
                                                // const parsed = JSON.parse(response);
                                                console.log('parsed', response)
                                                setValue("file", response);
                                                return response; // This is uploadId for PATCH chunks
                                            },
                                            onerror: (error) => console.error("Upload failed:", error),
                                        },
                                        patch: {
                                            url: `${process.env.NEXT_PUBLIC_API_URL}/teacher/bootcamp/chunk-upload?patch=`,
                                            method: "PATCH",
                                            headers: {
                                                Authorization: `Bearer ${token}`,
                                            },
                                            withCredentials: true,
                                        },
                                        revert: (uniqueFileId, load, error) => {
                                            fetch(`${process.env.NEXT_PUBLIC_API_URL}/teacher/bootcamp/chunk-upload/${uniqueFileId}`, {
                                                method: "DELETE",
                                                headers: { Authorization: `Bearer ${token}` },
                                            })
                                                .then((res) => {
                                                    if (!res.ok) throw new Error("Failed to delete file");
                                                    load();
                                                })
                                                .catch((err) => {
                                                    console.error(err);
                                                    error("Could not delete file");
                                                });
                                        },
                                    }}
                                    chunkUploads={false}
                                    chunkSize={Number(process.env.NEXT_PUBLIC_FILE_PUBLIC_CHUNK_SIZE) || 1000000}
                                    chunkForce={false}
                                />
                                {errors.file && (
                                    <span className={styles.error}>
                                    {errors.file.message}
                                  </span>
                                )}
                            </div>)}


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
        </div>
    );
};

export default CreateBootcampForm;
