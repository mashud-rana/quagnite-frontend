import React from "react";
import styles from "./banner.module.css";
import bg from "@/assets/images/all/indi-bg.png";
import img1 from "@/assets/images/all/glow.png";
import Image from "next/image";

const IndiBanner = () => {
  return (
    <div
      className={`${styles.ic_wrapper} ic_section_space`}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className={styles.ic_text_container}>
          <h4 className="mb_16">Start your journey</h4>
          <p className={styles.ic_des}>
            Let a Quagnite help you get to the future you’ve always dreamed of.
            Whether that’s a rewarding job in the tech industry or starting your
            own venture, the skills and education you gain with Quagnite will be
            the fuel in your tank. Add in the lifelong community membership of
            Quagnite alumni, and the future is bright.
          </p>
        </div>
      </div>

      <Image
        className={styles.ic_img}
        src={img1}
        width={1650}
        height={900}
        alt=""
      />
    </div>
  );
};

export default IndiBanner;
