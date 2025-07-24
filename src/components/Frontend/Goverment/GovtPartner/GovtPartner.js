import React from "react";
import styles from "./govtPartner.module.css";
import Image from "next/image";
import img1 from "@/assets/images/all/govt-partner.png";
import img2 from "@/assets/images/all/animation2.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const GovtPartner = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
        <CardAnimation index={0} direction="up">
          <div className={styles.ic_wrapper}>
            <div className={styles.ic_grid}>
              <div className={styles.imageSection}>
                <Image
                  src={img1}
                  alt="Professional business meeting"
                  className={styles.businessImage}
                  width={700}
                  height={590}
                />
              </div>

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
            </div>

            {/* <Image
              src={img2}
              alt="Professional business meeting"
              className={styles.ic_animation_img}
              width={110}
              height={110}
            /> */}

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

export default GovtPartner;
