import Image from "next/image";
import React from "react";
import styles from "./icCard.module.css";
import img2 from "@/assets/images/all/session.png";
import Link from "next/link";

const IcCard = ({ card }) => {
  return (
    <div className={styles.ic_card}>
      <Image src={img2} alt="" className={styles.ic_small_image} />
      <p className={styles.ic_card_title}>{card.title}</p>
      <p className={styles.ic_card_description}>{card.description}</p>
      <div>
        <Link href="/student/bootcamps/1" className="ic_common_primary_btn">
          {card.buttonText}
        </Link>
      </div>
    </div>
  );
};

export default IcCard;
