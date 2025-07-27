import React from "react";
import styles from "./assistCoach.module.css";
import team1 from "@/assets/images/all/team1.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import TopCard from "../../StudentList/Toprated/TopCard";

const AssistCoach = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: team1,
      gradientClass: styles.gradientBlue,
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
      gradientClass: styles.gradientOrange,
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
      gradientClass: styles.gradientPurple,
      instagram: "#",
      linkedin: "#",
      verified: true,
      complete: false,
    },
  ];
  return (
    <section className="ic_section_space">
      <div className="container">
        <CardAnimation index={0} direction="left">
          <div className={styles.ic_title_btn_container}>
            <h4 className="ic_white">Top Rated Alumni</h4>
            <button className="ic_see_all_btn">See All</button>
          </div>
        </CardAnimation>
        <div className={styles.ic_team_grid}>
          {teamMembers.map((member, index) => (
            <TopCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssistCoach;
