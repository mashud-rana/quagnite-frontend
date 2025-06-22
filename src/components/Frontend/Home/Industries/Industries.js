import React from "react";
import styles from "./industries.module.css";

// Dummy logos (replace with your own)
import logo1 from "@/assets/images/industries/img1.png";
import logo2 from "@/assets/images/industries/img2.png";
import logo3 from "@/assets/images/industries/img3.png";
import logo4 from "@/assets/images/industries/img4.png";
import logo5 from "@/assets/images/industries/img5.png";
import logo6 from "@/assets/images/industries/img6.png";
import logo7 from "@/assets/images/industries/img7.png";
import logo8 from "@/assets/images/industries/img8.png";
import bg from "@/assets/images/industries/bg.png";
import Image from "next/image";
// Duplicate or use other logos for demo

const industries = [
  { title: "Government", logo: logo1 },
  { title: "Private Organisation", logo: logo2 },
  { title: "Non-profit Organization", logo: logo3 },
  { title: "Military", logo: logo4 },
  { title: "Finance", logo: logo5 },
  { title: "Agriculture", logo: logo6 },
  { title: "Real Estate", logo: logo7 },
  { title: "Education", logo: logo8 },
];

const Industries = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="ic_section_space ic_section_margin_top"
    >
      <div className={`${styles.ic_industries_section} container`}>
        <h6>INDUSTRIES</h6>
        <h3 className={styles.ic_title}>
          Quagnite’s industry partners make our <span>community</span> stronger
        </h3>
        <div className={styles.ic_industries_grid}>
          {industries.map((industry, index) => (
            <div key={index} className={styles.ic_industry_card}>
              <Image
                src={industry.logo}
                alt={industry.title}
                width={50}
                height={50}
              />
              <p>{industry.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
