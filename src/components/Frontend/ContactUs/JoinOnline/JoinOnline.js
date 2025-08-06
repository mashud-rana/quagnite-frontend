import Image from "next/image";
import React from "react";
import img from "@/assets/images/all/intent.png";
import styles from "./joinOnline.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const JoinOnline = () => {
  return (
    <section className="ic_section_space">
      <div className="ic_section_space_58 radious_60 ic_bg">
        <div className="container">
          <div className={styles.ic_grid}>
            <CardAnimation index={0} direction="up">
              <Image
                className={styles.ic_img}
                src={img}
                width={400}
                height={200}
                alt=""
              />
            </CardAnimation>

            <CardAnimation index={0} direction="down">
              <div className={styles.textContainer}>
                <h6 className="mb_16">intent of Event </h6>
                <p className="mb_20">
                  In a national security environment continually driven by
                  technology, government employees need the ability to manage
                  tech teams who have relevant skills. Quagnite provides
                  tech-focused management knowledge as well as
                  technician-focused courses to keep your team at the leading
                  edge. Nicholas Narbutovskih
                </p>

                <button className="ic_btn">Explore</button>
              </div>
            </CardAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOnline;
