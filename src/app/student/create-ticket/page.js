"use client";

import React, { useState } from "react";
import styles from "./ticket.module.css";

const CreateTicketPage = () => {
  const [issue, setIssue] = useState("");
  const [remarks, setRemarks] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      issue,
      remarks,
      date,
      fileName: file ? file.name : "No file uploaded",
    });

    alert("✅ Ticket submitted successfully!");
  };

  return (
    <div>
      <div>
        <h2 className={styles.title}>Create New Ticket</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Select Issue */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Select Issue:</label>
            <select
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              required
              className={styles.select}
            >
              <option value="">Choose an issue</option>
              <option value="Login Problem">Login Problem</option>
              <option value="Payment Issue">Payment Issue</option>
              <option value="System Error">System Error</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Your Remarks */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Your Remarks:</label>
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Describe your issue..."
              required
              className={styles.textarea}
            ></textarea>
          </div>

          {/* Select Date */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Select Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className={styles.input}
            />
          </div>

          {/* Upload Files */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Upload Files:</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className={styles.fileInput}
            />
          </div>

          {/* Submit Button */}
          <div className="ic_text_end">
            <button type="submit" className="ic_common_primary_btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTicketPage;
