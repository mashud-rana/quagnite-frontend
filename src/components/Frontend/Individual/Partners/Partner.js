import React from "react";
import styles from "./partner.module.css";
import img1 from "@/assets/images/all/hiring.png";
import img2 from "@/assets/images/all/animation2.png";
import img3 from "@/assets/images/all/hire-line.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Partner = () => {
  return (
    <section className="ic_section_space_top">
      <div className="container">
        <CardAnimation index={0} direction="up">
          <div className={styles.ic_wrapper}>
            {/* Main Content Card - Positioned Left */}
            <div className={styles.ic_grid}>
              <div className={styles.contentCard}>
                <div className={styles.ic_text_container}>
                  <h6 className="ic_purple mb_16">HIRE FROM US</h6>
                  <h4 className={styles.ic_subtitle}>
                    Apply to work with our Industry Partners
                  </h4>
                  <p className={styles.ic_description}>
                    The people on your team are the most critical component to
                    business success; build your perfect team with
                    Quagnite-certified and educated employees.
                  </p>
                  <button className={styles.exploreButton}>EXPLORE</button>
                </div>
              </div>

              {/* Business Meeting Image - Large Right Side */}

              <div className={styles.imageSection}>
                <Image
                  src={img1}
                  alt="Professional business meeting"
                  className={styles.businessImage}
                  width={630}
                  height={590}
                />
              </div>
            </div>

            <Image
              src={img2}
              alt="Professional business meeting"
              className={styles.ic_animation_img}
              width={110}
              height={110}
            />

            <div className={styles.floatingElements}>
              <div className={styles.ic_circle1}></div>
              <div className={styles.geometricDot1}></div>
              {/* <div className={styles.geometricDot4}></div>
              <div className={styles.geometricDot2}></div>
              <div className={styles.geometricDot3}></div> */}
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Partner;
