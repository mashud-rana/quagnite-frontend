"use client";

import React, { useState } from "react";
import styles from "./AvailableForm.module.css";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const AvailableForm = () => {
  const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const [isAvailable, setIsAvailable] = useState(true);
  const [isSubscriptionEnabled, setIsSubscriptionEnabled] = useState(true);
  const [hourlyRate, setHourlyRate] = useState("100");
  const [schedule, setSchedule] = useState(
    days.map((day) => ({
      day,
      isEnabled: day !== "Tuesday",
      timeSlots: [{ id: "1", time: "09:00 AM - 05:00 PM" }],
    }))
  );

  const handleAddTimeSlot = (dayIndex) => {
    const newSchedule = [...schedule];
    const newId = String(newSchedule[dayIndex].timeSlots.length + 1);
    newSchedule[dayIndex].timeSlots.push({ id: newId, time: "" });
    setSchedule(newSchedule);
  };

  const handleToggleDay = (dayIndex) => {
    const newSchedule = [...schedule];
    newSchedule[dayIndex].isEnabled = !newSchedule[dayIndex].isEnabled;
    setSchedule(newSchedule);
  };

  const handleTimeSlotChange = (dayIndex, slotId, value) => {
    const newSchedule = [...schedule];
    const slotIndex = newSchedule[dayIndex].timeSlots.findIndex(
      (slot) => slot.id === slotId
    );
    if (slotIndex !== -1) {
      newSchedule[dayIndex].timeSlots[slotIndex].time = value;
    }
    setSchedule(newSchedule);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      isAvailable,
      isSubscriptionEnabled,
      hourlyRate,
      schedule,
    });
    alert("Instructor availability saved successfully!");
  };
  return (
    <div>
      <div>
        {/* <div className={styles.header}>
          <Link href="/" className={styles.backButton}>
            <FiArrowLeft size={20} />
            Back
          </Link>
          <h1 className={styles.title}>Instructor Availability</h1>
        </div> */}

        <form onSubmit={handleSubmit}>
          {/* Top Section */}
          <div className={styles.topSection}>
            <div className={styles.questionGroup}>
              <label className={styles.question}>
                Are you available for coaching?
              </label>
              <div className={styles.buttonGroup}>
                <button
                  type="button"
                  className={`${styles.btn} ${
                    isAvailable ? styles.btnActive : ""
                  }`}
                  onClick={() => setIsAvailable(true)}
                >
                  YES
                </button>
                <button
                  type="button"
                  className={`${styles.btn} ${
                    !isAvailable ? styles.btnActive : ""
                  }`}
                  onClick={() => setIsAvailable(false)}
                >
                  NO
                </button>
              </div>
            </div>

            <div className={styles.questionGroup}>
              <label className={styles.question}>
                Is the Subscription Enable?
              </label>
              <div className={styles.buttonGroup}>
                <button
                  type="button"
                  className={`${styles.btn} ${
                    isSubscriptionEnabled ? styles.btnActive : ""
                  }`}
                  onClick={() => setIsSubscriptionEnabled(true)}
                >
                  YES
                </button>
                <button
                  type="button"
                  className={`${styles.btn} ${
                    !isSubscriptionEnabled ? styles.btnActive : ""
                  }`}
                  onClick={() => setIsSubscriptionEnabled(false)}
                >
                  NO
                </button>
              </div>
            </div>

            <div className={styles.rateGroup}>
              <label className={styles.question}>Select Hourly Rate</label>
              <div className={styles.ic_flex}>
                <input
                  type="text"
                  value={`$${hourlyRate}`}
                  onChange={(e) =>
                    setHourlyRate(e.target.value.replace("$", ""))
                  }
                  className={styles.rateInput}
                  placeholder="$100"
                />

                <button type="submit" className={styles.submitBtn}>
                  SUBMIT
                </button>
              </div>
            </div>
          </div>

          {/* Schedule Section */}
          <div className={styles.scheduleSection}>
            <h2 className={styles.scheduleTitle}>Recurring Schedule</h2>

            <div className={styles.scheduleGrid}>
              {schedule.map((daySchedule, dayIndex) => (
                <div key={daySchedule.day} className={styles.dayRow}>
                  <div className={styles.dayLabel}>{daySchedule.day}</div>

                  {/* <div className={styles.dayContent}>
                    <div className={styles.timeSlots}>
                      {daySchedule.timeSlots.map((slot) => (
                        <input
                          key={slot.id}
                          type="text"
                          value={slot.time}
                          onChange={(e) =>
                            handleTimeSlotChange(
                              dayIndex,
                              slot.id,
                              e.target.value
                            )
                          }
                          className={styles.timeInput}
                          placeholder="09:00 AM - 05:00 PM"
                        />
                      ))}
                    </div>
                  </div> */}

                  <div className={styles.toggleContainer}>
                    <button
                      type="button"
                      className={styles.addSlotBtn}
                      onClick={() => handleAddTimeSlot(dayIndex)}
                    >
                      ADD TIME SLOT +
                    </button>
                    <div className={styles.ic_toggole_btn}>
                      <label className={styles.toggleLabel}>
                        {daySchedule.isEnabled ? "DAY ON" : "DAY OFF"}
                      </label>
                      <button
                        type="button"
                        className={`${styles.toggle} ${
                          daySchedule.isEnabled
                            ? styles.toggleOn
                            : styles.toggleOff
                        }`}
                        onClick={() => handleToggleDay(dayIndex)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AvailableForm;
