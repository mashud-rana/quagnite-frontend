import React from "react";
import styles from "./supportbanner.module.css";
import bg from "@/assets/images/all/bg-gradient.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import img from "@/assets/images/all/support-woman.png";
import img2 from "@/assets/images/all/support-banner1.png";
import img3 from "@/assets/images/all/hero2.png";
import img4 from "@/assets/images/all/forums.png";
import layer from "@/assets/images/all/layer.png";

const SupportBanner = () => {
  return (
    <section
      className={`${styles.ic_wrapper} ic_section_margin_top_80`}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Image className={styles.ic_layer_img} src={layer} alt="" />

      <div className="container">
        <div className={styles.ic_hero_container}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <CardAnimation index={0} direction="left">
              <h4>How Can We Help?</h4>
            </CardAnimation>
            <CardAnimation index={0} direction="up">
              <p className={styles.heroDescription}>
                As a valued Quagnite stakeholder, please let us help you work
                out any issues you might be having. We&lsquo;re here for you!
              </p>
            </CardAnimation>
          </div>

          {/* Right Content - 3 Images Layout */}

          <div className={styles.ic_hero_img}>
            <CardAnimation index={0} direction="down">
              <Image className={styles.ic_main_img} src={img} alt="" />
            </CardAnimation>

            <Image className={styles.ic_img2} src={img2} alt="" />
            <div className={styles.ic_img3}>
              <Image
                className={styles.ic_log}
                width={67}
                height={76}
                src={img4}
                alt=""
              />
            </div>

            <Image className={styles.ic_img4} src={img3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportBanner;
