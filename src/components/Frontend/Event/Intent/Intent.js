import Image from "next/image";
import React from "react";
import img from "@/assets/images/all/intent.png";
import styles from "./intent.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Intent = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
        <div className={styles.ic_grid}>
          <CardAnimation index={0} direction="up">
            <div className={styles.textContainer}>
              <div>
                <h6 className="mb_16">intent of Event </h6>
                <h4 className="mb-35">Lorem Ipsum dolar</h4>
                <p>
                  In a national security environment continually driven by
                  technology, government employees need the ability to manage
                  tech teams who have relevant skills. Quagnite provides
                  tech-focused management knowledge as well as
                  technician-focused courses to keep your team at the leading
                  edge. Nicholas Narbutovskih
                </p>
              </div>
            </div>
          </CardAnimation>

          <CardAnimation index={0} direction="down">
            <Image
              className={styles.ic_img}
              src={img}
              width={400}
              height={200}
              alt=""
            />
          </CardAnimation>
        </div>
      </div>
    </section>
  );
};

export default Intent;
