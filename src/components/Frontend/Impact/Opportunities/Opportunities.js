import React from "react";
import styles from "./opportunities.module.css";
import Image from "next/image";
import img from "@/assets/images/all/opportunity.png";
import line from "@/assets/images/all/coach-line.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const opportunityData = [
  {
    id: 1,
    title: "WOMEN IN TECH",
    subtitle: "Opportunity Awaits",
    description: `There’s never been a better time for women to get into tech. 
        Quagnite provides education tailored to you, a supportive and healthy community, 
        and opportunities for placement to the best positions out there.`,
    image: img,
    alt: "Woman using VR headset with colleague in background",
  },
  {
    id: 2,
    title: "COMMUNITIES",
    subtitle: "Stronger together",
    description: "",
    image: img,
    alt: "Four women collaborating around a laptop",
  },
];

const Opportunities = () => {
  return (
    <section className="ic_section_space_top">
      <div className={styles.ic_wrapper}>
        <div className="container">
          <div className={styles.cardsGrid}>
            {opportunityData.map((item, index) => (
              <CardAnimation index={index} key={item.id}>
                <div className={`${styles.card}`}>
                  <div className={styles.cardImage}>
                    <Image
                      src={img}
                      alt="Woman using VR headset with colleague in background"
                      width={500}
                      height={300}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h6 className="mb_16 ic_white">WOMEN IN TECH</h6>
                    <h4 className="mb_16 ic_white">Opportunity Awaits</h4>
                    <p className={styles.cardDescription}>{item.description}</p>
                  </div>
                </div>
              </CardAnimation>
            ))}
          </div>
        </div>
        <Image
          className={styles.ic_line_img}
          src={line}
          width={880}
          height={100}
          alt=""
        />
      </div>
    </section>
  );
};

export default Opportunities;
