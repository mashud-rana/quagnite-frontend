import React from "react";
import styles from "./certification.module.css";
import CertificateCard from "../CertificateCard/CertificateCard";
import img from "@/assets/images/all/certificate.png";

const CertificationList = () => {
  const certificates = [
    {
      certificateImage: img,
      title: "Lorem Ipsum Dolar Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate.",
      location: "Lorem Ipsum",
      experience: "Lorem Ipsum",
      availability: "Lorem Ipsum",
    },
    {
      certificateImage: img,
      title: "Lorem Ipsum Dolar Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate.",
      location: "Lorem Ipsum",
      experience: "Lorem Ipsum",
      availability: "Lorem Ipsum",
    },
    {
      certificateImage: img,
      title: "Lorem Ipsum Dolar Sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dui id lobortis vulputate.",
      location: "Lorem Ipsum",
      experience: "Lorem Ipsum",
      availability: "Lorem Ipsum",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className={styles.ic_padding_top}>
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              certificateImage={cert.certificateImage}
              title={cert.title}
              description={cert.description}
              location={cert.location}
              experience={cert.experience}
              availability={cert.availability}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationList;
