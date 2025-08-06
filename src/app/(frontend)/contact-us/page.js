import Banner from "@/components/Share/Frontend/BannerCard/BannerCard";
import React from "react";
import bg from "@/assets/images/contact-us/banner-bg.png";
import img from "@/assets/images/contact-us/banner-right.png";
import AskUs from "@/components/Frontend/ContactUs/AskUs/AskUs";
import TutionBanner from "@/components/Frontend/TutionAssistance/TutionBanner/TutionBanner";
import Recommendation from "@/components/Frontend/School/Recommendation/Recommendation";
import JoinOnline from "@/components/Frontend/ContactUs/JoinOnline/JoinOnline";
import Problem from "@/components/Frontend/ContactUs/Problem/Problem";

export default function page() {
  return (
    <>
      {/* <Banner
        bgImage={bg}
        rightImage={img}
        heading="Reach out and join the global community of learners."
        paragraph={`From our dedicated staff and instructor corps to the people who make Quagnite a family, we’re here to answer any questions and help you be the best that you can.`}
      /> */}

      <TutionBanner
        bg={bg}
        img={img}
        title="Reach out and join the global community of learners."
        des="From our dedicated staff and instructor corps to the people who make Quagnite a family, we’re here to answer any questions and help you be the best that you can."
      />
      <AskUs />

      <Recommendation />
      <JoinOnline />
      <Problem />
    </>
  );
}
