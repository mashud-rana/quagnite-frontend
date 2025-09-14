import Image from "next/image";
import styles from "./details.module.css";
import img from "@/assets/images/all/teacher.png";
import bg from "@/assets/images/bg/bg2.png";
import img2 from "@/assets/images/all/case-studies.png";

const sessions = [
  {
    id: 1,
    title: "Blockchain Mastery Bootcamp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan.",
    image: "/placeholder.svg?height=200&width=300&text=Blockchain+Course",
  },
  {
    id: 2,
    title: "Blockchain Mastery Bootcamp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan.",
    image: "/placeholder.svg?height=200&width=300&text=Blockchain+Course",
  },
  {
    id: 3,
    title: "Blockchain Mastery Bootcamp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan.",
    image: "/placeholder.svg?height=200&width=300&text=Blockchain+Course",
  },
];

const ProfileDetailsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={styles.heroContent}
        >
          {/* Left Side - Professor Image */}
          <div className={styles.imageSection}>
            <div className={styles.floatingElements}>
              <div
                className={`${styles.floatingElement} ${styles.circle1}`}
              ></div>
              <div
                className={`${styles.floatingElement} ${styles.circle2}`}
              ></div>
              {/* <div
                className={`${styles.floatingElement} ${styles.triangle1}`}
              ></div> */}
              <div
                className={`${styles.floatingElement} ${styles.triangle2}`}
              ></div>
              <div
                className={`${styles.floatingElement} ${styles.line1}`}
              ></div>
            </div>
            <Image
              src={img}
              alt="Professor Eliza Thornwell"
              className={styles.professorImage}
            />
          </div>

          {/* Right Side - Content */}
          <div className={styles.contentSection}>
            <h1 className={styles.professorName}>Professor Eliza Thornwell.</h1>
            <p className={styles.professorDescription}>
              At Quagnite, we believe in the power of education to change the
              world, and we want to make that power accessible to everyone. We
              have many options to help you pursue your passions, and we know we
              can find one that&#39;s just right for you.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.startChatButton}>START CHAT</button>
              <button className={styles.scheduleCallButton}>
                SCHEDULE CALL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Session List Section */}
      <section className={styles.sessionSection}>
        <div className={styles.sessionContent}>
          <h5 className={styles.sessionTitle}>Session List</h5>
          <div className={styles.sessionGrid}>
            {sessions.map((session) => (
              <div key={session.id} className={styles.sessionCard}>
                <div className={styles.sessionImageContainer}>
                  <Image
                    src={img2}
                    alt={session.title}
                    className={styles.sessionImage}
                  />
                </div>
                <div className={styles.sessionCardContent}>
                  <h3 className={styles.sessionCardTitle}>{session.title}</h3>
                  <p className={styles.sessionCardDescription}>
                    {session.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileDetailsPage;
