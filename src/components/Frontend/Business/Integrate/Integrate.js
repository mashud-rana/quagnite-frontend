import Image from "next/image";
import React from "react";
import styles from "./integrate.module.css";
import icon1 from "@/assets/images/all/course.png";
import icon2 from "@/assets/images/all/forums.png";
import icon3 from "@/assets/images/all/coaches.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Integrate = () => {
  const features = [
    {
      icon: icon1,
      label: "Courses",
      gradient: styles.gradientBlue,
    },
    {
      icon: icon3,
      label: "Bootcamp",
      gradient: styles.gradientOrange,
    },
    {
      icon: icon2,
      label: "Exams",
      gradient: styles.gradientPurple,
    },
    {
      icon: icon1,
      label: "eBooks",
      gradient: styles.gradientDarkPurple,
    },
    {
      icon: icon1,
      label: "Forums",
      gradient: styles.gradientBlue,
    },
    {
      icon: icon1,
      label: "Coaches",
      gradient: styles.gradientOrange,
    },
  ];

  return (
    <section className="ic_section_space">
      <div className="container">
        <CardAnimation index={0} direction="up">
          <div className={styles.ic_grid}>
            <div className={styles.gridContainer}>
              {features.map((feature, index) => (
                <div key={index} className={styles.card}>
                  <div className={`${styles.iconWrapper}`}>
                    <Image
                      src={feature.icon || "/placeholder.svg"}
                      alt={feature.label}
                      width={102}
                      height={80}
                      className={styles.icon}
                    />
                  </div>
                  <p className={styles.cardLabel}>{feature.label}</p>
                </div>
              ))}
            </div>

            <div className={styles.contentRight}>
              <h6 className={styles.apiLabel}>API</h6>
              <h4 className={styles.title}>
                Integrate Quagnite&lsquo;s Content With Existing Business
                Software
              </h4>
              <button className={styles.button}>LET&lsquo;S TALK</button>
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Integrate;
