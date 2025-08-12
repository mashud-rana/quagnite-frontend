import React from "react";
import styles from "./course.module.css";

const FiltersSidebar = () => {
  const waysToLearn = ["All", "Core courses", "Expanded courses", "Labs"];
  const skillLevels = ["Advanced", "Beginner", "Intermediate"];
  const subjects = [
    "Business Professional",
    "Creative Professional",
    "Data Professional",
    "Digital Marketer",
    "IT Ops",
    "Product Manager",
  ];

  const renderCheckboxList = (items) =>
    items.map((label) => (
      <label key={label} className={styles.checkboxLabel}>
        <input type="checkbox" className={styles.checkbox} />
        <span className={styles.checkboxText}>{label}</span>
      </label>
    ));

  return (
    <aside className={styles.sidebar}>
      {/* Ways to learn */}
      <div className={styles.filterSection}>
        <h5 className={styles.filterTitle}>Ways to learn</h5>
        <hr className={styles.ic_hr} />
        <div className={styles.filterOptions}>
          {renderCheckboxList(waysToLearn)}
        </div>
      </div>

      {/* Skill level */}
      <div className={styles.filterSection}>
        <h5 className={styles.filterTitle}>Skill level</h5>
        <hr className={styles.ic_hr} />
        <div className={styles.filterOptions}>
          {renderCheckboxList(skillLevels)}
        </div>
      </div>

      {/* Subject */}
      <div className={styles.filterSection}>
        <h5 className={styles.filterTitle}>Subject</h5>
        <hr className={styles.ic_hr} />
        <div className={styles.filterOptions}>
          {renderCheckboxList(subjects)}
        </div>
      </div>
    </aside>
  );
};

export default FiltersSidebar;
