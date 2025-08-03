import React from "react";
import styles from "./refer.module.css";
import img1 from "@/assets/images/all/refer.png";
import img2 from "@/assets/images/all/animation.png";
import img3 from "@/assets/images/all/hire-line.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Refer = () => {
  return (
    <section className="ic_section_space_top">
      <div className="container">
        <CardAnimation index={0} direction="up">
          <div className={styles.ic_wrapper}>
            {/* Main Content Card - Positioned Left */}
            <div className={styles.ic_grid}>
              <div className={styles.contentCard}>
                <div className={styles.ic_text_container}>
                  <h6 className="ic_purple">Refer a Friend</h6>
                  <h4 className="mb_20">
                    If you know someone who would benefit from a scholarship to
                    Quagnite, refer them to our team here.
                  </h4>
                  <button className="ic_btn">EXPLORE</button>
                </div>
              </div>

              {/* Business Meeting Image - Large Right Side */}

              <div className={styles.imageSection}>
                <Image
                  src={img1}
                  alt="Professional business meeting"
                  className={styles.businessImage}
                  width={620}
                  height={430}
                />
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className={styles.floatingElements}>
              {/* Blue Glowing Orbs */}
              {/* <div className={styles.ic_circle1}></div> */}
              {/* <div className={styles.ic_circle2}></div> */}

              {/* Small Floating Document Cards */}
              {/* <div className={styles.floatingDoc1}>
            <div className={styles.docContent}></div>
          </div> */}

              {/* <div className={styles.floatingDoc2}>
            <div className={styles.docIcon}>📄</div>
          </div> */}

              {/* Orange Accent Element */}
              {/* <div className={styles.orangeAccent}></div> */}

              {/* Small Geometric Dots */}
              <div className={styles.geometricDot1}></div>
              {/* <div className={styles.geometricDot4}></div> */}
              {/* <div className={styles.geometricDot2}></div>
              <div className={styles.geometricDot3}></div> */}
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Refer;
