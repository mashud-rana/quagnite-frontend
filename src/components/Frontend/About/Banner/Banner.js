"use client";

import React, { useEffect, useState } from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AboutBanner = ({ title, subtitle, img, bg, isProgress }) => {
  const [progress, setProgress] = useState(0);
  const maxProgress = 70;

  // Animate progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= maxProgress) {
          clearInterval(interval);
          return maxProgress;
        }
        return prev + 1;
      });
    }, 30); // speed (ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="ic_section_margin_top_80"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className={styles.ic_hero_container}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <CardAnimation index={0} direction="left">
              <h4>{title}</h4>
            </CardAnimation>
            <CardAnimation index={0} direction="up">
              <p className={styles.heroDescription}>{subtitle}</p>
            </CardAnimation>
          </div>

          {/* Right Content - 3 Images Layout */}

          <div className={styles.ic_hero_img}>
            <CardAnimation index={0} direction="up">
              {isProgress && (
                <div className={styles.progressBar}>
                  <svg style={{ height: 0 }}>
                    <defs>
                      <linearGradient
                        id="orangeGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#FFB99B" />
                        <stop offset="30%" stopColor="#F59948" />
                        <stop offset="100%" stopColor="#f7A757" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className={styles.progressWrapper}>
                    <CircularProgressbar
                      value={progress}
                      text=""
                      strokeWidth={4}
                      styles={buildStyles({
                        pathColor: "url(#orangeGradient)",
                        trailColor: "#574F72",
                      })}
                    />

                    {/* Custom Text with background */}
                    <div className={styles.progressText}>{progress}%</div>
                  </div>
                </div>
              )}
            </CardAnimation>
            <CardAnimation index={0} direction="down">
              <Image src={img} alt="" />
            </CardAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
