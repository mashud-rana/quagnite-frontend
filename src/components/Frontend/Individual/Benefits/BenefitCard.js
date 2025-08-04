import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import React from "react";
import styles from "./benefits.module.css";

const BenefitCard = ({ school, index }) => {
  return (
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
            <p className={styles.ic_description}>{school.description}</p>
          </div>
        </div>
      </CardAnimation>
    </div>
  );
};

export default BenefitCard;
