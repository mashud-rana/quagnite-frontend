// "use client";

// import { useState } from "react";
// import styles from "./payment.module.css";
// import Image from "next/image";

// const Payment = ({ title = "Credit Card", cards = [], methods = [] }) => {
//   const handleEditSave = () => {
//     if (!isEditing) {
//       // Switch to edit mode
//       setIsEditing(true);
//     } else {
//       // Trigger form validation + submit
//       handleSubmit(onSubmit)();
//     }
//   };

//   const [isEditing, setIsEditing] = useState(false);

//   return (
//     <div className={styles.paymentMethodsContainer}>
//       {/* Header */}
//       <div className={styles.header}>
//         <div className={styles.headerLeft}>
//           <h6 className={styles.title}>{title}</h6>
//           <span className={styles.subtitle}>Current Payment Method</span>
//         </div>
//         <button className="ic_common_primary_btn">ADD NEW CARD</button>
//       </div>

//       {/* Credit Cards */}
//       <div className={styles.creditCardsSection}>
//         <div className={styles.cardsGrid}>
//           {cards.map((card) => (
//             <div key={card.id} className={styles.creditCard}>
//               <div className={styles.cardHeader}>
//                 <Image
//                   className={styles.ic_img}
//                   src={card.img}
//                   alt="Card Logo"
//                   width={200}
//                   height={10}
//                 />
//               </div>
//               <div className={styles.cardDetails}>
//                 <div className={styles.cardNumber}>
//                   <span className={styles.cardLabel}>Card Number</span>
//                   <span className={styles.cardValue}>
//                     {card.number || "•••• •••• •••• 0000"}
//                   </span>
//                 </div>
//                 <div className={styles.cardExpiry}>
//                   <span className={styles.expiryLabel}>
//                     Expiry - {card.expiry || "00/00"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Available Payment Methods */}
//       <div>
//         <h6 className={styles.title}>Available Payment Methods</h6>
//         <div className={styles.methodsList}>
//           {methods.map((method) => (
//             <div key={method.id} className={styles.paymentMethod}>
//               <div className={styles.ic_payment_img_container}>
//                 <Image src={method.img} alt={method.label} />
//               </div>
//               <span>{method.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Add to button input...............  */}
//       <div
//         className={`${styles.infoGrid} ${isEditing ? styles.editModeGrid : ""}`}
//       >
//         <div
//           className={`${styles.infoRow} ${isEditing ? styles.editModeRow : ""}`}
//         >
//           <span className={styles.infoLabel}>Card Name</span>
//           <div>
//             <input
//               type="email"
//               disabled={!isEditing}
//               value="amiliafox2727127@gmail.com"
//               className={`${styles.infoValue} ${
//                 isEditing ? styles.editModeInput : ""
//               }`}
//             />
//           </div>
//         </div>

//         <div
//           className={`${styles.infoRow} ${isEditing ? styles.editModeRow : ""}`}
//         >
//           <span className={styles.infoLabel}>Name on the card</span>
//           <div>
//             <input
//               type="phone"
//               disabled={!isEditing}
//               value="Personal"
//               className={`${styles.infoValue} ${
//                 isEditing ? styles.editModeInput : ""
//               }`}
//             />
//           </div>
//         </div>

//         <div
//           className={`${styles.infoRow} ${isEditing ? styles.editModeRow : ""}`}
//         >
//           <span className={styles.infoLabel}>Expiry date</span>
//           <div>
//             <input
//               type="phone"
//               disabled={!isEditing}
//               value="(GMT+6:OO) "
//               className={`${styles.infoValue} ${
//                 isEditing ? styles.editModeInput : ""
//               }`}
//             />
//           </div>
//         </div>

//         <div
//           className={`${styles.infoRow} ${isEditing ? styles.editModeRow : ""}`}
//         >
//           <span className={styles.infoLabel}>Expiry date</span>
//           <div>
//             <input
//               type="phone"
//               disabled={!isEditing}
//               value="(GMT+6:OO) "
//               className={`${styles.infoValue} ${
//                 isEditing ? styles.editModeInput : ""
//               }`}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;

"use client";

import { useState } from "react";
import styles from "./payment.module.css";
import Image from "next/image";

const Payment = ({ title = "Credit Card", cards = [], methods = [] }) => {
  const [showInputs, setShowInputs] = useState(false);

  const handleAddNewCard = () => {
    setShowInputs(!showInputs);
  };

  return (
    <div className={styles.paymentMethodsContainer}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h6 className={styles.title}>{title}</h6>
          <span className={styles.subtitle}>Current Payment Method</span>
        </div>

        <button className="ic_common_primary_btn" onClick={handleAddNewCard}>
          {showInputs ? "CANCEL" : "ADD NEW CARD"}
        </button>
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

      {/* Input Fields (appear after clicking ADD NEW CARD) */}

      {showInputs && (
        <div>
          <button className="ic_common_primary_btn .ic_text_end">
            Save Card
          </button>
          <div
            // className={`${styles.infoGrid} ${
            //   isEditing ? styles.editModeGrid : ""
            // }`}
            className={`${styles.infoGrid} 
            }`}
          >
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Card Name</span>
              <div>
                <input
                  type="email"
                  placeholder="Enter card name"
                  className={styles.infoValue}
                />
              </div>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Name on the card</span>
              <div>
                <input
                  type="text"
                  placeholder="Enter name on card"
                  className={styles.infoValue}
                />
              </div>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Expiry date</span>
              <div>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className={styles.infoValue}
                />
              </div>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>CVV</span>
              <div>
                <input
                  type="text"
                  placeholder="Enter CVV"
                  className={styles.infoValue}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
