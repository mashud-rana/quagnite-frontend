import Application from "@/components/Frontend/ScholarshipSingle/Application/Application";
import Banner from "@/components/Frontend/ScholarshipSingle/Banner/Banner";
import Faq from "@/components/Frontend/ScholarshipSingle/Faq/Faq";
import ScholarshipVideo from "@/components/Frontend/ScholarshipSingle/ScholarshipVideo/ScholarshipVideo";
import ScholarshipWork from "@/components/Frontend/ScholarshipSingle/ScholarshipWork/ScholarshipWork";
import SuccessStory from "@/components/Frontend/ScholarshipSingle/SuccessStory/SuccessStory";
import React from "react";

export default function page() {
  return (
    <>
      <Banner />
      <ScholarshipVideo />
      <ScholarshipWork />
      <SuccessStory />
      <Application />
      <Faq />
    </>
  );
}
