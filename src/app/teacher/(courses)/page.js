"use client";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import styles from "./courses.module.css";
import Image from "next/image";
import Link from "next/link";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCourseListQuery } from "@/redux/features/teacher/course/courseApi";
import { useEffect, useState } from "react";
import { Skeleton, Card } from "antd";
import CourseSkeleton from '@/components/Teacher/Courses/Skeleton/CourseSkeleton'
import { useRouter } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";

const TeacherDashboardPage = () => {
  const [courses, setCourses] = useState([]);
  const { data: courseListData, isLoading } = useCourseListQuery();
  const router = useRouter();


  useEffect(() => {
    if (courseListData?.data?.data?.length > 0) {
      setCourses([...courseListData.data.data]);
    } else {
      setCourses([]);
    }
  }, [courseListData, isLoading]);



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

        <div className={styles.coachesGrid}>
          {isLoading ? (
              <CourseSkeleton
                loop={6}
              />
          ) : courses.length === 0 ? (
              <p>No courses found.</p>
          ) : (

              // eslint-disable-next-line react/jsx-key
              courses.map((course) => (<InfiniteScroll
                dataLength={courses.length}
                next={() => {}}
                hasMore={false}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
                // below props only if you need pull down functionality
                refreshFunction={() => {}}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                  <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                  <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
                }
              >
                {courses.map((course) => (
                  <div key={course.id} className={styles.coachCard}>
                    <div className={styles.coachImage}>
                      <Image
                        src={course.image || "/placeholder.jpg"}
                        alt={course.title || "Course"}
                        width={400}
                        height={250}
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
                        <RiDeleteBin6Line className={styles.contactIcon} />
                      </div>
                    </div>
                  </div>
                ))}
              </InfiniteScroll>
          )))}
        </div>
      </div>
  );
};

export default TeacherDashboardPage;
