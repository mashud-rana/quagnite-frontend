import { FaClock, FaCalendarAlt } from "react-icons/fa";
import styles from "./exam.module.css";

const Exam = () => {
  const filteredExams = [
    {
      id: "1",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264846",
      attempts: 3,
      time: "10:00 AM EST",
      date: "22 Nov 2024",
      status: "upcoming",
      image: "/exam-study-image.png",
    },
    {
      id: "2",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264846",
      attempts: 3,
      time: "10:00 AM EST",
      date: "22 Nov 2024",
      status: "upcoming",
      image: "/exam-study-image.png",
    },
    {
      id: "3",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264846",
      attempts: 3,
      time: "10:00 AM EST",
      date: "22 Nov 2024",
      status: "upcoming",
      image: "/exam-study-image.png",
    },
    {
      id: "4",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264847",
      attempts: 2,
      time: "2:00 PM EST",
      date: "25 Nov 2024",
      status: "suggested",
      image: "/exam-study-image.png",
    },
    {
      id: "5",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264848",
      attempts: 1,
      time: "11:00 AM EST",
      date: "15 Nov 2024",
      status: "completed",
      image: "/exam-study-image.png",
    },
  ];
  return (
    <div>
      <div className={styles.examsGrid}>
        {filteredExams.map((exam) => (
          <div key={exam.id} className={styles.examCard}>
            {/* Card Image */}
            <div className={styles.cardImageContainer}>
              <img
                src={exam.image || "/placeholder.svg"}
                alt={exam.title}
                className={styles.cardImage}
              />
            </div>

            {/* Card Content */}
            <div className={styles.cardContent}>
              {/* Title */}
              <div className={styles.ic_text_container}>
                <h4 className={styles.examTitle}>{exam.title}</h4>
                <span className={styles.statusBadge}>Upcoming exam</span>
              </div>

              {/* Description */}
              <p className={styles.examDescription}>{exam.description}</p>

              {/* Exam Details */}
              <div className={styles.examDetailsContainer}>
                <div className={styles.examDetailsRow}>
                  <span className={styles.examDetail}>
                    Exam Id - {exam.examId}
                  </span>
                  <span className={styles.examDetail}>
                    No of Attempts - {exam.attempts}
                  </span>
                </div>

                <div className={styles.timeDetailsRow}>
                  <div className={styles.timeDetail}>
                    <FaClock className={styles.timeIcon} />
                    <span>{exam.time}</span>
                  </div>
                  <div className={styles.timeDetail}>
                    <FaCalendarAlt className={styles.timeIcon} />
                    <span>{exam.date}</span>
                  </div>
                </div>
              </div>

              {/* Start Exam Button */}
              <button className={styles.startExamButton}>start exam</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exam;
