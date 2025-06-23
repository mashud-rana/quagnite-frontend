import About from "@/components/Frontend/Home/About/About";
import Difference from "@/components/Frontend/Home/Difference/Difference";
import Hero from "@/components/Frontend/Home/Hero/Hero";
import Industries from "@/components/Frontend/Home/Industries/Industries";
import School from "@/components/Frontend/Home/School/School";
import TeachersSlider from "@/components/Frontend/Home/TeachersSlider/TeachersSlider";
import WhyQuagniteSection from "@/components/Frontend/Home/WhyQuagnite/WhyQuagnite";

export default function Home() {
  return (
    <div className="ic_bg_black">
      <Hero />
      <About />
      <School />
      <Industries />
      <Difference />
      <WhyQuagniteSection />
      <TeachersSlider />
    </div>
  );
}
