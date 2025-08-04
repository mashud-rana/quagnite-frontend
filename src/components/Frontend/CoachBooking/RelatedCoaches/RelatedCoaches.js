import React from "react";
import team1 from "@/assets/images/coach-details/related-coach.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import ScholarshipCard from "../../Scholarship/AvailScholarship/ScholarshipCard";

const teamMembers = [
  {
    id: 1,
    name: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: team1,
    instagram: "#",
    linkedin: "#",
    verified: true,
    complete: true,
  },
  {
    id: 2,
    name: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: team1,
    instagram: "#",
    linkedin: "#",
    verified: false,
    complete: true,
  },
  {
    id: 3,
    name: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: team1,
    instagram: "#",
    linkedin: "#",
    verified: true,
    complete: false,
  },
];

export default function RelatedCoaches() {
  return (
    <section>
      <div className="container">
        <CardAnimation index={0} direction="left">
          <div className="ic_title_see_btn_container">
            <h4>Related Coaches</h4>
            <div>
              <button className="ic_see_all_btn">See All</button>
            </div>
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
