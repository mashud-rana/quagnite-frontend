import Image from "next/image";
import React from "react";
import styles from "./teammate.module.css";
import img1 from "@/assets/images/all/teammate.png";

const Teammate = () => {
  return (
    <section className="ic_section_space">
      <div className="container ">
        <div className="ic_bg_white radious_16">
          <div className={styles.teammateContainer}>
            {/* Left: Image */}
            <div className={styles.teammateImage}>
              <Image
                src={img1}
                alt="Teammate"
                width={550}
                height={400}
                className={styles.teammateImg}
              />
            </div>

            {/* Right: Content */}
            <div className={styles.teammateContent}>
              <h6>HIRE WITH QUAGNITE</h6>
              <h4 className={styles.title}>People are the Company</h4>
              <p>
                The people on your team are the most critical component to
                business success; build your perfect team with
                Quagnite-certified and educated employees.
              </p>
              <button className={styles.ctaButton}>Browse New Teammates</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teammate;
