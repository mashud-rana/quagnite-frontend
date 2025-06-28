import AboutBanner from "@/components/Frontend/About/Banner/Banner";
import CountInfo from "@/components/Frontend/About/CountInfo/CountInfo";
import Founder from "@/components/Frontend/About/Founder/Founder";
import Join from "@/components/Frontend/About/Join/Join";
import Passion from "@/components/Frontend/About/Passion/Passion";
import Team from "@/components/Frontend/About/Team/Team";
import UspMake from "@/components/Frontend/About/UspMake/UspMake";
import Values from "@/components/Frontend/About/Values/Values";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <AboutBanner />
      <CountInfo />
      <Passion />
      <Values />
      <UspMake />
      {/* <Founder /> */}
      <Team />

      <Join />
    </>
  );
};

export default AboutUsPage;
