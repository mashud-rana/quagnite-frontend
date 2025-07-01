import React from "react";
import styles from "./train.module.css";
import Image from "next/image";
import img1 from "@/assets/images/all/chart.png";
import img2 from "@/assets/images/all/metting.png";
import img3 from "@/assets/images/all/img3.png";
import bg from "@/assets/images/all/train-bg.png";

const Train = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
        <div className={styles.ic_wapper}>
          <div className={styles.spiderWeb}>
            {/* <Image
              src={img1}
              alt="Analytics Chart"
              className={styles.chartImg}
            /> */}
            {/* <svg
            className={styles.webSvg}
            viewBox="0 0 1400 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#333" strokeWidth="1" opacity="0.3">
              <line x1="0" y1="100" x2="1400" y2="100" />
              <line x1="0" y1="200" x2="1400" y2="200" />
              <line x1="0" y1="300" x2="1400" y2="300" />
              <line x1="0" y1="400" x2="1400" y2="400" />
              <line x1="0" y1="500" x2="1400" y2="500" />

              <line x1="200" y1="0" x2="200" y2="600" />
              <line x1="400" y1="0" x2="400" y2="600" />
              <line x1="600" y1="0" x2="600" y2="600" />
              <line x1="800" y1="0" x2="800" y2="600" />
              <line x1="1000" y1="0" x2="1000" y2="600" />
              <line x1="1200" y1="0" x2="1200" y2="600" />

              <line x1="200" y1="100" x2="400" y2="200" />
              <line x1="400" y1="100" x2="600" y2="300" />
              <line x1="600" y1="200" x2="800" y2="400" />
              <line x1="800" y1="100" x2="1000" y2="300" />
              <line x1="1000" y1="200" x2="1200" y2="400" />

              <line x1="200" y1="300" x2="400" y2="400" />
              <line x1="400" y1="300" x2="600" y2="500" />
              <line x1="600" y1="400" x2="800" y2="500" />
              <line x1="800" y1="300" x2="1000" y2="500" />
            </g>

            <g fill="#555" opacity="0.6">
              <circle cx="200" cy="100" r="3" />
              <circle cx="400" cy="200" r="3" />
              <circle cx="600" cy="300" r="3" />
              <circle cx="800" cy="400" r="3" />
              <circle cx="1000" cy="300" r="3" />
              <circle cx="1200" cy="400" r="3" />
              <circle cx="400" cy="400" r="3" />
              <circle cx="600" cy="500" r="3" />
              <circle cx="800" cy="500" r="3" />
              <circle cx="1000" cy="500" r="3" />
            </g>
          </svg> */}
          </div>

          <div className={styles.content}>
            {/* Left Side - Layered Images */}
            <div
              className={styles.leftSection}
              style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
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
      </div>
    </section>
  );
};

export default Train;
