
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
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";


const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { useRecordWebcam } from 'react-record-webcam';
import { useParams } from "next/navigation";
import { useDownloadMyCertificateMutation, useGetMyCertificateUrlQuery } from "@/redux/features/student/certificate/certificateApi";

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
  const [viewUuid, setViewUuid] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  // console.log('enrollUuid', enrollUuid)
  //fetch progress data api
  const {
    data:examProgressData,
    isSuccess,
    isLoading,
    error,
    isError,
    refetch,
    isFetching
  } = useGetExamProgressQuery({enrollUuid}, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true
  });

  //View Certificate
  const {
    data: viewData,
    isSuccess: viewIsSuccess,
    isLoading: viewIsLoading,
    isFetching: viewIsFetching,
    refetch: viewRefetch,
    isError: viewIsError,
    error: viewError
  } = useGetMyCertificateUrlQuery({ uuid: viewUuid }, { skip: !viewUuid });

  //download my certificate
  const [downloadMyCertificate,
    { isLoading: downloadIsLoading,
      isSuccess: downloadIsSuccess,
      isError: downloadIsError,
      error: downloadError }] = useDownloadMyCertificateMutation();

  const {
    clearAllRecordings,
  } = useRecordWebcam();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setViewUuid(null);
    setIsModalOpen(false);
  };

  const [isClient, setIsClient] = useState(false);

  //View Certificate response effect
  useEffect(()=>{

    if(viewIsSuccess && viewData){
      setFileUrl(viewData?.url);

      setIsModalOpen(true);
    }

  }, [viewIsSuccess, viewData]);
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
      setAttempts(examProgressData?.data?.attempt);
      setPercentile(examProgressData?.data?.percentile);
    }
    if(isError){
      toastError(error?.data?.message ||"Error fetching exam progress data");
      console.error("Error fetching exam progress data:", error);
    }
  },[isSuccess, examProgressData, isError, error])



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

  console.log('certificateUuid', viewUuid);
  return (
      <div>
        <div className={styles.ic_section_wrapper}>
          <div className={`${styles.ic_heading_containr} mb-24`}>
            <h1 className="ic_text_36 fw_600">Track your progress</h1>
            <button
                onClick={() => {
                  const uuid = examProgressData?.data?.student_certificate?.uuid;
                  setViewUuid(uuid);

                  setTimeout(() => {
                    viewRefetch(); // safe after state updates
                  }, 300);
                }}
                className="ic_common_primary_btn"
            >
              See certificate
              {
                viewIsLoading || viewIsFetching ? <Spin indicator={antIcon} /> : null
              }
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
            fileUrl={fileUrl}
            isError={viewIsError}
            certificateNumber={examProgressData?.data?.student_certificate?.certificate_number}
            onDownload={()=>{
              downloadMyCertificate(examProgressData?.data?.student_certificate?.uuid)

            }}
            downloadIsLoading={downloadIsLoading}
            certificateUuid={viewUuid}
        />
      </div>
  );
};

export default SkillChart;

