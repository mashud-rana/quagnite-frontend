import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import React from "react";

const CareerBanner = () => {
  return (
    <section
      className="ic_section_margin_top_80"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className={styles.ic_hero_container}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <CardAnimation index={0} direction="left">
              <h4>
                Do you have a passion for education and a desire to help people
                grow?
              </h4>
            </CardAnimation>
            <CardAnimation index={0} direction="up">
              <p className={styles.heroDescription}>
                Quagnite team members are forging the future of the tech
                industry. Join a team that shares your passion for excellence
                and desire to provide opportunity to the world.
              </p>
            </CardAnimation>
          </div>

          {/* Right Content - 3 Images Layout */}

          <div className={styles.ic_hero_img}>
            <CardAnimation index={0} direction="right">
              <Image src={img} alt="" />
            </CardAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;
