import CoachDetails from "@/components/Frontend/CoachBooking/CoachDetails/CoachDetails";
import RelatedCoaches from "@/components/Frontend/CoachBooking/RelatedCoaches/RelatedCoaches";
import Testimonial from "@/components/Share/Frontend/TestimonialCard/TestimonialCard";
import React from "react";
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
      <CoachDetails />
      <RelatedCoaches />
      <Testimonial
        title="COACHES REVIEW"
        subtitle="Lorem Ipsum Dolar"
        testimonials={testimonialData}
        ratingFilledIcon={rating1}
        ratingEmptyIcon={rating2}
      />
    </>
  );
}
