import React from "react";
import styles from "./hero.module.css";
import img1 from "@/assets/images/all/hero1.png";
import img2 from "@/assets/images/all/hero2.png";
import img3 from "@/assets/images/all/hero3.png";
import bg from "@/assets/images/all/bg.png";
import Image from "next/image";

const Hero = () => {
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
            <h2 className="mb_20">Supercharge your passion</h2>
            <p className={styles.heroDescription}>
              Quagnite offers training and education tailored to meet the needs
              of the individual, for businesses and individuals alike. From
              self-paced learning to expert instruction, a broad range of
              subjects gives you the skills you need to succeed at the leading
              edge of technology and industry.
            </p>
            <button className={styles.exploreButton}>EXPLORE</button>
          </div>

          {/* Right Content - 3 Images Layout */}
          <div className={styles.rightContent}>
            <div className={styles.imagesContainer}>
              {/* Main Large Image */}
              <div className={styles.mainImage}>
                <Image src={img1} height={470} width={420} alt="" />
              </div>

              {/* Positioned Image 1 - Top Right */}
              <div className={styles.positionedImage1}>
                <Image src={img3} height={100} width={300} alt="" />
              </div>

              {/* Positioned Image 2 - Bottom Left */}
              <div className={styles.positionedImage2}>
                <Image src={img2} height={200} width={250} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.networkLines}></div>
          <div className={styles.glowEffect}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
