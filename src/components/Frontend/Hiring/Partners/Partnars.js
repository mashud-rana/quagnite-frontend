import React from "react";
import Image from "next/image";
import styles from "./partners.module.css";
import img1 from "@/assets/images/company/logo1.png";
import img2 from "@/assets/images/company/logo2.png";
import img3 from "@/assets/images/company/logo3.png";
import img4 from "@/assets/images/company/logo4.png";
import img5 from "@/assets/images/company/logo5.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const partners = [
  {
    id: 1,
    name: "Howard University",
    logo: "/placeholder.svg?height=60&width=120&text=HOWARD+UNIVERSITY",
    row: 1,
  },
  {
    id: 2,
    name: "Penn State",
    logo: img1,
    row: 1,
  },
  {
    id: 3,
    name: "Princeton University",
    logo: img2,
    row: 1,
  },
  {
    id: 4,
    name: "Manchester 1824",
    logo: img3,
    row: 2,
  },
  {
    id: 5,
    name: "Rowan University",
    logo: img4,
    row: 2,
  },
  {
    id: 6,
    name: "Princeton University",
    logo: img5,
    row: 3,
  },
  {
    id: 7,
    name: "Penn State",
    logo: img1,
    row: 3,
  },
  {
    id: 8,
    name: "Howard University",
    logo: img2,
    row: 3,
  },
  {
    id: 9,
    name: "Manchester 1824",
    logo: img3,
    row: 4,
  },
  {
    id: 10,
    name: "Rowan University",
    logo: img4,
    row: 4,
  },
];

const Partnars = () => {
  const row1 = partners.filter((p) => p.row === 1);
  const row2 = partners.filter((p) => p.row === 2);
  const row3 = partners.filter((p) => p.row === 3);
  const row4 = partners.filter((p) => p.row === 4);

  //   const renderRow = (rowData) =>
  //     rowData.map((partner) => (
  //       <div key={partner.id} className={styles.logoCard}>
  //         <Image
  //           src={partner.logo}
  //           alt={partner.name}
  //           width={120}
  //           height={60}
  //           className={styles.logoImage}
  //         />
  //       </div>
  //     ));

  const renderRow = (rowData) =>
    rowData.map((partner, index) => (
      <div
        key={partner.id}
        style={{
          width: "100%",
        }}
      >
        <CardAnimation index={index}>
          <div className={styles.logoCard}>
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
              className={styles.logoImage}
            />
          </div>
        </CardAnimation>
      </div>
    ));

  return (
    <section>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <CardAnimation index={0} direction="left">
              <h4 className="mb_20">
                Partners with Successful workforce from us
              </h4>
            </CardAnimation>
            <CardAnimation index={1} direction="up">
              <p className={styles.description}>
                85% retention rate over three years for employees hired through
                the partnership, compared to the industry average of 60%
              </p>
            </CardAnimation>
          </div>

          <div className={styles.logosContainer}>
            <div className={styles.row3}>{renderRow(row1)}</div>
            <div className={styles.row2}>{renderRow(row2)}</div>
            <div className={styles.row3}>{renderRow(row3)}</div>
            <div className={styles.row2}>{renderRow(row4)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnars;
