"use client";
import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import styles from "./experience.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import DaynamicCollaps from "../../Hiring/SkillCollapse/DaynamicCollaps";

const Experience = () => {
  const [activeKey, setActiveKey] = useState("1");

  const togglePanel = (key) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

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

  return (
    <section>
      <div className="ic_section_space_58 radious_60 ic_bg">
        <div className="container">
          <CardAnimation index={1} direction="up">
            <div className=" mb-35">
              <h6 className="mb_16">FAQ</h6>
              <h4>The Quagnite Coaching Experience</h4>
            </div>
          </CardAnimation>

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

export default Experience;
