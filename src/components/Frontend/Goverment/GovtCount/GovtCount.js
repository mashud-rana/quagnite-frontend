"use client";
import React from "react";
import styles from "./govtcount.module.css";
import CountUp from "react-countup";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import bg from "@/assets/images/all/govt-count-bg.png";

const GovtCount = () => {
  const stats = [
    {
      id: 1,
      value: 12,
      suffix: "K",
      subtitle:
        "Percentage of data-driven projects led by graduates that are successfully implemented, enhancing government operations.",
    },
    {
      id: 2,
      value: 32,
      suffix: "K",
      subtitle:
        "Decrease in security breaches or cyber incidents following advanced cybersecurity training.",
    },
    {
      id: 3,
      value: 34,
      suffix: "K",
      subtitle:
        "Return on investment calculated by cost savings and efficiency improvements from blockchain implementations.",
    },

    {
      id: 4,
      value: 12,
      suffix: "K",
      subtitle:
        "Percentage of government agencies re-enrolling employees for additional or advanced training.",
    },

    {
      id: 5,
      value: 12,
      suffix: "K",
      subtitle:
        "Percentage of government agencies re-enrolling employees for additional or advanced training.",
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

export default GovtCount;
