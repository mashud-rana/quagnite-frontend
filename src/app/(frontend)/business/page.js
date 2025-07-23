import BusinessBanner from "@/components/Frontend/Business/BusinessBanner/BusinessBanner";
import BusinessData from "@/components/Frontend/Business/BusinessData/BusinessData";
import HireAlumni from "@/components/Frontend/Business/HireAlumni/HireAlumni";
import Integrate from "@/components/Frontend/Business/Integrate/Integrate";
import Quality from "@/components/Frontend/Business/Quality/Quality";
import Industries from "@/components/Frontend/Home/Industries/Industries";
import Success from "@/components/Frontend/Impact/Success/Success";
import Benefits from "@/components/Frontend/Individual/Benefits/Benefits";
import React from "react";

const BusinessPage = () => {
  return (
    <>
      <BusinessBanner />
      <BusinessData />
      <Industries />
      <Benefits />
      <Success />
      <Quality />
      <Integrate />
      <HireAlumni />
    </>
  );
};

export default BusinessPage;
