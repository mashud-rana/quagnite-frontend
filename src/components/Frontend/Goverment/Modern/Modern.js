import Image from "next/image";
import React from "react";
import styles from "./modern.module.css";
import img from "@/assets/images/all/modern.png";
import bg from "@/assets/images/all/modern-bg.png";

const Modern = () => {
  return (
    <section
      className="ic_section_space_bottom"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // borderRadius: "16px",
      }}
    >
      <div className="container">
        <div className={styles.ic_grid}>
          <Image
            className={styles.ic_img}
            src={img}
            width={400}
            height={200}
            alt=""
          />
          <div className={styles.textContainer}>
            <div>
              <h6 className="mb_16">HIRE FROM US</h6>
              <h4 className="mb-35">Defense and Military</h4>
              <div className="mb-24">
                <h6 className="mb-12">Human-centered</h6>
                <p>
                  With the technical management skills and awareness from
                  Quagnite certifications, government employees and managers at
                  all levels will have the confidence and maturity to lead
                  high-performance teams in service to the people.
                </p>
              </div>

              <div>
                <h6 className="mb-12">Human-centered</h6>
                <p>
                  With the technical management skills and awareness from
                  Quagnite certifications, government employees and managers at
                  all levels will have the confidence and maturity to lead
                  high-performance teams in service to the people.
                </p>
              </div>
            </div>

            <div className={styles.ic_btn_container}>
              <button className={styles.ic_btn}>Hire now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modern;
