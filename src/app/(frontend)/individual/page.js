import School from "@/components/Frontend/Home/School/School";
import Benefits from "@/components/Frontend/Individual/Benefits/Benefits";
import Faq from "@/components/Frontend/Individual/Faq/Faq";
import IndiBanner from "@/components/Frontend/Individual/IndiBanner/IndiBanner";
import Partner from "@/components/Frontend/Individual/Partners/Partner";
import Plan from "@/components/Frontend/Individual/Plan/Plan";
import Whyus from "@/components/Frontend/Individual/Whyus/Whyus";
import React from "react";

const IndividualPage = () => {
  return (
    <>
      <IndiBanner />
      <Whyus />
      <Benefits />
      <School />
      <Faq />
      <Plan />
      <Partner />
    </>
  );
};

export default IndividualPage;
