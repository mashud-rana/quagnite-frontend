'use client';

import React,{useState, useEffect} from "react";
import Image from "next/image";
import img from "@/assets/images/all/exams.png";
import styles from "./completed.module.css";
import { GoEye } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";
import { TbEye } from "react-icons/tb";
import NotDataFound from "@/components/Empty/NotDataFound";

import InfiniteScroll from "react-infinite-scroll-component";
import { truncateHtml } from "@/utils/helper";
import ExamCompletionCardsSkeleton from "@/components/Student/Exams/Exam/Skeleton/ExamCompletionCardsSkeleton";
import { useGetExamResultsMutation, useGetMyExamsQuery } from "@/redux/features/student/exam/examApi";
import { useDownloadMyCertificateMutation } from "@/redux/features/student/certificate/certificateApi";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";
import ExamResultModal from "@/components/Student/Exams/Exam/Modal/ExamResultModal";

const CompletedPage = () => {

  const [params, setParams] = useState({
    page: Number(process.env.NEXT_PUBLIC_CURRENT_PAGE) || 1,
    per_page: 9,
    type: "complete",
  });

  const [models, setModels] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUuid, setSelectedUuid] = useState(null);
  const [enrollUuid, setEnrollUuid] = useState(null);
  const [examResults, setExamResults] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //fetch api
  const {
    data,
    isSuccess,
    isLoading,
    error,
    refetch,
    isFetching
  } = useGetMyExamsQuery(params);

  const [downloadMyCertificate, { isLoading: downloadIsLoading,isSuccess: downloadIsSuccess, isError: downloadIsError, error: downloadError }] = useDownloadMyCertificateMutation();
  
  const [getExamResults, 
    { 
      data: resultsData,
      isLoading: resultsLoading, 
      isSuccess: resultsSuccess, 
      isError: resultsError, 
      error: resultsErrorData }] = useGetExamResultsMutation();

  //scroll fetch
  const fetchMoreData = () => {
    console.log("Fetching next page...");
    setParams((prev) => {
      if (prev.page < totalPages) {
        return { ...prev, page: prev.page + 1 };
      }
      console.log("Reached last page");
      return prev;
    });
  };

  //close modal
   const handleCancel = () => {
    setExamResults(null);
    setIsModalOpen(false);
  };
  //get exam results
  useEffect(()=>{
    if(resultsSuccess && resultsData){
      setExamResults(resultsData?.data?.data);
      setIsModalOpen(true);
    }
  },[resultsSuccess,resultsData])
  //set models
  useEffect(() => {
    if (isSuccess && data?.data?.data) {
      const newItems = data.data.data;

      if (params.page === 1) {
        setModels(newItems);
      } else {
        setModels((prev) => {
          // avoid duplicates
          const ids = new Set(prev.map((a) => a.id));
          const uniqueNew = newItems.filter((a) => !ids.has(a.id));
          return [...prev, ...uniqueNew];
        });
      }

      setTotalPages(data?.data?.meta?.last_page || 1);
    }
  }, [isSuccess, data, params.page]);

  //download certificate response 
  useEffect(()=>{
    if(downloadIsSuccess){
      toastSuccess("Certificate download started");
      setSelectedUuid(null);
    }
    if(downloadIsError){
      const errMsg = downloadError?.data?.message || "Failed to download certificate. Please try again.";
      toastError(errMsg);
      setSelectedUuid(null);
    }
  },[downloadIsSuccess, downloadIsError, downloadError])

  return (
    <div>
    
      
       {isLoading && params.page === 1 ? (
      
          <ExamCompletionCardsSkeleton />
        ) : error ? (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <NotDataFound message="Error loading exams. Please try again" />
            <button onClick={() => refetch()} className="ic_common_primary_btn">
              Retry
            </button>
          </div>
        ) : (
          <InfiniteScroll
            dataLength={models.length}
            next={fetchMoreData}
            hasMore={params.page < totalPages}
            loader={<ExamCompletionCardsSkeleton />}
            endMessage={
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                {models.length > 0 && <b>No more completed exams available</b>}
              </p>
            }

          >
            {
              models.length > 0 ? (
                <div className="examsGrid">
                  {
                    models.map((enrollExam) => {
                      return (
                           <div key={enrollExam.id} className={styles.examCard}>
                            {/* Card Image */}
                            <div className={styles.cardImageContainer}>
                              <Image src={enrollExam?.exam?.image_url} alt={enrollExam?.exam?.title} className={styles.cardImage}
                               width={200} height={100}
                              />
                            </div>

                            {/* Card Content */}
                            <div>
                              <div className={styles.ic_text_container}>
                                <h4 className={styles.examTitle}>{enrollExam?.exam?.title}</h4>
                                <span className={styles.statusBadge}>Completed exam</span>
                              </div>

                              <p dangerouslySetInnerHTML={{ __html: truncateHtml(
                                          enrollExam?.exam?.description || "",
                                          250
                                        ) }}></p>

                              <div className={styles.ic_wrapper}>
                                <div className={styles.examDetailsRow}>
                                  <span className={styles.examDetail}>
                                    <strong>Exam Id</strong> - {enrollExam?.id}
                                  </span>
                                  <span className={styles.examDetail}>
                                    <strong> No of Attempts</strong> -  {enrollExam?.attempt}
                                  </span>

                                  <span className={styles.examDetail}>
                                    <strong> Certificate</strong> -{enrollExam?.studentCertificate?.human_diff}
                                  </span>
                                </div>

                                <div className={styles.ic_icon_wrapper}>
                                  <div className={styles.ic_icon_container}
                                  onClick={()=>{
                                    getExamResults(enrollExam?.uuid);
                                    setEnrollUuid(enrollExam?.uuid)
                                  }}
                                  >
                                    <TbEye />
                                     {
                                      resultsLoading && enrollUuid === enrollExam?.uuid ? (
                                        <Spin indicator={antIcon} />
                                      ) : null
                                    }
                                  </div>

                                  <div className={styles.ic_icon_container} 
                                  onClick={()=>{
                                    downloadMyCertificate( enrollExam?.studentCertificate?.uuid);
                                    setSelectedUuid(enrollExam?.studentCertificate?.uuid);
                                  }}
                                  >
                                    {
                                      downloadIsLoading && selectedUuid === enrollExam?.studentCertificate?.uuid ? (
                                        <Spin indicator={antIcon} />
                                      ) : null
                                    }
                                    <MdOutlineFileDownload />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      );
                    })
                  }
                </div>
              ) : (
                !isLoading && (
                    <NotDataFound message="No upcoming exam available at the moment." />
                )
              )
            }
          
          </InfiniteScroll>
        )}

        <ExamResultModal
          open={isModalOpen}
          onCancel={handleCancel}
          isError={resultsError}
          examResults={examResults}
        />
    </div>
  );
};

export default CompletedPage;
