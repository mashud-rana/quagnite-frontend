import HiringBanner from "@/components/Frontend/Hiring/HiringBanner/HiringBanner";
import Learningtab from "@/components/Frontend/Hiring/Learningtab/Learningtab";
import Partnars from "@/components/Frontend/Hiring/Partners/Partnars";
import SkillCollapse from "@/components/Frontend/Hiring/SkillCollapse/SkillCollapse";
import Teammate from "@/components/Frontend/Hiring/Teammate/Teammate";
import React from "react";

const page = () => {
  return (
    <>
      <HiringBanner />
      <Teammate />
      <Partnars />
      <SkillCollapse />
      <Learningtab />
    </>
  );
};

export default page;
