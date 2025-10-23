import CardOverview from "@/components/Teacher/Overview/CardOverview";
import ChartSection from "@/components/Teacher/Overview/ChartSection";
import Event from "@/components/Teacher/Overview/Event";
import Management from "@/components/Teacher/Overview/Management";
import TabTable from "@/components/Teacher/Overview/TabTable";
import UpcomingTask from "@/components/Teacher/Overview/UpcomingTask";
import React from "react";
import styles from "./overview.module.css";
import IcOverviewCard from "@/components/Teacher/Overview/IcOverviewCard";
import CoachEvent from "@/components/Coach/Overview/CoachEvent";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CoachOverview = () => {
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
  return (
    <div>
      <div className={styles.ic_overview_wrapper}>
        <div className={styles.contentGrid}>
          {/* <CardOverview /> */}
          <div className={styles.overview}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div>
              <div className={styles.metricsGridFour}>
                {metrics.slice(0, 4).map((metric, index) => (
                  <IcOverviewCard key={index} metric={metric} />
                ))}
              </div>
            </div>
          </div>

          <UpcomingTask />
          <CoachEvent />
        </div>

        {/* Content Grid */}
        <div>
          <div className={styles.contentGrid}>
            <ChartSection />
            <Management />
            {/* <Event /> */}

            <div className={styles.ic_schedule_container}>
              <div className={styles.eventItem}>
                <div className={styles.ic_title}>Next Schedule Session</div>
                <span className={styles.ic_date}>AI Fundamentals | </span>
                <span className={styles.ic_date2}>12 March 2025, 10:00 AM</span>
              </div>

              <button className={styles.ic_btn}>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachOverview;

// ..
