"use client";

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              area: 800,
            },
          },
          shape: {
            type: "image",
            image: [
              {
                src: "/images/layer1.png", // ✅ Your colored image
                width: 32,
                height: 32,
              },
              {
                src: "/images/layer2.png", // ✅ Another colored image
                width: 32,
                height: 32,
              },
              {
                src: "/images/layer3.png", // ✅ You can add more images here
                width: 32,
                height: 32,
              },
            ],
          },
          size: {
            value: 30,
            random: true,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
          opacity: {
            value: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // 👈 adds animation on mouse hover
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
