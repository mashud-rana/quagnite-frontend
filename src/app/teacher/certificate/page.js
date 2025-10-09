import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { RiEditLine } from "react-icons/ri";
import img from "@/assets/images/all/certificate.png";
import styles from "./certificate.module.css";

const CertificatePage = () => {
  const certificates = [
    { id: 1, title: "Certificate 1", image: "/certificate1.png" },
    { id: 2, title: "Certificate 2", image: "/certificate2.png" },
    { id: 3, title: "Certificate 3", image: "/certificate3.png" },
    { id: 4, title: "Certificate 4", image: "/certificate4.png" },
    { id: 5, title: "Certificate 5", image: "/certificate5.png" },
    { id: 6, title: "Certificate 6", image: "/certificate6.png" },
    { id: 7, title: "Certificate 7", image: "/certificate7.png" },
    { id: 8, title: "Certificate 8", image: "/certificate8.png" },
  ];

  return (
    <div>
      <div className="mb-24 ic_flex">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Certificate</h1>
        </div>

        <div className={styles.ic_icn_content}>
          <RiEditLine className={styles.ic_icn} />
          <RiEditLine className={styles.ic_icn} />
        </div>
      </div>

      <div className={styles.ic_grid}>
        {certificates.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image src={img} alt="" className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatePage;
