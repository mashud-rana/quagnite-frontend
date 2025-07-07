import React from "react";
import styles from "./toprated.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import Image from "next/image";
import team1 from "@/assets/images/all/team1.png";
import verifiedIcon from "@/assets/images/all/verified.png";
import completeIcon from "@/assets/images/all/complete.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import TopCard from "./TopCard";

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

const Toprated = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
        <CardAnimation index={0} direction="left">
          <h4 className="ic_white">Top Rated Alumni</h4>
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

export default Toprated;
