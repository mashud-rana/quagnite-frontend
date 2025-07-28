"use client";
import { useState } from "react";
import styles from "./type.module.css";
import icon1 from "@/assets/images/school/icon1.png";
import hover1 from "@/assets/images/school/hover1.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Type = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const schoolsData = [
    {
      id: 1,
      icon: icon1,
      hover: hover1,
      title: "School of Foundational IT",
      description:
        "A solid base to launch your career. Immersive tech, user experience, object design...",
      features: [
        "Personal Financing",
        "Institution Financing Via Mia-share",
        "Institution Loan Via Ascend Funding",
        "Scholarship",
        "Federal Financial Aid for US Residents Only",
      ],
    },
    {
      id: 2,
      icon: icon1,
      hover: hover1,
      title: "School of Applied Data Science",
      description:
        "Learn how to change the world with data. AI App Dev, Machine Learning Ops, Python...",
      features: [
        "Company Financing",
        "Institution Financing Via Mia-Share",
        "Institution Loan Via Ascend Funding",
        "Partners Discounts( Only if paid in full)",
        "Contact Sales",
      ],
    },
  ];

  return (
    <section className="ic_bg_black ic_section_space_top">
      <div className="ic_section_space_58 radious_60 ic_bg">
        <div className="container">
          <CardAnimation index={0} direction="left">
            <div className={styles.ic_title}>
              <h6 className="mb_16">TUITION TYPES</h6>
              <h4 className="mb_16">Need a little extra help? </h4>
              <p>
                Looking for someone who speaks your native language, or works
                directly in the area you want to work in? Connect with a teacher
                now.
              </p>
            </div>
          </CardAnimation>
          <CardAnimation index={0} direction="up">
            <div className={styles.grid}>
              {schoolsData.map((school, index) => (
                <CardAnimation index={index} key={school.id}>
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
                    <div className={styles.ic_logo_title_wrapper}>
                      <div className={styles.iconContainer}>
                        <Image
                          src={school.icon}
                          className={styles.icon}
                          height={34}
                          width={34}
                          alt="icon"
                        />
                      </div>
                      <p className={styles.ic_logo_title}>For Individuals</p>
                    </div>

                    <div className={styles.cardContent}>
                      <h5 className={styles.ic_card_title}>{school.title}</h5>
                      <p className={styles.ic_description}>
                        {school.description}
                      </p>
                    </div>

                    <ul className={styles.featureList}>
                      {school.features?.map((feature, idx) => (
                        <li className={styles.featureItem} key={idx}>
                          <span>{feature}</span>
                          <span className={styles.arrow}>
                            <IoIosArrowForward />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardAnimation>
              ))}
            </div>
          </CardAnimation>
        </div>
      </div>
    </section>
  );
};

export default Type;
