import Image from "next/image";
import React from "react";
import img2 from "@/assets/images/all/session.png";
import styles from "./bootcamps.module.css";
import Link from "next/link";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

const BootcampsPage = () => {
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

  return (
    <div>
      <div className="mb-24 ic_flex2">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">List of all Bootcamps</h1>
        </div>

        <Link href="/teacher/bootcamps/create" className="ic_icn_btn">
          <FaPlus />
          create bootcamp
        </Link>
      </div>

      <div className={styles.ic_grid}>
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
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootcampsPage;
