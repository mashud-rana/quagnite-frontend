"use client";
import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import styles from "./accordion.module.css";

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

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.ic_accordionSection}>
      <div className="container">
        <div className={styles.ic_wrapper}>
          <h6 className="mb-16">perks</h6>
          <h4 className="mb-35">Lorem ipsum dolar sit amet</h4>

          <div className={`${styles.ic_searchWrapper} mb-35`}>
            <input
              type="text"
              className={`${styles.ic_searchBox} `}
              value={searchTerm}
              name="search"
              id="faq-search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className={styles.ic_searchIcon}>
              <ImSearch />
            </span>
          </div>

          {filteredData.length === 0 ? (
            <p className={styles.ic_notFound}>Sorry, not found!</p>
          ) : (
            filteredData.map((item, index) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}
