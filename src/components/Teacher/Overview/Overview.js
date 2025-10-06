"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./overview.module.css";
import { IoArrowDown } from "react-icons/io5";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Overview = () => {
  const [activeTab, setActiveTab] = useState("Course Management");
  const [activeChatTab, setActiveChatTab] = useState("Unread");

  // Chart configuration for Hours Spent
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

  //   const chartOptions = {
  //     chart: {
  //       type: "area",
  //       height: 200,
  //       toolbar: {
  //         show: false,
  //       },
  //       sparkline: {
  //         enabled: false,
  //       },
  //     },
  //     stroke: {
  //       curve: "smooth",
  //       width: 3,
  //     },
  //     fill: {
  //       type: "gradient",
  //       gradient: {
  //         shadeIntensity: 1,
  //         opacityFrom: 0.3,
  //         opacityTo: 0.1,
  //       },
  //     },
  //     colors: ["#f97316"],
  //     xaxis: {
  //       categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  //       axisBorder: {
  //         show: false,
  //       },
  //       axisTicks: {
  //         show: false,
  //       },
  //       labels: {
  //         style: {
  //           fontSize: "12px",
  //           colors: "#6b7280",
  //         },
  //       },
  //     },
  //     yaxis: {
  //       show: false,
  //     },
  //     grid: {
  //       show: false,
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     tooltip: {
  //       enabled: true,
  //     },
  //   };

  const chartSeries = [
    {
      name: "Hours",
      data: [30, 45, 60, 80, 70, 90, 85],
    },
  ];

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

  const tasks = [
    {
      name: "Grade Student Assignments",
      course: "Web Development Bootcamp",
      dueDate: "15-Mar-2025",
      priority: "High",
    },
  ];

  const events = [
    {
      title: "Teacher Training Workshop",
      date: "30-Mar-2025 | 4:00 PM",
    },
    {
      title: "Teacher Training Workshop",
      date: "30-Mar-2025 | 4:00 PM",
    },
    {
      title: "Teacher Training Workshop",
      date: "30-Mar-2025 | 4:00 PM",
    },
  ];

  const chatMessages = [
    {
      name: "Lorem Ipsum",
      message: "What is the meaning for this ?",
      avatar: "/abstract-geometric-shapes.png",
    },
    {
      name: "Lorem Ipsum",
      message: "Hi What new project?",
      avatar: "/abstract-geometric-shapes.png",
    },
  ];
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
        <div className={styles.overview}>
          <h2 className={styles.sectionTitle}>Overview</h2>

          {/* প্রথম Row (4 cards) */}
          <div className={styles.metricsGridFour}>
            {metrics.slice(0, 4).map((metric, index) => (
              <div key={index} className={styles.metricCard}>
                <div className={styles.metricHeader}>
                  <div
                    className={`${styles.metricIcon} ${styles[metric.icon]}`}
                  >
                    ○
                  </div>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
                <div className={styles.metricValue}>{metric.value}</div>
                <div
                  className={`${styles.metricChange} ${
                    styles[metric.changeType]
                  }`}
                >
                  {metric.change} {metric.period}
                </div>
              </div>
            ))}
          </div>

          {/* দ্বিতীয় Row (3 cards) */}
          <div className={styles.metricsGridThree}>
            {metrics.slice(4).map((metric, index) => (
              <div key={index} className={styles.metricCard}>
                <div className={styles.metricHeader}>
                  <div
                    className={`${styles.metricIcon} ${styles[metric.icon]}`}
                  >
                    ○
                  </div>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
                <div className={styles.metricValue}>{metric.value}</div>
                <div
                  className={`${styles.metricChange} ${
                    styles[metric.changeType]
                  }`}
                >
                  {metric.change} {metric.period}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className={styles.contentGrid}>
          {/* Hours Spent Chart */}
          <div className={styles.chartSection}>
            <div className={styles.chartHeader}>
              <h3 className={styles.sectionTitle}>Hours Spent</h3>
              <button className="ic_icn_btn">
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

          {/* Chat Management */}
          <div className={styles.chatSection}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Chat Management</h3>
              <button className={styles.viewAllButton}>SEE ALL</button>
            </div>
            <div className={styles.chatTabs}>
              <div
                className={`${styles.chatTab} ${
                  activeChatTab === "Read" ? styles.active : ""
                }`}
                onClick={() => setActiveChatTab("Read")}
              >
                Read
              </div>
              <div
                className={`${styles.chatTab} ${
                  activeChatTab === "Unread" ? styles.active : ""
                }`}
                onClick={() => setActiveChatTab("Unread")}
              >
                Unread
              </div>
              <div
                className={`${styles.chatTab} ${
                  activeChatTab === "Pinned" ? styles.active : ""
                }`}
                onClick={() => setActiveChatTab("Pinned")}
              >
                Pinned
              </div>
            </div>
            <div>
              {chatMessages.map((message, index) => (
                <div key={index} className={styles.chatMessage}>
                  <img
                    src={message.avatar || "/placeholder.svg"}
                    alt="Avatar"
                    className={styles.avatar}
                  />
                  <div className={styles.messageContent}>
                    <div className={styles.messageName}>{message.name}</div>
                    <div className={styles.messageText}>{message.message}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Course Management Table */}
      <div className={styles.tableSection}>
        <div className={styles.tableTabs}>
          <div
            className={`${styles.tableTab} ${
              activeTab === "Course Management" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("Course Management")}
          >
            Course Management
          </div>
          <div
            className={`${styles.tableTab} ${
              activeTab === "Bootcamp" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("Bootcamp")}
          >
            Bootcamp
          </div>
          <div
            className={`${styles.tableTab} ${
              activeTab === "E-Book" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("E-Book")}
          >
            E-Book
          </div>
          <button className={styles.viewAllButton}>VIEW ALL</button>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Enrolled Students</th>
              <th>Completion Rate</th>
              <th>Total Videos</th>
              <th>Avg Rating</th>
              <th>Issued Certificate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.enrolled}</td>
                <td>{course.completion}</td>
                <td>{course.videos}</td>
                <td>{course.rating}</td>
                <td>{course.certificate}</td>
                <td>
                  <a href="#" className={styles.editLink}>
                    Edit/View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Grid */}
      <div className={styles.contentGrid}>
        {/* Upcoming Tasks */}
        <div className={styles.tasksSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Upcoming Tasks List</h3>
            <button className={styles.viewAllButton}>VIEW ALL</button>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Course/Bootcamp</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.course}</td>
                  <td>{task.dueDate}</td>
                  <td>
                    <span className={`${styles.priorityBadge} ${styles.high}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td>
                    <a href="#" className={styles.taskAction}>
                      Mark as Done
                      {/* done  */}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Events */}
        <div className={styles.eventsSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Events</h3>
            <button className={styles.viewAllButton}>VIEW ALL</button>
          </div>
          <div>
            {events.map((event, index) => (
              <div key={index} className={styles.eventItem}>
                <div className={styles.eventTitle}>{event.title}</div>
                <div className={styles.eventDate}>{event.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
