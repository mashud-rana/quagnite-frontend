'use client';
import React from "react";
import {useSelector, useDispatch} from "react-redux";  
import CourseCard from "@/components/Student/Courses/Course/CourseCard";  
import InfiniteScroll from 'react-infinite-scroll-component';
import {setPage } from "@/redux/features/student/course/courseSlice";

const AllCourses = ({totalPages}) =>{
  const {allCourses} = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.course.page);

  const fetchMoreData = () => {
    console.log('fetchMoreData called');
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

    if (!allCourses || allCourses.length === 0) {
        return (
            <div style={{ textAlign: "center", padding: "2rem", color: "#888", width: "100%" }}>
                <h2>No Data Found</h2>
                <p>There are no courses available at the moment.</p>
            </div>
        );
    }

    return (
        <>
          {/* <InfiniteScroll
            dataLength={allCourses.length}
            next={fetchMoreData}
            hasMore={page < totalPages}
            loader={<p className="text-center">Loading more...</p>}
            endMessage={
                <p style={{ textAlign: "center", marginTop: "10px" }}>
                <b>No more courses</b>
                </p>
            }
            ></InfiniteScroll>
            <div>
                {allCourses && allCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div> */}

              <InfiniteScroll
                dataLength={allCourses.length}
                next={fetchMoreData}
                hasMore={page < totalPages}
                loader={<p className="text-center">Loading more...</p>}
                endMessage={
                    <p style={{ textAlign: "center", marginTop: "10px" }}>
                    <b>No more courses</b>
                    </p>
                }
                >
                    <div>
                        {allCourses && allCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </InfiniteScroll>

        
        </>
        
    );
}

export default AllCourses;