"use client";
import { useState } from "react";
import { ImSearch } from "react-icons/im";
import styles from "./wiki.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import DaynamicCollaps from "../../Hiring/SkillCollapse/DaynamicCollaps";

const Wiki = () => {
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
    <section className="ic_section_space">
      <div className="ic_white">
        <div className="container">
          <CardAnimation index={1} direction="up">
            <div className=" mb-35">
              <h6 className="mb_16">FAQ</h6>
              <h4>
                You&apos;ve got questions, we&lsquo;ve got <span>answers</span>
              </h4>
            </div>
          </CardAnimation>
          <div className={`${styles.ic_searchWrapper}`}>
            <input
              type="text"
              className={`${styles.ic_searchBox} `}
              // value={searchTerm}
              name="search"
              id="faq-search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className={styles.ic_searchIcon}>
              <ImSearch />
            </span>
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

export default Wiki;
