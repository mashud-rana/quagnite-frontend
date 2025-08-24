"use client";

import { FaPlus } from "react-icons/fa";
import styles from "./payment.module.css";
import img from "@/assets/images/all/american.png";
import img2 from "@/assets/images/all/mastercard.png";
import img3 from "@/assets/images/all/discover.png";
import Image from "next/image";

const Payment = () => {
  const datas = [
    {
      id: 1,
      img: img,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
  ];
  return (
    <div className={styles.paymentMethodsContainer}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2 className={styles.title}>Credit card</h2>
          <span className={styles.subtitle}>Current Payment Method</span>
        </div>
        <button className={styles.addCardButton}>
          <FaPlus className={styles.addIcon} />
          ADD NEW CARD
        </button>
      </div>

      {/* Credit Cards (Static, no logic) */}
      <div className={styles.creditCardsSection}>
        <div className={styles.cardsGrid}>
          {/* Card 1 (selected) */}
          {datas.map((data) => (
            <div key={data.id} className={`${styles.creditCard} `}>
              <div className={styles.cardHeader}>
                <Image
                  className={styles.ic_img}
                  src={data.img}
                  alt=""
                  width={200}
                  height={10}
                />
              </div>
              <div className={styles.cardDetails}>
                <div className={styles.cardNumber}>
                  <span className={styles.cardLabel}>Card Number</span>
                  <span className={styles.cardValue}>•••• •••• •••• 5623</span>
                </div>
                <div className={styles.cardExpiry}>
                  <span className={styles.expiryLabel}>Expiry - 09/32</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Payment Methods (Static) */}
      <div className={styles.availableMethodsSection}>
        <h3 className={styles.sectionTitle}>Available Payment Methods</h3>
        <div className={styles.methodsList}>
          {/* PayPal */}
          <div className={styles.paymentMethod}>
            <div className={styles.methodIcon}>
              <div className={`${styles.methodLogo} ${styles.paypal}`}>
                PayPal
              </div>
            </div>
            <div className={styles.methodDetails}>
              <span className={styles.methodDescription}>
                Pay Using PayPal Payment Services
              </span>
            </div>
          </div>

          {/* Apple Pay */}
          <div className={styles.paymentMethod}>
            <div className={styles.methodIcon}>
              <div className={`${styles.methodLogo} ${styles.applepay}`}>
                Pay
              </div>
            </div>
            <div className={styles.methodDetails}>
              <span className={styles.methodDescription}>
                Pay Using Apple pay Payment Services
              </span>
            </div>
          </div>

          {/* Stripe */}
          <div className={styles.paymentMethod}>
            <div className={styles.methodIcon}>
              <div className={`${styles.methodLogo} ${styles.stripe}`}>
                Stripe
              </div>
            </div>
            <div className={styles.methodDetails}>
              <span className={styles.methodDescription}>
                Pay Using Stripe Payment Services
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
