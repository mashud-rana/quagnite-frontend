"use client";
import React from "react";
import styles from "./impactcount.module.css";
import CountUp from "react-countup";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import bg from "@/assets/images/all/impact-count-bg.png";

const ImpactCount = () => {
  const stats = [
    {
      id: 1,
      value: 12,
      suffix: "K",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      value: 32,
      suffix: "K",
      subtitle: "Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      id: 3,
      value: 34,
      suffix: "K",
      subtitle: "Ut enim ad minim veniam, quis nostrud exercitation.",
    },

    {
      id: 4,
      value: 12,
      suffix: "K",
      subtitle: "Ut enim ad minim veniam, quis nostrud exercitation.",
    },
  ];

  return (
    <section
      className="ic_section_space_88"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container ">
        <CardAnimation index={0} direction="up">
          <div className="ic_white">
            <div className={styles.grid}>
              {stats.map((stat) => (
                <div key={stat.id}>
                  <CardAnimation index={0} direction="up">
                    <h1>
                      <CountUp
                        className={styles.title}
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={5}
                      />
                    </h1>

                    <p className="mt_30">{stat.subtitle}</p>
                  </CardAnimation>
                </div>
              ))}
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default ImpactCount;
