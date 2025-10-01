import React from "react";
import styles from "./communitycard.module.css";
import Image from "next/image";
import img from "@/assets/images/all/case-studies.png";

const EventCard = ({ event }) => {
  return (
    <div className={styles.coachCard}>
      <div className={styles.coachImage}>
        <Image src={img} alt="" className={styles.coachPhoto} />
      </div>
      <div className={styles.coachInfo}>
        <p className={styles.ic_event_name}>Event Name</p>
        <p>Saturday 11/04/25</p>
        <p>04:00 PM</p>
        <p className={styles.coachDescription}>{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
