import React from "react";
import bg from "@/assets/images/all/scholarship-banner-bg.png";
import img from "@/assets/images/all/scholarship-banner.png";
import ScholarshipBanner from "@/components/Frontend/Scholarship/ScholarshipBanner/ScholarshipBanner";
import AvailScholarship from "../../../components/Frontend/Scholarship/AvailScholarship/AvailScholarship";
import Criteria from "@/components/Frontend/Scholarship/Criteria/Criteria";

const ScholarshipPage = () => {
  return (
    <div>
      <ScholarshipBanner />
      <AvailScholarship />
      <Criteria />
    </div>
  );
};

export default ScholarshipPage;
