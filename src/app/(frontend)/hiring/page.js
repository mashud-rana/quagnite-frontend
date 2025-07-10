import HiringBanner from "@/components/Frontend/Hiring/HiringBanner/HiringBanner";
import Learningtab from "@/components/Frontend/Hiring/Learningtab/Learningtab";
import Partnars from "@/components/Frontend/Hiring/Partners/Partnars";
import SkillCollapse from "@/components/Frontend/Hiring/SkillCollapse/SkillCollapse";
import Teammate from "@/components/Frontend/Hiring/Teammate/Teammate";
import Train from "@/components/Frontend/Hiring/Train/Train";
import React from "react";

const HiringPage = () => {
  return (
    <>
      <HiringBanner />
      <Teammate />
      <Partnars />
      <SkillCollapse />
      <Learningtab />
      <Train />
    </>
  );
};

export default HiringPage;
