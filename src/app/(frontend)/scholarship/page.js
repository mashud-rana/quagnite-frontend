import Banner from "@/components/Frontend/Scholarship/Banner/Banner";
import ScholarshipVideo from "@/components/Frontend/Scholarship/ScholarshipVideo/ScholarshipVideo";
import ScholarshipWork from "@/components/Frontend/Scholarship/ScholarshipWork/ScholarshipWork";
import SuccessStory from "@/components/Frontend/Scholarship/SuccessStory/SuccessStory";
import React from "react";

export default function page() {
  return (
    <>
      <Banner />
      <ScholarshipVideo />
      <ScholarshipWork />
      <SuccessStory />
    </>
  );
}
