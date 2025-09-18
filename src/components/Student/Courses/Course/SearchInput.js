"use client";
import React, {useState} from "react";
import styles from "./course.module.css";
import { FaAnglesUp } from "react-icons/fa6";
import {useDispatch } from "react-redux";
import { setPage } from "@/redux/features/student/course/courseSlice";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pathname = usePathname(); 
  const router = useRouter();
  const searchParams = useSearchParams();

    // ✅ Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    dispatch(setPage(1));
  
    const newUrl = `${pathname}?${params.toString()}`;
    if (window.location.search !== `?${params.toString()}`) {
      router.replace(newUrl);
    }
  };
  return (
    <div className={styles.ic_search_container}>
      <div className={styles.ic_search_wrapper}>
        <input
          type="text"
          placeholder="Search"
          className={styles.ic_search_input}
          onInput={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <div>
        <button
          className={styles.ic_scroll_top_button}
          aria-label="Scroll to top"
          onClick={handleSearch}
        >
          <FaAnglesUp className={styles.ic_scroll_top_icon} />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
