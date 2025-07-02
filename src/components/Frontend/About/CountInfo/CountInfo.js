"use client";
import React from "react";
import styles from "./countinfo.module.css";
import CountUp from "react-countup";

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

const CountInfo = () => {
  return (
    <section className="ic_section_space">
      <div className="container ">
        <div className="ic_bg radious_16">
          <div className={styles.grid}>
            {stats.map((stat) => (
              <div key={stat.id}>
                <h1>
                  <CountUp
                    className={styles.title}
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={5}
                  />
                </h1>
                <p className="mt_30">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountInfo;
