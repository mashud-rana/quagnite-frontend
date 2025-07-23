import Hire from "@/components/Frontend/Home/Hire/Hire";
import Ecosystem from "@/components/Frontend/Partners/Ecosystem/Ecosystem";
import PartnerBanner from "@/components/Frontend/Partners/PartnerBanner/PartnerBanner";
import PartnerCard from "@/components/Frontend/Partners/PartnerCard/PartnerCard";
import PartnerInfo from "@/components/Frontend/Partners/PartnerInfo/PartnerInfo";
import SupportFaq from "@/components/Frontend/Support/SupportFaq/SupportFaq";
import Companys from "@/components/Share/Frontend/Companys/Companys";
import React from "react";

const PartnersPage = () => {
  return (
    <>
      <PartnerBanner />
      <Ecosystem />
      <Companys />
      <PartnerInfo />
      <PartnerCard />
      <SupportFaq />
      <Hire />
    </>
  );
};

export default PartnersPage;
