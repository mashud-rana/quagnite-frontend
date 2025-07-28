"use client";

import React, { useEffect, useState } from "react";
import styles from "./coachBanner.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import bg from "@/assets/images/all/coach-banner-bg.png";
import img from "@/assets/images/all/coach-banner.png";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CoachBanner = () => {
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
      className={` ic_section_margin_top_80 `}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.ic_wrapper}>
        <div className="container">
          <div>
            <div className={styles.ic_hero_container}>
              {/* Left Content */}
              <div className={styles.leftContent}>
                <CardAnimation index={0} direction="left">
                  <h4>
                    School of Blockchain and Specialized Information Technology
                  </h4>
                </CardAnimation>
                <CardAnimation index={0} direction="up">
                  <p className={styles.heroDescription}>
                    Learn to create consensus-based software and physical
                    networks and to lead teams in complex technology projects.
                  </p>
                </CardAnimation>
              </div>

              {/*  Move Image here (inside grid) */}

              <div className={styles.ic_progress_container}>
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
              </div>

              <Image
                className={styles.ic_hero_img}
                width={960}
                height={400}
                src={img}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachBanner;
