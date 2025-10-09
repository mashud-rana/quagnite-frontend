import { Modal } from "antd";
import React from "react";
import styles from "./withdraw.module.css";

const WithdrawModal = ({ open, onCancel }) => {
  return (
    <Modal
      title="Request a Withdraw"
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
            <label className={styles.ic_label}>Amount*</label>
            <input
              type="number"
              placeholder="Enter amount"
              className={styles.ic_input}
            />
          </div>

          {/* Beneficiary */}
          <div className={styles.ic_form_group}>
            <label className={styles.ic_label}>Beneficiary*</label>
            <select className={styles.ic_input}>
              <option value="">Select beneficiary</option>
              <option value="bank1">Bank Account 1</option>
              <option value="bank2">Bank Account 2</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
        </div>

        {/* Button */}
        <div className={styles.ic_button_wrapper}>
          <button className="ic_btn">MAKE WITHDRAW</button>
        </div>
      </div>
    </Modal>
  );
};

export default WithdrawModal;
