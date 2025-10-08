"use client";
import React, { useEffect, useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";
import styles from "./searchebook.module.css";

const SearchEbook = ({onSearchChange, onSearchFilterChange}) => {
  const [openFilter, setOpenFilter] = useState(false);
  let timeout = null;
  const [searchFilter, setSearchFilter] = useState({
    highest: '',
    newest: '',
    bookAZ: '',
  });
  //lifting up data
  useEffect(()=>{
    console.log('Chield: update select filter:', searchFilter)
    onSearchFilterChange({...searchFilter})
  },[searchFilter])

  return (
    <div className={styles.ic_search_container}>
      {/* Search Input */}
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
              console.log("Searching for:", value);
              onSearchChange(value);
            }, 300);
          }}
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
              <li onClick={
                ()=>{
                  setSearchFilter((prev)=>({
                    // ...prev,
                    highest: prev.highest === "" ? true : !prev.highest,
                    newest: "",
                    bookAZ: ""
                  }))
                }
              }> {
                searchFilter.highest === '' ? "Highest" : searchFilter.highest == true ? 'Lowest' : 'Highest'
                }  Rated
                
                </li>
              <li
              onClick={
                ()=>{
                  setSearchFilter((prev)=>({
                    // ...prev,
                    newest: prev.newest === "" ? true : !prev.newest,
                    highest:'',
                    bookAZ:'',
                  }))
                }
              }>
                {
                  searchFilter.newest === '' ? 'Newest' : searchFilter.newest === true ? 'Oldest' : 'Newest'
                }
              </li>
              <li onClick={
                ()=>{
                  setSearchFilter((prev)=>({
                    // ...prev,
                    bookAZ: prev.bookAZ === "" ? true : !prev.bookAZ,
                    highest:'',
                    newest:'',
                  }))
                }
              }> {
                searchFilter.bookAZ == '' ? 'Book A-Z' : searchFilter.bookAZ == true ? 'Book Z-A' : 'Book A-Z'
              }  </li>
            </ul>
            <hr className={styles.ic_filter_line} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchEbook;
