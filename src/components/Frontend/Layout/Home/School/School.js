// import React from "react";
// import styles from "./school.module.css";
// import icon1 from "@/assets/images/school/icon1.png";
// import hover1 from "@/assets/images/school/hover1.png";
// import Image from "next/image";

// const School = () => {
//   const schoolsData = [
//     {
//       id: 1,
//       icon: icon1,
//       hover: hover1,
//       title: "School of Foundational IT",
//       description:
//         "A solid base to launch your career. Immersive tech, user experience, object design...",
//       isHighlighted: true,
//     },
//     {
//       id: 2,
//       icon: icon1,
//       hover: hover1,
//       title: "School of Applied Data Science",
//       description:
//         "Learn how to change the world with data. AI App Dev, Machine Learning Ops, Python...",
//       isHighlighted: false,
//     },
//     {
//       id: 3,
//       icon: icon1,
//       hover: hover1,
//       title: "School of Enterprise Software",
//       description:
//         "The glue that keeps the team going. Full-stack dev, cloud engineering, Jenkins, Git...",
//       isHighlighted: false,
//     },
//     {
//       id: 4,
//       icon: icon1,
//       hover: hover1,
//       title: "School of Cybersecurity and Quantum Computing",
//       description: "The bleeding edge of applied cryptography.",
//       isHighlighted: false,
//     },
//     {
//       id: 5,
//       icon: icon1,
//       hover: hover1,
//       title: "School of Blockchain and Specialized IT",
//       description: "Federated and zero-trust architecture for the future.",
//       isHighlighted: false,
//     },
//     {
//       id: 6,
//       icon: icon1,
//       hover: hover1,
//       title: "School of Management",
//       description: "Learn to lead in the field of tech.",
//       isHighlighted: false,
//     },
//   ];

//   return (
//     <section className="container">
//       <h6 className={styles.ic_title}>SCHOOLS</h6>
//       <div className={styles.grid}>
//         {schoolsData.map((school) => (
//           <div key={school.id} className={`${styles.card} `}>
//             <div className={styles.iconContainer}>
//               <Image
//                 src={school.icon}
//                 className={styles.icon}
//                 height={34}
//                 width={34}
//                 alt="icon"
//               />
//             </div>
//             <h5 className={styles.ic_card_title}>{school.title}</h5>
//             <p className={styles.ic_description}>{school.description}</p>
//             <button className={`${styles.ic_button}`}>EXPLORE</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default School;
"use client";
import { useState } from "react";
import styles from "./school.module.css";
import icon1 from "@/assets/images/school/icon1.png";
import hover1 from "@/assets/images/school/hover1.png";
import Image from "next/image";

const School = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const schoolsData = [
    {
      id: 1,
      icon: icon1,
      hover: hover1,
      title: "School of Foundational IT",
      description:
        "A solid base to launch your career. Immersive tech, user experience, object design...",
    },
    {
      id: 2,
      icon: icon1,
      hover: hover1,
      title: "School of Applied Data Science",
      description:
        "Learn how to change the world with data. AI App Dev, Machine Learning Ops, Python...",
    },
    {
      id: 3,
      icon: icon1,
      hover: hover1,
      title: "School of Enterprise Software",
      description:
        "The glue that keeps the team going. Full-stack dev, cloud engineering, Jenkins, Git...",
    },
    {
      id: 4,
      icon: icon1,
      hover: hover1,
      title: "School of Cybersecurity and Quantum Computing",
      description: "The bleeding edge of applied cryptography.",
    },
    {
      id: 5,
      icon: icon1,
      hover: hover1,
      title: "School of Blockchain and Specialized IT",
      description: "Federated and zero-trust architecture for the future.",
    },
    {
      id: 6,
      icon: icon1,
      hover: hover1,
      title: "School of Management",
      description: "Learn to lead in the field of tech.",
    },
  ];

  return (
    <section className="container">
      <h6 className={styles.ic_title}>SCHOOLS</h6>
      <div className={styles.grid}>
        {schoolsData.map((school) => (
          <div
            // key={school.id}
            // className={styles.card}
            // onMouseEnter={() => setHoveredCard(school.id)}
            // onMouseLeave={() => setHoveredCard(null)}
            // style={
            //   hoveredCard === school.id
            //     ? {
            //         backgroundImage: `url(${school.hover.src})`,
            //         backgroundSize: "cover",
            //         backgroundPosition: "center",
            //         width: "80%",
            //         // color: "white",
            //         // background: "rgba(69, 45, 131, 0.1)",
            //         backdropFilter: "blur(63.9px)",
            //       }
            //     : {}
            // }

            key={school.id}
            className={`${styles.card} ${
              hoveredCard === school.id ? styles.hoveredCard : ""
            }`}
            onMouseEnter={() => setHoveredCard(school.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={
              hoveredCard === school.id
                ? { "--hoverImage": `url(${school.hover.src})` }
                : {}
            }
          >
            <div className={styles.iconContainer}>
              <Image
                src={school.icon}
                className={styles.icon}
                height={34}
                width={34}
                alt="icon"
              />
            </div>
            <h5 className={styles.ic_card_title}>{school.title}</h5>
            <p className={styles.ic_description}>{school.description}</p>
            <button className={styles.ic_button}>EXPLORE</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default School;
