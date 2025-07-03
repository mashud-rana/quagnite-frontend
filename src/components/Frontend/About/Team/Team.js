import React from "react";
import styles from "./team.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import Image from "next/image";
import team1 from "@/assets/images/all/team1.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Team = () => {
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
    },
  ];

  return (
    <section className="ic_section_space">
      <div className="container">
        <CardAnimation index={0} direction="left">
          <h6 className="ic_white">TEAM</h6>
        </CardAnimation>
        <CardAnimation index={0} direction="up">
          <div className={styles.ic_team_grid}>
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.ic_team_card}>
                <div
                  className={`${styles.ic_image_container} ${member.gradientClass}`}
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={350}
                    height={300}
                    className={styles.ic_member_image}
                  />
                </div>
                <div className={styles.ic_card_content}>
                  <h3 className={styles.ic_member_name}>{member.name}</h3>
                  <p className={styles.ic_member_description}>
                    {member.description}
                  </p>
                  <div className={styles.ic_social_links}>
                    <a
                      href={member.instagram}
                      className={styles.ic_social_link}
                    >
                      <FaInstagram size={23} />
                    </a>
                    <a href={member.linkedin} className={styles.ic_social_link}>
                      <PiLinkedinLogoBold size={23} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardAnimation>
      </div>
    </section>
  );
  memberImage;
};

export default Team;
