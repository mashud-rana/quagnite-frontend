import { FaCircle } from "react-icons/fa";
import styles from "./CourseOverview.module.css";
import { FaCircleCheck } from "react-icons/fa6";

export function CourseOverview() {
  const whatYoullLearn = [
    "Developer",
    "Web Development",
    "Android Development",
    "Cross Platform Development",
    "Cross Platform Development",
    "Web App Development",
  ];

  const whoThisCourseIsFor = [
    "Beginner",
    "Web Developers",
    "Android Development",
    "Cross Platform Development",
  ];

  return (
    <div className={styles.overviewContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <h2 className={styles.title}>About this course</h2>
        <p className={styles.subtitle}>
          Learn Web Design from scratch by working on some awesome projects.
        </p>
      </div>

      {/* Stats and Features Section - Two Column Layout */}
      <div className={styles.topSection}>
        <div className={styles.leftColumn}>
          <p className={styles.sectionTitle}>By the numbers :</p>

          <div className={styles.ic_list_container}>
            <div className={styles.statsList}>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Skill level:</span>
                <span className={styles.statValue}>All Levels</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Students:</span>
                <span className={styles.statValue}>10761</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Lectures:</span>
                <span className={styles.statValue}>16</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Video:</span>
                <span className={styles.statValue}>2 total hours</span>
              </div>
            </div>

            <div className={styles.statsList}>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Languages:</span>
                <span className={styles.statValue}>English</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Captions:</span>
                <span className={styles.statValue}>Yes</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <h3 className={styles.sectionTitle}>Features :</h3>
          <div className={styles.featuresContent}>
            <span className={styles.featureText}>Available on </span>
            <a href="#" className={styles.featureLink}>
              iOS
            </a>
            <span className={styles.featureText}> and </span>
            <a href="#" className={styles.featureLink}>
              Android
            </a>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className={styles.descriptionSection}>
        <p className={styles.sectionTitle}>Description :</p>
        <div className={styles.descriptionContent}>
          <p className={styles.descriptionParagraph}>
            Welcome to Development 101, your ultimate guide for learning Web
            development.
          </p>
          <p className={styles.descriptionParagraph}>
            Throughout this course, you will be learning various essential
            things that are mostly used by a flutter developer when he/she is
            working at some firm.
          </p>
          <p className={styles.descriptionParagraph}>
            This course will help you learn how to create fast and stunning
            mobile applications with so much ease. The projects/apps which you
            will be making throughout the course will be working on android as
            well as iOS. Some changes to the projects make them compatible with
            web browsers as well.
          </p>
          <p className={styles.descriptionParagraph}>
            You will also be building a large number of apps with the difficulty
            level ranging from beginner to advanced and these projects/apps will
            help you get better with the concepts eventually.
          </p>
          <p className={styles.descriptionParagraph}>
            I will also be covering some of the most used flutter packages which
            are generally used while we are developing a flutter app.
          </p>
          <p className={styles.descriptionParagraph}>
            Flutter is Google&#39;s UI toolkit for building beautiful, natively
            compiled applications for mobile, web, and desktop from a single
            codebase. Delight your users with Flutter&#39;s built-in beautiful
            Material Design. Flutter&#39;s hot reload helps you quickly and
            easily experiment, build UIs, add features, and fix bugs faster.
            Cross-platform development with Flutter. Flutter&#39;s widgets
            incorporate all critical platform differences such as scrolling,
            navigation, icons, and fonts to provide full native performance on
            both iOS and Android.
          </p>
          <p className={styles.descriptionParagraph}>Happy Learning!!</p>
        </div>
      </div>

      {/* Learning Outcomes Section - Two Column Layout */}
      <div className={styles.bottomSection}>
        <div className={styles.leftColumn2}>
          <h3 className={styles.sectionTitle}>What you&#39;ll learn</h3>
          <div className={styles.learningList}>
            {whatYoullLearn.map((item, index) => (
              <div key={index} className={styles.learningItem}>
                <FaCircleCheck className={styles.bulletPoint} />
                <span className={styles.learningText}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightColumn}>
          <h3 className={styles.sectionTitle}>Who this course is for</h3>
          <div className={styles.learningList}>
            {whoThisCourseIsFor.map((item, index) => (
              <div key={index} className={styles.learningItem}>
                <FaCircle className={styles.bulletPoint} />
                <span className={styles.learningText}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
