"use client";
import { FaArrowLeft, FaShare, FaUpload } from "react-icons/fa";
import styles from "./resume.module.css";
import img from "@/assets/images/all/resume2.png";
import Image from "next/image";
import Link from "next/link";
import ResumeModal from "./ResumeModal";
import React, { useState , useEffect} from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import {useGetMyResumesQuery} from "@/redux/features/student/resume/resumeApi";
import SectionSpinner from "@/components/Spinner/SectionSpinner";
import NotDataFound from "@/components/Empty/NotDataFound";
import InfiniteScroll from "react-infinite-scroll-component";
import { resume } from '@/assets/images/all/resume.png';

const resumes = [
  {
    id: "1",
    title: "Amilia fox resume 2024",
    createdDate: "2024-01-15",
  },
  {
    id: "2",
    title: "Amilia fox resume 2024",
    createdDate: "2024-01-14",
  },
  {
    id: "3",
    title: "Amilia fox resume 2024",
    createdDate: "2024-01-13",
  },
  {
    id: "4",
    title: "Amilia fox resume 2024",
    createdDate: "2024-01-12",
  },
];

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [params, setParams] = useState({
    page: Number(process.env.NEXT_PUBLIC_CURRENT_PAGE) || 1,
    per_page: 8,
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
  } = useGetMyResumesQuery(params);

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


  console.log("resumes models", models);

  return (
    <div>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Link href="#" className={styles.ic_back_button} aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">My Resume</h1>
        </div>
        <button className={styles.ic_btn}>upload resume</button>
      </div>

      {/* Resumes Grid */}
      <div>
        {isLoading && params.page === 1 ? (
        <SectionSpinner message="Loading for resumes.." />
      ) : error ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <NotDataFound message="Error loading resumes. Please try again" />
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
              {models.length > 0 && <b>No more resume available</b>}
            </p>
          }
          
        >
          <div className={styles.resumesGrid}>
            {models.length > 0
              ? models.map((resume) => {
                 
                  return (
                    <div key={resume.id} className={styles.resumeCard}>
                      {/* Card Header */}
                      <div className={styles.cardHeader}>
                        <h3 className={styles.resumeTitle}>{resume?.title}</h3>
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className={styles.shareButton}
                          title="Share Resume"
                        >
                          <FaShare className={styles.shareIcon} />
                        </button>
                      </div>

                      {/* Resume Preview */}
                      <div className={styles.resumePreview}>
                        <Image
                          src={resume?.thumbnail}
                          alt={resume?.title}
                          className={styles.previewImage}
                          width={300}
                          height={400}
                        />
                      </div>

                      <hr className={styles.ic_hr} />

                      {/* Action Buttons */}
                      <div className={styles.actionButtons}>
                        <button className={`${styles.ic_btn}`}>DOWNLOAD</button>
                        {/* <button className={`${styles.ic_btn}`}>VIEW</button> */}
                        <PhotoProvider maskOpacity={0.7}>
                          <PhotoView src={img.src}>
                            <button className={`${styles.ic_btn}`}>VIEW</button>
                          </PhotoView>
                        </PhotoProvider>
                      </div>
                    </div>
                  );
                })
              : !isLoading && (
                  <NotDataFound message="No resumes available at the moment." />
                )}
          </div>
        </InfiniteScroll>
      )}
      </div>

      <ResumeModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Resume;
