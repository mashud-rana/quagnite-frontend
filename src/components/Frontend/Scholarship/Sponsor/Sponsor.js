import Image from "next/image";
import React from "react";
import styles from "./sponsor.module.css";
import img from "@/assets/images/all/modern.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Sponsor = () => {
  return (
    <section className="ic_section_space_top">
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
              <div>
                <h6 className="mb_16">HIRE FROM US</h6>
                <h4 className="mb-35">Defense and Military</h4>
                <div className="mb-24">
                  <h5 className="mb-12">A commitment to the future</h5>
                  <p>
                    Raise up the best and brightest to take their place. You
                    know the future is bright; now commit to it.
                  </p>
                </div>

                <div className="mb-24">
                  <h5 className="mb-12">A commitment to the future</h5>
                  <p>
                    Raise up the best and brightest to take their place. You
                    know the future is bright; now commit to it.
                  </p>
                </div>

                <div className="mb-24">
                  <h5 className="mb-12">A commitment to the future</h5>
                  <p>
                    Raise up the best and brightest to take their place. You
                    know the future is bright; now commit to it.
                  </p>
                </div>
              </div>

              <div className={styles.ic_btn_container}>
                <button className="ic_btn">Be a sponsor</button>
              </div>
            </div>
          </CardAnimation>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
