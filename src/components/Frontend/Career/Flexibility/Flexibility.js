import React from "react";
import img1 from "@/assets/images/about/passion.png";
import img2 from "@/assets/images/about/passion-line.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import styles from "./flexibility.module.css";

const Flexibility = () => {
  return (
    <section className={` ${styles.ic_wrapper} ic_section_space`}>
      <div className="container ic_white">
        <CardAnimation index={0} direction="up">
          <div className={styles.ic_img_container}>
            <div>
              <Image
                className={styles.ic_img}
                src={img1}
                height={729}
                width={729}
                alt=""
              />
            </div>

            <div className={styles.ic_card}>
              <h6 className="mb_16">CULTURE</h6>
              <h4 className={styles.ic_title}>Inclusive and Supportive</h4>
              <p className={styles.ic_sub_title}>
                Because of our belief in knowledge as a basic right, we want to
                transform the way people access training and education with
                products and methods that constantly challenge the status quo
                and enable everyone to be the best they can.
              </p>
            </div>

            <div className={styles.ic_card2}>
              <h6 className="mb_16">LIFE AT QUAGNITE</h6>
              <h4 className={styles.ic_title}>Flexibility and Excellence</h4>
              <p className={styles.ic_sub_title}>
                Because of our belief in knowledge as a basic right, we want to
                transform the way people access training and education with
                products and methods that constantly challenge the status quo
                and enable everyone to be the best they can.
              </p>
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Flexibility;
