import React from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import img1 from "@/assets/images/all/about-hero.png";
import bg from "@/assets/images/all/about-bg.png";

const AboutBanner = () => {
  return (
    <section
      className="ic_section_margin_top_80"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className={styles.ic_hero_container}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <h4>Fostering growth and connecting people to opportunity</h4>
            <p className={styles.heroDescription}>
              Quagnite offers training and education tailored to meet the needs
              of the individual, for businesses and individuals alike. From
              self-paced learning to expert instruction, a broad range of
              subjects gives you the skills you need to succeed at the leading
              edge of technology and industry.
            </p>
          </div>

          {/* Right Content - 3 Images Layout */}
          <div className={styles.ic_hero_img}>
            <Image src={img1} height={625} width={613} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
