import React from "react";
import styles from "./relatedCoaches.module.css";
import img1 from "@/assets/images/coach-details/related-coach.png";
import ServiceCard from "@/components/Share/ServiceCard/ServiceCard";
const coachesData = [
  {
    id: 1,
    name: "Lorem Ipsum Dolar Sit Amet",
    image: img1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Lorem Ipsum Dolar Sit Amet",
    image: img1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Lorem Ipsum Dolar Sit Amet",
    image: img1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function RelatedCoaches() {
  return (
    <section className={styles.ic_related_coaches}>
      <div className="container">
        <div className={styles.ic_related_coaches_main}>
          <div className={`${styles.ic_top_header} ic_section_heading`}>
            <h3>Related Coaches</h3>
            <button type="primary" className="ic-btn1 ic-btn2">
              See All
            </button>
          </div>
          <ServiceCard data={coachesData} buttonText="coach book" />
        </div>
      </div>
    </section>
  );
}
