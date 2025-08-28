"use client";
import React, { useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";
import styles from "./searchebook.module.css";

const SearchEbook = () => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className={styles.ic_search_container}>
      {/* Search Input */}
      <div className={styles.ic_search_wrapper}>
        <input
          type="text"
          placeholder="Search"
          className={styles.ic_search_input}
        />
      </div>

      {/* Button */}
      <div className={styles.ic_filter_wrapper}>
        <button
          className={styles.ic_scroll_top_button}
          aria-label="Toggle Filter"
          onClick={() => setOpenFilter((prev) => !prev)}
        >
          <FaAnglesUp className={styles.ic_scroll_top_icon} />
        </button>

        {/* Submenu Filter */}
        {openFilter && (
          <div className={styles.ic_filter_box}>
            <h4 className={styles.ic_filter_title}>Search Filter</h4>
            <hr className={styles.ic_filter_line} />
            <ul className={styles.ic_filter_list}>
              <li>Highest Rated</li>
              <li>Newest</li>
              <li>Book A-Z</li>
            </ul>
            <hr className={styles.ic_filter_line} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchEbook;
