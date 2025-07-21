import React from "react";
import styles from "./bootcamp.module.css";
import Image from "next/image";
import icon1 from "@/assets/images/school/icon1.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const featuresData = [
  {
    id: 1,
    icon: icon1,
    title: "Blockchain & Smart Contract Development Bootcamp.",
    description:
      "Focus: Solidity programming, decentralized application (DApp) development, Ethereum, and other blockchain technologies.",
  },
  {
    id: 2,
    icon: icon1,
    title: "Internet of Things (IoT) & Edge Computing Bootcamp",
    description:
      "Focus: Solidity programming, decentralized application (DApp) development, Ethereum, and other blockchain technologies",
  },
];

const Bootcamp = () => {
  return (
    <section className="ic_section_space_top">
      <div className="container ">
        <div className={styles.ic_bootcamp_container}>
          <CardAnimation index={0} direction="up">
            <div className="ic_white">
              <h6>Bootcamp</h6>
              <div className={styles.ic_title_container}>
                <h4 className={styles.ic_title}>Live Learning</h4>
                <button className={styles.ic_see_all_button}>See All</button>
              </div>
            </div>
          </CardAnimation>
          <div className={styles.ic_grid}>
            {featuresData.map((school, index) => (
              <CardAnimation key={school.id} index={index}>
                <div className={styles.card}>
                  <div>
                    <Image
                      src={school.icon}
                      className={styles.icon}
                      height={55}
                      width={55}
                      alt="icon"
                    />
                  </div>
                  <h5 className={styles.ic_card_title}>{school?.title}</h5>

                  <div className={styles.ic_des_btn_wrapper}>
                    <div className={styles.cardContent}>
                      <p className={styles.ic_description}>
                        {school?.description}
                      </p>
                    </div>
                    <div>
                      <button className={styles.ic_button}>EXPLORE</button>
                    </div>
                  </div>
                </div>
              </CardAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bootcamp;
