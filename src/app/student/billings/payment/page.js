import Payment from "@/components/Student/Billings/Payment/Payment";
import React from "react";

import img from "@/assets/images/all/american.png";
import img2 from "@/assets/images/all/mastercard.png";
import img3 from "@/assets/images/all/discover.png";
import paypal from "@/assets/images/all/paypal.png";
import pay from "@/assets/images/all/pay.png";
import stripe from "@/assets/images/all/stripe.png";

const PaymentPage = () => {


  return (
    <>
      <Payment title="Credit Card"  />
    </>
  );
};

export default PaymentPage;
