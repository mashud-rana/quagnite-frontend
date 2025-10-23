"use client";

import IcTable from "@/components/Share/IcTable/IcTable";
import React, { useState } from "react";
import styles from "./overview.module.css";
import { Space } from "antd";

const TabTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Course Management");

  const columns2 = [
    {
      title: "Course Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Enrolled Students",
      dataIndex: "enrolled",
      key: "enrolled",
    },
    {
      title: "Completion Rate",
      dataIndex: "completion",
      key: "completion",
    },
    {
      title: "Total Videos",
      dataIndex: "videos",
      key: "videos",
    },
    {
      title: "Avg Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Issued Certificate",
      dataIndex: "certificate",
      key: "certificate",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space>
          <div className={styles.ic_action_conatiner}>
            <button className={styles.actionBtn}>Edit</button>/
            <button className={styles.actionBtn}>View</button>
          </div>
        </Space>
      ),
    },
  ];

  const data2 = [
    {
      key: "1",
      name: "React Fundamentals",
      enrolled: 120,
      completion: "85%",
      videos: 24,
      rating: "4.8",
      certificate: 95,
    },
    {
      key: "2",
      name: "MERN Stack Development",
      enrolled: 80,
      completion: "70%",
      videos: 40,
      rating: "4.7",
      certificate: 60,
    },
    {
      key: "3",
      name: "Next.js Advanced",
      enrolled: 95,
      completion: "90%",
      videos: 30,
      rating: "4.9",
      certificate: 88,
    },
    {
      key: "4",
      name: "JavaScript Bootcamp",
      enrolled: 150,
      completion: "75%",
      videos: 45,
      rating: "4.6",
      certificate: 110,
    },
  ];

  const handlePageChange2 = (page) => {
    setCurrentPage2(page);
  };

  const [currentPage2, setCurrentPage2] = useState(1);
  return (
    <div className="ic_overflow_auto">
      <div className={styles.ic_wrapper}>
        <div className={styles.tableSection}>
          <div className={styles.tableTabs}>
            <div className={styles.ic_tabs}>
              <div
                className={`${styles.tableTab} ${
                  activeTab === "Course Management" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("Course Management")}
              >
                Course Management
              </div>
              <div
                className={`${styles.tableTab} ${
                  activeTab === "Bootcamp" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("Bootcamp")}
              >
                Bootcamp
              </div>
              <div
                className={`${styles.tableTab} ${
                  activeTab === "E-Book" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("E-Book")}
              >
                E-Book
              </div>
            </div>
            <button className={styles.ic_btn}>VIEW ALL</button>
          </div>
          <IcTable
            columns={columns2}
            data={data2}
            total={data2.length}
            currentPage={currentPage2}
            pageSize={2}
            handlePageChange={handlePageChange2}
          />
        </div>
      </div>
    </div>
  );
};

export default TabTable;



// "use client";

// import React, { useState } from "react";
// import { Table, Space } from "antd";
// import "antd/dist/reset.css";
// import styles from "./overview.module.css"; // your module CSS file

// const TabTable = () => {
//   const [currentPage2, setCurrentPage2] = useState(1);

//   const columns2 = [
//     {
//       title: "Course Name",
//       dataIndex: "name",
//       key: "name",
//       width: 200,
//     },
//     {
//       title: "Enrolled Students",
//       dataIndex: "enrolled",
//       key: "enrolled",
//       width: 160,
//     },
//     {
//       title: "Completion Rate",
//       dataIndex: "completion",
//       key: "completion",
//       width: 150,
//     },
//     {
//       title: "Total Videos",
//       dataIndex: "videos",
//       key: "videos",
//       width: 130,
//     },
//     {
//       title: "Avg Rating",
//       dataIndex: "rating",
//       key: "rating",
//       width: 130,
//     },
//     {
//       title: "Issued Certificate",
//       dataIndex: "certificate",
//       key: "certificate",
//       width: 160,
//     },
//     {
//       title: "Action",
//       key: "action",
//       width: 180,
//       render: () => (
//         <Space>
//           <div className={styles.ic_action_conatiner}>
//             <button className={`${styles.actionBtn} ${styles.editBtn}`}>
//               Edit
//             </button>
//             <span className={styles.divider}>/</span>
//             <button className={`${styles.actionBtn} ${styles.viewBtn}`}>
//               View
//             </button>
//           </div>
//         </Space>
//       ),
//     },
//   ];

//   const data2 = [
//     {
//       key: "1",
//       name: "React Fundamentals",
//       enrolled: 120,
//       completion: "85%",
//       videos: 24,
//       rating: "4.8",
//       certificate: 95,
//     },
//     {
//       key: "2",
//       name: "MERN Stack Development",
//       enrolled: 80,
//       completion: "70%",
//       videos: 40,
//       rating: "4.7",
//       certificate: 60,
//     },
//     {
//       key: "3",
//       name: "Next.js Advanced",
//       enrolled: 95,
//       completion: "90%",
//       videos: 30,
//       rating: "4.9",
//       certificate: 88,
//     },
//     {
//       key: "4",
//       name: "JavaScript Bootcamp",
//       enrolled: 150,
//       completion: "75%",
//       videos: 45,
//       rating: "4.6",
//       certificate: 110,
//     },
//   ];

//   const handlePageChange2 = (page) => {
//     setCurrentPage2(page);
//   };

//   return (
//     <div className={styles.tableWrapper}>
//       <div className={styles.tableContainer}>
//         <Table
//           columns={columns2}
//           dataSource={data2}
//           pagination={{
//             current: currentPage2,
//             pageSize: 3,
//             total: data2.length,
//             onChange: handlePageChange2,
//           }}
//           scroll={{ x: 900 }}
//           bordered
//           size="middle"
//           style={{ minWidth: "900px" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default TabTable;
