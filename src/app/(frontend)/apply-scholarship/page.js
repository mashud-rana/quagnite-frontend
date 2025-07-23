import AvailableScholarship from "@/components/Frontend/ApplyScholarship/AvailableScholarship/AvailableScholarship";
import Faq from "@/components/Frontend/ApplyScholarship/Faq/Faq";
import ScholarshipSponsor from "@/components/Frontend/ApplyScholarship/ScholarshipSponsor/ScholarshipSponsor";
import Testimonial from "@/components/Frontend/ApplyScholarship/Testimonial/Testimonial";
import Scholarship from "@/components/Frontend/BeASponsor/Scholarship/Scholarship";
import React from "react";

export default function page() {
  return (
    <div className="ic_section_margin_top_80">
      <Scholarship />
      <Faq />
      <AvailableScholarship />
      <Testimonial />
      <ScholarshipSponsor />
    </div>
  );
}
