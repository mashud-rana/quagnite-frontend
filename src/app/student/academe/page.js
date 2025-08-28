import { FaEnvelope } from "react-icons/fa";
import styles from "./academe.module.css";
import img from "@/assets/images/all/case-studies.png";
import Image from "next/image";

const coaches = [
  {
    id: "1",
    name: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/professional-woman-business-attire.png",
    email: "coach1@example.com",
  },
  {
    id: "2",
    name: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/professional-woman-business-attire.png",
    email: "coach2@example.com",
  },
  {
    id: "3",
    name: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/professional-woman-business-attire.png",
    email: "coach3@example.com",
  },
  {
    id: "4",
    name: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/professional-woman-business-attire.png",
    email: "coach4@example.com",
  },
  {
    id: "5",
    name: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/professional-woman-business-attire.png",
    email: "coach5@example.com",
  },
  {
    id: "6",
    name: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/professional-woman-business-attire.png",
    email: "coach6@example.com",
  },
];

export default function AcademePage() {
  return (
    <div className={styles.coachesGrid}>
      {coaches.map((coach) => (
        <div key={coach.id} className={styles.coachCard}>
          <div className={styles.coachImage}>
            <Image src={img} alt={coach.name} className={styles.coachPhoto} />
          </div>
          <div className={styles.coachInfo}>
            <h3 className={styles.coachName}>{coach.name}</h3>
            <p className={styles.coachDescription}>{coach.description}</p>
            <button className={styles.contactButton} title="Contact Coach">
              <FaEnvelope className={styles.contactIcon} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
