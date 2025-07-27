import React from "react";
import Banner from "@/components/Share/Frontend/BannerCard/BannerCard";
import bg from "@/assets/images/partnership/bg.png";
import img from "@/assets/images/partnership/partner-right.png";

export default function page() {
  return (
    <>
      <Banner
        bgImage={bg}
        rightImage={img}
        heading="Build your team, build your reach, build the future."
        paragraph={`Partnering with Quagnite lets you show your support to education for everyone, while also allowing you to make contact with highly skilled professionals that are motivated and inspired. Whether you’re looking for employees, consultants, or other opportunities, a partnership with Quagnite sets you up for success.`}
      />
    </>
  );
}
