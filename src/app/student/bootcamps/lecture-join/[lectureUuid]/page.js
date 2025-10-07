"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useJoinBootcampLectureQuery } from "@/redux/features/student/bootcamp/bootcampApi";
import dynamic from 'next/dynamic';
import SectionSpinner from "@/components/Spinner/SectionSpinner";
import NotDataFound from "@/components/Empty/NotDataFound";

// Dynamically import the Zoom component with no SSR
const ZoomMeeting = dynamic(() => import('@/components/Share/Zoom/ZoomMeetingSDK'), {
  ssr: false,
  loading: () => <div>Loading Zoom SDK...</div>
});
const LectureJoin = () => {
   const { lectureUuid } = useParams();
    const [joinData, setJoinData] = useState(null);
    const [ZoomMtg, setZoomMtg] = useState(null);
    //fetch lecture join data
    const { data, isSuccess, isLoading, error, refetch, isFetching, isError } = useJoinBootcampLectureQuery(lectureUuid);
    //set ZoomMtg data
    useEffect(() => {
        if (isSuccess) {
            const urlOrigin = window.location.origin;
            setJoinData({
            ...data.data,
            leaveUrl: `${urlOrigin}/student/bootcamps`,
            });
            
            // Create URL with meeting details
            const params = new URLSearchParams({
            signature: data.data?.signature,
            meetingNumber: data.data?.meetingNumber,
            passWord: data.data?.password,
            userName: data.data?.userName,
            userEmail: data.data?.userEmail,
            zak: data.data?.zak,
            leaveUrl: `${window.location.origin}/student/bootcamps`
            });
            // Open in new window or redirect to full-screen page
            // Option 1: Open in new tab/window
            window.open(`/zoom-meeting/join?${params.toString()}`, '_blank');
            
            // Option 2: Redirect in same window
            // router.push(`/zoom-meeting/join?${params.toString()}`);
        }

        
    }, [isSuccess, data]);
    console.log("joinData", joinData);
    


    if (isLoading || isFetching) {
        return <SectionSpinner message="Loading lecture bootcamp class..." />;
    }
     if (isError) {
        return <NotDataFound message=" Lecture bootcamp class not found" />;
    }
  

  return (
    <>
      {/* <ZoomMeeting /> */}
    </>
  );
};

export default LectureJoin;
