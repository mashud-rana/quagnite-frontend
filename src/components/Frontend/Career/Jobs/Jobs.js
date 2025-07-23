import React from "react";
import styles from "./jobs.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

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
        <CardAnimation index={1} direction="up">
          <h6 className={styles.label}>JOBS</h6>
          <div className={styles.header}>
            <h3 className={styles.title}>
              Available <span>Positions</span>
            </h3>
            <button className={styles.seeAllButton}>SEE ALL</button>
          </div>
        </CardAnimation>

        <div className={styles.jobList}>
          {jobs.map((job, index) => (
            <CardAnimation index={index} key={index}>
              <div className={styles.jobItem}>
                <div>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <p className={styles.jobDescription}>{job.description}</p>
                </div>
                <HiArrowLongRight className={styles.arrowIcon} />
              </div>
            </CardAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
