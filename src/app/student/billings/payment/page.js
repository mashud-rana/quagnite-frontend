import Payment from "@/components/Student/Billings/Payment/Payment";
import React from "react";

import img from "@/assets/images/all/american.png";
import img2 from "@/assets/images/all/mastercard.png";
import img3 from "@/assets/images/all/discover.png";
import paypal from "@/assets/images/all/paypal.png";
import pay from "@/assets/images/all/pay.png";
import stripe from "@/assets/images/all/stripe.png";

const PaymentPage = () => {
  const cards = [
    { id: 1, img: img, number: "•••• •••• •••• 5623", expiry: "09/32" },
    { id: 2, img: img2, number: "•••• •••• •••• 7789", expiry: "11/28" },
    { id: 3, img: img3, number: "•••• •••• •••• 3456", expiry: "05/27" },
  ];

  const paymentMethods = [
    {
      id: 1,
      img: paypal,
      label: "Pay Using PayPal Payment Services",
    },
    {
      id: 2,
      img: pay,
      label: "Pay Using Pay Service",
    },
    {
      id: 3,
      img: stripe,
      label: "Pay Using Stripe Payment Services",
    },
  ];

  return (
    <>
      <Payment title="Credit Card" cards={cards} methods={paymentMethods} />
    </>
  );
};

export default PaymentPage;
