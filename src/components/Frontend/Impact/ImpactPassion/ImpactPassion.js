import React from "react";
import styles from "./impactPassion.module.css";
import Image from "next/image";
import img1 from "@/assets/images/all/dashboard.png";
import img2 from "@/assets/images/all/impact-passion-progress.png";
import badgeImg from "@/assets/images/all/passion-logo.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const ImpactPassion = () => {
  return (
    <section className="ic_section_space_top">
      <div className="container">
        <CardAnimation index={1} direction="up">
          <div className="ic_bg radious_16">
            <div className={styles.ic_grid}>
              <div className={styles.ic_img_wrapper}>
                <div className={styles.teammateImage}>
                  <Image
                    className={styles.teammateImage1}
                    src={img1}
                    alt="Teammate"
                    width={476}
                    height={297}
                  />

                  <Image
                    src={img2}
                    alt="Teammate"
                    width={310}
                    height={100}
                    className={styles.teammateImg2}
                  />

                  <div className={styles.badge}>
                    <Image src={badgeImg} alt="badge" width={80} height={80} />
                  </div>
                </div>
              </div>
              <div className={styles.teammateContent}>
                <h6>LAUNCH YOUR CAREER</h6>
                <h4 className={styles.title}>A passion for education</h4>
                <p>
                  Wether you prefer self-paced learning or expert instruction,
                  Quagnite is your partner and invested in your success, both in
                  education and beyond.
                </p>

                <div>
                  <button className={styles.ctaButton}>Explore</button>
                </div>
              </div>
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default ImpactPassion;
