'use client';
import React from "react";
import {useSelector, useDispatch} from "react-redux";  
import CourseCard from "@/components/Student/Courses/Course/CourseCard";  
import InfiniteScroll from 'react-infinite-scroll-component';
import {setPage } from "@/redux/features/student/course/courseSlice";
import ProgressCard from "@/components/Student/Courses/Course/ProgressCard";
import NotDataFound from "@/components/Empty/NotDataFound";


const InProcessingCourses = ({totalPages}) =>{
  const {allCourses} = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.course.page);

  const fetchMoreData = () => {
    
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

    if (!allCourses || allCourses.length === 0) {
        return (
            <NotDataFound message="No inprogress courses found." />
        );
    }

    return (
        <>
         
              <InfiniteScroll
                dataLength={allCourses.length}
                next={fetchMoreData}
                hasMore={page < totalPages}
                loader={<p className="text-center">Loading more...</p>}
                endMessage={
                    <p style={{ textAlign: "center", marginTop: "10px" }}>
                    <b>No more inprogress courses</b>
                    </p>
                }
                 scrollableTarget="scrollableDiv"
                >
                      {allCourses && allCourses.map((course) => (
                        <ProgressCard key={course.id} course={course} />
                    ))}
                </InfiniteScroll>

        
        </>
        
    );
}

export default InProcessingCourses;