"use client";

import {
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaRedo,
} from "react-icons/fa";
import styles from "./playground.module.css";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa6";
import { RiResetRightFill } from "react-icons/ri";

const mockQuestions = [
  {
    id: 1,
    question:
      "What is the 16-bit compiler allowable range for integer constants?",
    options: [
      { id: "a", text: "Our Heart Choker" },
      { id: "b", text: "-32668 to 32667" },
      { id: "c", text: "-32768 to 32767" },
      { id: "d", text: "Our Heart Choker Necklace" },
    ],
    correctAnswer: "-32768 to 32767",
    explanation: "In a 16-bit C compiler, we have 2 bytes to store the value.",
    wrongAnswer: "-3.4e38 to 3.4e38",
    wrongAnswerExplanation:
      "In a 16-bit C compiler, we have 2 bytes to store the value.",
  },
];

const Playground = () => {
  const question = mockQuestions[0];

  return (
    <div>
      {/* Header */}
      <div className="mb-24">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Playground</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Left Panel - Quiz */}
        <div className={styles.leftPanel}>
          {/* Task Header */}
          <div className={styles.taskHeader}>
            <div className={styles.taskInfo}>
              <span className="fw_500">Task</span>
              <div className={styles.timer}>
                <FaRegClock />
                <span className="fw_500">59:58</span>
              </div>
            </div>
            <div className={styles.navigation}>
              <button className={styles.navButton}>
                <FaLongArrowAltLeft className={styles.navIcon} />
                Prev
              </button>
              <button className={styles.navButton}>
                Next
                <FaLongArrowAltRight className={styles.navIcon} />
              </button>
            </div>
          </div>

          {/* Question */}
          <div className={styles.questionSection}>
            <p className={styles.questionText}>
              ({question.id}). {question.question}
            </p>

            {/* Answer Options */}
            <div className={styles.optionsContainer}>
              {question.options.map((option) => (
                <label key={option.id} className={styles.optionLabel}>
                  <input type="checkbox" className={styles.checkbox} />
                  <span className={styles.optionText}>{option.text}</span>
                </label>
              ))}
            </div>

            {/* Check Hint Button */}
            <div>
              <button className="ic_common_primary_btn">CHECK HINT</button>
            </div>

            {/* Feedback Section */}
            <div className={styles.feedbackSection}>
              <div className={styles.correctAnswer}>
                <span className={styles.answerLabel}>Correct Answer :</span>
                <span>{question.correctAnswer}</span>
              </div>

              <div className={styles.explanation}>
                <span className={styles.explanationLabel}>Explanation :</span>
                <span>{question.explanation}</span>
              </div>

              <div className={styles.wrongAnswer}>
                <span className={styles.wrongAnswerLabel}>Wrong Answer :</span>
                <span className={styles.wrongAnswerValue}>
                  {question.wrongAnswer}
                </span>
              </div>

              <div className={styles.explanation}>
                <span className={styles.explanationLabel}>Explanation :</span>
                <span>{question.wrongAnswerExplanation}</span>
              </div>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className={styles.bottomControls}>
            <button className={styles.navButton}>
              RESET QUIZ
              <RiResetRightFill className={styles.navIcon} />
            </button>
            <span className={styles.questionCounter}>
              Question {question.id}/{mockQuestions.length}
            </span>
            <button className="ic_common_primary_btn">SUBMIT</button>
          </div>
        </div>

        {/* Right Panel - Terminal */}
        <div className={styles.rightPanel}>
          <div className={styles.terminalContainer}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalTab}>
                <span className={styles.tabText}>Terminal 1</span>
              </div>
              <button className={styles.fullscreenButton}>
                <FaExpand className={styles.fullscreenIcon} />
              </button>
            </div>
            <div className={styles.terminalContent}>
              <div className={styles.terminalPrompt}>
                <span className={styles.promptText}>$</span>
                <span className={styles.cursor}>_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
