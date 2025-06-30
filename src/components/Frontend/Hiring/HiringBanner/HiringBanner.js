"use client";

import React, { useEffect, useState } from "react";
import styles from "./hiringBanner.module.css";
import Image from "next/image";
import img1 from "@/assets/images/all/hiring-banner.png";
import bg from "@/assets/images/all/hiring-bg.png";
import badgeImg from "@/assets/images/all/badge.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HiringBanner = () => {
  const [progress, setProgress] = useState(0);
  const maxProgress = 85;

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
            <h4>Build the workforce you need for the future of technology.</h4>
            <p className={styles.heroDescription}>
              Quagnite-trained employees are armed with not just the knowledge
              and skills, but the attitude needed to succeed in a rapidly
              changing environment. Save time and energy recruiting from
              Quagnite and be confident that you are getting the very best.
            </p>
          </div>

          {/* Right Content - Image with Circular Progress and Badge */}
          <div className={styles.ic_hero_img}>
            <div className={styles.imageWrapper}>
              {/* Circular Progress Bar (Top-left) */}
              {/* <div className={styles.progressBar}>
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
                <CircularProgressbar
                  value={progress}
                  text={`${progress}%`}
                  styles={buildStyles({
                    textSize: "16px",
                    pathColor: "url(#orangeGradient)", // ← Use the gradient
                    textColor: "#ffffff",
                    trailColor: "#333",
                  })}
                />
              </div> */}

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

              {/* Main Image */}
              <Image
                className={styles.ic_large_img}
                src={img1}
                height={640}
                width={720}
                alt="Main Image"
              />

              {/* Bottom-right Badge */}
              <div className={styles.badge}>
                <Image src={badgeImg} alt="badge" width={60} height={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringBanner;
