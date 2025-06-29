import React from "react";
import styles from "./values.module.css";
import icon1 from "@/assets/images/school/icon1.png";
import Image from "next/image";

const valueData = [
  {
    id: 1,
    icon: icon1,
    title: "Opportunity",
    description: "For all of us, always",
  },
  {
    id: 2,
    icon: icon1,
    title: "Introspection",
    description: "The best person to make you better is you",
  },
  {
    id: 3,
    icon: icon1,
    title: "Self-Reliance",
    description: "Independence through competence",
  },
];

const Values = () => {
  return (
    <section className="ic_section_space_top_58">
      <div className="container ic_white">
        <h6>OUR VALUES</h6>
        <div className={styles.grid}>
          {valueData.map((school) => (
            <div className={styles.ic_card} key={school.id}>
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
              <p className={styles.ic_description}>{school.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
