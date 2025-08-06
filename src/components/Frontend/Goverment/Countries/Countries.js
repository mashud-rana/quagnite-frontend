import Image from "next/image";
import React from "react";
import usa from "@/assets/images/all/usa.png";
import styles from "./countries.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Countries = () => {
  return (
    <section className="ic_section_space_bottom">
      <div className="container">
        <CardAnimation index={0} direction="up">
          <h4 className="ic_white mb-35">Countries</h4>
          <div className={styles.ic_grid}>
            <div className={styles.ic_card}>
              <Image
                className={`mb_16 ${styles.ic_img}`}
                src={usa}
                width={148}
                height={148}
                alt=""
              />
              <p className={styles.ic_name}>USA</p>
            </div>

            <div className={styles.ic_card}>
              <Image
                className={`mb_16 ${styles.ic_img}`}
                src={usa}
                width={148}
                height={148}
                alt=""
              />
              <p className={styles.ic_name}>USA</p>
            </div>

            <div className={styles.ic_card}>
              <Image
                className={`mb_16 ${styles.ic_img}`}
                src={usa}
                width={148}
                height={148}
                alt=""
              />
              <p className={styles.ic_name}>USA</p>
            </div>

            <div className={styles.ic_card}>
              <Image
                className={`mb_16 ${styles.ic_img}`}
                src={usa}
                width={148}
                height={148}
                alt=""
              />
              <p className={styles.ic_name}>USA</p>
            </div>

            <div className={styles.ic_card}>
              <Image
                className={`mb_16 ${styles.ic_img}`}
                src={usa}
                width={148}
                height={148}
                alt=""
              />
              <p className={styles.ic_name}>USA</p>
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Countries;
