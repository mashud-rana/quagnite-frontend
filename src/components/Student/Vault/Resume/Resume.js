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
import {useDownloadResumeMutation, useGetMyResumesQuery, useDeleteResumeMutation} from "@/redux/features/student/resume/resumeApi";
import SectionSpinner from "@/components/Spinner/SectionSpinner";
import NotDataFound from "@/components/Empty/NotDataFound";
import InfiniteScroll from "react-infinite-scroll-component";
import { resume } from '@/assets/images/all/resume.png';
import { antIcon, confirmDelete, toastError, toastSuccess } from "@/utils/helper";
import { Modal, Spin } from "antd";
import { MdOutlineDownload } from "react-icons/md";
import { DeleteOutlined } from '@ant-design/icons';
import { useDeleteBeneficiaryMutation } from "@/redux/features/common/beneficiary/beneficiaryApi";
import ResumePreviewModal from "./ResumePreviewModal";

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
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const [params, setParams] = useState({
    page: Number(process.env.NEXT_PUBLIC_CURRENT_PAGE) || 1,
    per_page: 8,
  });

  const [models, setModels] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
   const [selectUuid, setSelectUuid] = useState(null);
   const [selectedModel, setSelectedModel] = useState(null);
  

  //fetch api
  const { 
    data,
    isSuccess, 
    isLoading, 
    error, 
    refetch,
    isFetching 
  } = useGetMyResumesQuery(params);

   //download my resume
  const [ downloadResume, 
    { isLoading: downloadIsLoading, 
      isSuccess: downloadIsSuccess,
      isError: downloadIsError,
      error: downloadError }] = useDownloadResumeMutation();
  //Delete resume mutation
  const [deleteResume, 
    { 
      data:deleteData,
      isLoading: deleteIsLoading, 
      isSuccess: deleteIsSuccess,
      isError: deleteIsError,
      error: deleteError }] = useDeleteResumeMutation();

  //delete handler
  const deleteHandler = async (uuid) => {
      if(!uuid) return;
      confirmDelete().then(async (confirmed) => {
        if (confirmed) {
          setSelectUuid(uuid);
          await deleteResume({ uuid }).unwrap();
        }
      });
    }

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

  const showPdfModal = (uuid) => {
    setIsPdfModalOpen(true);
    setSelectedModel(models.find((item) => item.uuid === uuid));
  };

  const handlePdfModalCancel = () => {
    setIsPdfModalOpen(false);
    setSelectedModel(null);
   
  };

  //handle delete success/error
  useEffect(()=>{
    if(deleteIsSuccess){
      toastSuccess(deleteData?.message || "Resume deleted successfully");
      setModels((prev)=> prev.filter((item)=> item.uuid !== selectUuid));
      setSelectUuid(null);
    }
    if (deleteIsError) {
        toastError(
          deleteError?.data?.message || "Resume delete failed. Please try again."
        );
      }
  },[deleteIsSuccess, deleteIsError,deleteData, deleteError]);

  // Handle download success/error
  useEffect(() => {
    if (downloadIsSuccess) {
      // Handle successful download
      setSelectUuid(null);
    }
  }, [downloadIsSuccess]);
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
  console.log('selectedModel', selectedModel);

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
                        {/* Delete Button */}
                       {
                        <button
                          onClick={() => deleteHandler(resume?.uuid)}
                          className={styles.deleteButton}
                          title="Delete Resume"
                        >
                          {
                            selectUuid === resume?.uuid && deleteIsLoading ? <Spin indicator={antIcon} /> : <DeleteOutlined className={styles.deleteIcon} />
                          }
                          
                        </button>
                       }
                        
                      </div>

                      <hr className={styles.ic_hr} />

                      {/* Action Buttons */}
                      <div className={styles.actionButtons}>
                        <button
                          className={`${styles.ic_btn}`}
                          onClick={() => {
                            downloadResume(resume?.uuid);
                            setSelectUuid(resume?.uuid);
                          }}
                        >
                          
                          {selectUuid === resume?.uuid && downloadIsLoading ? (
                            <Spin indicator={antIcon} />
                          ) : (
                            "DOWNLOAD"
                          )}
                        </button>
                        {/* <PhotoProvider maskOpacity={0.7}>
                          <PhotoView src={img.src}> */}
                            <button className={`${styles.ic_btn}`} onClick={()=> showPdfModal(resume?.uuid)}>VIEW</button>
                          {/* </PhotoView>
                        </PhotoProvider> */}
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



    <ResumePreviewModal
      open={isPdfModalOpen}
      onClose={handlePdfModalCancel}
      resume={selectedModel}
      onDownload={downloadResume}
      isDownloading={selectUuid === selectedModel?.uuid && downloadIsLoading}
    />
        
    </div>
  );
};

export default Resume;
