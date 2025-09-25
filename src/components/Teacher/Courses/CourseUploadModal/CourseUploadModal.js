"use client";

import React, { useState } from "react";
import { Modal, Checkbox } from "antd";
import styles from "./UploadModal.module.css";
import { MdFileUpload } from "react-icons/md";

const CourseUploadModal = ({ open, onCancel }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]); // checkboxes

  // File change handler
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
      setVideoUrl(URL.createObjectURL(file));
    } else {
      alert("Please select a valid video file");
    }
  };

  // Reset everything
  const handleCancel = () => {
    setVideoFile(null);
    setVideoUrl(null);
    setSelectedOptions([]);
    onCancel();
  };

  const handleCheckboxChange = (checkedValues) => {
    setSelectedOptions(checkedValues);
  };

  return (
    <Modal
      title="Upload Video"
      open={open}
      onCancel={handleCancel}
      onOk={handleCancel}
      style={{ maxWidth: "90vw" }}
      width={928}
      okText="Save"
      cancelText="Cancel"
    >
      <hr className={styles.ic_hr} />

      {/* Checkbox wrapper */}
      <div className={styles.ic_checkbox_wrapper}>
        <Checkbox.Group
          options={["Upload Video", "Youtube", "Vimeo", "Audio"]}
          value={selectedOptions}
          onChange={handleCheckboxChange}
        />
      </div>

      {/* Upload Box */}
      <div className={styles.ic_upload_box}>
        {!videoUrl ? (
          <>
            <MdFileUpload className={styles.ic_upload_icon} />

            {/* Hidden File Input */}
            <input
              type="file"
              accept="video/*"
              id="videoUpload"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            {/* Custom Button */}
            <button
              type="button"
              className={styles.ic_button}
              onClick={() => document.getElementById("videoUpload").click()}
            >
              Browse File
            </button>

            <p className={styles.ic_upload_subtitle}>
              No file selected (MP4 or WMV)
            </p>
          </>
        ) : (
          <div className={styles.ic_video_preview}>
            <video src={videoUrl} controls className={styles.ic_video} />
            <p className={styles.ic_video_name}>{videoFile?.name}</p>
          </div>
        )}
      </div>

      <div>
        <label>Title</label>
        <input className={styles.ic_input} type="text" />
      </div>
    </Modal>
  );
};

export default CourseUploadModal;
