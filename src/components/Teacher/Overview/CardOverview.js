import IcTable from "@/components/Share/IcTable/IcTable";
import React from "react";
import { TbCircleDashed } from "react-icons/tb";
import styles from "./overview.module.css";
import IcOverviewCard from "./IcOverviewCard";

const CardOverview = () => {
  const metrics = [
    {
      icon: "blue",
      label: "Total Student",
      value: "100",
      change: "+5%",
      changeType: "positive",
      period: "This week",
    },
    {
      icon: "green",
      label: "Total Courses",
      value: "35",
      change: "+2",
      changeType: "positive",
      period: "This week",
    },
    {
      icon: "orange",
      label: "Completion Rate",
      value: "78%",
      change: "+1.2%",
      changeType: "positive",
      period: "This week",
    },
    {
      icon: "purple",
      label: "Issued Certificate",
      value: "50",
      change: "0",
      changeType: "neutral",
      period: "This week",
    },
    {
      icon: "blue",
      label: "Drop-off rates",
      value: "20%",
      change: "+9%",
      changeType: "negative",
      period: "This week",
    },
    {
      icon: "green",
      label: "Inactive students",
      value: "8%",
      change: "+2%",
      changeType: "negative",
      period: "This week",
    },
    {
      icon: "orange",
      label: "Declining course ratings",
      value: "78%",
      change: "+1.5%",
      changeType: "negative",
      period: "This week",
    },
  ];

  const courseData = [
    {
      name: "Data Science",
      enrolled: 20,
      completion: "30%",
      videos: 10,
      rating: 4.5,
      certificate: "30%",
    },
    {
      name: "Digital Marketing 101",
      enrolled: 10,
      completion: "98%",
      videos: 40,
      rating: 4.8,
      certificate: "98%",
    },
  ];

  return (
    <div className={styles.overview}>
      <h2 className={styles.sectionTitle}>Overview</h2>
      <div>
        <div className={styles.metricsGridFour}>
          {metrics.slice(0, 4).map((metric, index) => (
            <IcOverviewCard key={index} metric={metric} />
          ))}
        </div>

        <div className={styles.metricsGridThree}>
          {metrics.slice(4).map((metric, index) => (
            <IcOverviewCard key={index} metric={metric} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardOverview;
