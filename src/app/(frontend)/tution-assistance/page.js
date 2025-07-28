import Success from "@/components/Frontend/Impact/Success/Success";
import Letus from "@/components/Frontend/TutionAssistance/Letus/Letus";
import TutionBanner from "@/components/Frontend/TutionAssistance/TutionBanner/TutionBanner";
import TutionBenifit from "@/components/Frontend/TutionAssistance/TutionBenifit/TutionBenifit";
import TutionCount from "@/components/Frontend/TutionAssistance/TutionCount/TutionCount";
import TutionEducation from "@/components/Frontend/TutionAssistance/TutionEducation/TutionEducation";
import Type from "@/components/Frontend/TutionAssistance/Type/Type";
import React from "react";

const TutionAssistancePage = () => {
  return (
    <>
      <TutionBanner />
      <TutionCount />
      <TutionBenifit />
      <Letus />
      <Type />
      <TutionEducation />
      <Success />
    </>
  );
};

export default TutionAssistancePage;
