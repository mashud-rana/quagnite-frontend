import React from "react";
import styles from "./banner.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import bg from "@/assets/images/all/tution-banner-bg.png";
import img from "@/assets/images/all/tution-banner.png";

const TutionBanner = () => {
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
                  <h4>Education for all</h4>
                </CardAnimation>
                <CardAnimation index={0} direction="up">
                  <p className={styles.heroDescription}>
                    Quagnite welcomes students from all walks of life, all
                    backgrounds, regardless of color, race, or creed. You’re
                    joining a family, a community, and we help each other out.
                    If you need tuitions assistance, all you have to do is ask.
                    We’re here for you.
                  </p>
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
