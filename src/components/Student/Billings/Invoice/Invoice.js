// "use client";

// import {
//   FaDownload,
//   FaEye,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import styles from "./invoice.module.css";

// const Invoice = () => {
//   // Pagination placeholders
//   const currentPage = 1;
//   const totalPages = 3;

//   // Mock invoices row (replace later with API data)
//   const invoices = [
//     {
//       id: "1",
//       date: "09/02/2025",
//       title: "Personal membership",
//       amount: 200,
//       invoiceNo: "s76ad8axasd",
//       ihh: "z67nm45opq1",
//       ih: "z67nm45opq1",
//     },
//     {
//       id: "2",
//       date: "12/02/2025",
//       title: "Premium membership",
//       amount: 350,
//       invoiceNo: "b45r89qwzxc",
//       ihh: "z67nm45opq1",
//       ih: "z67nm45opq1",
//     },
//     {
//       id: "3",
//       date: "15/02/2025",
//       title: "Business plan",
//       amount: 500,
//       invoiceNo: "m12y67hjklp",
//       ihh: "z67nm45opq1",
//       ih: "z67nm45opq1",
//     },
//     {
//       id: "4",
//       date: "20/02/2025",
//       title: "Personal membership",
//       amount: 200,
//       invoiceNo: "q89we34rtzv",
//       ihh: "z67nm45opq1",
//       ih: "z67nm45opq1",
//     },
//     {
//       id: "5",
//       date: "22/02/2025",
//       title: "Enterprise plan",
//       amount: 1000,
//       invoiceNo: "z67nm45opq1",
//       ihh: "z67nm45opq1",
//       ih: "z67nm45opq1",
//     },
//   ];

//   return (
//     <div className={styles.invoicesContainer}>
//       {/* Scrollable Table Wrapper */}

//       <div className={styles.tableContainer}>
//         <table className={styles.invoicesTable}>
//           <thead>
//             <tr className={styles.tableHeader}>
//               <th className={styles.headerCell}>Date</th>
//               <th className={styles.headerCell}>Title / Plan</th>
//               <th className={styles.headerCell}>Amount</th>
//               <th className={styles.headerCell}>Invoice No.</th>
//               <th className={styles.headerCell}>Action</th>
//               <th className={styles.headerCell}>Acthjhjhjh</th>
//               <th className={styles.headerCell}>Acthjhjhjh</th>
//               <th className={styles.headerCell}>Acthjhjhjh</th>
//               <th className={styles.headerCell}>Acthjhjhjh</th>
//             </tr>
//           </thead>
//           <tbody>
//             {invoices.map((invoice) => (
//               <tr key={invoice.id} className={styles.tableRow}>
//                 <td className={styles.tableCell}>{invoice.date}</td>
//                 <td className={styles.tableCell}>{invoice.title}</td>
//                 <td className={styles.tableCell}>${invoice.amount}</td>
//                 <td className={styles.tableCell}>{invoice.invoiceNo}</td>
//                 <td className={styles.tableCell}>
//                   <div className={styles.actionButtons}>
//                     <button
//                       className={styles.actionButton}
//                       title="Download Invoice"
//                     >
//                       <FaDownload className={styles.actionIcon} />
//                     </button>
//                     <button
//                       className={styles.actionButton}
//                       title="View Invoice"
//                     >
//                       <FaEye className={styles.actionIcon} />
//                     </button>
//                   </div>
//                 </td>
//                 <td className={styles.tableCell}>{invoice.ihh}</td>
//                 <td className={styles.tableCell}>{invoice.ih}</td>
//                 <td className={styles.tableCell}>{invoice.ih}</td>
//                 <td className={styles.tableCell}>{invoice.ih}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className={styles.pagination}>
//         <button className={styles.navButton} disabled={currentPage === 1}>
//           <FaChevronLeft className={styles.navIcon} />
//         </button>

//         <div className={styles.pageNumbers}>
//           {[...Array(totalPages)].map((_, i) => (
//             <button
//               key={i + 1}
//               className={`${styles.pageButton} ${
//                 currentPage === i + 1 ? styles.activePage : ""
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>

//         <div className={styles.paginationInfo}>
//           <span className={styles.paginationText}>
//             ({currentPage} of {totalPages})
//           </span>
//         </div>

//         <button
//           className={styles.navButton}
//           disabled={currentPage === totalPages}
//         >
//           <FaChevronRight className={styles.navIcon} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Invoice;

"use client";

import React, { useState } from "react";
import { Table } from "antd";

const InvoiceTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Column width define করা হয়েছে যাতে scrollbar আসতে পারে
  const columns = [
    { title: "ID", dataIndex: "id", key: "id", width: 100 },
    { title: "Date", dataIndex: "date", key: "date", width: 150 },
    { title: "Title / Plan", dataIndex: "title", key: "title", width: 250 },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 150,
      render: (text) => `$${text}`,
    },
    {
      title: "Invoice No",
      dataIndex: "invoiceNo",
      key: "invoiceNo",
      width: 200,
    },
    { title: "Customer", dataIndex: "customer", key: "customer", width: 200 },
    { title: "Status", dataIndex: "status", key: "status", width: 150 },
    { title: "Extra Info", dataIndex: "extra", key: "extra", width: 250 },
  ];

  // Data sample
  const data = [
    {
      key: "1",
      id: "1",
      date: "2025-08-01",
      title: "Personal Membership",
      amount: 200,
      invoiceNo: "INV-1001",
      customer: "John Doe",
      status: "Paid",
      extra: "Note A",
    },
    {
      key: "2",
      id: "2",
      date: "2025-08-05",
      title: "Premium Package",
      amount: 350,
      invoiceNo: "INV-1002",
      customer: "Jane Smith",
      status: "Pending",
      extra: "Note B",
    },
    {
      key: "3",
      id: "3",
      date: "2025-08-10",
      title: "Basic Subscription",
      amount: 100,
      invoiceNo: "INV-1003",
      customer: "Alice Lee",
      status: "Paid",
      extra: "Note C",
    },
    {
      key: "4",
      id: "4",
      date: "2025-08-12",
      title: "Gold Package",
      amount: 500,
      invoiceNo: "INV-1004",
      customer: "Bob Brown",
      status: "Cancelled",
      extra: "Note D",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={{
          current: currentPage,
          pageSize: 2,
          total: data.length,
          onChange: (page) => setCurrentPage(page),
        }}
        scroll={{ x: 1200 }} // scrollbar আসবে যদি screen কম হয়
      />
    </div>
  );
};

export default InvoiceTable;
