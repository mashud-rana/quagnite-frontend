"use client";
import React, { useState } from "react";
import styles from "./faq.module.css";
import Image from "next/image";
import DaynamicCollaps from "../../Hiring/SkillCollapse/DaynamicCollaps";
import img from "@/assets/images/all/faq.png";
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

const Faq = () => {
  const [activeKey, setActiveKey] = useState("1");

  const togglePanel = (key) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };
  return (
    <section className="ic_section_space_top">
      <div className="container ic_white">
        <h6>Faq</h6>
        <div className={styles.ic_grid}>
          <div className={styles.ic_img_wrapper}>
            <CardAnimation index={0} direction="down">
              <Image
                className={styles.ic_img}
                src={img}
                height={200}
                width={300}
                alt=""
              />
            </CardAnimation>
          </div>

          <div>
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

export default Faq;
