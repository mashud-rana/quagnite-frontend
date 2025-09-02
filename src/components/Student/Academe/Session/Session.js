"use client";
import React, { useState } from "react";
import styles from "./session.module.css";
import img from "@/assets/images/all/exams.png";
import img2 from "@/assets/images/all/session.png";
import ScheduleModal from "./ScheduleModal";

const Session = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const bigCard = {
    video: "/videos/coding.mp4",
    thumbnail: img, // fallback image
    title: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .eiusmod tempor incididunt ut labore et dolore magna .",
    buttonText: "Schedule now",
  };

  const smallCards = [
    {
      video: "/videos/coding.mp4",
      thumbnail: img2,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
      buttonText: "Schedule now",
    },
    {
      video: "/videos/coding.mp4",
      thumbnail: img2,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
      buttonText: "Schedule now",
    },
  ];

  return (
    <div>
      <div className={styles.ic_heading_Wrapper}>
        <h5>Upcoming Session</h5>
        <button
          className="ic_common_primary_btn"
          onClick={() => setIsModalOpen(true)}
        >
          Schedule a session
        </button>
      </div>
      <div className={styles.ic_grid}>
        {/* Left Column (Big Card) */}
        <div className={styles.ic_left_column}>
          <div className={styles.ic_card}>
            <video
              className={styles.ic_big_image}
              controls
              poster={bigCard.thumbnail.src} // thumbnail image
            >
              <source src={bigCard.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className={styles.ic_card_title}>{bigCard.title}</p>
            <p className={styles.ic_card_description}>{bigCard.description}</p>
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
              <video
                className={styles.ic_small_image}
                controls
                poster={card.thumbnail.src}
              >
                <source src={card.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className={styles.ic_card_title}>{card.title}</p>
              <p className={styles.ic_card_description}>{card.description}</p>
              <div>
                <button className="ic_common_primary_btn">
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ScheduleModal
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      />
    </div>
  );
};

export default Session;
