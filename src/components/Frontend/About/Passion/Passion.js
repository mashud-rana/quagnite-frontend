import React from "react";
import styles from "./passion.module.css";
import Image from "next/image";
import img1 from "@/assets/images/about/passion.png";
import img2 from "@/assets/images/about/passion-line.png";

const Passion = () => {
  return (
    <section className={` ${styles.ic_wrapper} ic_section_space_bottom`}>
      <div className="container ic_white">
        <Image
          className={styles.ic_line_img}
          src={img2}
          height={400}
          width={529}
          alt=""
        />
        <div className="w_70">
          <h6 className={styles.title}>About Us</h6>
          <h3 className="py_26">
            A <span>passion</span> for education
          </h3>
          <p>
            Wether you prefer self-paced learning or expert instruction,
            Quagnite is your partner and invested in your success, both in
            education and beyond.
          </p>
        </div>

        <div className={styles.ic_img_container}>
          <div>
            <Image
              className={styles.ic_img}
              src={img1}
              height={729}
              width={729}
              alt=""
            />
          </div>

          <div className={styles.ic_card}>
            <h6 className="mb_16">OUR VISION</h6>
            <p className={styles.ic_sub_title}>
              Because of our belief in knowledge as a basic right, we want to
              transform the way people access training and education with
              products and methods that constantly challenge the status quo and
              enable everyone to be the best they can.
            </p>
          </div>

          <div className={styles.ic_card2}>
            <h6 className="mb_16">OUR VISION</h6>
            <p className={styles.ic_sub_title}>
              Because of our belief in knowledge as a basic right, we want to
              transform the way people access training and education with
              products and methods that constantly challenge the status quo and
              enable everyone to be the best they can.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passion;
