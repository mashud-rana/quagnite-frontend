import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import React from "react";
import TopCard from "../../StudentList/Toprated/TopCard";
import styles from "./coaches.module.css";
import team1 from "@/assets/images/all/team1.png";
import Image from "next/image";
import line from "@/assets/images/all/coach-line.png";

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

const Coaches = () => {
  return (
    <section className={`ic_section_space_top ${styles.ic_bg_line_wrapper}`}>
      <div className="container">
        <CardAnimation index={0} direction="left">
          <div className={styles.ic_title_wrapper}>
            <h4 className={styles.ic_title}>Coaches</h4>
            <button className={styles.ic_see_all_button}>See All</button>
          </div>
        </CardAnimation>

        <div className={styles.ic_team_grid}>
          {teamMembers.map((member, index) => (
            <TopCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>

      <Image
        className={styles.ic_line_img}
        src={line}
        width={825}
        height={135}
        alt=""
      />
    </section>
  );
};

export default Coaches;
