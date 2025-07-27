import React from "react";
import styles from "./Impact.module.css";
import icon1 from "@/assets/images/partnership/img-icon.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const impactData = [
  {
    id: 1,
    icon: icon1,
    title: "Robust employment network",
    description:
      "Quagnite partners are always growing, and seeking to build life-long connections and motivated teams.",
  },
  {
    id: 2,
    icon: icon1,
    title: "Leading edge research and development",
    description:
      "It’s not just about the product, it’s about finding new ways to apply technology to life.",
  },
  {
    id: 3,
    icon: icon1,
    title: "Market-movers with high-performance teams",
    description:
      "From media to financial technology, surround yourself with the best people and do the best work.",
  },
];

export default function Impact() {
  return (
    <section className="ic_section_space_bottom">
      <div className="container ic_white">
        <CardAnimation index={0} direction="left">
          <h4>Impact</h4>
        </CardAnimation>
        <div className={styles.grid}>
          {impactData.map((school, index) => (
            <CardAnimation index={index} key={school.id}>
              <div className={styles.ic_card}>
                <div className={styles.iconContainer}>
                  <Image
                    src={school.icon}
                    className={styles.icon}
                    height={34}
                    width={34}
                    alt="icon"
                  />
                </div>
                <h5 className={styles.ic_card_title}>{school.title}</h5>
                <p className={styles.ic_description}>{school.description}</p>
              </div>
            </CardAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
