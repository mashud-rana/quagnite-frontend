"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./skillchart.module.css";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SkillChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const chartOptions = {
    chart: {
      type: "line",
      height: 280,
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    colors: ["#FF8C42", "#4CAF50", "#2196F3"],
    stroke: {
      curve: "smooth",
      width: 3,
    },
    grid: {
      show: true,
      borderColor: "#e0e0e0",
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: ["0-10th", "20-39th", "40-50th", "60-70th", "80-100th"],
      axisBorder: {
        show: true,
        color: "#333",
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#666",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 300,
      tickAmount: 5,
      title: {
        text: "Skill Level",
        rotate: -90,
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#666",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
      labels: {
        style: {
          colors: "#666",
          fontSize: "12px",
        },
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "center",
      offsetY: -10,
      labels: {
        colors: "#666",
      },
      markers: {
        width: 12,
        height: 12,
        radius: 6,
      },
    },
    tooltip: {
      enabled: true,
      theme: "light",
    },
    markers: {
      size: 6,
      colors: ["#FF8C42", "#4CAF50", "#2196F3"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 8,
      },
    },
  };

  const chartSeries = [
    {
      name: "Novice",
      data: [65, 85, 120, 180, 250],
    },
    {
      name: "Emerging",
      data: [45, 75, 110, 160, 220],
    },
    {
      name: "Average",
      data: [25, 55, 95, 140, 200],
    },
  ];

  if (!isClient) {
    return <div className={styles.chartContainer}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.textContent}>
          <p className={styles.performanceText}>
            Last time, you did better than 7% of your peers.
          </p>
          <p className={styles.questionText}>Where do you stand now?</p>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.retakeButton}>RETAKE NOW</button>
          <button className={styles.checkButton}>CHECK YOUR ANSWERS</button>
        </div>
        <p className={styles.chancesText}>2 of 3 chances remaining</p>
      </div>

      <div className={styles.chartSection}>
        <div className={styles.chartHeader}>
          <p className={styles.chartDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className={styles.legendContainer}>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.novice}`}></span>
              <span className={styles.legendText}>Novice</span>
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.emerging}`}></span>
              <span className={styles.legendText}>Emerging</span>
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.average}`}></span>
              <span className={styles.legendText}>Average</span>
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.aboveAvg}`}></span>
              <span className={styles.legendText}>Above Avg</span>
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.expert}`}></span>
              <span className={styles.legendText}>Expert</span>
            </div>
          </div>
        </div>
        <div className={styles.chartContainer}>
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height={280}
            width="100%"
          />
        </div>
      </div>

      <div className={styles.nextSection}>
        <h3 className={styles.nextTitle}>Next, we recommend:</h3>
      </div>
    </div>
  );
};

export default SkillChart;
