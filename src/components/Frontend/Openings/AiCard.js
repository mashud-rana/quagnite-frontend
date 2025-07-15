import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./openings.module.css";

const AiCard = ({
  id,
  title,
  description,
  location,
  experience,
  availability,
  isActive,
  onToggle,
}) => {
  return (
    <div className={(styles.card, isActive && styles.expanded)}>
      <div className={styles.cardHeader} onClick={() => onToggle(id)}>
        <h2 className={styles.cardTitle}>{title}</h2>
        {isActive ? (
          <FaChevronUp className={styles.icon} />
        ) : (
          <FaChevronDown className={styles.icon} />
        )}
      </div>
      <p className={styles.cardDescription}>{description}</p>
      {isActive && (
        <div className={styles.cardContent}>
          <p className={styles.detailText}>{location}</p>
          <p className={styles.detailText}>{experience}</p>
          <p className={styles.detailText}>{availability}</p>
          <div className={styles.buttonContainer}>
            <button className={styles.applyButton}>APPLY NOW</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiCard;
