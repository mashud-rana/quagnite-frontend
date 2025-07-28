import React from "react";
import styles from "./letus.module.css";
import img from "@/assets/images/all/letus.png";
import bg from "@/assets/images/all/modern-bg.png";
import Image from "next/image";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Letus = () => {
  return (
    <section
      className="ic_section_margin_top ic_section_space_58"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // borderRadius: "16px",
      }}
    >
      <div className="container">
        <CardAnimation index={0} direction="up">
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
                <h6 className="mb_16">Tuition Assistance</h6>
                <h4 className="mb_12">Let us help</h4>
                <p>
                  You may qualify for reduced tuition in any number of areas.
                  Don&lsquo;t let opportunity pass you buy; we&lsquo;re here for
                  you.
                </p>
              </div>

              <div className={styles.ic_btn_container}>
                <button className={styles.ic_btn}>Hire now</button>
              </div>
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Letus;
