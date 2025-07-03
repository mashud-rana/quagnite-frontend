import React from "react";
import styles from "./founder.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import Image from "next/image";
import img1 from "@/assets/images/about/founder.png";
import bg from "@/assets/images/about/founder-bg.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";

const Founder = () => {
  return (
    <section>
      <div
        className="container"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "16px",
        }}
      >
        <CardAnimation index={0} direction="up">
          <div className={styles.ic_founder_container}>
            {/* Left Column: Founder Image */}
            <div className={styles.leftColumn}>
              <Image
                src={img1}
                alt="Founder"
                width={600}
                height={400}
                className={styles.ic_founderImage}
              />
            </div>

            {/* Right Column: Content */}
            <CardAnimation index={0} direction="up">
              <div className={styles.rightColumn}>
                <h6>Founder</h6>
                <h4>Lorem Ipsum Dolar</h4>
                <p className={styles.subtitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  dignissim dui id lobortis vulputate. Nulla sodales enim quis
                  euismod consectetur. Ut in laoreet diam, nec efficitur felis.
                  Suspendisse potenti. Pellentesque rutrum nec diam sed
                  pharetra. Maecenas pulvinar varius efficitur. Sed iaculis
                  condimentum semper. Nunc molestie neque nulla, ut rhoncus est
                  pulvinar vel. Donec congue ultrices nisl. Duis vel tellus quis
                  sem viverra semper ac at est. Praesent in erat metus. Nulla
                  dapibus orci vel odio ultrices, a tempus ante dictum. Nam erat
                  felis, mattis ultrices nulla in, suscipit varius eros.
                </p>

                <div className={styles.ic_socialIcons}>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className={styles.icon} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PiLinkedinLogoBold className={styles.icon} />
                  </a>
                </div>
              </div>
            </CardAnimation>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};

export default Founder;
