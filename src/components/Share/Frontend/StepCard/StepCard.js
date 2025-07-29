import React from "react";
import styles from "./stepCard.module.css";

export default function StepCard({ steps, activeStep }) {
  return (
    <div className={styles.ic_step}>
      {steps.map((step, index) => (
        <div key={index} className={styles.ic_step_item}>
          <div
            className={`${styles.ic_step_item_circle} ${
              activeStep === step.id ? styles.active : ""
            }`}
          >
            <h6>{step.label}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}
