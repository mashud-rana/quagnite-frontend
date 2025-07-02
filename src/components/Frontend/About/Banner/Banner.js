import React from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import bg from "@/assets/images/all/about-bg.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const AboutBanner = ({ title, subtitle, img }) => {
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
            <CardAnimation index={0} direction="left">
              <h4>{title}</h4>
            </CardAnimation>
            <CardAnimation index={0} direction="up">
              <p className={styles.heroDescription}>{subtitle}</p>
            </CardAnimation>
          </div>

          {/* Right Content - 3 Images Layout */}

          <div className={styles.ic_hero_img}>
            <CardAnimation index={0} direction="right">
              <Image src={img} alt="" />
            </CardAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
