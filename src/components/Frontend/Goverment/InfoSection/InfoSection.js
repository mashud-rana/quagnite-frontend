import React from "react";
import styles from "./infosection.module.css";
import Image from "next/image";
import img from "@/assets/images/all/info-man.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const InfoSection = () => {
  return (
    <section className="ic_section_space_top">
      <div className="container">
        <div className={styles.ic_grid}>
          <CardAnimation index={0} direction="up">
            <div className={styles.imageContainer}>
              <Image
                src={img}
                alt="Man with headset smiling and gesturing"
                className={styles.mainImage}
              />
            </div>
          </CardAnimation>

          <CardAnimation index={0} direction="down">
            <div className={styles.textContainer}>
              <h4 className={styles.ic_heading}>Lorem Ipsum Dolar</h4>
              <p className="mb_16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                dignissim dui id lobortis vulputate.
              </p>
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sodales enim quis euismod consectetur. Ut in laoreet diam, nec
                efficitur felis. Suspendisse potenti. Pellentesque rutrum nec
                diam sed pharetra. Maecenas pulvinar varius efficitur.
              </p>
            </div>
          </CardAnimation>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
