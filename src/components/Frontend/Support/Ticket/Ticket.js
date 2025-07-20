import React from "react";
import styles from "./ticket.module.css";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import img1 from "@/assets/images/all/support-log.png";
import bg from "@/assets/images/all/why-us-bg.png";

const Ticket = () => {
  return (
    <section className="ic_section_space_top">
      <div className="container">
        <CardAnimation index={1} direction="up">
          <div
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className=" ic_white radious_16"
          >
            <div className={styles.ic_grid}>
              <div>
                <div className={styles.ic_img_wrapper}>
                  <div className={styles.teammateImage}>
                    <Image
                      className={styles.teammateImage1}
                      src={img1}
                      alt="Teammate"
                      width={422}
                      height={350}
                    />

                    {/* <Image
                      src={img2}
                      alt="Teammate"
                      width={310}
                      height={100}
                      className={styles.teammateImg2}
                    /> */}
                  </div>
                </div>
              </div>
              <div className={styles.teammateContent}>
                <CardAnimation index={0} direction="up">
                  <h6>HELP DESK</h6>
                </CardAnimation>
                <CardAnimation index={0} direction="down">
                  <h4>Open A Help Ticket</h4>
                </CardAnimation>
                <p>
                  Not sure where to start with an issue or feedback? Start here
                </p>

                <div>
                  <button className={styles.ctaButton}>Ticket</button>
                </div>
              </div>
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Ticket;
