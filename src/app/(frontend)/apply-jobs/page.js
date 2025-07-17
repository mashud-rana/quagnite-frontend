import Banner from "@/components/Frontend/ApplyJobs/Banner/Banner";
import ApplyForJob from "@/components/Frontend/ApplyJobs/ApplyForJob/ApplyForJob";
import React from "react";
import Accordion from "@/components/Frontend/ApplyJobs/Accordion/Accordion";

export default function page() {
  return (
    <>
      <Banner />
      <ApplyForJob />
      <Accordion />
    </>
  );
}
