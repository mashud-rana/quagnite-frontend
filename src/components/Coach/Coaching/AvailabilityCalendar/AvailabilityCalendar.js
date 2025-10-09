"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // base styles
import styles from "./calender.module.css";

export default function AvailabilityCalendar({
  selectedDates = [
    new Date(2025, 0, 1),
    new Date(2025, 0, 4),
    new Date(2025, 0, 6),
    new Date(2025, 0, 10),
    new Date(2025, 0, 15),
    new Date(2025, 0, 18),
    new Date(2025, 0, 19),
    new Date(2025, 0, 20),
    new Date(2025, 0, 22),
    new Date(2025, 0, 24),
    new Date(2025, 0, 28),
    new Date(2025, 0, 30),
  ],
  onDateSelect,
}) {
  const [availableDates, setAvailableDates] = useState(selectedDates);

  const handleDateClick = (date) => {
    const dateExists = availableDates.some(
      (d) => d.toDateString() === date.toDateString()
    );

    let newDates;
    if (dateExists) {
      newDates = availableDates.filter(
        (d) => d.toDateString() !== date.toDateString()
      );
    } else {
      newDates = [...availableDates, date];
    }

    setAvailableDates(newDates);
    if (onDateSelect) onDateSelect(date);
  };

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        onClickDay={handleDateClick}
        tileClassName={({ date, view }) => {
          if (
            view === "month" &&
            availableDates.some((d) => d.toDateString() === date.toDateString())
          ) {
            return styles.availableDate;
          }
          return styles.calendarDay;
        }}
        prevLabel="‹"
        nextLabel="›"
        locale="en-US"
      />
    </div>
  );
}
