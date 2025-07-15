import React from "react";
import styles from "./openings.module.css";
import { FaChevronDown } from "react-icons/fa";

function CustomSelect({ label, options, value, onChange }) {
  return (
    <div className={styles.selectWrapper}>
      <select
        className={styles.customSelect}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FaChevronDown className={styles.selectArrowIcon} size={20} />
    </div>
  );
}

export default CustomSelect;
