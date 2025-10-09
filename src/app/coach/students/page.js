import React from "react";
import team1 from "@/assets/images/all/team1.png";
import styles from "./student.module.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

const StudentPage = () => {
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

  return (
    <div>
      <div className="ic_title_section mb-24">
        <Link href="#" className="ic_back_button" aria-label="Go back">
          <FaArrowLeft />
        </Link>
        <h1 className="ic_text_36">Students</h1>
      </div>

      <div className={styles.ic_team_grid}>
        {teamMembers.map((member) => (
          <div className={styles.ic_wrapper} key={member.id}>
            <div className={styles.ic_team_card}>
              <div className={styles.ic_img_wrapper}>
                <div className={styles.ic_image_container}>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={200}
                    className={styles.ic_member_image}
                  />
                </div>
              </div>
              <div className={styles.ic_card_content}>
                <h3 className={styles.ic_member_name}>{member.name}</h3>
                <p className="mb-12">Last Session</p>
                <p className={styles.ic_member_description}>
                  {member.description}
                </p>

                <button className="ic_common_primary_btn">Start chat</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentPage;
