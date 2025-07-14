import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import React from "react";
import styles from "./whyus.module.css";
import img1 from "@/assets/images/all/whyus.png";
import bg from "@/assets/images/all/why-us-bg.png";

const Whyus = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
        <CardAnimation index={1} direction="up">
          <div
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className=" ic_white radious_16"
          >
            <div className={styles.ic_grid}>
              <div>
                <div className={styles.ic_img_wrapper}>
                  <div className={styles.teammateImage}>
                    <Image
                      className={styles.teammateImage1}
                      src={img1}
                      alt="Teammate"
                      width={422}
                      height={350}
                    />

                    {/* <Image
                      src={img2}
                      alt="Teammate"
                      width={310}
                      height={100}
                      className={styles.teammateImg2}
                    /> */}
                  </div>
                </div>
              </div>
              <div className={styles.teammateContent}>
                <h6>WHY US?</h6>
                <p>
                  There’s a lot of tech training out there. But Quagnite
                  courses, coaching, tutoring, and materials are all designed to
                  guide you on your personal journey to success. If you’re new
                  to tech, we have a course of study for you. If you’re a
                  veteran of the industry, we can help you hone your skills and
                  knowledge. Quagnite is your partner.
                </p>

                <div>
                  <button className={styles.ctaButton}>Explore</button>
                </div>
              </div>
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Whyus;
