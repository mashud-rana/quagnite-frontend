import React from "react";
import styles from "./certificatePreview.module.css";

const CertificatePreview = ({ data }) => {
  return (
    <div className={styles.certificate}>
      <div className={styles.certificateInner}>
        <div className={styles.header}>
          <span className={styles.brand}>
            aws × <span className={styles.brandHighlight}>Q</span>UAGNITE
          </span>
        </div>

        <div className={styles.title}>
          CERTIFICATE
          <div className={styles.subtitle}>OF COMPLETION</div>
        </div>

        <div className={styles.presentedTo}>PRESENTED TO</div>

        <div
          className={styles.recipientName}
          style={{
            fontSize: `${data.fontSize}px`,
            color: data.fontColor,
          }}
        >
          {data.recipientName}
        </div>

        <div className={styles.bodyText}>{data.bodyContent}</div>

        <div className={styles.footer}>
          <div className={styles.footerItem}>
            <div className={styles.line}></div>
            <div className={styles.footerLabel}>{data.date}</div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.line}></div>
            <div className={styles.footerLabel}>{data.signature}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePreview;
