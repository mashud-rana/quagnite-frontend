import ScrollableNavbar from "@/components/Share/ScrollableNavbar/ScrollableNavbar";
import React from "react";

const BillingsLayout = ({ children }) => {
  const billingTabs = [
    { href: "/coach/billings", label: "Billing details", exact: true },
    { href: "/coach/billings/invoices", label: "Invoices" },
    { href: "/coach/billings/payment", label: "Payment method" },
    { href: "/coach/billings/purchase", label: "Purchase history" },
  ];

  return (
    <div>
      {/* <BillingNavbar /> */}
      <ScrollableNavbar tabs={billingTabs} />
      <div>{children}</div>
    </div>
  );
};

export default BillingsLayout;
