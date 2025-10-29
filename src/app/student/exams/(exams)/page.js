'use client';

import React, { useState, useEffect } from "react";
import ExamCard from "@/components/Student/Exams/Exam/ExamCard";
import { useGetMyExamsQuery } from "@/redux/features/student/exam/examApi";
import ExamCardGridSkeleton from "@/components/Student/Exams/Exam/Skeleton/ExamCardGridSkeleton";
import NotDataFound from "@/components/Empty/NotDataFound";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRecordWebcam } from 'react-record-webcam';

const Exam = () => {
   const {
      clearAllRecordings,
    } = useRecordWebcam();

  const [params, setParams] = useState({
    page: Number(process.env.NEXT_PUBLIC_CURRENT_PAGE) || 1,
    per_page: 9,
    type: "upcoming",
  });

  const [models, setModels] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  //fetch api
  const {
    data,
    isSuccess,
    isLoading,
    error,
    refetch,
    isFetching
  } = useGetMyExamsQuery(params,{
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });


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

   useEffect(() => {
  
    const clearRecordings = async () => {
      await clearAllRecordings()
    }
    clearRecordings();
  }, []);

  // console.log("Exams Data:", models);

  return (
    <div >
       {isLoading && params.page === 1 ? (

          <ExamCardGridSkeleton />
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
            loader={<ExamCardGridSkeleton />}
            endMessage={
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                {models.length > 0 && <b>No more upcoming exams available</b>}
              </p>
            }

          >
            {
              models.length > 0 ? (
                 <div className="examsGrid">
                  {
                    models.map((enrollExam) => {
                      return (
                        <ExamCard key={enrollExam.id} enrollExam={enrollExam} type="upcoming" />
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

    </div>
  );
};

export default Exam;
