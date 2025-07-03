"use client";

import { useState } from "react";
import styles from "./schoolLearnTab.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import img1 from "@/assets/images/all/learning.png";

const tabData = [
  {
    key: "case-studies",
    label: "CASE STUDIES",
    title: "Lorem ipsum dolor sit, consectetur adipiscing.",
    description:
      "Browse and select from individual classes or prescribed courses of study. Certifications, sandboxes, tutoring: Quagnite is your education, your way.",
  },
  {
    key: "awards",
    label: "AWARDS & RECOGNITIONS",
    title: "Excellence in Educational Innovation.",
    description:
      "Discover our achievements and recognitions in the field of education and professional development. Our commitment to quality has been acknowledged by industry leaders.",
  },
  {
    key: "reports",
    label: "ANNUAL REPORTS & IMPACT ASSESSMENTS",
    title: "Measuring Success Through Data.",
    description:
      "Comprehensive analysis of our impact on students and organizations. Detailed reports showcasing outcomes, statistics, and success stories from our programs.",
  },
  {
    key: "events",
    label: "UPCOMING HIRING EVENTS",
    title: "Connect with Top Employers.",
    description:
      "Join our exclusive hiring events where leading companies meet talented professionals. Network, interview, and find your next career opportunity.",
  },
];

const SchoolLearnTab = () => {
  const [activeTab, setActiveTab] = useState("case-studies");

  const activeTabData =
    tabData.find((tab) => tab.key === activeTab) || tabData[0];

  return (
    <section className="ic_section_space_top">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.headerSection}>
            <CardAnimation index={0} direction="left">
              <h4 className={styles.ic_title}>
                Skill you <span>learn</span>
              </h4>
            </CardAnimation>
          </div>

          <div className={styles.tabsContainer}>
            <CardAnimation index={0} direction="up">
              <div className={styles.tabNavigation}>
                {tabData.map((tab) => (
                  <button
                    key={tab.key}
                    className={`${styles.tabButton} ${
                      activeTab === tab.key ? styles.active : ""
                    }`}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </CardAnimation>

            <div>
              <div className={styles.contentLeft}>
                <CardAnimation index={0} direction="left">
                  <h4>{activeTabData.title}</h4>
                </CardAnimation>
                <CardAnimation index={1} direction="up">
                  <p className={styles.contentDescription}>
                    {activeTabData.description}
                  </p>
                </CardAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolLearnTab;
