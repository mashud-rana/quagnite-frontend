"use client";
import React, { useState } from "react";
import styles from "./earning.module.css";
import WithdrawModal from "@/components/Coach/Earnings/WithdrawModal/WithdrawModal";

const Earnings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={styles.ic_btn_container}>
        <button onClick={() => setIsModalOpen(true)} className="ic_btn">
          Request a withdrawal
        </button>
        <button className="ic_btn">Add deneficiary</button>
      </div>

      <div className={styles.ic_card_grid}>
        {/* Card 1 */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Available Balance</h3>
          <p className={styles.amount}>0.00$</p>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Pending Withdrawal</h3>
          <p className={styles.amount}>0$</p>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>My Balance</h3>
          <p className={styles.amount}>0.00$</p>
        </div>
      </div>

      <WithdrawModal
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      />
    </div>
  );
};

export default Earnings;
