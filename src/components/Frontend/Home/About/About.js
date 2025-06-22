import React from "react";
import styles from "./about.module.css";
import img1 from "@/assets/images/about/img1.png";
import img2 from "@/assets/images/about/img2.png";
import img3 from "@/assets/images/about/img3.png";
import img4 from "@/assets/images/about/img4.png";
import line from "@/assets/images/about/line.png";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.ic_about_section}>
      <div className="container">
        <div className={styles.ic_content_wrapper}>
          {/* 8/12 Column */}
          <div className={styles.ic_left_column}>
            <h6 className={styles.title}>About Us</h6>
            <h3>
              Dedicated to <span>education</span>
            </h3>
            <p className={styles.description}>
              Quagnite is a multimodal platform that offers learners their
              choice of instruction. It delivers cutting-edge content and
              certifications across a broad range of technology subjects. Our
              members join a community of practitioners that includes talent
              placement and continual growth.
            </p>
          </div>

          {/* 4/12 Column */}
          <div className={styles.ic_right_column}>
            <Image src={line} alt="icon1" className={styles.ic_line_img} />
            <div className={styles.ic_circle_container}>
              <div className={styles.circle}>
                <Image src={img1} alt="icon1" className={styles.circleImg} />
                <Image src={img2} alt="icon2" className={styles.circleImg} />
                <Image src={img3} alt="icon3" className={styles.circleImg} />
                <Image src={img4} alt="icon4" className={styles.circleImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
