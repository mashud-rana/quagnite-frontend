"use client";
import { useJoinBootcampLectureQuery } from "@/redux/features/student/bootcamp/bootcampApi";
import { useParams, useRouter } from "next/navigation";
import React,{useState, useEffect } from "react";
import ZoomMeetingSDK from "@/components/Share/Zoom/ZoomMeetingSDK";
import {  toastError } from "@/utils/helper";

export default function ZoomStudentJoin(){
    const {lectureUuid} = useParams();
    const [zoomConfig, setZoomConfig] = useState(null);
    // //get storage user 
    // const {user} = useSelector((state) => state.auth);
    const router = useRouter();

    // query runs only when enabled = true
    const { data, isSuccess, isLoading, error, isError, isFetching } =
    useJoinBootcampLectureQuery(lectureUuid);


  useEffect(() => {
    if (isSuccess) {
        setZoomConfig({
        signature: data?.data?.signature,
        meetingNumber: data?.data?.meetingNumber,
        passWord: data?.data?.password,
        userName: data?.data?.userName,
        userEmail: data?.data?.userEmail,
        zak: data?.data?.zak,
        leaveUrl: `${window.location.origin}/student/bootcamps`
      });
    
    }
     if (isError) {
          toastError(error?.message || "Please try again.");
          router.push('/student/bootcamps');
        }
  }, [isSuccess, data, isError, error]);

  if(isError){
    return <p className="text-center text-red-500">Error: {error?.message || "Something went wrong. Please try again."}</p>
  }

    return (
        <>
          {zoomConfig && <ZoomMeetingSDK config={zoomConfig} />}
        </>
    )
}