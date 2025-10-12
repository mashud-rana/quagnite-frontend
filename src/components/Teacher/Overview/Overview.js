"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./overview.module.css";
import { IoArrowDown } from "react-icons/io5";
import { TbCircleDashed } from "react-icons/tb";
import IcTable from "@/components/Share/IcTable/IcTable";
import { MdEdit } from "react-icons/md";
import { Space } from "antd";
import { GoEye } from "react-icons/go";
import CardOverview from "./CardOverview";
import TabTable from "./TabTable";
import UpcomingTask from "./UpcomingTask";
import ChartSection from "./ChartSection";
import Management from "./Management";
import Event from "./Event";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Overview = () => {
  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <div className={styles.actionButtons}>
          <button className="ic_common_primary_btn">
            CREATE NEW ASSIGNMENT
          </button>
          <button className="ic_common_primary_btn">SEND BULK MESSAGE</button>
          <button className="ic_common_primary_btn">UPLOAD LECTURE</button>
          <button className="ic_common_primary_btn">ADD LIVE CLASS</button>
        </div>
      </div>

      <div className={styles.ic_overview_wrapper}>
        <div className={styles.contentGrid}>
          <CardOverview />
          <TabTable />
          <UpcomingTask />
        </div>

        {/* Content Grid */}
        <div>
          <div className={styles.contentGrid}>
            <ChartSection />
            <Management />

            <Event />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
