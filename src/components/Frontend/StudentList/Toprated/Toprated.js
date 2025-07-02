import React from "react";
import styles from "./toprated.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import Image from "next/image";
import team1 from "@/assets/images/all/team1.png";
import verifiedIcon from "@/assets/images/all/verified.png";
import completeIcon from "@/assets/images/all/complete.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

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
            <CardAnimation index={index} key={member.id}>
              <div className={styles.ic_team_card}>
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

                  {member.verified && (
                    <div className={styles.verifiedBadge}>
                      <Image
                        src={verifiedIcon}
                        alt="Verified"
                        width={36}
                        height={36}
                      />
                    </div>
                  )}
                  {member.complete && (
                    <div className={styles.completeBadge}>
                      <Image
                        src={completeIcon}
                        alt="Complete"
                        width={50}
                        height={50}
                      />
                    </div>
                  )}
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

export default Toprated;
