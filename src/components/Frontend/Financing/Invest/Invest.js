import React from "react";
import styles from "./invest.module.css";
import img from "@/assets/images/all/case-studies.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Invest = () => {
  return (
    <section className="ic_section_space">
      <div className="container">
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
              <div>
                <h4 className="mb-24">A payment plan for everyone.</h4>
                <p>
                  We’ve partnered with the industry&apos;s most trustworthy
                  creditors to provide the one thing we all need: options. Apply
                  now and explore yours.
                </p>
              </div>

              <div className={styles.ic_btn_container}>
                <button className={styles.ic_btn}>Apply now</button>
              </div>
            </div>
          </CardAnimation>
        </div>

        <div className={`${styles.ic_grid1} mt_48`}>
          <CardAnimation index={0} direction="up">
            <div className={styles.textContainer}>
              <div>
                <h4 className="mb-24">
                  Take your time, and invest in your future.
                </h4>
                <p>
                  Planning for the future is the most critical part of getting
                  there. With a variety of options on interest rate and
                  percentage of tuition, you can make the plan that fits your
                  situation, and more importantly, gets you where you want to
                  be.
                </p>
              </div>

              <div className={styles.ic_btn_container}>
                <button className={styles.ic_btn}>Explore</button>
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

export default Invest;
