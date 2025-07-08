"use client";
import { useState } from "react";
import styles from "./featured.module.css";
import icon1 from "@/assets/images/school/icon1.png";
import hover1 from "@/assets/images/school/hover1.png";
import Image from "next/image";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Featured = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const featuresData = [
    {
      id: 1,
      icon: icon1,
      hover: hover1,
      title: "Blockchain & Distributed Systems",
      description: [
        "Decentralized Finance (DeFi) Technologies",
        "Distributed Ledger Technology in Supply Chains",
        "Distributed Ledger Technology in Supply Chains",
        "Smart Contract Development with Solidity",
        "Blockchain Revolution: Building Smart Contracts & Decentralized Apps",
      ],
    },
    {
      id: 2,
      icon: icon1,
      hover: hover1,
      title: "Specialised IT Domains",
      description: [
        "IoT Innovations: Designing Smart Devices & Edge Solutions",
        "Ethical AI: Navigating the Maze of AI Ethics & Policy",
        "Project Leadership in IT: Navigating Through Agile & Lean Practices",
      ],
    },
  ];
  return (
    <section className="ic_bg_black">
      <div className="ic_section_space_58 radious_60 ic_bg">
        <div className="container">
          {/* <h6 className={styles.ic_title}>FEATURED COURSE</h6> */}
          <div className={styles.ic_title_wrapper}>
            <h6 className={styles.ic_title}>FEATURED COURSE</h6>
            <button className={styles.ic_see_all_button}>See All</button>
          </div>
          <CardAnimation index={0} direction="up">
            <div className={styles.grid}>
              {featuresData.map((school) => (
                <div
                  key={school.id}
                  className={`${styles.card} ${
                    hoveredCard === school.id ? styles.hoveredCard : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(school.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={
                    hoveredCard === school.id
                      ? { "--hoverImage": `url(${school.hover.src})` }
                      : {}
                  }
                >
                  <div className={styles.iconContainer}>
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
                      <ul className={styles.ic_description}>
                        {school?.description?.map((school, index) => (
                          <li key={index}>
                            <div className={styles.ic_flex}>
                              <IoCheckmarkCircleOutline
                                className={styles.ic_icn}
                                size={20}
                              />
                              {school}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.ic_btn_position}>
                      <button className={styles.ic_button}>EXPLORE</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardAnimation>
        </div>
      </div>
    </section>
  );
};

export default Featured;
