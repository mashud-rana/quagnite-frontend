import Image from "next/image";
import React from "react";
import img from "@/assets/images/all/military.png";
import styles from "./defense.module.css";

const Defense = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
        <div className={styles.ic_wrapper}>
          <div className={styles.ic_grid}>
            <Image
              className={styles.ic_img}
              src={img}
              width={400}
              height={200}
              alt=""
            />
            <div className={styles.textContainer}>
              <h4>Defense and Military</h4>
            </div>
          </div>

          <div className={`${styles.ic_grid2}`}>
            <div className={styles.textContainer}>
              <h4 className="mb_16">Defense and Military</h4>
              <p>
                From data analytics to predictive modeling, modern governments
                require the knowledge and ability to manipulate and process vast
                amounts of data. Quagnite will give your teams the technical
                background and specific skills need to guide nations.
              </p>
            </div>

            <Image
              className={styles.ic_img}
              src={img}
              width={400}
              height={200}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Defense;
