import Contactus from "@/components/Frontend/Support/Contactus/Contactus";
import LatestUpdate from "@/components/Frontend/Support/LatestUpdate/LatestUpdate";
import SupportBanner from "@/components/Frontend/Support/SupportBanner/SupportBanner";
import SupportFaq from "@/components/Frontend/Support/SupportFaq/SupportFaq";
import Ticket from "@/components/Frontend/Support/Ticket/Ticket";
import React from "react";

const SupportPage = () => {
  return (
    <div>
      <SupportBanner />
      <Ticket />
      <LatestUpdate />
      <SupportFaq />
      <Contactus />
    </div>
  );
};

export default SupportPage;
