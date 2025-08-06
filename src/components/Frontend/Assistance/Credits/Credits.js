import Image from "next/image";
import React from "react";
import styles from "./credits.module.css";
import img from "@/assets/images/all/military.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Credits = () => {
  return (
    <section className="ic_section_space_bottom">
      <div className="container">
        <div className={styles.ic_wrapper}>
          <div className={`${styles.ic_grid2}`}>
            <CardAnimation index={0} direction="up">
              <div className={styles.textContainer}>
                <h4 className="mb_16">Defense and Military</h4>
                <p className="mb-24">
                  You’ve put in the work, you’ve gained the knowledge. Now make
                  sure you get the credit. Quagnite’s partnership with major
                  universities means you can put your Quagnite skills towards
                  higher education. Just look for the transfer credit symbol on
                  any of our course offerings.
                </p>
                <button className="ic_btn">Explore</button>
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

          <div className={styles.ic_grid}>
            <CardAnimation index={0} direction="down">
              <Image
                className={styles.ic_img}
                src={img}
                width={400}
                height={200}
                alt=""
              />
            </CardAnimation>

            <CardAnimation index={0} direction="up">
              <div className={styles.textContainer}>
                <h4 className="mb_16">Defense and Military</h4>
                <h6 className="mb_16">Work hard, and be rewarded for it.</h6>
                <p className="mb-24">
                  Scholarships aren’t the most common option out there, but you
                  don’t get what you don’t ask for. If you’re motivated,
                  dedicated, and filled with a desire to make the world a better
                  place, apply for a scholarship to Quagnite.
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

export default Credits;
