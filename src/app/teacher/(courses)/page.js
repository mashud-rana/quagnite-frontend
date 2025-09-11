import { FaArrowLeft, FaEnvelope } from "react-icons/fa";
import styles from "./courses.module.css";
import img from "@/assets/images/all/case-studies.png";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

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

const TeacherDashboardPage = () => {
  return (
    <div>
      <div className="mb-24 ic_flex">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Courses</h1>
        </div>

        <Link
          href="/teacher/course/create-course"
          className="ic_common_primary_btn"
        >
          + create course
        </Link>
      </div>

      <div className={styles.coachesGrid}>
        {coaches.map((coach) => (
          <div key={coach.id} className={styles.coachCard}>
            <div className={styles.coachImage}>
              <Image src={img} alt={coach.name} className={styles.coachPhoto} />
            </div>
            <div className={styles.coachInfo}>
              <h3 className={styles.coachName}>{coach.name}</h3>
              <p className={styles.coachDescription}>{coach.description}</p>

              <div className={styles.ic_icon_container}>
                <BiEditAlt className={styles.contactIcon} />
                <RiDeleteBin6Line className={styles.contactIcon} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboardPage;
