import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import styles from "./careerBanner.module.css";
// import bg from "@/assets/images/all/career-bg.png";
import bg from "@/assets/images/bg/bg3.png";
import img from "@/assets/images/all/career-banner.png";
import img2 from "@/assets/images/bg/file.png";
import circle from "@/assets/images/full-circle.png";

const CareerBanner = () => {
  return (
    <section
      className="ic_section_margin_top_80 "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        className={styles.ic_circle1}
        src={circle}
        height={944}
        width={944}
        alt=""
      />

      <Image
        className={styles.ic_file}
        src={img2}
        height={100}
        width={100}
        alt=""
      />

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

              <button className={styles.ic_btn}>Join us</button>
            </CardAnimation>
          </div>

          {/* Right Content - 3 Images Layout */}
          <div>
            <div className={styles.ic_hero_img}>
              <CardAnimation index={0} direction="down">
                <Image src={img} alt="" width={700} height={580} />
              </CardAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;
