"use client";

import BillingDetails from "@/components/Student/Billings/BillingDetails/BillingDetails";
import React from "react";

const BillingsPage = () => {
  const billingData = [
    { label: "Name", value: "Student Amiliafox" },
    { label: "Email address", value: "amiliafox2727127@gmail.com" },
    {
      label: "Billing address",
      value: "23475 Glacier View Dr, Eagle River, Alaska 99577, USA",
    },
    { label: "Phone Number", value: "+0987654211" },
  ];

  const handleSave = (updatedData) => {
    console.log("Updated billing details:", updatedData);
  };

  return (
    <>
      <BillingDetails
        title="Billing Info"
        fields={billingData}
        onSave={handleSave}
      />
    </>
  );
};

export default BillingsPage;
