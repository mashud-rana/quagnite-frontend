"use client";
import React, { useState } from "react";
import styles from "./faq.module.css";
const data = [
  {
    question: "Flexible Working Hours",
    answer: "Next.js is a React framework for production.",
  },
  {
    question: "Health and Wellness Programs",
    answer: "Yes, because of its SSR and static generation features.",
  },
  {
    question: "Professional Development",
    answer: "You can use CSS Modules, Tailwind, or other styling methods.",
  },
  {
    question: "Paid Time Off",
    answer: "You can use CSS Modules, Tailwind, or other styling methods.",
  },
  {
    question: "Retirement Plans",
    answer: "You can use CSS Modules, Tailwind, or other styling methods.",
  },
  {
    question: "Performance Bonuses",
    answer: "You can use CSS Modules, Tailwind, or other styling methods.",
  },
  {
    question: "Employee Discounts",
    answer: "You can use CSS Modules, Tailwind, or other styling methods.",
  },
  {
    question: "Work Environment and Culture",
    answer: "You can use CSS Modules, Tailwind, or other styling methods.",
  },
  {
    question: "Company Events",
    answer: "You can use CSS Modules, Tailwind, or other styling methods.",
  },
  {
    question: "Equity or Stock Options",
    answer: "You can use CSS Modules, Tailwind, or other styling methods.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.ic_accordionSection}>
      <div className="container">
        <div className={styles.ic_wrapper}>
          <h6 className="mb-16">FAQ</h6>
          <h4 className="mb-35">
            {`You've`} got questions, {`we've`} got{" "}
            <span className={styles.ic_ans}>answers</span>.
          </h4>

          {data.map((item, index) => (
            <div
              key={index}
              className={styles.ic_accordionItem}
              onClick={() => toggleAccordion(index)}
            >
              <div className={styles.ic_questionRow}>
                <h6>{item.question}</h6>
                <span className={styles.ic_icon}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className={styles.ic_answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
