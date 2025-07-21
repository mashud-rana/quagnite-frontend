import Sponsor from "@/components/Frontend/BeASponsor/Sponsor/Sponsor";
import Scholarship from "@/components/Frontend/BeASponsor/Scholarship/Scholarship";
import React from "react";
import WeOffer from "@/components/Frontend/BeASponsor/WeOffer/WeOffer";
import SponsorBanner from "@/components/Frontend/BeASponsor/Banner/Banner";
import Success from "@/components/Frontend/Impact/Success/Success";
import Counter from "@/components/Frontend/BeASponsor/Counter/Counter";
import DownloadReport from "@/components/Frontend/BeASponsor/DownloadReport/DownloadReport";

export default function page() {
  return (
    <>
      <SponsorBanner />
      <Sponsor />
      <Scholarship />
      <Counter />
      <WeOffer />
      <Success />
      <DownloadReport />
    </>
  );
}
