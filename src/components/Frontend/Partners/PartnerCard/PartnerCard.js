import React from "react";
import styles from "./partnercard.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import team1 from "@/assets/images/all/courses.png";
import Image from "next/image";

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
  {
    id: 4,
    name: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: team1,
    instagram: "#",
    linkedin: "#",
    verified: true,
    complete: false,
  },
  {
    id: 5,
    name: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: team1,
    instagram: "#",
    linkedin: "#",
    verified: true,
    complete: false,
  },
  {
    id: 6,
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

const PartnerCard = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
        <div className={styles.ic_team_grid}>
          {teamMembers.map((member, index) => (
            <CardAnimation index={index} key={index}>
              <div className={styles.ic_team_card}>
                <div className={`${styles.ic_image_container}`}>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={360}
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

export default PartnerCard;
