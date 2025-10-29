"use client";

import React,{useState, useEffect} from 'react'
import styles from "./suggested.module.css";
import img from "@/assets/images/all/exams.png";
import img2 from "@/assets/images/all/session.png";
import Image from "next/image";
import FiltersSidebar from "@/components/Student/Courses/Course/FiltersSidebar";
import ExamCard from "@/components/Student/Exams/Exam/ExamCard";
import ExamCardGridSkeleton from "@/components/Student/Exams/Exam/Skeleton/ExamCardGridSkeleton";
import NotDataFound from "@/components/Empty/NotDataFound";
import InfiniteScroll from "react-infinite-scroll-component";
import {useGetMyExamsQuery} from "@/redux/features/student/exam/examApi";
import TodayAnnouncement from './TodayAnnouncement';

const SuggestedPage = () => {

  const [params, setParams] = useState({
    page: Number(process.env.NEXT_PUBLIC_CURRENT_PAGE) || 1,
    per_page: 9,
    type: "ongoing",
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
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true
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
  
  const filterData = [
    {
      title: "Our Exams",
      options: ["All", "Core courses", "Expanded courses", "Labs"],
    },
    {
      title: "Skill level",
      options: ["Advanced", "Beginner", "Intermediate"],
    },
    {
      title: "Subject",
      options: [
        "Business Professional",
        "Creative Professional",
        "Data Professional",
        "Digital Marketer",
        "IT Ops",
        "Product Manager",
      ],
    },
  ];



  const bigCard = {
    img: img,
    title: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    buttonText: "Schedule now",
  };

  const smallCards = [
    {
      img: img2,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
      buttonText: "Schedule now",
    },
    {
      img: img2,
      title: "Lorem Ipsum Dolar Sit Amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
      buttonText: "Schedule now",
    },
  ];

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
      image: "/exams-study-image.png",
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
      image: "/exams-study-image.png",
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
      image: "/exams-study-image.png",
    },
  ];

  return (
    <div>
      <div className="ic_content_wrapper">
        <FiltersSidebar sections={filterData} />
        <div className={styles.ic_grid}>
          {/* Left Column (Big Card) */}
          <div className={styles.ic_left_column}>
            <div className={styles.ic_card}>
              <Image
                src={bigCard.img}
                alt="Big Card"
                className={styles.ic_big_image}
              />
              <p className={styles.ic_card_title}>{bigCard.title}</p>
              <p className={styles.ic_card_description}>
                {bigCard.description}
              </p>
              <div>
                <button className="ic_common_primary_btn">
                  {bigCard.buttonText}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (Small Cards) */}
          <div className={styles.ic_right_column}>
            {smallCards.map((card, index) => (
              <div key={index} className={styles.ic_card}>
                <Image
                  src={card.img}
                  alt={`Small Card ${index}`}
                  className={styles.ic_small_image}
                />
                <p className={styles.ic_card_title}>{card.title}</p>
                <p className={styles.ic_card_description}>{card.description}</p>
                <div>
                  <button className="ic_common_primary_btn">
                    {bigCard.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* whats today section card  */}
      <TodayAnnouncement />
      

      {/* next exams  */}
      <div>
        <h6 className={styles.ic_today_title}>Next Exam</h6>
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
                        {models.length > 0 && <b>No more ongoing exams available</b>}
                      </p>
                    }
        
                  >
                    {
                      models.length > 0 ? (
                         <div className="examsGrid">
                          {
                            models.map((enrollExam) => {
                              return (
                                <ExamCard key={enrollExam.id} enrollExam={enrollExam} />
                              );
                            })
                          }
                        </div>
                      ) : (
                        !isLoading && (
                            <NotDataFound message="No ongoing exam available at the moment." />
                        )
                      )
                    }
                   
                  </InfiniteScroll>
                )}
        
            </div>
        {/* <div className="examsGrid">
          {filteredExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default SuggestedPage;
