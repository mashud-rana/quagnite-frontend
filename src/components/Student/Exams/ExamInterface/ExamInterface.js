import React from "react";
import styles from "./examInterface.module.css";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBell,
  FaPlay,
  FaPause,
} from "react-icons/fa";

const ExamInterface = () => {
  const question = {
    id: 1,
    question: "Which of the following are examples of Development?",
    options: [
      "Key (for opening door)",
      "32668 to 32667",
      "32768 to 32767",
      "Out Heart Choker Necklace Heart",
    ],
    selectedAnswers: [0],
    type: "multiple",
  };

  return (
    <div className={styles.examContent}>
      {/* Exam Title and Info */}
      <div className={styles.examHeader}>
        <h1 className={styles.examTitle}>
          Active Directory and Entra ID Administration
        </h1>
        <div className={styles.examInfo}>
          <span className={styles.questionCounter}>Question</span>
          <div className={styles.timer}>24 : 37</div>
        </div>
      </div>

      {/* Question Section */}
      <div className={styles.questionSection}>
        <div className={styles.questionText}>1. {question.question}</div>

        {/* Answer Options */}
        <div className={styles.optionsContainer}>
          {question.options.map((option, index) => (
            <div key={index} className={styles.optionItem}>
              <label className={styles.optionLabel}>
                <input
                  type={question.type === "single" ? "radio" : "checkbox"}
                  name="answer"
                  className={styles.optionInput}
                />
                <span className={styles.customCheckbox}></span>
                <span className={styles.optionText}>{option}</span>
              </label>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className={styles.submitContainer}>
          <button className="ic_common_primary_btn">SUBMIT ANSWER</button>
        </div>
      </div>
    </div>
  );
};

export default ExamInterface;
