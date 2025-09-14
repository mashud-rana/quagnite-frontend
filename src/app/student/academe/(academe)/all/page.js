import React from "react";
import styles from "./allAcademe.module.css";
import img from "@/assets/images/all/coache.png";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Coaches",
    image: "https://via.placeholder.com/400x300?text=Coaches",
    link: "/student/academe/coaches",
  },
  {
    id: 2,
    title: "Teachers",
    image: "https://via.placeholder.com/400x300?text=Teachers",
    link: "/student/academe/teachers",
  },
  {
    id: 3,
    title: "Classmates",
    image: "https://via.placeholder.com/400x300?text=Classmates",
    link: "/student/academe/classmates",
  },
];

const AllAcademePage = () => {
  return (
    <section className={styles.academeSection}>
      {categories.map((item) => (
        <Link href={item.link} key={item.id} className={styles.column}>
          <div className={styles.imageWrapper}>
            <Image
              width={500}
              height={200}
              src={img}
              alt={item.title}
              className={styles.image}
            />
            <div className={styles.overlay}></div>
            <h2 className={styles.title}>{item.title}</h2>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default AllAcademePage;
