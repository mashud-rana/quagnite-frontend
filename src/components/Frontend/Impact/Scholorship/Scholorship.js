import React from "react";
import styles from "./scholorship.module.css";
import team1 from "@/assets/images/all/scholorship.png";
import team2 from "@/assets/images/all/scholorship2.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

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
    image: team2,
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

const Scholorship = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
        <CardAnimation index={0} direction="left">
          <h4 className={styles.ic_title}>Available Scholarships</h4>=
        </CardAnimation>

        <div className={styles.ic_team_grid}>
          {teamMembers.map((member, index) => (
            <CardAnimation index={index} key={index}>
              <div className={styles.ic_team_card}>
                <div className={`${styles.ic_image_container}`}>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={260}
                    height={170}
                    className={styles.ic_member_image}
                  />
                </div>
                <div className={styles.ic_card_content}>
                  <h3 className={styles.ic_member_name}>{member.name}</h3>
                  <p className={styles.ic_member_description}>
                    {member.description}
                  </p>

                  <button className={styles.ic_btn}>Hire Now</button>
                </div>
              </div>
            </CardAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scholorship;
