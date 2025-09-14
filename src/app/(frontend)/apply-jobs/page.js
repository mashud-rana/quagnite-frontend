import Banner from "@/components/Frontend/ApplyJobs/Banner/Banner";
import ApplyForJob from "@/components/Frontend/ApplyJobs/ApplyForJob/ApplyForJob";
import React from "react";
import Accordion from "@/components/Frontend/ApplyJobs/Accordion/Accordion";
import Refer from "@/components/Frontend/ApplyJobs/Refer/Refer";

export default function page() {
  return (
    <>
      <Banner />
      <ApplyForJob />
      <Accordion />
      <Refer />
    </>
  );
}
