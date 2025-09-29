"use client";
import React, { useState } from "react";
import styles from "./earning.module.css";
import WithdrawModal from "@/components/Coach/Earnings/WithdrawModal/WithdrawModal";
import BeneficiaryModal from "@/components/Coach/Earnings/WithdrawModal/BeneficiaryModal";

const Earnings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

    const handleOk2 = () => {
    setIsModalOpen2(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  return (
    <div>
      <div className={styles.ic_btn_container}>
        <button onClick={() => setIsModalOpen(true)} className="ic_btn">
          Request a withdrawal
        </button>
        <button onClick={() => setIsModalOpen2(true)} className="ic_btn">Add deneficiary</button>
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


      <BeneficiaryModal         open={isModalOpen2}
        onCancel={handleCancel2}
        onOk={handleOk2}/>
    </div>
  );
};

export default Earnings;
