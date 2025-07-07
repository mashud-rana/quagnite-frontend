import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import React from "react";
import styles from "./recommendation.module.css";
import Image from "next/image";
import icon1 from "@/assets/images/school/icon1.png";

const schoolsData = [
  {
    id: 1,
    icon: icon1,
    title: "School of Foundational IT",
    description:
      "A solid base to launch your career. Immersive tech, user experience, object design...",
  },
  {
    id: 2,
    icon: icon1,
    title: "School of Applied Data Science",
    description:
      "Learn how to change the world with data. AI App Dev, Machine Learning Ops, Python...",
  },
  {
    id: 3,
    icon: icon1,
    title: "School of Enterprise Software",
    description:
      "The glue that keeps the team going. Full-stack dev, cloud engineering, Jenkins, Git...",
  },
];

const Recommendation = () => {
  return (
    <section className="ic_section_space_bottom">
      <div className="container">
        <CardAnimation index={0} direction="left">
          <h6 className={`${styles.ic_sub_title} mb_16`}>RECOMMENDATIONS</h6>
        </CardAnimation>

        <CardAnimation index={0} direction="up">
          <h4 className={styles.ic_title}>Selected just for you!</h4>
        </CardAnimation>
        <CardAnimation index={0} direction="up">
          <div className={styles.grid}>
            {schoolsData.map((school, index) => (
              <div className={styles.card} key={school.id}>
                <CardAnimation index={index}>
                  <div>
                    <div className={styles.iconContainer}>
                      <Image
                        src={school.icon}
                        className={styles.icon}
                        height={34}
                        width={34}
                        alt="icon"
                      />
                    </div>
                    <h5 className={styles.ic_card_title}>{school.title}</h5>

                    <div className={styles.ic_des_btn_wrapper}>
                      <p className={styles.ic_description}>
                        {school.description}
                      </p>
                      <div>
                        <button className={styles.ic_button}>EXPLORE</button>
                      </div>
                    </div>
                  </div>
                </CardAnimation>
              </div>
            ))}
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Recommendation;
