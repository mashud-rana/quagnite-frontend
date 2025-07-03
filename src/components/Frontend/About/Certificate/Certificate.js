import React from "react";
import styles from "./certificate.module.css";
import Image from "next/image";

// Dummy certificate images — replace with actual paths
import cert1 from "@/assets/images/all/certificate.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const certificates = [
  { id: 1, src: cert1, alt: "Certificate 1" },
  { id: 2, src: cert1, alt: "Certificate 2" },
  { id: 3, src: cert1, alt: "Certificate 3" },
];

const Certificate = () => {
  return (
    <section>
      <div className="container ic_white">
        <CardAnimation index={0} direction="left">
          <h6> Certification</h6>
        </CardAnimation>

        <CardAnimation index={0} direction="up">
          <h3 className={styles.ic_title}>Setting The Industry Standards</h3>
        </CardAnimation>

        <div className={styles.grid}>
          {certificates.map((cert, index) => (
            <CardAnimation index={index} key={cert.id}>
              <div className={styles.card}>
                <Image src={cert.src} alt={cert.alt} className={styles.image} />
              </div>
            </CardAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
