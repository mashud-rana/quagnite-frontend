import React from "react";
import styles from "./partnerinfo.module.css";
import Image from "next/image";

const PartnerInfo = () => {
  const stats = [
    {
      number: "1234",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      number: "1234",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      number: "1234",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      number: "1234",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.ic_grid}>
          {/* Left Content - Title and Stats */}
          <div className={styles.contentLeft}>
            <h2 className={styles.title}>
              Lorem ipsum, consecte adipiscing elit.
            </h2>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <p className={styles.statNumber}>{stat.number}</p>
                  <p className={styles.statDescription}>{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={styles.imageContainer}>
            <Image
              src="/placeholder.svg?height=600&width=800" // Placeholder for students image
              alt="Two students looking at a laptop"
              width={500}
              height={600}
              className={styles.studentsImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerInfo;
