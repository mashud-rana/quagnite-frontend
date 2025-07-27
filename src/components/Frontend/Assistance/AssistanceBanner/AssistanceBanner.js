import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import React from "react";
import img1 from "@/assets/images/all/assistance-banner.png";
import bg from "@/assets/images/all/assistance-bg.png";
import styles from "./banner.module.css";

const AssistanceBanner = () => {
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
              <h4>Everyone deserves a chance at a better future.</h4>
            </CardAnimation>
            <CardAnimation index={0} direction="up">
              <p className={styles.heroDescription}>
                At Quagnite, we believe in the power of education to change the
                world, and we want to make that power accessible to everyone. We
                have many options to help you pursue you passions, and we know
                we can find one that’s just right for you.
              </p>
            </CardAnimation>
          </div>

          {/* Right Content - 3 Images Layout */}

          <div className={styles.ic_hero_img}>
            <CardAnimation index={0} direction="down">
              <Image src={img1} alt="" />
            </CardAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistanceBanner;
