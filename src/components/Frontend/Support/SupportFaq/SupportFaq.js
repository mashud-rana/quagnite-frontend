"use client";
import React, { useState } from "react";
import DaynamicCollaps from "../../Hiring/SkillCollapse/DaynamicCollaps";
import { ImSearch } from "react-icons/im";

const SupportFaq = () => {
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
          <div className={`${styles.ic_searchWrapper} mb-35`}>
            <input
              type="text"
              className={`${styles.ic_searchBox} `}
              value={searchTerm}
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

export default SupportFaq;
