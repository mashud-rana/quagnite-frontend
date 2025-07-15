"use client";

import React, { useState } from "react";
import styles from "./openings.module.css";
import bgImage from "@/assets/images/all/job-bg.png";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import FilterBar from "./FilterBar";

const jobPosts = [
  {
    id: 1,
    title: "Frontend Developer",
    shortDescription: "Build and maintain UI with React.js",
    fullDescription:
      "We're looking for a frontend developer skilled in React, Tailwind CSS, and modern JavaScript frameworks. You will work with a dynamic team to build cutting-edge web apps.",
  },
  {
    id: 2,
    title: "Backend Developer",
    shortDescription: "Work with Node.js and databases",
    fullDescription:
      "Responsible for building APIs, handling data, and collaborating with the frontend team. Proficiency in Node.js, MongoDB, and REST is required.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    shortDescription: "Design beautiful and user-friendly interfaces",
    fullDescription:
      "We want someone passionate about user experience. You’ll design wireframes, mockups, and high-fidelity UIs using Figma or similar tools.",
  },
];

const Openings = () => {
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const [activeId, setActiveId] = useState(null);

  const toggleJob = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const [filters, setFilters] = useState({
    date: "",
    seniority: "",
    type: "",
    location: "",
    salary: "",
  });

  const handleToggle = (id) => {
    setExpandedJobId((prev) => (prev === id ? null : id));
  };

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // const filteredJobs = jobData.filter((job) => {
  //   // You can implement actual filtering logic based on filters here
  //   return true;
  // });

  // const visibleJobs = showAll ? filteredJobs : filteredJobs.slice(0, 3);

  return (
    <section className="ic_section_space ic_ant">
      <div className="container">
        <FilterBar filters={filters} onChange={handleChange} />

        <div className={styles.jobContainer}>
          <h2 className={styles.sectionTitle}>Job Openings</h2>
          <div className={styles.jobsList}>
            {jobPosts.map((job) => {
              const isActive = activeId === job.id;
              return (
                <div
                  key={job.id}
                  className={`${styles.jobCard} ${
                    isActive ? styles.active : ""
                  }`}
                  style={
                    isActive
                      ? { backgroundImage: `url(${bgImage.src})` }
                      : undefined
                  }
                  onClick={() => toggleJob(job.id)}
                >
                  <div className={styles.jobHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <p className={styles.shortDesc}>{job.shortDescription}</p>
                    </div>
                    <div className={styles.icon}>
                      {isActive ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>
                  {isActive && (
                    <div className={styles.fullDesc}>
                      <p>{job.fullDescription}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Openings;
