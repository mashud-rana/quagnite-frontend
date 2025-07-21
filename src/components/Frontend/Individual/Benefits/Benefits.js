import React from "react";
import styles from "./benefits.module.css";
import Image from "next/image";
import icon1 from "@/assets/images/school/icon1.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const schoolsData = [
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

const Benefits = () => {
  return (
    <section className="ic_section_space_bottom">
      <div className="container">
        <CardAnimation index={0} direction="left">
          <h6 className={`${styles.ic_sub_title} mb_16`}>BENEFITS</h6>
        </CardAnimation>

        <CardAnimation index={0} direction="up">
          <h4 className={styles.ic_title}>
            The <span>support</span> you need
          </h4>
        </CardAnimation>
        <CardAnimation index={0} direction="up">
          <div className={styles.grid}>
            {schoolsData.map((school, index) => (
              <div className={styles.card} key={school.id}>
                <CardAnimation index={index}>
                  <div>
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

                    <div className={styles.ic_des_btn_wrapper}>
                      <p className={styles.ic_description}>
                        {school.description}
                      </p>
                    </div>
                  </div>
                </CardAnimation>
              </div>
            ))}
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Benefits;
