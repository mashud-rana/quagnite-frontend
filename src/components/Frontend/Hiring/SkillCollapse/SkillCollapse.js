"use client";

import { useState } from "react";
import styles from "./skillcollapse.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const collapseData = [
  {
    key: "1",
    header: "LOREM IPSUM DOLAR SIT",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate. Nulla sodales enim quis euismod consectetur. Ut in laoreet diam, nec efficitur felis. Suspendisse potenti. Pellentesque rutrum nec diam sed pharetra. Maecenas pulvinar varius efficitur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate. Nulla sodales enim quis euismod consectetur.",
  },
  {
    key: "2",
    header: "LOREM IPSUM DOLAR SIT",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate. Nulla sodales enim quis euismod consectetur. Ut in laoreet diam, nec efficitur felis. Suspendisse potenti. Pellentesque rutrum nec diam sed pharetra.",
  },
  {
    key: "3",
    header: "LOREM IPSUM DOLAR SIT",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate. Nulla sodales enim quis euismod consectetur. Ut in laoreet diam, nec efficitur felis.",
  },
  {
    key: "4",
    header: "LOREM IPSUM DOLAR SIT",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate. Nulla sodales enim quis euismod consectetur.",
  },
  {
    key: "5",
    header: "LOREM IPSUM DOLAR SIT",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate. Nulla sodales enim quis euismod consectetur. Ut in laoreet diam, nec efficitur felis. Suspendisse potenti.",
  },
];

const SkillCollapse = () => {
  // const [activeKeys, setActiveKeys] = useState(["1"]);
  const [activeKey, setActiveKey] = useState("1");

  // const togglePanel = (key) => {
  //   setActiveKeys((prev) =>
  //     prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
  //   );
  // };

  const togglePanel = (key) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

  return (
    <section className="ic_section_space">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.ic_header_section}>
            <CardAnimation index={0} direction="down">
              <h6 className={styles.ic_subtitle}>WHY HIRE WITH US</h6>
            </CardAnimation>
            <CardAnimation index={1} direction="left">
              <h4 className="w_80">
                The latest and most relevant skills, in motivated and adaptable
                teams.
              </h4>
            </CardAnimation>
          </div>

          <div className={styles.collapseWrapper}>
            {collapseData.map((item, index) => {
              // const isActive = activeKeys.includes(item.key);
              const isActive = activeKey === item.key;
              return (
                <CardAnimation key={item.key} index={index}>
                  <div className={styles.collapseItem}>
                    <div
                      className={`${styles.ic_collapse_header} ${
                        isActive ? styles.active : ""
                      }`}
                      onClick={() => togglePanel(item.key)}
                    >
                      <span className={styles.ic_header_text}>
                        {item.header}
                      </span>
                      <span className={styles.ic_expand_icon}>
                        {isActive ? "−" : "+"}
                      </span>
                    </div>
                    <div
                      className={`${styles.collapseContent} ${
                        isActive ? styles.expanded : ""
                      }`}
                    >
                      <div className={styles.ic_content_inner}>
                        <p className={styles.ic_panel_content}>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCollapse;
