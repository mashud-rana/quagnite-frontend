import AboutBanner from "@/components/Frontend/About/Banner/Banner";
import React from "react";
import img1 from "@/assets/images/all/about-hero.png";
import LearningRoadmap from "@/components/Frontend/School/LearningRoadmap/LearningRoadmap";
import SchoolLearnTab from "@/components/Frontend/School/SchoolLearntab/SchoolLearnTab";
import Featured from "@/components/Frontend/School/Featured/Featured";
import Coaches from "@/components/Frontend/School/Coaches/Coaches";
import Bootcamp from "@/components/Frontend/School/Bootcamp/Bootcamp";
import Recommendation from "@/components/Frontend/School/Recommendation/Recommendation";
import Exam from "@/components/Frontend/School/Exam/Exam";
import SchoolBanner from "@/components/Frontend/School/SchoolBanner/SchoolBanner";
import BlockBanner from "@/components/Frontend/Blockchain/BlockBanner/BlockBanner";

const SchoolSinglePage = () => {
  return (
    <div>
      {/* <SchoolBanner /> */}
      <BlockBanner />
      <SchoolLearnTab />
      <LearningRoadmap />
      <Featured />
      <Coaches />
      <Exam />
      <Bootcamp />
      <Recommendation />
    </div>
  );
};

export default SchoolSinglePage;
