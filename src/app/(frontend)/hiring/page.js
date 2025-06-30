import HiringBanner from "@/components/Frontend/Hiring/HiringBanner/HiringBanner";
import Partnars from "@/components/Frontend/Hiring/Partners/Partnars";
import Teammate from "@/components/Frontend/Hiring/Teammate/Teammate";
import React from "react";

const page = () => {
  return (
    <>
      <HiringBanner />
      <Teammate />
      <Partnars />
    </>
  );
};

export default page;
