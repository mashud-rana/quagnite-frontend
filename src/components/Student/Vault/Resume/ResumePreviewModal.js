import { Modal, Spin } from "antd";
import { useState } from "react";
import { MdOutlineDownload, MdClose, MdZoomIn, MdZoomOut } from "react-icons/md";
import styles from "./resumeModal.module.css";

const ResumePreviewModal = ({ open, onClose, resume, onDownload, isDownloading }) => {
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(100);

  const handleDownload = () => {
    if (onDownload && resume?.uuid) {
      onDownload(resume.uuid);
    }
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 25, 50));
  };

  const handleLoad = () => {
    setLoading(false);
  };

  const handleModalClose = () => {
    setLoading(true);
    setZoom(100);
    onClose();
  };

  return (
    <Modal
      title={
        <div className={styles.modalHeader}>
          <div className={styles.modalTitleSection}>
            <h3 className={styles.modalTitle}>{resume?.title || "Resume Preview"}</h3>
          </div>
          <div className={styles.modalActions}>
            <button
              className={styles.zoomButton}
              onClick={handleZoomOut}
              disabled={zoom <= 50}
              title="Zoom Out"
            >
              <MdZoomOut />
            </button>
            <span className={styles.zoomLevel}>{zoom}%</span>
            <button
              className={styles.zoomButton}
              onClick={handleZoomIn}
              disabled={zoom >= 200}
              title="Zoom In"
            >
              <MdZoomIn />
            </button>
            <button
              className={styles.downloadButton}
              onClick={handleDownload}
              disabled={isDownloading}
              title="Download Resume"
            >
              {isDownloading ? (
                <Spin size="small" />
              ) : (
                <>
                  <MdOutlineDownload />
                  <span>Download</span>
                </>
              )}
            </button>
          </div>
        </div>
      }
      open={open}
      onCancel={handleModalClose}
      footer={null}
      width="90%"
      style={{ maxWidth: "1200px", top: 20 }}
      className={styles.resumeModal}
      closeIcon={<MdClose />}
    >
      <div className={styles.modalContent}>
        {loading && (
          <div className={styles.loadingContainer}>
            <Spin size="large" tip="Loading resume..." />
          </div>
        )}
        {resume?.file_url ? (
          <div 
            className={styles.iframeContainer}
            style={{ 
              transform: `scale(${zoom / 100})`,
              transformOrigin: 'top center'
            }}
          >
            <iframe
              src={`${resume.file_url}#toolbar=0&navpanes=0&scrollbar=1`}
              width="100%"
              height="700px"
              style={{ border: "none" }}
              onLoad={handleLoad}
              title="Resume Preview"
            />
          </div>
        ) : (
          <div className={styles.noPreview}>
            <p>No preview available for this resume.</p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ResumePreviewModal;