'use client';

import React, { useState, useEffect } from "react";
import ExamCard from "@/components/Student/Exams/Exam/ExamCard";
import { useGetMyExamsQuery } from "@/redux/features/student/exam/examApi";
import ExamCardGridSkeleton from "@/components/Student/Exams/Exam/Skeleton/ExamCardGridSkeleton";
import NotDataFound from "@/components/Empty/NotDataFound";
import InfiniteScroll from "react-infinite-scroll-component";

const Exam = () => {
  const [params, setParams] = useState({
    page: Number(process.env.NEXT_PUBLIC_CURRENT_PAGE) || 1,
    per_page: 9,
  });

  const [models, setModels] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  
  const filteredExams = [
    {
      id: "1",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264846",
      attempts: 3,
      time: "10:00 AM EST",
      date: "22 Nov 2024",
      status: "upcoming",
      image: "/exam-study-image.png",
    },
    {
      id: "2",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264846",
      attempts: 3,
      time: "10:00 AM EST",
      date: "22 Nov 2024",
      status: "upcoming",
      image: "/exam-study-image.png",
    },
    {
      id: "3",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264846",
      attempts: 3,
      time: "10:00 AM EST",
      date: "22 Nov 2024",
      status: "upcoming",
      image: "/exam-study-image.png",
    },
    {
      id: "4",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264847",
      attempts: 2,
      time: "2:00 PM EST",
      date: "25 Nov 2024",
      status: "suggested",
      image: "/exam-study-image.png",
    },
    {
      id: "5",
      title: "Lorem Ipsum dolar asmeit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis venenatis magna. Aenean mattis id lacus at accumsan. Vestibulum non malesuada e",
      examId: "8264848",
      attempts: 1,
      time: "11:00 AM EST",
      date: "15 Nov 2024",
      status: "completed",
      image: "/exam-study-image.png",
    },
  ];

  
  //fetch api
  const { 
    data,
    isSuccess, 
    isLoading, 
    error, 
    refetch,
    isFetching 
  } = useGetMyExamsQuery(params);

  
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

  console.log("Exams Data:", models);
  
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
            loader={<p className="text-center">Loading more...</p>}
            endMessage={
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                {models.length > 0 && <b>No more upcoming exams available</b>}
              </p>
            }
            
          >
            <div className="examsGrid">
              {models.length > 0
                ? models.map((exam) => {
                    return (
                       <ExamCard key={exam.id} exam={exam} />
                    );
                  })
                : !isLoading && (
                    <NotDataFound message="No upcoming exam available at the moment." />
                  )}
            </div>
          </InfiniteScroll>
        )}
      {/* {filteredExams.map((exam) => (
        <ExamCard key={exam.id} exam={exam} />
      ))} */}
    </div>
  );
};

export default Exam;
