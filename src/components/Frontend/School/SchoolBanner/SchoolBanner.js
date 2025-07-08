import React from "react";
import styles from "./schoolBanner.module.css";
import img1 from "@/assets/images/all/school-banner1.png";
import img2 from "@/assets/images/all/school-banner2.png";
import img3 from "@/assets/images/all/school-banner3.png";
import img4 from "@/assets/images/all/school-banner4.png";
import bg from "@/assets/images/all/school-banner-bg.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import badgeImg from "@/assets/images/all/badge.png";

const SchoolBanner = () => {
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
              <h4 className="mb_20">
                School of Blockchain and Specialized Information Technology
              </h4>
            </CardAnimation>
            <CardAnimation index={0} direction="up">
              <p className={styles.heroDescription}>
                Quagnite offers training and education tailored to meet the
                needs of the individual, for businesses and individuals alike.
                From self-paced learning to expert instruction, a broad range of
                subjects gives you the skills you need to succeed at the leading
                edge of technology and industry.
              </p>

              <button className={styles.exploreButton}>EXPLORE</button>
            </CardAnimation>
          </div>

          {/* Right Content - 3 Images Layout */}
          <CardAnimation index={0} direction="right">
            <div className={styles.rightContent}>
              <div className={styles.imagesContainer}>
                {/* Main Large Image */}
                <div className={styles.mainImage}>
                  <Image src={img1} height={520} width={820} alt="" />
                </div>

                <div className={styles.badge}>
                  <Image src={badgeImg} alt="badge" width={60} height={60} />
                </div>

                {/* Positioned Image 1 - Top Right */}
                <div className={styles.positionedImage1}>
                  <Image src={img3} height={100} width={300} alt="" />
                </div>

                <div className={styles.positionedImage3}>
                  <Image src={img4} height={120} width={145} alt="" />
                </div>

                {/* Positioned Image 2 - Bottom Left */}
                <div className={styles.positionedImage2}>
                  <Image src={img2} height={200} width={250} alt="" />
                </div>
              </div>
            </div>
          </CardAnimation>
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

export default SchoolBanner;
