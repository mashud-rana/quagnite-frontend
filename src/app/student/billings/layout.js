import ScrollableNavbar from "@/components/Share/ScrollableNavbar/ScrollableNavbar";
import BillingNavbar from "@/components/Student/Billings/BillingNavbar/BillingNavbar";
import React from "react";

const BillingLayout = ({ children }) => {
  const billingTabs = [
    { href: "/student/billings", label: "Billing details", exact: true },
    { href: "/student/billings/invoices", label: "Invoices" },
    { href: "/student/billings/payment", label: "Payment method" },
    { href: "/student/billings/purchase", label: "Purchase history" },
  ];

  return (
    <div>
      {/* <BillingNavbar /> */}
      <ScrollableNavbar tabs={billingTabs} />
      <div>{children}</div>
    </div>
  );
};

export default BillingLayout;
