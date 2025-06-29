import React from "react";
import styles from "./certificate.module.css";
import Image from "next/image";

// Dummy certificate images — replace with actual paths
import cert1 from "@/assets/images/all/certificate.png";

const Certificate = () => {
  return (
    <section>
      <div className="container ic_white">
        <h6> Certification</h6>
        <h3 className={styles.ic_title}>Setting The Industry Standards</h3>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Image src={cert1} alt="Certificate 1" className={styles.image} />
          </div>
          <div className={styles.card}>
            <Image src={cert1} alt="Certificate 2" className={styles.image} />
          </div>
          <div className={styles.card}>
            <Image src={cert1} alt="Certificate 3" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
