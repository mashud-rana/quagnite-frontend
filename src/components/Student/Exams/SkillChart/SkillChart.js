"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./skillchart.module.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import CourseCard from "../../Courses/Course/CourseCard";
import DownloadResumeModal from "../../Vault/DownloadResumeModal/DownloadResumeModal";
import ProgressInfo from "./ProgressInfo";
import {useGetExamProgressQuery} from "@/redux/features/student/exam/examApi";
import ProgressTrackingSkeleton from "./Skeleton/ProgressTrackingSkeleton";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { useRecordWebcam } from 'react-record-webcam';
import { useParams } from "next/navigation";

const SkillChart = () => {
  const { examUuid, enrollUuid } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [skillLevels , setSkillLevels] = useState([]);
  const [yaxisData, setYaxisData] = useState({
    min:0,
    max:300
  });
  const [attempts, setAttempts] = useState(0);
  const [percentile, setPercentile] = useState(0);

  //fetch api
  const { 
    data:examProgressData,
    isSuccess, 
    isLoading, 
    error, 
    isError,
    refetch,
    isFetching 
  } = useGetExamProgressQuery({enrollUuid},{
    refetchOnMountOrArgChange: true,
  });

  const {
      clearAllRecordings,
  } = useRecordWebcam();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isClient, setIsClient] = useState(false);

  //set data after fetch
  useEffect(()=>{
    if(isSuccess && examProgressData){
      const categoriesData = examProgressData?.data?.chart.map(item => item.label);
      const skillLevelsData = examProgressData?.data?.chart.map(item => item.skill);
      setCategories(categoriesData);
      setSkillLevels(skillLevelsData);
      setYaxisData({
        min: examProgressData?.data?.yaxis_min || 0,
        max: examProgressData?.data?.yaxis_max || 300,
      })
      setAttempts(examProgressData?.data?.attempt || 0);
      setPercentile(examProgressData?.data?.percentile || 0);
    }
    if(isError){
      toastError(error?.data?.message ||"Error fetching exam progress data");
      console.error("Error fetching exam progress data:", error);
    }
  },[isSuccess, examProgressData, isError, error])

  // console.log("Exam Progress Data:", examProgressData);
  // console.log("Exam Progress categories:", categories);
  // console.log("Exam Progress skill levels:", skillLevels);

  useEffect(() => {
    setIsClient(true);
    //webcam cleanup
    return () =>{
      clearAllRecordings();
    }
  }, []);

 
  const chartOptions = {
    chart: { type: "line", stacked: false, toolbar: { show: false } },
    stroke: { width: [3], curve: "smooth" },
    colors: ["#00C49F"],
    xaxis: {
      categories,
      tickPlacement: "on",
    },
    yaxis: {
      min: yaxisData.min,
      max: yaxisData.max,
      title: { text: "Skill Level" },
    },
    markers: {
      size: 6,
      colors: ["#fff"],
      strokeColors: "#00C49F",
      strokeWidth: 3,
    },
    tooltip: {
      y: {
        formatter: (val) => `Skill IQ: ${val}`,
      },
    },
  };

  const chartSeries = [
    {
      name: "Skill Level",
      type: "column",
      data: skillLevels,
    },
  ];


  

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

  if(isLoading || isFetching){
    return <ProgressTrackingSkeleton />;
  }

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

          <ProgressInfo attempt={attempts} percentile={percentile} />

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

      {/* <h5 className={styles.ic_heading}>Next, we recommend:</h5>

      <div className="ic_courses_list">
        {mockCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div> */}

      <DownloadResumeModal
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      />
    </div>
  );
};

export default SkillChart;
