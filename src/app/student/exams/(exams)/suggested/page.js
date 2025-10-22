import React from "react";
import styles from "./suggested.module.css";
import img from "@/assets/images/all/exams.png";
import img2 from "@/assets/images/all/session.png";
import Image from "next/image";
import FiltersSidebar from "@/components/Student/Courses/Course/FiltersSidebar";
import ExamCard from "@/components/Student/Exams/Exam/ExamCard";

const SuggestedPage = () => {
  const filterData = [
    {
      title: "Our Exams",
      options: ["All", "Core courses", "Expanded courses", "Labs"],
    },
    {
      title: "Skill level",
      options: ["Advanced", "Beginner", "Intermediate"],
    },
    {
      title: "Subject",
      options: [
        "Business Professional",
        "Creative Professional",
        "Data Professional",
        "Digital Marketer",
        "IT Ops",
        "Product Manager",
      ],
    },
  ];

  const todayData = [1, 2, 3];

  const bigCard = {
    img: img,
    title: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    buttonText: "Schedule now",
  };

  const smallCards = [
    {
      img: img2,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
      buttonText: "Schedule now",
    },
    {
      img: img2,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
      buttonText: "Schedule now",
    },
  ];

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
  ];

  return (
    <div>
      <div className="ic_content_wrapper">
        <FiltersSidebar sections={filterData} />
        <div className={styles.ic_grid}>
          {/* Left Column (Big Card) */}
          <div className={styles.ic_left_column}>
            <div className={styles.ic_card}>
              <Image
                src={bigCard.img}
                alt="Big Card"
                className={styles.ic_big_image}
              />
              <p className={styles.ic_card_title}>{bigCard.title}</p>
              <p className={styles.ic_card_description}>
                {bigCard.description}
              </p>
              <div>
                <button className="ic_common_primary_btn">
                  {bigCard.buttonText}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (Small Cards) */}
          <div className={styles.ic_right_column}>
            {smallCards.map((card, index) => (
              <div key={index} className={styles.ic_card}>
                <Image
                  src={card.img}
                  alt={`Small Card ${index}`}
                  className={styles.ic_small_image}
                />
                <p className={styles.ic_card_title}>{card.title}</p>
                <p className={styles.ic_card_description}>{card.description}</p>
                <div>
                  <button className="ic_common_primary_btn">
                    {bigCard.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* whats today section card  */}
      <div>
        <h6 className={styles.ic_today_title}>What&#39;s today</h6>
        <div>
          {todayData.map((index) => (
            <div className={styles.ic_today_card} key={index}>
              <div>
                <Image src={img2} alt="" className={styles.ic_today_img} />
              </div>
              <div>
                <p className={styles.ic_subtitle}>Lorem ipsum dolor sit amet</p>
                <p className={styles.ic_des}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam quis venenatis magna. Aenean mattis id lacus at
                  accumsan. Vestibulum non malesuada ex. Ut ultrices nulla ut
                  tortor ullamcorper fermentum. Praesent sagittis enim sit amet
                  ligula pharetra mattis id facilisis purus. Sed eu ante semper,
                  varius velit vitae, sagittis turpis. Donec et posuere lectus.
                  Praesent dignissim vulputate ipsum a molestie. Quisque
                  ullamcorper non ligula ut tempus. Nullam tempor consectetur
                  ultricies.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* next exams  */}
      <div>
        <h6 className={styles.ic_today_title}>Next Exam</h6>
        <div className="examsGrid">
          {filteredExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedPage;
