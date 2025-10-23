import React from "react";
import { TbCircleDashed } from "react-icons/tb";
import styles from "./overview.module.css";

const IcOverviewCard = ({ metric }) => {
  return (
    <div className={styles.metricCard}>
      <div className={styles.metricHeader}>
        <div className={`${styles.metricIcon} `}>
          <TbCircleDashed size={18} />
        </div>
        <span className={styles.metricLabel}>{metric.label}</span>
      </div>
      <div className={styles.metricValue}>{metric.value}</div>
      <div className={`${styles.metricChange}`}>
        <span>{metric.change}</span> {metric.period}
      </div>
    </div>
  );
};

export default IcOverviewCard;
