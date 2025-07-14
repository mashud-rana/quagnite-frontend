import React from "react";
import styles from "./businessData.module.css";
import img1 from "@/assets/images/all/chart-data.png";
import img2 from "@/assets/images/all/impact-passion-progress.png";
import badgeImg from "@/assets/images/all/passion-logo.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";

const BusinessData = () => {
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
                    width={486}
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
                <h6>Why Quagnite?</h6>
                <div className={styles.ic_data_container}>
                  <div>
                    <h4 className={styles.title}>The Best Data</h4>
                    <p>
                      The Business Dashboard lets you assign courses, see
                      employee completion, and analyze everything in between.
                      Leverage the power of data with Quagnite.
                    </p>
                  </div>

                  <div>
                    <h4 className={styles.title}>The Best Data</h4>
                    <p>
                      The Business Dashboard lets you assign courses, see
                      employee completion, and analyze everything in between.
                      Leverage the power of data with Quagnite.
                    </p>
                  </div>

                  <div>
                    <h4 className={styles.title}>The Best Data</h4>
                    <p>
                      The Business Dashboard lets you assign courses, see
                      employee completion, and analyze everything in between.
                      Leverage the power of data with Quagnite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default BusinessData;
