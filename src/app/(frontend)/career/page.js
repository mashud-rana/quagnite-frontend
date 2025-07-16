import Certification from "@/components/Frontend/Career/Certification/Certification";
import Flexibility from "@/components/Frontend/Career/Flexibility/Flexibility";
import Jobs from "@/components/Frontend/Career/Jobs/Jobs";
import Professional from "@/components/Frontend/Career/Professional/Professional";
import Work from "@/components/Frontend/Career/Work/Work";
import ImpactCount from "@/components/Frontend/Impact/ImpactCount/ImpactCount";
import React from "react";

const CareerPage = () => {
  return (
    <div>
      <Professional />
      <ImpactCount />
      <Flexibility />
      <Certification />
      <Jobs />
      <Work />
    </div>
  );
};

export default CareerPage;
