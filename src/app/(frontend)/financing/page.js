import TutionBanner from "@/components/Frontend/TutionAssistance/TutionBanner/TutionBanner";
import React from "react";
import bg from "@/assets/images/all/finance-banner-bg.png";
import img from "@/assets/images/all/finance-banner.png";
import Invest from "@/components/Frontend/Financing/Invest/Invest";
import Testimonial from "@/components/Share/Frontend/TestimonialCard/TestimonialCard";
import rating1 from "@/assets/images/apply-scholarship/ratings1.svg";
import rating2 from "@/assets/images/apply-scholarship/ratings2.svg";
import bgImage from "@/assets/images/apply-scholarship/testimonials-bg.png";

const FinancingPage = () => {
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

  return (
    <>
      <TutionBanner
        bg={bg}
        img={img}
        title="Education for all"
        des="Quagnite welcomes students from all walks of life, all
                    backgrounds, regardless of color, race, or creed. You’re
                    joining a family, a community, and we help each other out.
                    If you need tuitions assistance, all you have to do is ask.
                    We’re here for you."
      />

      <Invest />

      <Testimonial
        bgImage={bgImage}
        title="TESTIMONIALS"
        subtitle="Lorem Ipsum Dolar"
        testimonials={testimonialData}
        ratingFilledIcon={rating1}
        ratingEmptyIcon={rating2}
      />
    </>
  );
};

export default FinancingPage;
