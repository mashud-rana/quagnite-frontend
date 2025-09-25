"use client";

import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import { RiUploadCloud2Line } from "react-icons/ri";
import styles from "./ebookform.module.css";
// import JoditEditor from "jodit-react";

import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const EbookForm = () => {
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [zipFileName, setZipFileName] = useState(null);

  const editor = useRef(null);
  const [replyContent, setReplyContent] = useState("");
  const editorConfig = useMemo(
    () => ({
      readonly: false,
      placeholder:
        "What are your thoughts? (Type '/' to add images, files, or links)",
      height: 120,
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
        "fontsize",
        "|",
        "link",
        "image",
        "file",
      ],
      removeButtons: [
        "source",
        "fullsize",
        "about",
        "outdent",
        "indent",
        "video",
        "table",
      ],

      toolbarAdaptive: true,
      toolbarStickyOffset: 0,
      buttonsMD: 7,
      buttonsSM: 4,
      buttonsXS: 2,

      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
        url: "https://your-server.com/upload",
        method: "POST",
        process: (resp) => {
          return {
            files: [resp.url],
            path: resp.url,
            baseurl: resp.url,
          };
        },
      },
    }),
    []
  );

  return (
    <div>
      <div>
        <h5 className={styles.sectionTitle}>Ebook Upload</h5>

        <div className={styles}>
          {/* ZIP Upload */}
          <div className={styles.ic_file_input_container}>
            <div className={styles.uploadArea}>
              {zipFileName ? (
                <p style={{ fontSize: "14px", color: "#374151" }}>
                  ✅ {zipFileName}
                </p>
              ) : (
                <>
                  <input
                    type="file"
                    accept=".zip"
                    id="zipFile"
                    className={styles.fileInput}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setZipFileName(file.name);
                    }}
                  />
                  <label htmlFor="zipFile" className={styles.uploadLabel}>
                    <RiUploadCloud2Line className={styles.uploadIcon} />
                    <p className={styles.uploadText}>
                      Upload your .zip file (Max 10MB)
                    </p>
                    <p className={styles.uploadSubtext}>
                      Accepted filetypes: .zip
                    </p>
                  </label>
                </>
              )}
            </div>
          </div>

          {/* Image Upload */}
          <div className={styles.ic_file_input_container}>
            <div className={styles.uploadArea}>
              {thumbnailPreview ? (
                <Image
                  src={thumbnailPreview}
                  alt="Thumbnail Preview"
                  width={300}
                  height={100}
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                    // height: "100%",
                    // width: "100%",
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
                      if (file) setThumbnailPreview(URL.createObjectURL(file));
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
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ic_grid}>
        <div className={`${styles.formRow}`}>
          <label className={styles.label}>E-book Name</label>
          <input type="text" className={styles.input} />
        </div>

        <div className={`${styles.formRow}`}>
          <label className={styles.label}>Author Name</label>
          <input type="text" className={styles.input} />
        </div>

        <div className={`${styles.formRow}`}>
          <label className={styles.label}>Publisher</label>
          <input type="text" className={styles.input} />
        </div>

        <div className={`${styles.formRow}`}>
          <label className={styles.label}>ISBN14</label>
          <input type="text" className={styles.input} />
        </div>

        <div className={`${styles.formRow}`}>
          <label className={styles.label}>Country</label>
          <input type="text" className={styles.input} />
        </div>

        <div className={`${styles.formRow}`}>
          <label className={styles.label}>Language</label>
          <input type="text" className={styles.input} />
        </div>

        <div className={`${styles.formRow}`}>
          <label className={styles.label}>E-book Tags</label>
          <input type="text" className={styles.input} />
        </div>

        <div className={`${styles.formRow}`}>
          <label className={styles.label}>E-book price</label>
          <input type="number" placeholder="$10000" className={styles.input} />
        </div>
      </div>

      <div className=" ic_text_editor">
        <p className={` mb_8`}>E-book Overview*</p>
        <div className={styles.ic_note_text_editor_wrapper}>
          <JoditEditor
            ref={editor}
            value={replyContent}
            config={editorConfig}
            tabIndex={2}
            onChange={(newContent) => setReplyContent(newContent)}
          />
        </div>

        {replyContent.trim() && (
          <div className={styles.ic_btn_container}>
            <button
              className={`${styles.ic_btn} ${styles.ic_cencel}`}
              onClick={handleCancelReply}
            >
              Cancel
            </button>
            <button
              className={`${styles.ic_btn} ${styles.ic_save}`}
              onClick={handleSubmitReply}
            >
              Save note
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EbookForm;
