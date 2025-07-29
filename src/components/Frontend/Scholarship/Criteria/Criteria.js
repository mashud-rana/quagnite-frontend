"use client";

import { useState } from "react";
import styles from "./criteria.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import DaynamicCollaps from "../../Hiring/SkillCollapse/DaynamicCollaps";

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

const Criteria = () => {
  const [activeKey, setActiveKey] = useState("1");

  const togglePanel = (key) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };
  return (
    <section className="ic_section_space_bottom">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.ic_header_section}>
            <CardAnimation index={0} direction="down">
              <h6 className={styles.ic_subtitle}>ELIGIBILITY CRITERIA</h6>
            </CardAnimation>
            <CardAnimation index={1} direction="left">
              <h4 className="w_80">Lorem Ipsum Dolar Sit Amet</h4>
            </CardAnimation>
          </div>

          <div className={styles.collapseWrapper}>
            {collapseData.map((item, index) => (
              <DaynamicCollaps
                activeKey={activeKey}
                index={index}
                key={index}
                item={item}
                togglePanel={togglePanel}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
