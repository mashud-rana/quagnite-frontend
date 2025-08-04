import React from "react";
import styles from "./train.module.css";
import Image from "next/image";
import img1 from "@/assets/images/all/chart.png";
import img2 from "@/assets/images/all/metting.png";
import img3 from "@/assets/images/all/img3.png";
import bg from "@/assets/images/all/train-bg.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Train = () => {
  return (
    <section className="ic_section_space_top">
      <div className="container">
        <CardAnimation index={0} direction="up">
          <div className={styles.ic_wapper}>
            <div className={styles.content}>
              {/* Left Side - Layered Images */}
              <div
                className={styles.leftSection}
                style={{
                  backgroundImage: `url(${bg.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                {/* Chart Image */}
                <div className={styles.chartImage}>
                  <Image
                    src={img1}
                    alt="Analytics Chart"
                    className={styles.chartImg}
                  />
                </div>

                {/* Business Meeting Image */}
                <div className={styles.meetingImage}>
                  <Image
                    src={img2}
                    alt="Business Meeting"
                    className={styles.meetingImg}
                  />
                </div>

                {/* Small Blue Cube */}
                {/* <div className={styles.cubeIcon}>
              <div className={styles.cube}>
                <div className={styles.cubeInner}>📦</div>
              </div>
            </div> */}

                {/* Small Additional Image */}
                <div className={styles.smallImage}>
                  <Image
                    src={img3}
                    alt="Small Icon"
                    className={styles.smallImg}
                    height={80}
                    width={80}
                  />
                </div>
              </div>

              {/* Right Side - Content Card */}
              <div className={styles.rightSection}>
                <div className={styles.contentCard}>
                  <h6 className={styles.subtitle}>TRAIN YOUR EXISTING TEAM</h6>
                  <h2 className={styles.title}>Train Your Workforce</h2>
                  <p className={styles.description}>
                    Take the first step towards a brighter future.
                  </p>
                  <button className={styles.exploreButton}>EXPLORE</button>
                </div>
              </div>
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Train;
