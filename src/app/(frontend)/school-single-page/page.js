import AboutBanner from "@/components/Frontend/About/Banner/Banner";
import React from "react";
import img1 from "@/assets/images/all/about-hero.png";
import LearningRoadmap from "@/components/Frontend/School/LearningRoadmap/LearningRoadmap";
import SchoolLearnTab from "@/components/Frontend/School/SchoolLearntab/SchoolLearnTab";
import Featured from "@/components/Frontend/School/Featured/Featured";
import Coaches from "@/components/Frontend/School/Coaches/Coaches";
import Bootcamp from "@/components/Frontend/School/Bootcamp/Bootcamp";
import Recommendation from "@/components/Frontend/School/Recommendation/Recommendation";
const page = () => {
  return (
    <div>
      <AboutBanner
        title={"Fostering growth and connecting people to opportunity"}
        subtitle={
          "Quagnite offers training and education tailored to meet the needs of the individual, for businesses and individuals alike. From self-paced learning to expert instruction, a broad range of subjects gives you the skills you need to succeed at the leading edge of technology and industry."
        }
        img={img1}
      />

      <SchoolLearnTab />
      <LearningRoadmap />
      <Featured />
      <Coaches />
      <Bootcamp />
      <Recommendation />
    </div>
  );
};

export default page;
