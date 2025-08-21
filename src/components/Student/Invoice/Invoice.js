"use client";

import {
  FaDownload,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import styles from "./invoice.module.css";

const Invoice = () => {
  // Pagination placeholders
  const currentPage = 1;
  const totalPages = 3;

  // Mock invoices row (replace later with API data)
  const invoices = [
    {
      id: "1",
      date: "09/02/2025",
      title: "Personal membership",
      amount: 200,
      invoiceNo: "s76ad8axasd",
    },
    {
      id: "2",
      date: "12/02/2025",
      title: "Premium membership",
      amount: 350,
      invoiceNo: "b45r89qwzxc",
    },
    {
      id: "3",
      date: "15/02/2025",
      title: "Business plan",
      amount: 500,
      invoiceNo: "m12y67hjklp",
    },
    {
      id: "4",
      date: "20/02/2025",
      title: "Personal membership",
      amount: 200,
      invoiceNo: "q89we34rtzv",
    },
    {
      id: "5",
      date: "22/02/2025",
      title: "Enterprise plan",
      amount: 1000,
      invoiceNo: "z67nm45opq1",
    },
  ];

  return (
    <div className={styles.invoicesContainer}>
      {/* Scrollable Table Wrapper */}
      <div className={styles.scrollWrapper}>
        <div className={styles.tableContainer}>
          <table className={styles.invoicesTable}>
            <thead>
              <tr className={styles.tableHeader}>
                <th className={styles.headerCell}>Date</th>
                <th className={styles.headerCell}>Title / Plan</th>
                <th className={styles.headerCell}>Amount</th>
                <th className={styles.headerCell}>Invoice No.</th>
                <th className={styles.headerCell}>Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>{invoice.date}</td>
                  <td className={styles.tableCell}>{invoice.title}</td>
                  <td className={styles.tableCell}>${invoice.amount}</td>
                  <td className={styles.tableCell}>{invoice.invoiceNo}</td>
                  <td className={styles.tableCell}>
                    <div className={styles.actionButtons}>
                      <button
                        className={styles.actionButton}
                        title="Download Invoice"
                      >
                        <FaDownload className={styles.actionIcon} />
                      </button>
                      <button
                        className={styles.actionButton}
                        title="View Invoice"
                      >
                        <FaEye className={styles.actionIcon} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button className={styles.navButton} disabled={currentPage === 1}>
          <FaChevronLeft className={styles.navIcon} />
        </button>

        <div className={styles.pageNumbers}>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={`${styles.pageButton} ${
                currentPage === i + 1 ? styles.activePage : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div className={styles.paginationInfo}>
          <span className={styles.paginationText}>
            ({currentPage} of {totalPages})
          </span>
        </div>

        <button
          className={styles.navButton}
          disabled={currentPage === totalPages}
        >
          <FaChevronRight className={styles.navIcon} />
        </button>
      </div>
    </div>
  );
};

export default Invoice;
