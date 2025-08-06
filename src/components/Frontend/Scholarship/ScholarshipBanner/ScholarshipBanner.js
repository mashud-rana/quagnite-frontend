import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import React from "react";
import bg from "@/assets/images/all/scholarship-banner-bg.png";
import img from "@/assets/images/all/scholarship-banner.png";
import Image from "next/image";
import styles from "./banner.module.css";

const ScholarshipBanner = () => {
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
                  <h4>A record of excellence, and potential for the future.</h4>
                </CardAnimation>
                <CardAnimation index={0} direction="up">
                  <p className={styles.heroDescription}>
                    Quagnite scholarships are provided to ensure the one thing
                    we most believe in; access to education for everyone. If
                    you’re motivated to succeed, and willing to commit to
                    excellence, then you might be eligible to receive a
                    scholarship. It will take hard work and dedication, but we
                    know you’re worth the investment. Read on for eligibility
                    criteria and our application procedures.
                  </p>
                </CardAnimation>
              </div>

              {/*  Move Image here (inside grid) */}
              <Image className={styles.ic_hero_img} src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipBanner;
