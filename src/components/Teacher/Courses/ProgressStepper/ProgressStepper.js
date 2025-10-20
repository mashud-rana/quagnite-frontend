"use client";

import { FaCheck } from "react-icons/fa";
import styles from "./ProgressStepper.module.css";

const ProgressStepper = ({ currentStep }) => {
  const steps = [
    {
      name: "Course Overview",
      subname: "",
      completed: currentStep > 1,
      active: currentStep === 1,
    },
    {
      name: "Upload",
      subname: "Video",
      completed: currentStep > 2,
      active: currentStep === 2,
    },
    {
      name: "Instructor",
      subname: "",
      completed: currentStep > 3,
      active: currentStep === 3,
    },
    {
      name: "Submit",
      subname: "",
      completed: currentStep > 4,
      active: currentStep === 4,
    },
  ];
  return (
    <div className={`${styles.progressContainer} mb-24`}>
      <div className={styles.progressSteps}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepWrapper}>
            <div
              className={`${styles.stepCircle} ${
                step.completed ? styles.completed : ""
              } ${step.active ? styles.active : ""}`}
            >
              {step.completed ? <FaCheck size={14} /> : null}
            </div>
            <div className={styles.stepLabel}>
              <div className={styles.stepName}>{step.name}</div>
              {step.subname && (
                <div className={styles.stepSubname}>{step.subname}</div>
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`${styles.stepConnector} ${
                  step.completed || (step.active && index < currentStep - 1)
                    ? styles.connectorActive
                    : ""
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressStepper;
