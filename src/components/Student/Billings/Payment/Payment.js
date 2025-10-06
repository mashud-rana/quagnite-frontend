// "use client";

// import { FaPlus } from "react-icons/fa";
// import styles from "./payment.module.css";
// import img from "@/assets/images/all/american.png";
// import img2 from "@/assets/images/all/mastercard.png";
// import img3 from "@/assets/images/all/discover.png";
// import paypal from "@/assets/images/all/paypal.png";
// import pay from "@/assets/images/all/pay.png";
// import stripe from "@/assets/images/all/stripe.png";
// import Image from "next/image";

// const Payment = () => {
//   const datas = [
//     {
//       id: 1,
//       img: img,
//     },
//     {
//       id: 2,
//       img: img2,
//     },
//     {
//       id: 3,
//       img: img3,
//     },
//   ];

//   const paymentMethods = [
//     {
//       id: 1,
//       img: paypal,
//       label: "Pay Using PayPal Payment Services",
//     },
//     {
//       id: 2,
//       img: pay,
//       label: "Pay Using Pay Service",
//     },
//     {
//       id: 3,
//       img: stripe,
//       label: "Pay Using Stripe Payment Services",
//     },
//   ];

//   return (
//     <div className={styles.paymentMethodsContainer}>
//       {/* Header */}
//       <div className={styles.header}>
//         <div className={styles.headerLeft}>
//           <h6 className={styles.title}>Credit card</h6>
//           <span className={styles.subtitle}>Current Payment Method</span>
//         </div>
//         <button className="ic_common_primary_btn">ADD NEW CARD</button>
//       </div>

//       {/* Credit Cards (Static, no logic) */}
//       <div className={styles.creditCardsSection}>
//         <div className={styles.cardsGrid}>
//           {/* Card 1 (selected) */}
//           {datas.map((data) => (
//             <div key={data.id} className={`${styles.creditCard} `}>
//               <div className={styles.cardHeader}>
//                 <Image
//                   className={styles.ic_img}
//                   src={data.img}
//                   alt=""
//                   width={200}
//                   height={10}
//                 />
//               </div>
//               <div className={styles.cardDetails}>
//                 <div className={styles.cardNumber}>
//                   <span className={styles.cardLabel}>Card Number</span>
//                   <span className={styles.cardValue}>•••• •••• •••• 5623</span>
//                 </div>
//                 <div className={styles.cardExpiry}>
//                   <span className={styles.expiryLabel}>Expiry - 09/32</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Available Payment Methods (Static) */}
//       <div>
//         <h6 className={styles.title}>Available Payment Methods</h6>

//         <div className={styles.methodsList}>
//           {paymentMethods.map((method) => (
//             <div key={method.id} className={styles.paymentMethod}>
//               <div className={styles.ic_payment_img_container}>
//                 <Image src={method.img} alt={method.label} />
//               </div>
//               <span>{method.label}</span>
//             </div>
//           ))}
//         </div>

//         {/* <div className={styles.methodsList}>
//           <div className={styles.paymentMethod}>
//             <div className={styles.ic_payment_img_container}>
//               <Image src={paypal} alt="" />
//             </div>
//             <span>Pay Using PayPal Payment Services</span>
//           </div>

//           <div className={styles.paymentMethod}>
//             <div className={styles.ic_payment_img_container}>
//               <Image src={pay} alt="" />
//             </div>
//             <span>Pay Using PayPal Payment Services</span>
//           </div>

//           <div className={styles.paymentMethod}>
//             <div className={styles.ic_payment_img_container}>
//               <Image src={stripe} alt="" />
//             </div>
//             <span>Pay Using PayPal Payment Services</span>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Payment;

"use client";

import styles from "./payment.module.css";
import Image from "next/image";

const Payment = ({ title = "Credit Card", cards = [], methods = [] }) => {
  return (
    <div className={styles.paymentMethodsContainer}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h6 className={styles.title}>{title}</h6>
          <span className={styles.subtitle}>Current Payment Method</span>
        </div>
        <button className="ic_common_primary_btn">ADD NEW CARD</button>
      </div>

      {/* Credit Cards */}
      <div className={styles.creditCardsSection}>
        <div className={styles.cardsGrid}>
          {cards.map((card) => (
            <div key={card.id} className={styles.creditCard}>
              <div className={styles.cardHeader}>
                <Image
                  className={styles.ic_img}
                  src={card.img}
                  alt="Card Logo"
                  width={200}
                  height={10}
                />
              </div>
              <div className={styles.cardDetails}>
                <div className={styles.cardNumber}>
                  <span className={styles.cardLabel}>Card Number</span>
                  <span className={styles.cardValue}>
                    {card.number || "•••• •••• •••• 0000"}
                  </span>
                </div>
                <div className={styles.cardExpiry}>
                  <span className={styles.expiryLabel}>
                    Expiry - {card.expiry || "00/00"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Payment Methods */}
      <div>
        <h6 className={styles.title}>Available Payment Methods</h6>
        <div className={styles.methodsList}>
          {methods.map((method) => (
            <div key={method.id} className={styles.paymentMethod}>
              <div className={styles.ic_payment_img_container}>
                <Image src={method.img} alt={method.label} />
              </div>
              <span>{method.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;
