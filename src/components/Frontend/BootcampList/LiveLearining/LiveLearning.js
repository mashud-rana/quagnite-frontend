"use client";
import React, { useState } from "react";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import styles from "./livelearning.module.css";
import icon1 from "@/assets/images/school/icon1.png";
import hover1 from "@/assets/images/school/hover1.png";
import { IoIosArrowDown } from "react-icons/io";

const LiveLearning = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const schoolsData = [
    {
      id: 1,
      icon: icon1,
      hover: hover1,
      title: "School of Foundational IT",
      description:
        "A solid base to launch your career. Immersive tech, user experience, object design...",
    },
    {
      id: 2,
      icon: icon1,
      hover: hover1,
      title: "School of Applied Data Science",
      description:
        "Learn how to change the world with data. AI App Dev, Machine Learning Ops, Python...",
    },
    {
      id: 3,
      icon: icon1,
      hover: hover1,
      title: "School of Enterprise Software",
      description:
        "The glue that keeps the team going. Full-stack dev, cloud engineering, Jenkins, Git...",
    },
    {
      id: 4,
      icon: icon1,
      hover: hover1,
      title: "School of Cybersecurity and Quantum Computing",
      description: "The bleeding edge of applied cryptography.",
    },
    {
      id: 5,
      icon: icon1,
      hover: hover1,
      title: "School of Blockchain and Specialized IT",
      description: "Federated and zero-trust architecture for the future.",
    },
    {
      id: 6,
      icon: icon1,
      hover: hover1,
      title: "School of Management",
      description: "Learn to lead in the field of tech.",
    },
  ];

  return (
    <section className="ic_bg_black ic_section_margin_top">
      <div className="ic_section_space_58 radious_60 ic_bg">
        <div className="container">
          <CardAnimation index={0} direction="left">
            <div className={styles.ic_title_container}>
              <h6 className={styles.ic_title}>Bootcamps - Live Learning</h6>
              <div className={styles.ic_filter_wrapper}>
                <h5>Filter</h5>

                <div className={styles.ic_select_wrapper}>
                  <select className={styles.ic_select} defaultValue="">
                    <option value="" disabled>
                      Recent
                    </option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="fullstack">Full Stack</option>
                    <option value="devops">DevOps</option>
                  </select>
                  <span className={styles.ic_arrow}>
                    <IoIosArrowDown />
                  </span>
                </div>

                <button className={styles.ic_btn}>See all</button>
              </div>
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
                    <div className={styles.ic_logo_title_container}>
                      <div className={styles.iconContainer}>
                        <Image
                          src={school.icon}
                          className={styles.icon}
                          height={34}
                          width={34}
                          alt="icon"
                        />
                      </div>

                      <h4 className={styles.ic_log_title}>Lorem</h4>
                    </div>
                    {/* <h5 className={styles.ic_card_title}>{school.title}</h5>
                  <p className={styles.ic_description}>{school.description}</p> */}
                    <div className={styles.cardContent}>
                      <p className={styles.ic_card_title}>{school.title}</p>
                      <p className={styles.ic_description}>
                        {school.description}
                      </p>
                    </div>
                    <div>
                      <button className={styles.ic_button}>EXPLORE</button>
                    </div>
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

export default LiveLearning;
