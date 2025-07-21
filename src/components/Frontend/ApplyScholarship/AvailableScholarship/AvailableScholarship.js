import React from "react";
import styles from "./availableScholarship.module.css";
import img1 from "@/assets/images/apply-scholarship/service-img.png";
import img2 from "@/assets/images/apply-scholarship/service-img2.png";
import img3 from "@/assets/images/apply-scholarship/service-img3.png";
import ServiceCard from "@/components/Share/ServiceCard/ServiceCard";

const alumniData = [
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
    image: img2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Lorem Ipsum Dolar Sit Amet",
    image: img3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function AvailableScholarship() {
  return (
    <section className={`${styles.ic_available_scholarship} ic_section_space`}>
      <div className="container">
        <div className={styles.ic_available_scholarship_main}>
          <div className={`ic_section_heading`}>
            <h3>Available Scholarships</h3>
          </div>

          <ServiceCard data={alumniData} buttonText="Explore" />
        </div>
      </div>
    </section>
  );
}
