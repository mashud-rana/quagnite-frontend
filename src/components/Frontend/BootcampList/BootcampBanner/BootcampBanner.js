import React from "react";
import styles from "./bootcampBanner.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
// import bg from "@/assets/images/all/bootcamp-banner-bg.png";
import bg from "@/assets/images/bg/bg2.png";
import circle from "@/assets/images/full-circle.png";
import img from "@/assets/images/all/bootcamp-banner.png";

const BootcampBanner = () => {
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
        height={944}
        width={944}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampBanner;
