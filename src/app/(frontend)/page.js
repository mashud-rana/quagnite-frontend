import About from "@/components/Frontend/Home/About/About";
import Difference from "@/components/Frontend/Home/Difference/Difference";
import Industries from "@/components/Frontend/Home/Industries/Industries";
import School from "@/components/Frontend/Home/School/School";
import TeachersSlider from "@/components/Frontend/Home/TeachersSlider/TeachersSlider";
import WhyQuagniteSection from "@/components/Frontend/Home/WhyQuagniteSection/WhyQuagniteSection";

export default function Home() {
  return (
    <div className="ic_bg_black">
      <About />
      <School />
      <Industries />
      <Difference />
      <TeachersSlider />
      <WhyQuagniteSection />
    </div>
  );
}
