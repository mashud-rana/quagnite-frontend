"use client";

import React, { useState } from "react";
import styles from "./examInterface.module.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const SubmitExam = () => {
  const totalQuestions = 12;
  const currentQuestion = 1;
  const progress = (currentQuestion / totalQuestions) * 100;

  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState(Array(totalQuestions).fill(null));

  const question = {
    id: 1,
    question: "Which of the following are examples of Development?",
    options: [
      "Key (for opening door)",
      "32668 to 32667",
      "32768 to 32767",
      "Out Heart Choker Necklace Heart",
    ],
    correctAnswers: [2],
    type: "multiple",
  };

  const handleSubmit = () => {
    const isCorrect = question.correctAnswers.includes(2);

    const newResults = [...results];
    newResults[currentQuestion - 1] = isCorrect;
    setResults(newResults);
    setSubmitted(true);
  };

  return (
    <div className={styles.examContent}>
      {/* Exam Title and Info */}
      <div className={styles.examHeader}>
        <h5>Active Directory and Entra ID Administration</h5>
        <div className={styles.examInfo}>
          <span className="fw_500">
            Question {currentQuestion}/{totalQuestions}
          </span>
          <div className={styles.timer}>24 : 37</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressBarWrapper}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question Status Boxes */}
      <div className={styles.statusBoxContainer}>
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <div className={styles.ic_box_container} key={index}>
            <FaCheck size={20} className={`${styles.correct}`} />
            <div className={styles.statusBox}>
              <span>{index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Question Section */}
      <div>
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

        <h6 className={styles.ic_score}> Score: 88% - Keep Pushing!</h6>
      </div>
    </div>
  );
};

export default SubmitExam;
