"use client";
import React from "react";
import styles from "./topRatedAlumni.module.css";
import img1 from "@/assets/images/student-hire/img1.png";
import ServiceCard from "@/components/Share/ServiceCard/ServiceCard";

const alumniData = [
  {
    name: "Lorem Ipsum Dolar Sit Amet",
    image: img1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lorem Ipsum Dolar Sit Amet",
    image: img1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lorem Ipsum Dolar Sit Amet",
    image: img1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function TopRatedAlumni() {
  return (
    <section className="">
      <div className="container">
        <div className={styles.ic_top_rated_main}>
          <div className={`${styles.ic_top_header} ic_section_heading`}>
            <h3>Top Rated Alumni</h3>
            <button type="primary" className="ic-btn1 ic-btn2">
              See All
            </button>
          </div>

          <ServiceCard data={alumniData} />
        </div>
      </div>
    </section>
  );
}
