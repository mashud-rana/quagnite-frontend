"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./certification.module.css";
import Image from "next/image";
import icon1 from "@/assets/images/all/course.png";
import icon2 from "@/assets/images/all/forums.png";
import icon3 from "@/assets/images/all/coaches.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

// Original card list
const baseCards = [
  {
    icon: icon1,
  },
  {
    icon: icon2,
  },
  {
    icon: icon3,
  },
  {
    icon: icon1,
  },
  {
    icon: icon1,
  },
  {
    icon: icon1,
  },
];

const loopedCards = [...baseCards, ...baseCards, ...baseCards];

const Certification = () => {
  // Render a column with infinite scroll
  const renderColumn = (direction = "up", duration = 20, key = "") => {
    const animationClass =
      direction === "up" ? styles.scrollUp : styles.scrollDown;
    return (
      <div className={styles.columnWrapper}>
        <div
          className={`${styles.column} ${animationClass}`}
          style={{ "--scroll-duration": `${duration}s` }}
        >
          {loopedCards.map((cert, idx) => (
            <div key={`${key}-${idx}`} className={styles.card}>
              <div className={`${styles.iconWrapper} `}>
                <Image
                  src={cert.icon}
                  alt="Certification Icon"
                  width={64}
                  height={64}
                  className={styles.icon}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="ic_bg radious_60">
      <div className="container">
        <div className={styles.ic_grid}>
          {/* Left */}
          <div className={styles.contentLeft}>
            <CardAnimation index={1} direction="up">
              <h6 className="mb_16 ic_text_color">OUR CERTIFICATIONS</h6>
              <h4 className="mb_16">Industry-Standard proof of expertise.</h4>
              <p className={styles.description}>
                From full-stack development to management and engineering, a
                certification show&apos;s anyone that you&apos;ve put in the
                time.
              </p>
            </CardAnimation>
          </div>

          {/* Right Carousel */}
          <div className={styles.carouselContainer}>
            {renderColumn("up", 25, "col1")}
            {renderColumn("down", 25, "col2")}
            {renderColumn("up", 25, "col3")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
