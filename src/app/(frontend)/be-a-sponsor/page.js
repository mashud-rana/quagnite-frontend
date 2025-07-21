import Sponsor from "@/components/Frontend/BeASponsor/Sponsor/Sponsor";
import Scholarship from "@/components/Frontend/BeASponsor/Scholarship/Scholarship";
import React from "react";
import WeOffer from "@/components/Frontend/BeASponsor/WeOffer/WeOffer";
import SponsorBanner from "@/components/Frontend/BeASponsor/Banner/Banner";

export default function page() {
  return (
    <>
      <SponsorBanner />
      <Sponsor />
      <Scholarship />
      <WeOffer />
    </>
  );
}
