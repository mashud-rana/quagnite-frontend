"use client";

import { FaArrowLeft, FaPlus } from "react-icons/fa";
import styles from "./courses.module.css";
import Image from "next/image";
import Link from "next/link";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  useCourseCreateMutation,
  useCourseListQuery,
  useDeleteCourseMutation
} from "@/redux/features/teacher/course/courseApi";
import { useEffect, useState } from "react";
import { Skeleton, Card } from "antd";
import CourseSkeleton from '@/components/Teacher/Courses/Skeleton/CourseSkeleton'
import { useRouter } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";
import {confirmAction} from "@/utils/helper";

const TeacherDashboardPage = () => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(Number(process.env.NEXT_PUBLIC_CURRENT_PAGE));
  const [pageSize, setPageSize] = useState(9);
  const router = useRouter();


  // API Call to fetch course list
  const { data: courseListData,
    isLoading,
    isError,
    error,
      refetch,
  } = useCourseListQuery({
    page: page,
    limit: pageSize,
  });


  const [courseDelete, {
    isLoading: isDeletingLoading,
    isError: isErrorDeleting,
    error: deleteError,
    data: courseDeleteData,
  }] = useDeleteCourseMutation();


  const deleteCourseById = (id) => {
    confirmAction(courseDelete, id);
  }

  useEffect(() => {
      if(courseDeleteData?.success){
        setPage(1);
        refetch();
      }
  }, [isDeletingLoading, deleteError, courseDeleteData]);

  useEffect(() => {
    if (courseListData?.data?.data?.length > 0) {
      // setCourses([...courseListData.data.data]);
      setCourses((prev) =>
          page === 1 ? courseListData?.data?.data : [...prev, ...courseListData?.data?.data]
      );
    } else {
      setCourses([]);
    }
  }, [courseListData, isLoading]);


  const fetchMoreData = () => {
    console.log('jksjdjdf')
    if (courseListData?.data?.meta?.current_page < courseListData?.data?.meta?.last_page) {
      setPage((prev) => prev + 1);
    }
  };


  // console.log('courses', courseListData?.data?.meta?.current_page);

  return (
      <div>
        <div className="mb-24 ic_flex">
          <div className="ic_title_section">
            <Link href="#" className="ic_back_button" aria-label="Go back">
              <FaArrowLeft />
            </Link>
            <h1 className="ic_text_36">Courses</h1>
          </div>

          <Link href="/teacher/course/create-course" className="ic_icn_btn">
            <FaPlus />
            create course
          </Link>
        </div>

        <div>
          {isLoading ? (
                  <div className={styles.coachesGrid}>
                      <CourseSkeleton
                        loop={6}
                      />
                  </div>
          ) : courses.length === 0 ? (
              <p>No courses found.</p>
          ) :
              <InfiniteScroll
                      dataLength={courses.length}
                      next={fetchMoreData}
                      hasMore={courseListData?.data?.meta?.current_page < courseListData?.data?.meta?.last_page}
                      loader={
                        <div className={styles.coachesGrid}>
                          <CourseSkeleton
                              loop={6}
                          />
                        </div>}
                      endMessage={<p style={{ textAlign: "center" }}>No more Courses</p>}
                  >
                    <div className={styles.coachesGrid}>
                    {courses.map((course) => (
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

export default TeacherDashboardPage;
