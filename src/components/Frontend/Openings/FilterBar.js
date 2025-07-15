import React from "react";
import CustomSelect from "./CustomSelect";
import styles from "./openings.module.css";

const filterOptions = {
  date: [
    { value: "today", label: "Today" },
    { value: "week", label: "Last Week" },
    { value: "month", label: "Last Month" },
  ],
  seniority: [
    { value: "junior", label: "Junior" },
    { value: "mid", label: "Mid" },
    { value: "senior", label: "Senior" },
  ],
  type: [
    { value: "full-time", label: "Full-time" },
    { value: "part-time", label: "Part-time" },
    { value: "contract", label: "Contract" },
  ],
  location: [
    { value: "remote", label: "Remote" },
    { value: "onsite", label: "On-site" },
  ],
  salary: [
    { value: "low", label: "< $50k" },
    { value: "medium", label: "$50k - $100k" },
    { value: "high", label: "> $100k" },
  ],
};

const FilterBar = ({ filters, onChange }) => {
  return (
    <div className={styles.filterBar}>
      <span className={styles.filterLabel}>Filter</span>
      {Object.entries(filterOptions).map(([key, options]) => (
        <CustomSelect
          key={key}
          label={key[0].toUpperCase() + key.slice(1)}
          options={options}
          value={filters[key]}
          onChange={(val) => onChange(key, val)}
        />
      ))}
    </div>
  );
};

export default FilterBar;
