"use client";

import React, { useState } from "react";
import { Modal, Checkbox } from "antd";
import styles from "./BootcampModal.module.css";
import { MdFileUpload } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";

const BootcampModal = ({ open, onCancel }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

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
    onCancel(); // modal বন্ধ করবে
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
          options={["Upload Video", "Youtube", "Zoom"]}
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

      <div className="mb-24">
        <h5 className="mb-24 fw_500">Bootcamp Scheduling</h5>

        <div className={styles.ic_form_group}>
          <div className={styles.ic_grid}>
            <div className={styles.ic_input_container}>
              <label>Select Date</label>
              <input className={styles.ic_input} type="date" />
            </div>

            <div className={styles.ic_input_container}>
              <label>Bootcamp Meeting type</label>
              <div className={styles.selectWrapper}>
                <select className={styles.ic_select}>
                  <option value="">Enable</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="data-science">Data Science</option>
                </select>
                <BiChevronDown className={styles.selectIcon} />
              </div>
            </div>
          </div>

          <div className={styles.ic_grid}>
            <div className={styles.ic_input_container}>
              <label>Meeting Hours</label>
              <input className={styles.ic_input} type="text" />
            </div>

            <div className={styles.ic_input_container}>
              <label>Participant Size</label>
              <input className={styles.ic_input} type="text" />
            </div>
          </div>

          <div className={styles.ic_grid}>
            <div className={styles.ic_input_container}>
              <label>Language</label>
              <input className={styles.ic_input} type="text" />
            </div>

            <div className={styles.ic_input_container}>
              <label>Bootcamp Difficulty Level</label>
              <input className={styles.ic_input} type="text" />
            </div>
          </div>

          <div className={styles.ic_input_container}>
            <label>Bootcamp Feature Point</label>
            <div className={styles.selectWrapper}>
              <select className={styles.ic_select}>
                <option value="">Enable</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-development">Mobile Development</option>
                <option value="data-science">Data Science</option>
              </select>
              <BiChevronDown className={styles.selectIcon} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h5 className="mb-24 fw_500">Bootcamp Scheduling</h5>

        <div className={styles.ic_form_group}>
          <div className={styles.ic_grid}>
            <div className={styles.ic_input_container}>
              <label>Meeting ID</label>
              <input className={styles.ic_input} type="text" />
            </div>

            <div className={styles.ic_input_container}>
              <label>Password</label>
              <input className={styles.ic_input} type="text" />
            </div>
          </div>

          <div className={styles.ic_grid2}>
            <div className={styles.ic_input_container}>
              <label>Language</label>
              <input className={styles.ic_input} type="text" />
            </div>

            <div className={styles.ic_end}>
              <button className="ic_btn w_100">generate</button>
            </div>
          </div>

          <div className={styles.ic_input_container}>
            <label>Bootcamp Feature Point</label>
            <input className={styles.ic_input} type="text" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BootcampModal;
