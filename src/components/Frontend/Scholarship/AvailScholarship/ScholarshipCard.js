import React from "react";
import styles from "./availScholarship.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";

const ScholarshipCard = ({ member, index, isButton }) => {
  return (
    <CardAnimation index={index}>
      <div className={styles.ic_team_card}>
        <div className={`${styles.ic_image_container}`}>
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={260}
            height={170}
            className={styles.ic_member_image}
          />
        </div>
        <div className={styles.ic_card_content}>
          <h3 className={styles.ic_member_name}>{member.name}</h3>
          <p className={styles.ic_member_description}>{member.description}</p>

          {isButton && <button className={styles.ic_btn}>Hire Now</button>}
        </div>
      </div>
    </CardAnimation>
  );
};

export default ScholarshipCard;
