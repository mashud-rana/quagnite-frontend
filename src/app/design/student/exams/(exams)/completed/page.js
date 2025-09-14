import Image from "next/image";
import React from "react";
import img from "@/assets/images/all/exams.png";
import styles from "./completed.module.css";
import { GoEye } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";
import { TbEye } from "react-icons/tb";

const CompletedPage = () => {
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
  ];
  return (
    <div>
      <div className="examsGrid">
        {filteredExams.map((exam) => (
          <div key={exam.id} className={styles.examCard}>
            {/* Card Image */}
            <div className={styles.cardImageContainer}>
              <Image src={img} alt={exam.title} className={styles.cardImage} />
            </div>

            {/* Card Content */}
            <div>
              <div className={styles.ic_text_container}>
                <h4 className={styles.examTitle}>{exam.title}</h4>
                <span className={styles.statusBadge}>Upcoming exam</span>
              </div>

              <p>{exam.description}</p>

              <div className={styles.ic_wrapper}>
                <div className={styles.examDetailsRow}>
                  <span className={styles.examDetail}>
                    <strong>Exam Id</strong> - {exam.examId}
                  </span>
                  <span className={styles.examDetail}>
                    <strong> No of Attempts</strong> - {exam.attempts}
                  </span>

                  <span className={styles.examDetail}>
                    <strong> Certificate</strong> - (Expiry - 6 month after
                    completion)
                  </span>
                </div>

                <div className={styles.ic_icon_wrapper}>
                  <div className={styles.ic_icon_container}>
                    <TbEye />
                  </div>

                  <div className={styles.ic_icon_container}>
                    <MdOutlineFileDownload />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedPage;
