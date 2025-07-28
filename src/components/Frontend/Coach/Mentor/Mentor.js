import React from "react";
import styles from "./mentor.module.css";
import img1 from "@/assets/images/all/mentor.png";
import img2 from "@/assets/images/all/animation2.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";

const Mentor = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
        <CardAnimation index={0} direction="up">
          <div className={styles.ic_wrapper}>
            {/* Main Content Card - Positioned Left */}
            <div className={styles.ic_grid}>
              <div className={styles.contentCard}>
                <div className={styles.ic_text_container}>
                  <h6 className="ic_purple mb_16">Join Our Coaching Cadre</h6>
                  <h4 className={styles.ic_subtitle}>
                    Mentor the next generation.
                  </h4>
                  <p className={styles.ic_description}>
                    Do you have the experience and knowledge in a tech field,
                    and a desire to share that with the next generation? Find
                    your calling and apply to coach with Quagnite now.
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
                  width={930}
                  height={600}
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

export default Mentor;
