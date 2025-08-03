"use client";
import React from "react";
import Banner from "@/components/Share/Frontend/BannerCard/BannerCard";
import bg from "@/assets/images/be-a-sponsor/bg.png";
import img from "@/assets/images/be-a-sponsor/banner-right.png";
import CardAnimation from "@/components/Share/ClientComponent/CardAnimation";
import Image from "next/image";
import styles from "./banner.module.css";

export default function SponsorBanner() {
  return (
    <section
      className={` ic_section_margin_top_80 `}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.ic_wrapper}>
        <div className="container">
          <div>
            <div className={styles.ic_hero_container}>
              {/* Left Content */}
              <div className={styles.leftContent}>
                <CardAnimation index={0} direction="left">
                  <h4>Commit to the future of tech</h4>
                </CardAnimation>
                <CardAnimation index={0} direction="up">
                  <p className={styles.heroDescription}>
                    There’s no better way to demonstrate your dedication to the
                    industry&lsquo;s future than by sponsoring a scholarship.
                    Not only do sponsors gain demonstrated social capital, but
                    by building a loyal cadre of scholars who are dedicated to
                    making the world better than it was, scholarships help
                    create a perpetuating engine of advancement. Sponsor a
                    scholarship and take us into the future.
                  </p>
                </CardAnimation>
              </div>

              {/*  Move Image here (inside grid) */}
              <Image
                className={styles.ic_hero_img}
                width={960}
                height={400}
                src={img}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
