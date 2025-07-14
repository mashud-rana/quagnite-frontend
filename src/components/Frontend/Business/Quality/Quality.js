import React from "react";
import styles from "./quality.module.css";
import Image from "next/image";
import img1 from "@/assets/images/all/chart-data.png";
import bg from "@/assets/images/all/quality-bg.png";

const Quality = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className={styles.ic_wrapper}>
          <div className={styles.backgroundElements}>
            <div className={styles.bgSphere1}></div>
            <div className={styles.bgSphere2}></div>
            <div className={styles.bgTriangle}></div>
          </div>
          <div className={styles.ic_grid}>
            <div className={styles.chartsContainer}>
              <div className={`${styles.card} ${styles.card1}`}>
                <Image
                  src={img1}
                  alt="Donut chart showing percentages"
                  width={235}
                  height={180}
                  className={styles.chartImage}
                />
              </div>
              <div className={`${styles.card} ${styles.card2}`}>
                <Image
                  src={img1}
                  alt="Line graph showing data over time"
                  width={277}
                  height={232}
                  className={styles.chartImage}
                />
              </div>
              <div className={`${styles.card} ${styles.card3}`}>
                <Image
                  src={img1}
                  alt="Circular progress indicator at 85%"
                  width={235}
                  height={180}
                  className={styles.chartImage}
                />
              </div>
            </div>

            {/* Right - Content and Discount */}
            <div className={styles.contentRight}>
              <h4 className={styles.title}>Affordable quality at scale</h4>
              <p className={styles.description}>
                With corporate discounts, companies can access the right-sized
                workforce training and education at the most efficient rate.
                Whether your business is large or small, Quagnite has the right
                option to take your team to the next level.
              </p>
              <button className={styles.button}>GET STARTED</button>

              <div className={styles.discountBanner}>
                <div className={styles.discountText}>
                  <span className={styles.discountPercentage}>25%</span>
                  <span className={styles.ic_off}>
                    off when you enroll for Teams
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
