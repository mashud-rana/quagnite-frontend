"use client";

import React from "react";
import { IoArrowDown } from "react-icons/io5";
import styles from "./overview.module.css";
import dynamic from "next/dynamic";

const ChartSection = () => {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const chartOptions = {
    chart: {
      type: "area",
      height: 200,
      toolbar: { show: false },
      sparkline: { enabled: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.1,
      },
    },
    colors: ["#f97316"],
    xaxis: {
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          fontSize: "12px",
          colors: "#6b7280",
        },
      },
    },
    // ✅ Y-axis settings for 0%, 50%, 100%
    yaxis: {
      min: 0,
      max: 200,
      tickAmount: 4, // 0%, 50%, 100% = 2 intervals
      labels: {
        formatter: (val) => `${val}%`,
        style: {
          fontSize: "12px",
          colors: "#6b7280",
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#f3f4f6",
      strokeDashArray: 4,
    },
    dataLabels: { enabled: false },
    tooltip: { enabled: true },
  };

  const chartSeries = [
    {
      name: "Hours",
      data: [30, 45, 60, 80, 70, 90, 85],
    },
  ];

  return (
    <div className={styles.tableSection}>
      <div className={styles.chartHeader}>
        <h3 className={styles.sectionTitle}>Hours Spent</h3>
        <button className={styles.ic_chart_btn}>
          LAST WEEK
          <IoArrowDown />
        </button>
      </div>
      <div style={{ height: "200px" }}>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="area"
          height="100%"
        />
      </div>
    </div>
  );
};

export default ChartSection;
