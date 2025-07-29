import Application from "@/components/Frontend/ScholarshipSingle/Application/Application";
import Banner from "@/components/Frontend/ScholarshipSingle/Banner/Banner";
import Faq from "@/components/Frontend/ScholarshipSingle/Faq/Faq";
import ScholarshipVideo from "@/components/Frontend/ScholarshipSingle/ScholarshipVideo/ScholarshipVideo";
import ScholarshipWork from "@/components/Frontend/ScholarshipSingle/ScholarshipWork/ScholarshipWork";
import SuccessStory from "@/components/Frontend/ScholarshipSingle/SuccessStory/SuccessStory";
import React from "react";
import img from "@/assets/images/scholarship/application-img.png";
import bg from "@/assets/images/scholarship/application-bg.png";

export default function page() {
  return (
    <>
      <Banner />
      <ScholarshipVideo />
      <ScholarshipWork />
      <SuccessStory />
      <Application
        subtitle="START YOUR APPLICATION"
        title="Begin your journey"
        des="We want you to join our elite Quagnite Scholars alumni. Excellence, passion, and tech, all embodied in you."
        img={img}
        bg={bg}
      />
      <Faq />
    </>
  );
}
