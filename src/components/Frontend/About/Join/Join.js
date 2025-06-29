import React from "react";
import styles from "./join.module.css";
import img1 from "@/assets/images/all/join.png";
import img2 from "@/assets/images/all/animation.png";
import img3 from "@/assets/images/all/hire-line.png";
import Image from "next/image";

const Join = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
        <div className={styles.ic_wrapper}>
          {/* Main Content Card - Positioned Left */}
          <div className={styles.ic_grid}>
            {/* Business Meeting Image - Large Right Side */}
            <div className={styles.imageSection}>
              <Image
                src={img1}
                alt="Professional business meeting"
                className={styles.businessImage}
                width={630}
                height={430}
              />
            </div>
            <div className={styles.contentCard}>
              <div className={styles.ic_text_container}>
                <h6 className="ic_purple">Join US</h6>
                <h3 className={styles.ic_main_title}>
                  Supercharge your passion.
                </h3>
                <p className={styles.ic_description}>
                  The people on your team are the most critical component to
                  business success; build your perfect team with
                  Quagnite-certified and educated employees.
                </p>
                <button className={styles.exploreButton}>EXPLORE</button>
              </div>
            </div>
          </div>

          <div className={styles.floatingElements}>
            <div className={styles.ic_circle2}></div>
            <div className={styles.geometricDot1}></div>
            <div className={styles.geometricDot4}></div>
            {/* <div className={styles.geometricDot2}></div> */}
            {/* <div className={styles.geometricDot3}></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
