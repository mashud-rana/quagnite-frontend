import React from "react";
import img1 from "@/assets/images/all/impact-banner.png";
import AboutBanner from "@/components/Frontend/About/Banner/Banner";
import bg from "@/assets/images/all/impact-banner-bg.png";
import Launch from "@/components/Frontend/Impact/Launch/Launch";
import ImpactCount from "@/components/Frontend/Impact/ImpactCount/ImpactCount";
import ImpactPassion from "@/components/Frontend/Impact/ImpactPassion/ImpactPassion";
import Scholorship from "@/components/Frontend/Impact/Scholorship/Scholorship";
import Dreams from "@/components/Frontend/Impact/Dreams/Dreams";
import Success from "@/components/Frontend/Impact/Success/Success";

const ImpactPage = () => {
  return (
    <>
      <AboutBanner
        title={"Quagnite makes a difference"}
        subtitle={
          "Quagnite offers training and education tailored to meet the needs of the individual, for businesses and individuals alike. From self-paced learning to expert instruction, a broad range of subjects gives you the skills you need to succeed at the leading edge of technology and industry."
        }
        img={img1}
        bg={bg}
        isProgress={true}
      />

      <Launch />
      <ImpactCount />
      <ImpactPassion />
      <Scholorship />
      <Dreams />
      <Success />
    </>
  );
};

export default ImpactPage;
