import React from "react";
import styles from "./uspmake.module.css";
import img1 from "@/assets/images/about/usp-line.png";
import Image from "next/image";

const valueData = [
  {
    id: 1,
    title: "Education",
    description:
      "By offering tailored learning methods, Quagnite fosters a love of learning and enables every student to succeed.",
  },
  {
    id: 2,
    title: "Certification",
    description:
      "The pace of tech is high. Quagnite certifications show the world competency across a broad range of high-demand subjects.",
  },
  {
    id: 3,
    title: "Community",
    description:
      "Stronger together, Quagnite students gain instant networking opportunities and can have their skills displayed directly to potential employers.",
  },
];

const UspMake = () => {
  return (
    <section className={`${styles.ic_wrapper} ic_section_space_bottom`}>
      <Image
        className={styles.ic_line_img}
        src={img1}
        height={80}
        width={1200}
        alt=""
      />
      <div className="container ic_white">
        <div className={styles.grid}>
          <div className={styles.ic_text_conteiner}>
            <h6 className="mb_20">OUR USP</h6>
            <h3>
              We<span> make</span> difference
            </h3>
          </div>
          {valueData.map((school) => (
            <div className={styles.ic_card} key={school.id}>
              <h5 className={styles.ic_card_title}>{school.title}</h5>
              <p className={styles.ic_description}>{school.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UspMake;
