import React from "react";
import styles from "./work.module.css";
import { FaShare } from "react-icons/fa";
import Image from "next/image";
import img from "@/assets/images/all/work.png";
import img2 from "@/assets/images/all/share.png";
import img3 from "@/assets/images/all/ploygon.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Work = () => {
  return (
    <section className="ic_section_space_bottom">
      <div className="container">
        <CardAnimation index={1} direction="up">
          <div className={styles.ic_wrapper}>
            <div className={styles.ic_grid}>
              {/* Right - Image of Alumni */}
              <div className={styles.imageContainer}>
                <Image
                  src={img}
                  alt="Group of smiling alumni"
                  width={714}
                  height={512}
                  className={styles.alumniImage}
                />
              </div>

              {/* Left - Text Card */}
              <div className={styles.textCard}>
                <h6 className="mb_16">HIRE OUR ALUMNI</h6>
                <h4 className="mb_16">Build your team</h4>
                <p className={styles.description}>
                  Not sure what is right for you? Book a demo with us.
                </p>
                <div>
                  <button className={styles.button}>EXPLORE</button>
                </div>
              </div>
            </div>

            <div className={styles.floatingElements}>
              <div className={styles.ic_circle1}></div>
              <div className={styles.ic_circle2}></div>
              <div className={styles.ic_circle3}></div>
              <div className={styles.ic_circle4}></div>

              <div className={styles.geometricDot1}></div>
              {/* <div className={styles.geometricDot2}></div> */}

              <Image
                src={img2}
                alt="Professional business meeting"
                className={styles.ic_animation_img}
                width={102}
                height={102}
              />

              <Image
                src={img3}
                alt="Professional business meeting"
                className={styles.ic_animation_img2}
                width={45}
                height={45}
              />
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Work;
