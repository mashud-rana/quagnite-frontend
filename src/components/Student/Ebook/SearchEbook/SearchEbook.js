import React from "react";
import { FaAnglesUp } from "react-icons/fa6";
import styles from "./searchebook.module.css";

const SearchEbook = () => {
  return (
    <div className={styles.ic_search_container}>
      <div className={styles.ic_search_wrapper}>
        <input
          type="text"
          placeholder="Search"
          className={styles.ic_search_input}
        />
      </div>
      <div>
        <button
          className={styles.ic_scroll_top_button}
          aria-label="Scroll to top"
        >
          <FaAnglesUp className={styles.ic_scroll_top_icon} />
        </button>
      </div>
    </div>
  );
};

export default SearchEbook;
