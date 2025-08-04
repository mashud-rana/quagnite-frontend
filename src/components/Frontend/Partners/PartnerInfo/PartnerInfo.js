import React from "react";
import styles from "./partnerinfo.module.css";
import Image from "next/image";
import img from "@/assets/images/all/man-laptop2.png";
import bg from "@/assets/images/all/partner-bg.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

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
    <section
      className="ic_section_space_88"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className={styles.ic_grid}>
          {/* Left Content - Title and Stats */}
          <div className={styles.contentLeft}>
            <CardAnimation index={1} direction="up">
              <h4 className={styles.title}>
                Lorem ipsum, consecte adipiscing elit.
              </h4>
            </CardAnimation>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <CardAnimation index={index} key={index}>
                  <div className={styles.statItem}>
                    <h4 className={styles.statNumber}>{stat.number}</h4>
                    <p className={styles.statDescription}>{stat.description}</p>
                  </div>
                </CardAnimation>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={styles.imageContainer}>
            <CardAnimation index={1} direction="down">
              <Image
                src={img}
                alt="Two students looking at a laptop"
                width={654}
                height={529}
                className={styles.studentsImage}
              />
            </CardAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerInfo;
