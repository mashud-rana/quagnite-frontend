import React from "react";
import styles from "./hire.module.css";
import img1 from "@/assets/images/all/hire.png";
import img2 from "@/assets/images/all/animation.png";
import img3 from "@/assets/images/all/hire-line.png";
import Image from "next/image";

const Hire = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
        <div className={styles.ic_wrapper}>
          <Image
            src={img3}
            alt="Professional business meeting"
            className={styles.ic_line_img}
            width={500}
            height={411}
          />
          {/* Main Content Card - Positioned Left */}
          <div className={styles.ic_grid}>
            <div className={styles.contentCard}>
              <div className={styles.ic_text_container}>
                <h6 className="ic_purple">HIRE FROM US</h6>
                <p className={styles.ic_description}>
                  The people on your team are the most critical component to
                  business success; build your perfect team with
                  Quagnite-certified and educated employees.
                </p>
                <button className={styles.exploreButton}>EXPLORE</button>
              </div>
            </div>

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
          </div>

          <Image
            src={img2}
            alt="Professional business meeting"
            className={styles.ic_animation_img}
            width={110}
            height={110}
          />

          {/* Floating Decorative Elements */}
          <div className={styles.floatingElements}>
            {/* Blue Glowing Orbs */}
            <div className={styles.ic_circle1}></div>
            <div className={styles.ic_circle2}></div>

            {/* Small Floating Document Cards */}
            {/* <div className={styles.floatingDoc1}>
            <div className={styles.docContent}></div>
          </div> */}

            {/* <div className={styles.floatingDoc2}>
            <div className={styles.docIcon}>📄</div>
          </div> */}

            {/* Orange Accent Element */}
            {/* <div className={styles.orangeAccent}></div> */}

            {/* Small Geometric Dots */}
            <div className={styles.geometricDot1}></div>
            <div className={styles.geometricDot4}></div>
            <div className={styles.geometricDot2}></div>
            <div className={styles.geometricDot3}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;
