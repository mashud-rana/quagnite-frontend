import ScrollableNavbar from "@/components/Share/ScrollableNavbar/ScrollableNavbar";
import React from "react";

const EarningLayout = ({ children }) => {
  const earningTabs = [
    { href: "/coach/earnings", label: "Wallet details", exact: true },
    { href: "/coach/earnings/transaction", label: "Transaction Details" },
    { href: "/coach/earnings/withdrawal", label: "Withdrawal Details" },
    { href: "/coach/earnings/beneficary", label: "My Beneficiary" },
  ];
  return (
    <div>
      <div className="mb-24">
        <div className="ic_title_section">
          <h1 className="ic_text_36">My Earnings</h1>
        </div>
      </div>

      <ScrollableNavbar tabs={earningTabs} />

      {children}
    </div>
  );
};

export default EarningLayout;
