import React from "react";
import styles from "./jobs.module.css";
import { HiArrowLongRight } from "react-icons/hi2";

const Jobs = () => {
  const jobs = [
    {
      title: "Lorem Ipsum Dolar Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate.",
    },
    {
      title: "Lorem Ipsum Dolar Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate.",
    },
    {
      title: "Lorem Ipsum Dolar Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate.",
    },
  ];
  return (
    <section className="ic_section_space">
      <div className="container">
        <h6 className={styles.label}>JOBS</h6>
        <div className={styles.header}>
          <h3 className={styles.title}>
            Available <span>Positions</span>
          </h3>
          <button className={styles.seeAllButton}>SEE ALL</button>
        </div>

        <div className={styles.jobList}>
          {jobs.map((job, index) => (
            <div key={index} className={styles.jobItem}>
              <div>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <p className={styles.jobDescription}>{job.description}</p>
              </div>
              <HiArrowLongRight className={styles.arrowIcon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
