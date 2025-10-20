"use client";
import React, { useState } from "react";
import styles from "./coachevent.module.css";

const CoachEvent = () => {
  const [selectedDate, setSelectedDate] = useState(11);

  const events = [
    {
      id: 1,
      title: "AI & Machine Learning Fundamentals",
      date: "15 March 2025",
      time: "3:00PM",
    },
    {
      id: 2,
      title: "AI & Machine Learning Fundamentals",
      date: "15 March 2025",
      time: "3:00PM",
    },
  ];

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const calendarDates = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
  ];

  return (
    <div>
      <div className={styles.content}>
        {/* Events Section */}
        <div className={styles.eventsSection}>
          <div className={styles.eventsHeader}>
            <h2 className={styles.sectionTitle}>Events</h2>
            <button className={styles.ic_btn}>VIEW ALL</button>
          </div>

          <div className={styles.eventsList}>
            {events.map((event) => (
              <div key={event.id} className={styles.eventCard}>
                <div className={styles.eventContent}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventDateTime}>
                    {event.date} |{" "}
                    <span className={styles.eventTime}>{event.time}</span>
                  </p>
                </div>
                <button className={styles.expandButton}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Availability Section */}
        <div className={styles.eventsSection}>
          <div>
            <div className={styles.availabilityHeader}>
              <h2 className={styles.sectionTitle}>Availability</h2>
              <button className={styles.calendarIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="#6B8AFF"
                    strokeWidth="2"
                  />
                  <path d="M3 10H21" stroke="#6B8AFF" strokeWidth="2" />
                  <path
                    d="M8 2V6"
                    stroke="#6B8AFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 2V6"
                    stroke="#6B8AFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className={styles.ic_flex}>
              <div className={styles.calendar}>
                {/* Days of week header */}
                <div className={styles.calendarHeader}>
                  {daysOfWeek.map((day) => (
                    <div key={day} className={styles.dayLabel}>
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar dates */}
                <div className={styles.calendarGrid}>
                  {calendarDates.map((week, weekIndex) => (
                    <div key={weekIndex} className={styles.calendarWeek}>
                      {week.map((date, dateIndex) => (
                        <button
                          key={dateIndex}
                          className={`${styles.calendarDate} ${
                            date === selectedDate ? styles.selectedDate : ""
                          } ${date === null ? styles.emptyDate : ""}`}
                          onClick={() => date && setSelectedDate(date)}
                          disabled={date === null}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.availabilityStats}>
                <p className={styles.statsLabel}>Marked available for</p>

                <h5>8 Days</h5>
                <span className={styles.statsChange}>-2% this month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachEvent;
