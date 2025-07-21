"use client";

import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import styles from "./filter.module.css";

const Filter = () => {
  // State for each filter's selected value
  const [price, setPrice] = useState("Any");
  const [school, setSchool] = useState("Any");
  const [industry, setIndustry] = useState("Any");
  const [location, setLocation] = useState("Any");
  const [salary, setSalary] = useState("Any");

  // State to manage which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  const filters = [
    {
      label: "Price",
      value: price,
      setValue: setPrice,
      options: ["Any", "$0 - $500", "$500 - $1000", "$1000+"],
      isActive: true,
    },
    {
      label: "School",
      value: school,
      setValue: setSchool,
      options: [
        "Any",
        "Quagnite Academy",
        "Tech Institute",
        "Global University",
      ],
      isActive: false,
    },
    {
      label: "Industry",
      value: industry,
      setValue: setIndustry,
      options: ["Any", "Software", "Healthcare", "Finance", "Marketing"],
      isActive: false,
    },
    {
      label: "Location",
      value: location,
      setValue: setLocation,
      options: ["Any", "Remote", "On-site", "Hybrid"],
      isActive: false,
    },
    {
      label: "Salary",
      value: salary,
      setValue: setSalary,
      options: ["Any", "< $50k", "$50k - $80k", "$80k - $120k", "$120k+"],
      isActive: false,
    },
  ];

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleOptionSelect = (label, option, setValue) => {
    setValue(option);
    setOpenDropdown(null); // Close dropdown after selection
  };

  return (
    <div className="ic_section_space_top ">
      <div className="container">
        <div className={styles.ic_grid}>
          <span className={styles.filterLabel}>Filter</span>
          <div className={styles.filterOptions}>
            {filters.map((filter, index) => (
              <div
                key={index}
                className={`${styles.dropdownWrapper} ${
                  openDropdown === filter.label ? styles.show : ""
                }`}
              >
                <div
                  className={`${styles.filterDropdown} ${
                    openDropdown === filter.label ? styles.active : ""
                  }`}
                  onClick={() => handleDropdownToggle(filter.label)}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === filter.label}
                >
                  <span className={styles.filterText}>{filter.label}</span>
                  <BsChevronDown
                    className={`${styles.filterIcon} ${
                      openDropdown === filter.label ? styles.rotated : ""
                    }`}
                  />
                  <div
                    className={`${styles.underline} ${
                      filter.isActive ? styles.activeUnderline : ""
                    }`}
                  ></div>
                </div>
                {openDropdown === filter.label && (
                  <div className={styles.dropdownContent}>
                    <div className={styles.dropdownLabel}>{filter.label}</div>
                    <div className={styles.dropdownSeparator}></div>
                    {filter.options.map((option, optIndex) => (
                      <div
                        key={optIndex}
                        className={`${styles.dropdownItem} ${
                          filter.value === option ? styles.selectedItem : ""
                        }`}
                        onClick={() =>
                          handleOptionSelect(
                            filter.label,
                            option,
                            filter.setValue
                          )
                        }
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
