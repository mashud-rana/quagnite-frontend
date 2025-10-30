"use client";

import { FaArrowLeft, FaPlus } from "react-icons/fa";
import styles from "./bootcamp.module.css";
import Image from "next/image";
import Link from "next/link";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  useBootcampListQuery,
  useDeleteBootcampMutation,
} from "@/redux/features/teacher/bootcamp/bootcampApi";
import { useEffect, useState } from "react";
import { Skeleton, Card } from "antd";
import CourseSkeleton from '@/components/Teacher/Courses/Skeleton/CourseSkeleton'
import { useRouter } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";
import {confirmAction} from "@/utils/helper";

const BootcampsPage = () => {
  const [bootcamp, setBootcamp] = useState([]);
  const [page, setPage] = useState(Number(process.env.NEXT_PUBLIC_CURRENT_PAGE));
  const [pageSize, setPageSize] = useState(9);
  const router = useRouter();


  // API Call to fetch Bootcamp list
  const { data: bootcampListData,
    isLoading,
    isError,
    error,
    refetch,
  } = useBootcampListQuery({
    page: page,
    limit: pageSize,
  });


  const [bootcampDelete, {
    isLoading: isDeletingLoading,
    isError: isErrorDeleting,
    error: deleteError,
    data: bootcampDeleteData,
  }] = useDeleteBootcampMutation();


  const deleteCourseById = (id) => {
    confirmAction(bootcampDelete, id);
  }

  useEffect(() => {
    if(bootcampDeleteData?.success){
      setPage(1);
      refetch();
    }
  }, [isDeletingLoading, deleteError, bootcampDeleteData]);

  useEffect(() => {
    if (bootcampListData?.data?.data?.length > 0) {
      setBootcamp((prev) =>
          page === 1 ? bootcampListData?.data?.data : [...prev, ...bootcampListData?.data?.data]
      );
    } else {
      setBootcamp([]);
    }
  }, [bootcampListData, isLoading]);


  const fetchMoreData = () => {
    if (bootcampListData?.data?.meta?.current_page < bootcampListData?.data?.meta?.last_page) {
      setPage((prev) => prev + 1);
    }
  };


  // console.log('bootcamp', bootcampListData?.data?.meta?.current_page);

  return (
      <div>
        <div className="mb-24 ic_flex">
          <div className="ic_title_section">
            <Link href="#" className="ic_back_button" aria-label="Go back">
              <FaArrowLeft />
            </Link>
            <h1 className="ic_text_36">List of all Bootcamp</h1>
          </div>

          <Link href="/teacher/bootcamps/create" className="ic_icn_btn">
            <FaPlus />
            Create Bootcamp
          </Link>
        </div>

        <div>
          {isLoading ? (
              <div className={styles.coachesGrid}>
                <CourseSkeleton
                    loop={6}
                />
              </div>
          ) : bootcamp.length === 0 ? (
                  <p>No Bootcamp found.</p>
              ) :
              <InfiniteScroll
                  dataLength={bootcamp.length}
                  next={fetchMoreData}
                  hasMore={bootcampListData?.data?.meta?.current_page < bootcampListData?.data?.meta?.last_page}
                  loader={
                    <div className={styles.coachesGrid}>
                      <CourseSkeleton
                          loop={6}
                      />
                    </div>}
                  endMessage={<p style={{ textAlign: "center" }}>No more Bootcamp</p>}
              >
                <div className={styles.coachesGrid}>
                  {bootcamp.map((course) => (
                      <div key={course.id} className={styles.coachCard}>
                        <div className={styles.coachImage}>
                          <Image
                              src={course.image || "/placeholder.jpg"}
                              alt={course.title || "Course"}
                              width={400}
                              height={250}
                              style={{ maxHeight: 250,width: '100%' }}
                              unoptimized
                              className={styles.coachPhoto}
                          />
                        </div>
                        <div className={styles.coachInfo}>
                          <h3 className={styles.coachName}>{course.title}</h3>
                          <div className={styles.ic_icon_container}>
                            <BiEditAlt
                                onClick={(e) => router.push(`/teacher/course/${course?.uuid}`)}
                                className={styles.contactIcon}
                            />
                            <RiDeleteBin6Line onClick={() => deleteCourseById(course?.id)} className={styles.contactIcon} />
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              </InfiniteScroll>
          }
        </div>
      </div>
  );
};

export default BootcampsPage;
