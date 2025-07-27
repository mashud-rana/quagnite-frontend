import React from "react";
import Banner from "@/components/Share/Frontend/BannerCard/BannerCard";
import bg from "@/assets/images/partnership/bg.png";
import img from "@/assets/images/partnership/partner-right.png";
import ApplyPartner from "@/components/Frontend/Partnership/ApplyPartner/ApplyPartner";
import Impact from "@/components/Frontend/Partnership/Impact/Impact";
import Counter from "@/components/Frontend/Partnership/Counter/Counter";
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
    <>
      <Banner
        bgImage={bg}
        rightImage={img}
        heading="Build your team, build your reach, build the future."
        paragraph={`Partnering with Quagnite lets you show your support to education for everyone, while also allowing you to make contact with highly skilled professionals that are motivated and inspired. Whether you’re looking for employees, consultants, or other opportunities, a partnership with Quagnite sets you up for success.`}
      />
      <ApplyPartner />
      <Impact />
      <Counter />
      <Testimonial
        title="TESTIMONIALS"
        subtitle="Lorem Ipsum Dolar"
        testimonials={testimonialData}
        ratingFilledIcon={rating1}
        ratingEmptyIcon={rating2}
      />
      ;
    </>
  );
}
