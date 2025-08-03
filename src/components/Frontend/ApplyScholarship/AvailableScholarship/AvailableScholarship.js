import React from "react";
import styles from "./availableScholarship.module.css";
import team1 from "@/assets/images/apply-scholarship/service-img.png";
import ServiceCard from "@/components/Share/ServiceCard/ServiceCard";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import ScholarshipCard from "../../Scholarship/AvailScholarship/ScholarshipCard";

const teamMembers = [
  {
    id: 1,
    name: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: team1,
  },
  {
    id: 2,
    name: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: team1,
  },
  {
    id: 3,
    name: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: team1,
  },
];

export default function AvailableScholarship() {
  return (
    <section className="ic_section_space">
      <div className="container">
        <CardAnimation index={0} direction="left">
          <div className="ic_title_see_btn_container">
            <h4>Available Scholarships</h4>
          </div>
        </CardAnimation>

        <div className="ic_team_grid">
          {teamMembers.map((member, index) => (
            <ScholarshipCard
              key={index}
              member={member}
              index={index}
              isButton={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
