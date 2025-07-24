"use client";

import React from "react";
import styles from "./govtment.module.css";
import bg from "@/assets/images/all/bg-gradient.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import img from "@/assets/images/all/govt-img.png";
import img2 from "@/assets/images/all/support-banner1.png";
import img3 from "@/assets/images/all/hero2.png";
import img4 from "@/assets/images/all/forums.png";
import layer from "@/assets/images/all/layer.png";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const GovtmentBanner = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded", container);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1200,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <section
      className={`${styles.ic_wrapper} ic_section_margin_top_80`}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
        className={styles.particlesCanvas}
      /> */}
      <div className="container">
        <div className={styles.ic_hero_container}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <CardAnimation index={0} direction="left">
              <h4>
                Upskill the knowledge of your nation with our training solution
              </h4>
            </CardAnimation>
            <CardAnimation index={0} direction="up">
              <p className={styles.heroDescription}>
                Quagnite has a community of motivated and skilled people, but
                more than that is a training and education solution for the
                current gap in government employee skills. Whether you expand
                your workforce or need dedicated public servants to better
                understand software and tech, Quagnite is your partner.
              </p>
            </CardAnimation>
          </div>

          {/* Right Content - 3 Images Layout */}

          <div className={styles.ic_hero_img}>
            <CardAnimation index={0} direction="right">
              <Image
                className={styles.ic_main_img}
                width={800}
                src={img}
                alt=""
              />
            </CardAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovtmentBanner;

// import React from "react";
// import styles from "./govtment.module.css";
// import bg from "@/assets/images/all/bg-gradient.png";
// import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
// import Image from "next/image";
// import img from "@/assets/images/all/govt-img.png";
// import img2 from "@/assets/images/all/support-banner1.png";
// import img3 from "@/assets/images/all/hero2.png";
// import img4 from "@/assets/images/all/forums.png";
// import layer from "@/assets/images/all/layer.png";

// const GovtmentBanner = () => {
//   return (
//     <section
//       className={`${styles.ic_wrapper} ic_section_margin_top_80`}
//       style={{
//         backgroundImage: `url(${bg.src})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <Image className={styles.ic_layer_img} src={layer} alt="" />

//       <div className="container">
//         <div className={styles.ic_hero_container}>
//           {/* Left Content */}
//           <div className={styles.leftContent}>
//             <CardAnimation index={0} direction="left">
//               <h4>
//                 Upskill the knowledge of your nation with our training solution
//               </h4>
//             </CardAnimation>
//             <CardAnimation index={0} direction="up">
//               <p className={styles.heroDescription}>
//                 Quagnite has a community of motivated and skilled people, but
//                 more than that is a training and education solution for the
//                 current gap in government employee skills. Whether you expand
//                 your workforce or need dedicated public servants to better
//                 understand software and tech, Quagnite is your partner.
//               </p>
//             </CardAnimation>
//           </div>

//           {/* Right Content - 3 Images Layout */}

//           <div className={styles.ic_hero_img}>
//             <CardAnimation index={0} direction="right">
//               <Image
//                 className={styles.ic_main_img}
//                 width={800}
//                 src={img}
//                 alt=""
//               />
//             </CardAnimation>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GovtmentBanner;
