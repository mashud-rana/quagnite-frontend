import AboutBanner from "@/components/Frontend/About/Banner/Banner";
import Certificate from "@/components/Frontend/About/Certificate/Certificate";
import CountInfo from "@/components/Frontend/About/CountInfo/CountInfo";
import Founder from "@/components/Frontend/About/Founder/Founder";
import Join from "@/components/Frontend/About/Join/Join";
import Passion from "@/components/Frontend/About/Passion/Passion";
import Team from "@/components/Frontend/About/Team/Team";
import UspMake from "@/components/Frontend/About/UspMake/UspMake";
import Values from "@/components/Frontend/About/Values/Values";
import Companys from "@/components/Share/Frontend/Companys/Companys";
import React from "react";
import img1 from "@/assets/images/all/about-hero.png";
import bg from "@/assets/images/all/about-bg.png";

const AboutUsPage = () => {
  return (
    <>
      <AboutBanner
        title={"Fostering growth and connecting people to opportunity"}
        subtitle={
          "Quagnite offers training and education tailored to meet the needs of the individual, for businesses and individuals alike. From self-paced learning to expert instruction, a broad range of subjects gives you the skills you need to succeed at the leading edge of technology and industry."
        }
        img={img1}
        bg={bg}
      />
      <CountInfo />
      <Passion />
      <Values />
      <Companys />
      <UspMake />
      <Founder />
      <Team />
      <Certificate />
      <Join />
    </>
  );
};

export default AboutUsPage;
