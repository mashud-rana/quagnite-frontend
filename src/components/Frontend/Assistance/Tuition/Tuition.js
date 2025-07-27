import React from "react";
import styles from "./tuition.module.css";
import img1 from "@/assets/images/all/professional.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Tuition = () => {
  return (
    <section className="ic_section_space_top">
      <div className="container">
        <div className="ic_bg_white radious_16">
          <CardAnimation index={1} direction="up">
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
                <h6>Tuition Assistance</h6>
                <h4 className={styles.title}>A little help is all it takes</h4>
                <p className="mb-24">
                  Don’t let the last little bit keep you from changing your
                  life. If you need help, we’re here for you. Just tell us a
                  little more about what you need and we can find a way to yes.
                </p>

                <div>
                  <button className="ic_btn">Explore</button>
                </div>
              </div>
            </div>
          </CardAnimation>
        </div>
      </div>
    </section>
  );
};

export default Tuition;
