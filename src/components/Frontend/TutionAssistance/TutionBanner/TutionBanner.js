import React from "react";
import styles from "./banner.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";

const TutionBanner = ({ bg, img, title, des }) => {
  return (
    <section
      className={` ic_section_margin_top_80 `}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.ic_wrapper}>
        <div className="container">
          <div>
            <div className={styles.ic_hero_container}>
              {/* Left Content */}
              <div className={styles.leftContent}>
                <CardAnimation index={0} direction="left">
                  <h4>{title}</h4>
                </CardAnimation>
                <CardAnimation index={0} direction="up">
                  <p className={styles.heroDescription}>{des}</p>
                </CardAnimation>
              </div>

              {/*  Move Image here (inside grid) */}
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

export default TutionBanner;
