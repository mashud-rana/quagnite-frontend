'use client';
import React from "react";
import {useSelector, useDispatch} from "react-redux";  
import CourseCard from "@/components/Student/Courses/Course/CourseCard";  
import InfiniteScroll from 'react-infinite-scroll-component';
import {setPage } from "@/redux/features/student/course/courseSlice";
import NotDataFound from "@/components/Empty/NotDataFound";

const AllCourses = ({totalPages}) =>{
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
            <NotDataFound message="No enrolled courses found." />
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
                    <b>No more courses</b>
                    </p>
                }
                 scrollableTarget="scrollableDiv"
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