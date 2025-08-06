import React from "react";
import AssistanceBanner from "@/components/Frontend/Assistance/AssistanceBanner/AssistanceBanner";
import Tuition from "@/components/Frontend/Assistance/Tuition/Tuition";
import AssistCoach from "@/components/Frontend/Assistance/AssistCoach/AssistCoach";
import Companys from "@/components/Share/Frontend/Companys/Companys";
import Credits from "@/components/Frontend/Assistance/Credits/Credits";
import Financing from "@/components/Frontend/Assistance/Financing/Financing";
import Instructor from "@/components/Frontend/Assistance/Instructor/Instructor";

const AssistancePage = () => {
  return (
    <>
      <AssistanceBanner />
      <Tuition />
      <AssistCoach />
      <Financing />
      <Companys />
      <Credits />
      <Instructor />
    </>
  );
};

export default AssistancePage;
