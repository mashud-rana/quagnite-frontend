import React from "react";
import img from "@/assets/images/all/school-banner.png";
import img2 from "@/assets/images/all/school-banner2.png";
import img3 from "@/assets/images/all/school-banner3.png";
import img4 from "@/assets/images/all/school-banner4.png";
import img5 from "@/assets/images/all/logo.png";
// import bg from "@/assets/images/all/school-banner-bg.png";
import bg from "@/assets/images/bg/bg1.png";
import styles from "./banner.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import circle from "@/assets/images/full-circle.png";

const BlockBanner = () => {
  return (
    <section
      className={` ic_section_margin_top_80 `}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        className={styles.ic_circle1}
        src={circle}
        height={1104}
        width={1104}
        alt=""
      />
      <div className={styles.ic_wrapper}>
        <div className="container">
          <div>
            <div className={styles.ic_hero_container}>
              {/* Left Content */}
              <div className={styles.leftContent}>
                <CardAnimation index={0} direction="left">
                  <h4>
                    School of Blockchain and Specialized Information Technology
                  </h4>
                </CardAnimation>
                <CardAnimation index={0} direction="up">
                  <p className={styles.heroDescription}>
                    Learn to create consensus-based software and physical
                    networks and to lead teams in complex technology projects.
                  </p>
                </CardAnimation>
              </div>

              {/* ✅ Move Image here (inside grid) */}

              <Image
                className={styles.ic_hero_img}
                width={960}
                height={400}
                src={img}
                alt=""
              />

              <Image
                className={styles.ic_hero_img2}
                width={280}
                height={240}
                src={img2}
                alt=""
              />

              <Image
                className={styles.ic_hero_img3}
                width={240}
                height={90}
                src={img3}
                alt=""
              />

              <Image
                className={styles.ic_hero_img4}
                width={80}
                height={80}
                src={img5}
                alt=""
              />

              <Image
                className={styles.ic_hero_img5}
                width={178}
                height={147}
                src={img4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockBanner;
