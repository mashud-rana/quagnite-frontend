import { Modal, Upload, Input, message, Spin } from "antd";
import { useState, useEffect } from "react";
import { MdOutlineUploadFile, MdClose } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import styles from "./uploadResumeModal.module.css";
import { antIcon, confirmDelete, toastError, toastSuccess, appendInFormData } from "@/utils/helper";



const UploadResumeModal = ({ open, onClose, onUpload, isUploading, isSuccess }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [fileList, setFileList] = useState([]);

  const handleFileChange = (info) => {
    const { fileList: newFileList } = info;
    
    // Keep only the last file
    const limitedFileList = newFileList.slice(-1);
    setFileList(limitedFileList);

    if (limitedFileList.length > 0) {
      const uploadedFile = limitedFileList[0].originFileObj;
      setFile(uploadedFile);
    } else {
      setFile(null);
    }
  };

  const beforeUpload = (file) => {
    const isPDF = file.type === "application/pdf";
    if (!isPDF) {
        toastError("You can only upload PDF files!");
     
      return Upload.LIST_IGNORE;
    }

    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
        toastError("File must be smaller than 10MB!");
      return Upload.LIST_IGNORE;
    }

    return false; // Prevent auto upload
  };

  const handleUpload = () => {
    if (!title) {
        toastError("Please enter a resume title!");
      return;
    }

    if (!file) {
      toastError("Please select a PDF file to upload!");
      return;
    }

    // // Create FormData
    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("file", file);

    // Call the upload function
    if (onUpload) {
      
      onUpload(appendInFormData({
        title: title,
        file: file
      }));
  
    }
  };

  const resetData = ()=>{
    setTitle(null)
    setFile(null)
    setFileList([]);
  }
  const handleClose = () => {
    if (!isUploading) {
      resetData();
      setFileList([]);
      onClose();
    }
  };

  const handleRemove = () => {
    setFile(null);
    setFileList([]);
  };

  //is success request check
  useEffect(()=>{
    if(isSuccess){
      resetData();
      onClose();
    }
  },[isSuccess])

  return (
    <Modal
      title={
        <div className={styles.modalHeader}>
          <MdOutlineUploadFile className={styles.headerIcon} />
          <span>Upload Resume</span>
        </div>
      }
      open={open}
      onCancel={handleClose}
      footer={null}
      width={600}
      className={styles.uploadModal}
      closeIcon={<MdClose />}
      maskClosable={!isUploading}
      keyboard={!isUploading}
    >
      <div className={styles.modalContent}>
        {/* Title Input */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Resume Title <span className={styles.required}>*</span>
          </label>
          <Input
            placeholder="Enter resume title (e.g., John Doe Resume 2024)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            size="large"
            disabled={isUploading}
            maxLength={100}
            showCount
            className={styles.titleInput}
          />
        </div>

        {/* File Upload */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Resume File (PDF) <span className={styles.required}>*</span>
          </label>
          <Upload.Dragger
            name="file"
            fileList={fileList}
            onChange={handleFileChange}
            beforeUpload={beforeUpload}
            onRemove={handleRemove}
            accept=".pdf"
            disabled={isUploading}
            className={styles.uploadDragger}
            maxCount={1}
          >
            <div className={styles.uploadContent}>
              <FaFilePdf className={styles.uploadIcon} />
              <p className={styles.uploadText}>
                Click or drag PDF file to this area to upload
              </p>
              <p className={styles.uploadHint}>
                Support for a single PDF file. Maximum file size: 10MB
              </p>
            </div>
          </Upload.Dragger>
        </div>

        {/* Upload Button */}
        <div className={styles.buttonGroup}>
          <button
            className={styles.cancelButton}
            onClick={handleClose}
            disabled={isUploading}
          >
            Cancel
          </button>
          <button
            className={styles.uploadButton}
            onClick={handleUpload}
            disabled={isUploading || !title || !file}
          >
            {isUploading ? (
              <>
                <span className={styles.spinner}></span>
                Uploading...
              </>
            ) : (
              <>
                <MdOutlineUploadFile />
                Upload Resume
              </>
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UploadResumeModal;