import React from "react";
import styles from "./Casestudies.module.css";
import img from "@/assets/images/all/case-studies.png";
import Image from "next/image";

const Casestudies = () => {
  return (
    <section className="ic_section_space">
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
              <h4 className="mb-24">Defense and Military</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                eu elit dictum, euismod mi sagittis, elementum arcu. Morbi id
                lorem pellentesque, cursus nisl lobortis, eleifend risus.
              </p>
            </div>

            <div className={styles.ic_btn_container}>
              <button className={styles.ic_btn}>Hire now</button>
            </div>
          </div>
        </div>

        <div className={`${styles.ic_grid} ic_section_space_top`}>
          <div className={styles.textContainer}>
            <div>
              <h6 className="mb_16">HIRE FROM US</h6>
              <h4 className="mb-24">Defense and Military</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                eu elit dictum, euismod mi sagittis, elementum arcu. Morbi id
                lorem pellentesque, cursus nisl lobortis, eleifend risus.
              </p>
            </div>

            <div className={styles.ic_btn_container}>
              <button className={styles.ic_btn}>Hire now</button>
            </div>
          </div>

          <Image
            className={styles.ic_img}
            src={img}
            width={400}
            height={200}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Casestudies;
