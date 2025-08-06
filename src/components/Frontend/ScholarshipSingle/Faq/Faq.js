"use client";
import React, { useState } from "react";
import DaynamicCollaps from "../../Hiring/SkillCollapse/DaynamicCollaps";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const faqData = [
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis .",
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
    content: "Lorem ipsum dolor sit amet,i.",
  },
  {
    key: "6",
    header: "LOREM IPSUM DOLAR SIT",
    content: "Lorem ipsum dolor sit amet,i.",
  },
  {
    key: "7",
    header: "LOREM IPSUM DOLAR SIT",
    content: "Lorem ipsum dolor sit amet,i.",
  },
  {
    key: "8",
    header: "LOREM IPSUM DOLAR SIT",
    content: "Lorem ipsum dolor sit amet,i.",
  },
  {
    key: "9",
    header: "LOREM IPSUM DOLAR SIT",
    content: "Lorem ipsum dolor sit amet,i.",
  },
];

export default function Faq() {
  const [activeKey, setActiveKey] = useState("1");

  const togglePanel = (key) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };
  return (
    <section className="ic_section_space_top">
      <div className="container ic_white">
        <div>
          <div>
            <CardAnimation index={0} direction="down">
              <h6 className="mb-12">FAQ</h6>
            </CardAnimation>
            <CardAnimation index={1} direction="left">
              <h4 className="w_80 mb_16">Lorem Ipsum Dolar Sit Amet</h4>
            </CardAnimation>
          </div>

          <div>
            {faqData.map((item, index) => (
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
}
