import Certificate from "@/components/Frontend/About/Certificate/Certificate";
import Casestudies from "@/components/Frontend/Goverment/Casestudies/Casestudies";
import Countries from "@/components/Frontend/Goverment/Countries/Countries";
import Defense from "@/components/Frontend/Goverment/Defense/Defense";
import GovtmentBanner from "@/components/Frontend/Goverment/GovtBanner/GovtmentBanner";
import GovtCount from "@/components/Frontend/Goverment/GovtCount/GovtCount";
import GovtPartner from "@/components/Frontend/Goverment/GovtPartner/GovtPartner";
import InfoSection from "@/components/Frontend/Goverment/InfoSection/InfoSection";
import Modern from "@/components/Frontend/Goverment/Modern/Modern";
import ImpactCount from "@/components/Frontend/Impact/ImpactCount/ImpactCount";
import Success from "@/components/Frontend/Impact/Success/Success";
import Ecosystem from "@/components/Frontend/Partners/Ecosystem/Ecosystem";
import Companys from "@/components/Share/Frontend/Companys/Companys";

import React from "react";

const GovermentPage = () => {
  return (
    <>
      <GovtmentBanner />
      <InfoSection />
      <Companys />
      <Countries />
      <GovtCount />
      <Defense />
      <Modern />
      <Certificate />
      <Ecosystem />
      <Casestudies />
      <Ecosystem />
      <GovtPartner />
    </>
  );
};

export default GovermentPage;
