import React from "react";
import styles from "./team.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import team1 from "@/assets/images/all/team1.png";

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
        <h6 className="ic_white mb_20">TEAM</h6>
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div
                className={`${styles.imageContainer} ${member.gradientClass}`}
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberDescription}>{member.description}</p>
                <div className={styles.socialLinks}>
                  <a href={member.instagram} className={styles.socialLink}>
                    <FaInstagram size={20} />
                  </a>
                  <a href={member.linkedin} className={styles.socialLink}>
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  memberImage;
};

export default Team;
