import About from "@/components/Frontend/Home/About/About";
import Difference from "@/components/Frontend/Home/Difference/Difference";
import Hero from "@/components/Frontend/Home/Hero/Hero";
import Hire from "@/components/Frontend/Home/Hire/Hire";
import Industries from "@/components/Frontend/Home/Industries/Industries";
import School from "@/components/Frontend/Home/School/School";
import TeachersSlider from "@/components/Frontend/Home/TeachersSlider/TeachersSlider";
import TestimonialSlider from "@/components/Frontend/Home/TestimonialSlide/TestimonialSlide";

// import TeachersSlider from "@/components/Frontend/Home/TeachersSlider/TeachersSlider";
import WhyQuagniteSection from "@/components/Frontend/Home/WhyQuagnite/WhyQuagnite";
import Companys from "@/components/Share/Frontend/Companys/Companys";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <School />
      <Industries />
      <Difference />
      <Companys />

      <WhyQuagniteSection />
      {/* <TeachersSlider /> */}
      {/* <TestimonialSlider /> */}
      {/* <TestimonialSlider /> */}

      <Hire />
    </>
  );
}
