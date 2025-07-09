"use client";
import React, { useEffect, useState } from "react";
import styles from "./dreams.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import img1 from "@/assets/images/all/dreams.png";
import img2 from "@/assets/images/all/impact-passion-progress.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dreams = () => {
  const [progress, setProgress] = useState(0);
  const maxProgress = 85;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= maxProgress) {
          clearInterval(interval);
          return maxProgress;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="">
      <div className="container">
        <CardAnimation index={1} direction="up">
          <div className="ic_bg radious_16">
            <div className={styles.ic_grid}>
              <div>
                <div className={styles.ic_img_wrapper}>
                  <div className={styles.teammateImage}>
                    <Image
                      className={styles.teammateImage1}
                      src={img1}
                      alt="Teammate"
                      width={330}
                      height={375}
                    />

                    <div className={styles.teammateImg2}>
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

                    {/* <Image
                    src={img2}
                    alt="Teammate"
                    width={310}
                    height={100}
                    className={styles.teammateImg2}
                  /> */}
                  </div>
                </div>
              </div>
              <div className={styles.teammateContent}>
                <h6>Got big dreams?</h6>
                <h4 className={styles.title}>Apply now for a scholarship</h4>
                <p>
                  With a commitment to excellence and leadership in the tech
                  industry, Quagnite is committed to helping you achieve your
                  goals. Join us now!
                </p>

                <div>
                  <button className={styles.ctaButton}>Explore</button>
                </div>
              </div>
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Dreams;
