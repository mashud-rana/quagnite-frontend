import React from "react";
import styles from "./resourceBanner.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import bg from "@/assets/images/all/resource-banner-bg.png";
import img from "@/assets/images/all/bootcamp-banner.png";

const ResourceBanner = () => {
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
                  <h4>
                    The Quagnite community is founded on the idea of education
                    for all.
                  </h4>
                </CardAnimation>
                <CardAnimation index={0} direction="up">
                  <p className={styles.heroDescription}>
                    Find what you need here, from the latest news in the tech
                    field to opportunities to meet and network in person.
                  </p>

                  <button className="ic_btn">Explore</button>
                </CardAnimation>
              </div>

              {/* ✅ Move Image here (inside grid) */}
              <Image
                className={styles.ic_hero_img}
                width={960}
                height={400}
                src={img}
                alt="community-forum"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceBanner;
