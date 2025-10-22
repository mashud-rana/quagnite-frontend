import Image from "next/image";
import React from "react";
import styles from "./pastsession.module.css";
import img from "@/assets/images/all/exams.png";
import { MdOutlineStar } from "react-icons/md";

const PastSession = () => {
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
      image: "/exams-study-image.png",
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
      image: "/exams-study-image.png",
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
      image: "/exams-study-image.png",
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
      image: "/exams-study-image.png",
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
      image: "/exams-study-image.png",
    },
  ];
  return (
    <div>
      <h5 className={styles.ic_heading_title}>Past Session</h5>
      <div className="examsGrid">
        {filteredExams.map((exam) => (
          <div key={exam.id} className={styles.examCard}>
            {/* Card Image */}
            <div className={styles.cardImageContainer}>
              <Image src={img} alt={exam.title} className={styles.cardImage} />
            </div>

            {/* Card Content */}
            <div>
              <h4 className={styles.examTitle}>{exam.title}</h4>

              <p>{exam.description}</p>

              <div className={styles.ic_btn_review_container}>
                <button className="ic_common_primary_btn">
                  REPEAT SESSION
                </button>

                <div className={styles.ic_icons}>
                  <div>
                    <MdOutlineStar className={styles.ic_star} />
                    <MdOutlineStar className={styles.ic_star} />
                    <MdOutlineStar className={styles.ic_star} />
                    <MdOutlineStar className={styles.ic_star} />
                    <MdOutlineStar
                      className={`${styles.ic_star} ${styles.ic_start_color}`}
                    />
                  </div>
                  <span>210</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastSession;
