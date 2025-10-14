import React from "react";
import styles from "./overview.module.css";

const Event = () => {
  const events = [
    {
      title: "Teacher Training Workshop",
      date: "30-Mar-2025",
      time: "4:00 PM",
    },
    {
      title: "Teacher Training Workshop",
      date: "30-Mar-2025",
      time: "4:00 PM",
    },
    {
      title: "Teacher Training Workshop",
      date: "30-Mar-2025",
      time: "4:00 PM",
    },
  ];
  return (
    <div className={styles.tableSection}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>Event</h3>
        <button className={styles.ic_btn}>View ALL</button>
      </div>

      <div className={styles.eventList}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventItem}>
            <div className={styles.eventTitle}>{event.title}</div>
            <span className={styles.eventDate}>{event.date} | </span>
            <span className={styles.eventTime}>{event.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
