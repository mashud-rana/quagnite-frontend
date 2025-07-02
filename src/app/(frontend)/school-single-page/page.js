import AboutBanner from "@/components/Frontend/About/Banner/Banner";
import Learningtab from "@/components/Frontend/Hiring/Learningtab/Learningtab";
import React from "react";
import img1 from "@/assets/images/all/about-hero.png";
const page = () => {
  return (
    <div>
      <AboutBanner
        title={"Fostering growth and connecting people to opportunity"}
        subtitle={
          "Quagnite offers training and education tailored to meet the needs of the individual, for businesses and individuals alike. From self-paced learning to expert instruction, a broad range of subjects gives you the skills you need to succeed at the leading edge of technology and industry."
        }
        img={img1}
      />
      <Learningtab />
    </div>
  );
};

export default page;
