import Success from "@/components/Frontend/Impact/Success/Success";
import Letus from "@/components/Frontend/TutionAssistance/Letus/Letus";
import TutionBanner from "@/components/Frontend/TutionAssistance/TutionBanner/TutionBanner";
import TutionBenifit from "@/components/Frontend/TutionAssistance/TutionBenifit/TutionBenifit";
import TutionCount from "@/components/Frontend/TutionAssistance/TutionCount/TutionCount";
import TutionEducation from "@/components/Frontend/TutionAssistance/TutionEducation/TutionEducation";
import Type from "@/components/Frontend/TutionAssistance/Type/Type";
import React from "react";
import bg from "@/assets/images/all/tution-banner-bg.png";
import img from "@/assets/images/all/tution-banner.png";

const TutionAssistancePage = () => {
  return (
    <>
      <TutionBanner
        bg={bg}
        img={img}
        title="Education for all"
        des="Quagnite welcomes students from all walks of life, all
                    backgrounds, regardless of color, race, or creed. You’re
                    joining a family, a community, and we help each other out.
                    If you need tuitions assistance, all you have to do is ask.
                    We’re here for you."
      />
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
