"use client";

import { useState } from "react";
import styles from "./plan.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import img1 from "@/assets/images/all/plan.png";
import img2 from "@/assets/images/all/plan2.png";

const tabData = [
  {
    key: "case-studies",
    label: "tuition",
    title: "Lorem ipsum dolor sit, consectetur adipiscing.",
    description:
      "Browse and select from individual classes or prescribed courses of study. Certifications, sandboxes, tutoring; Quagnite is your education, your way.",
    image: img1,
    buttonText: "EXPLORE",
    image2: img2,
  },
  {
    key: "awards",
    label: "PERSONAL FINANCING",
    title: "Excellence in Educational Innovation.",
    description:
      "Discover our achievements and recognitions in the field of education and professional development. Our commitment to quality has been acknowledged by industry leaders.",
    image: img1,
    buttonText: "VIEW AWARDS",
    image2: img2,
  },
  {
    key: "reports",
    label: "NSTITUTION FINANCING",
    title: "Measuring Success Through Data.",
    description:
      "Comprehensive analysis of our impact on students and organizations. Detailed reports showcasing outcomes, statistics, and success stories from our programs.",
    image: img1,
    buttonText: "READ REPORTS",
    image2: img2,
  },
  {
    key: "events",
    label: "LOANS",
    title: "Connect with Top Employers.",
    description:
      "Join our exclusive hiring events where leading companies meet talented professionals. Network, interview, and find your next career opportunity.",
    image: img1,
    buttonText: "REGISTER NOW",
    image2: img2,
  },
  {
    key: "government",
    label: "CREDIT TRANSFER",
    title: "Strategic Collaborations for Growth.",
    description:
      "Explore our partnerships with government agencies and industry leaders. These collaborations enhance our programs and create opportunities for our students.",
    image: img1,
    buttonText: "LEARN MORE",
    image2: img2,
  },
];

const Plan = () => {
  const [activeTab, setActiveTab] = useState("case-studies");

  const activeTabData =
    tabData.find((tab) => tab.key === activeTab) || tabData[0];

  return (
    <section className="ic_section_space_top">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.headerSection}>
            <CardAnimation index={0} direction="left">
              <h4 className={styles.ic_title}>A Payment Plan For Everyone</h4>
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

            <div className={styles.ic_content_wrapper}>
              <div className={styles.tabContent}>
                <div>
                  <div className={styles.contentLeft}>
                    <CardAnimation
                      className={styles.ic_text_content}
                      index={0}
                      direction="left"
                    >
                      <h4>
                        The right <span>package</span> for you
                      </h4>
                    </CardAnimation>
                    <CardAnimation index={1} direction="up">
                      <p className={styles.contentDescription}>
                        {activeTabData.description}
                      </p>
                      <button className={styles.exploreButton}>
                        {activeTabData.buttonText}
                      </button>
                    </CardAnimation>
                  </div>
                </div>

                <CardAnimation index={0} direction="right">
                  <div className={styles.contentRight}>
                    <Image
                      src={activeTabData.image || "/placeholder.svg"}
                      alt={activeTabData.title}
                      width={600}
                      height={300}
                      className={styles.contentImage}
                    />
                  </div>
                </CardAnimation>
              </div>

              <Image
                src={activeTabData.image2 || "/placeholder.svg"}
                alt={activeTabData.title}
                width={410}
                height={220}
                className={styles.contentImage2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
