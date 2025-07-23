import React from "react";
import styles from "./DownloadReport.module.css";
import img from "@/assets/images/be-a-sponsor/download-right.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

export default function DownloadReport() {
  return (
    <section
      className={`${styles.ic_download_report} ic_section_space_bottom `}
    >
      <div className="container">
        <div className={styles.ic_download_report_main}>
          <CardAnimation index={0} direction="left">
            <Image src={img} alt="img" className={styles.bg_img} />
          </CardAnimation>
          <div className={styles.ic_download_inf_details}>
            <h6 className="mb_20">INTERNATIONAL IMPACT</h6>
            <h4 className="mb_20">Download our report</h4>
            <p className="mb_20">
              Want to get some insights on what our international impact are?
            </p>
            <button className="ic-btn1">DOWNLOAD</button>
          </div>
          <div className={styles.ic_download_inf}></div>
        </div>
      </div>
    </section>
  );
}
