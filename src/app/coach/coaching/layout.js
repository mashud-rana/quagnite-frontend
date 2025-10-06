import ScrollableNavbar from "@/components/Share/ScrollableNavbar/ScrollableNavbar";
import React from "react";

const CoachingLayout = ({ children }) => {
  const billingTabs = [
    { href: "/coach/coaching", label: "New Request", exact: true },
    { href: "/coach/coaching/all-coaching", label: "Coachings" },
    { href: "/coach/coaching/availability", label: "Availability" },
  ];
  return (
    <div>
      {/* <BillingNavbar /> */}
      <ScrollableNavbar tabs={billingTabs} />
      <div>{children}</div>
    </div>
  );
};

export default CoachingLayout;
