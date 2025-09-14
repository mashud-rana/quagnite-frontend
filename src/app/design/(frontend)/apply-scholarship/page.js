import AvailableScholarship from "@/components/Frontend/ApplyScholarship/AvailableScholarship/AvailableScholarship";
import Faq from "@/components/Frontend/ApplyScholarship/Faq/Faq";
import ScholarshipSponsor from "@/components/Frontend/ApplyScholarship/ScholarshipSponsor/ScholarshipSponsor";
import bgImage from "@/assets/images/apply-scholarship/testimonials-bg.png";
import Scholarship from "@/components/Frontend/BeASponsor/Scholarship/Scholarship";
import React from "react";
import Testimonial from "@/components/Share/Frontend/TestimonialCard/TestimonialCard";
import rating1 from "@/assets/images/apply-scholarship/ratings1.svg";
import rating2 from "@/assets/images/apply-scholarship/ratings2.svg";
const testimonialData = [
  {
    id: 1,
    name: "Lorem Ipsum Dolar Sit Amet",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Lorem Ipsum Dolar Sit Amet",
    rating: 4,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Lorem Ipsum Dolar Sit Amet",
    rating: 3,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function page() {
  return (
    <div className="ic_section_margin_top_80">
      <Scholarship />
      <Faq />
      <AvailableScholarship />
      <Testimonial
        bgImage={bgImage}
        title="TESTIMONIALS"
        subtitle="Lorem Ipsum Dolar"
        testimonials={testimonialData}
        ratingFilledIcon={rating1}
        ratingEmptyIcon={rating2}
      />
      <ScholarshipSponsor />
    </div>
  );
}
