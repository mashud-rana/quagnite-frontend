import Banner from "@/components/Frontend/BeASponsor/Banner/Banner";
import Sponsor from "@/components/Frontend/BeASponsor/Sponsor/Sponsor";
import Scholarship from "@/components/Frontend/BeASponsor/Scholarship/Scholarship";
import React from "react";
import WeOffer from "@/components/Frontend/BeASponsor/WeOffer/WeOffer";

export default function page() {
  return (
    <>
      <Banner />
      <Sponsor />
      <Scholarship />
      <WeOffer />
    </>
  );
}
