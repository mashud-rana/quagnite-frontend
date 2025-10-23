"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./skillchart.module.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import CourseCard from "../../Courses/Course/CourseCard";
import DownloadResumeModal from "../../Vault/DownloadResumeModal/DownloadResumeModal";
import ProgressInfo from "./ProgressInfo";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SkillChart = ({attempt ,examUuid, enrollUuid}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const chartOptions = {
    chart: {
      type: "line",
      stacked: false,
      toolbar: { show: false },
    },
    stroke: {
      width: [0, 3],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "80%",
        borderRadius: 0,
      },
    },
    colors: ["#FF8C42", "#4CAF50"],
    xaxis: {
      categories: ["0-10th", "20-39th", "40-50th", "60-70th", "80-100th"],
      tickPlacement: "on",
    },
    yaxis: {
      min: 0,
      max: 300,
      tickAmount: 5,
      title: {
        text: "Skill Level",
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    legend: {
      position: "top",
    },
  };

  const chartSeries = [
    {
      name: "Novice (Column)",
      type: "column",
      data: [240, 180, 220, 140, 300],
    },
    {
      name: "Emerging (Line)",
      type: "line",
      data: [0, 100, 90, 180, 300],
    },
  ];

  if (!isClient) return <div>Loading...</div>;

  const mockCourses = [
    {
      id: "1",
      title: "Blockchain Mastery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada ex. Ut ultrices nulla ut tortor ullamcorper fermentum. Praesent sagittis enim sit amet ligula pharetra mattis id facilisis purus. Sed eu ante semper, varius velit vitae, sagittis turpis. Donec et posuere lectus. Praesent dignissim vulputate ipsum a molestie. Quisque ullamcorper non ligula ut tempus. Nullam tempor consectetur ultricies.",
      level: "Beginner",
      duration: "1h 10m",
      date: "22 Nov 2024",
      rating: 4,
      students: 210,
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
  ];

  return (
    <div>
      <div className={styles.ic_section_wrapper}>
        <div className={`${styles.ic_heading_containr} mb-24`}>
          <h1 className="ic_text_36 fw_600">Track your progress</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="ic_common_primary_btn"
          >
            See certificate
          </button>
        </div>

        <div className={styles.ic_grid}>
          {/* <div className={styles.ic_text_container}>
            <p className={styles.performanceText}>
              Last time, you did better than 7% of your peers.
            </p>
            <p>Where do you stand now?</p>

            <div className={styles.buttonGroup}>
              <button className="ic_common_primary_btn">RETAKE NOW</button>
              <button className="ic_common_primary_btn">
                CHECK YOUR ANSWERS
              </button>
            </div>
            <p className={styles.chancesText}>2 of 3 chances remaining</p>
          </div> */}
          <ProgressInfo attempt={attempt}  />

          <div className={styles.chartContainer}>
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="line"
              height={350}
            />
          </div>
        </div>
      </div>

      <h5 className={styles.ic_heading}>Next, we recommend:</h5>

      <div className="ic_courses_list">
        {mockCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <DownloadResumeModal
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      />
    </div>
  );
};

export default SkillChart;
