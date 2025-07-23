"use client";
import React from "react";
import Banner from "@/components/Share/Frontend/BannerCard/BannerCard";
import bg from "@/assets/images/be-a-sponsor/bg.png";
import img from "@/assets/images/be-a-sponsor/banner-right.png";

export default function SponsorBanner() {
  return (
    <Banner
      bgImage={bg}
      rightImage={img}
      heading="Commit to the future of tech"
      paragraph={`There’s no better way to demonstrate your dedication to the industry's future than by sponsoring a scholarship. Not only do sponsors gain demonstrated social capital, but by building a loyal cadre of scholars who are dedicated to making the world better than it was, scholarships help create a perpetuating engine of advancement. Sponsor a scholarship and take us into the future.`}
    />
  );
}
