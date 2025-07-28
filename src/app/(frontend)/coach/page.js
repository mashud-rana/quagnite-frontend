import AssistCoach from "@/components/Frontend/Assistance/AssistCoach/AssistCoach";
import CoachBanner from "@/components/Frontend/Coach/CoachBanner/CoachBanner";
import Experience from "@/components/Frontend/Coach/Experience/Experience";
import Mentor from "@/components/Frontend/Coach/Mentor/Mentor";
import React from "react";

const CoachPage = () => {
  return (
    <div>
      <CoachBanner />
      <AssistCoach />
      <Experience />
      <Mentor />
    </div>
  );
};

export default CoachPage;
