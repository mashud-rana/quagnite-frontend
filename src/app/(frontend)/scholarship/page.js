import React from "react";
import bg from "@/assets/images/all/scholarship-banner-bg.png";
import img from "@/assets/images/all/scholarship-banner.png";
import ScholarshipBanner from "@/components/Frontend/Scholarship/ScholarshipBanner/ScholarshipBanner";
import AvailScholarship from "../../../components/Frontend/Scholarship/AvailScholarship/AvailScholarship";
import Criteria from "@/components/Frontend/Scholarship/Criteria/Criteria";
import Application from "@/components/Frontend/ScholarshipSingle/Application/Application";

import img1 from "@/assets/images/scholarship/application-img2.png";
import bg1 from "@/assets/images/scholarship/application-bg.png";
import Success from "@/components/Frontend/Impact/Success/Success";
import Sponsor from "@/components/Frontend/Scholarship/Sponsor/Sponsor";
import Refer from "@/components/Frontend/Scholarship/Refer/Refer";

const ScholarshipPage = () => {
  return (
    <>
      <ScholarshipBanner />
      <AvailScholarship />
      <Criteria />
      <Application
        subtitle="START YOUR APPLICATION"
        title="Begin your journey"
        des="We want you to join our elite Quagnite Scholars alumni. Excellence, passion, and tech, all embodied in you."
        img={img1}
        bg={bg1}
      />

      <Success />
      <Sponsor />
      <Refer />
    </>
  );
};

export default ScholarshipPage;
