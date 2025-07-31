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

const Blog = () => {
  return (
    <section className="ic_section_space_top">
      <div className="container">
        <CardAnimation index={0} direction="down">
          <h6 className="ic_white mb_16">Blog</h6>
        </CardAnimation>
        <CardAnimation index={0} direction="left">
          <div className="ic_title_see_btn_container">
            <h4>Available Scholarships</h4>
            <div>
              <button className="ic_see_all_btn">See All</button>
            </div>
          </div>
        </CardAnimation>

        <div className="ic_team_grid">
          {teamMembers.map((member, index) => (
            <ScholarshipCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
