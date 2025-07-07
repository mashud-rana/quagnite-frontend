import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import React from "react";
import styles from "./toprated.module.css";
import verifiedIcon from "@/assets/images/all/verified.png";
import completeIcon from "@/assets/images/all/complete.png";

const TopCard = ({ member, index }) => {
  return (
    <CardAnimation index={index}>
      <div className={styles.ic_team_card}>
        <div className={`${styles.ic_image_container} ${member.gradientClass}`}>
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={350}
            height={300}
            className={styles.ic_member_image}
          />

          {member.verified && (
            <div className={styles.verifiedBadge}>
              <Image src={verifiedIcon} alt="Verified" width={36} height={36} />
            </div>
          )}
          {member.complete && (
            <div className={styles.completeBadge}>
              <Image src={completeIcon} alt="Complete" width={50} height={50} />
            </div>
          )}
        </div>
        <div className={styles.ic_card_content}>
          <h3 className={styles.ic_member_name}>{member.name}</h3>
          <p className={styles.ic_member_description}>{member.description}</p>

          <button className={styles.ic_btn}>Hire Now</button>
        </div>
      </div>
    </CardAnimation>
  );
};

export default TopCard;
