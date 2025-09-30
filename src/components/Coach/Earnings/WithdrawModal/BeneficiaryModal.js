import React from "react";
import styles from "./withdraw.module.css";
import { Modal } from "antd";

const BeneficiaryModal = ({ open, onCancel }) => {
  return (
    <Modal
      title="Add Beneficiary"
      open={open}
      onCancel={onCancel}
      footer={null}
      style={{ maxWidth: "90vw" }}
      width={800}
    >
      <div className={styles.ic_content_wrapper}>
        {/* Balance */}
        <div className={styles.ic_balance_wrapper}>
          <h2 className={styles.ic_balance_title}>Available Balance</h2>
          <p className={styles.ic_balance_amount}>$0.00</p>
        </div>

        <div className={styles.ic_form_container}>
          {/* Amount */}
          <div className={styles.ic_form_group}>
            <label className={styles.ic_label}>Beneficiary name*</label>
            <input
              type="number"
              placeholder="Beneficiary name"
              className={styles.ic_input}
            />
          </div>

          {/* Beneficiary */}
          <div className={styles.ic_form_group}>
            <label className={styles.ic_label}>Type*</label>
            <select className={styles.ic_input}>
              <option value="">Card</option>
              <option value="bank1">Bank Account 1</option>
              <option value="bank2">Bank Account 2</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className={styles.ic_form_group}>
            <label className={styles.ic_label}>Card number*</label>
            <input
              type="number"
              placeholder="1121 2233 3353 5565"
              className={styles.ic_input}
            />
          </div>

          <div className={styles.ic_form_group}>
            <label className={styles.ic_label}>Card Holder Name*</label>
            <input
              type="text"
              placeholder="your name"
              className={styles.ic_input}
            />
          </div>

          <div className={styles.ic_form_group}>
            <label className={styles.ic_label}>Month*</label>
            <input
              type="text"
              placeholder="Select month"
              className={styles.ic_input}
            />
          </div>

          <div className={styles.ic_form_group}>
            <label className={styles.ic_label}>Year*</label>
            <input
              type="text"
              placeholder="Select year"
              className={styles.ic_input}
            />
          </div>
        </div>

        {/* Button */}
        <div className={styles.ic_button_wrapper}>
          <button className="ic_btn">Add</button>
        </div>
      </div>
    </Modal>
  );
};

export default BeneficiaryModal;
