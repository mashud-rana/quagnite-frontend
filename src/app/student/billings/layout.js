import BillingNavbar from "@/components/Student/Billings/BillingNavbar/BillingNavbar";
import React from "react";

const BillingLayout = ({ children }) => {
  return (
    <div>
      <BillingNavbar />
      <div>{children}</div>
    </div>
  );
};

export default BillingLayout;
