import React from "react";
import styles from "./professional.module.css";
import AnimateOnScroll from "@/components/Share/ClientComponent/AnimateOnScroll";
import Image from "next/image";
import img1 from "@/assets/images/all/professional.png";

const Professional = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
        <div className="ic_bg_white radious_16">
          <AnimateOnScroll>
            <div className={styles.teammateContainer}>
              {/* Left Image */}
              <div className={styles.teammateImage}>
                <Image
                  src={img1}
                  alt="Teammate"
                  width={500}
                  height={200}
                  className={styles.teammateImg}
                />
              </div>

              {/* Right Content */}
              <div className={styles.teammateContent}>
                <h6>CAREERS AT QUAGINTE</h6>
                <h4 className={styles.title}>A team of professionals</h4>
                <p>
                  Quagnite includes members from all walks of life, and a wide
                  variety of backgrounds and nations, all bound together by a
                  common purpose.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Professional;
