import React from "react";
import styles from "./about.module.css";
import img1 from "@/assets/images/school/icon1.png";
import img2 from "@/assets/images/school/icon1.png";
import img3 from "@/assets/images/school/icon1.png";
import img4 from "@/assets/images/school/icon1.png";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.description}>
            We are passionate about building impactful tech solutions. Our team
            combines design, engineering, and strategy to deliver innovative
            digital experiences that matter.
          </p>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <div className={styles.circleContainer}>
            <div className={styles.circle}>
              <Image src={img1} alt="icon1" className={styles.circleImg} />
              <Image src={img2} alt="icon2" className={styles.circleImg} />
              <Image src={img3} alt="icon3" className={styles.circleImg} />
              <Image src={img4} alt="icon4" className={styles.circleImg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
