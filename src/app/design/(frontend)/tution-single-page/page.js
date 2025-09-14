import RelatedCoaches from "@/components/Frontend/CoachBooking/RelatedCoaches/RelatedCoaches";
import TuitionDetails from "@/components/Frontend/TuitionSingle/TuitionDetails/TuitionDetails";
import Tutoring from "@/components/Frontend/TuitionSingle/Tutoring/Tutoring";
import rating1 from "@/assets/images/apply-scholarship/ratings1.svg";
import rating2 from "@/assets/images/apply-scholarship/ratings2.svg";
import Testimonial from "@/components/Share/Frontend/TestimonialCard/TestimonialCard";
import ExploreCourse from "@/components/Frontend/TuitionSingle/ExploreCourse/ExploreCourse";

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

const TutionSinglePage = () => {
  return (
    <>
      <TuitionDetails />
      <Tutoring />
      <Testimonial
        title="COACHES REVIEW"
        subtitle="Lorem Ipsum Dolar"
        testimonials={testimonialData}
        ratingFilledIcon={rating1}
        ratingEmptyIcon={rating2}
      />
      <ExploreCourse />
    </>
  );
};

export default TutionSinglePage;
