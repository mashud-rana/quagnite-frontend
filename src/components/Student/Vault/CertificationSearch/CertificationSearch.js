"use client";
import React, { useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";
import styles from "./CertificationSearch.module.css";
import FilterModal from "./FilterModal";

const CertificationSearch = ({
  onSearchChange,
  onCertifiableTypesChange
}) => {
  let timeout = null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  //course type handling
  const courseTypeHandler = (selectedTypes) => {
    onCertifiableTypesChange(selectedTypes);
    // console.log("Selected course types lifting up:", selectedTypes);
  }

  return (
    <div className={styles.ic_search_container}>
      <div className={styles.ic_search_wrapper}>
        <input
          type="text"
          placeholder="Search"
          className={styles.ic_search_input}
          onChange={(e) => {
          clearTimeout(timeout);
          const value = e.target.value;
          timeout = setTimeout(() => {
            // Call the API or update the state with the search value
            // console.log("Searching for:", value);
            onSearchChange(value);
          }, 300);
        }}
        />
      </div>
      <div>
        <button
          className={styles.ic_scroll_top_button}
          aria-label="Scroll to top"
          onClick={() => setIsModalOpen(true)}
        >
          <FaAnglesUp className={styles.ic_scroll_top_icon} />
        </button>
      </div>

      <FilterModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onCourseTypeChange={courseTypeHandler} />
    </div>
  );
};

export default CertificationSearch;
