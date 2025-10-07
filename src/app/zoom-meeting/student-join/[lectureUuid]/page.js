"use client";
import { useJoinBootcampLectureQuery } from "@/redux/features/student/bootcamp/bootcampApi";
import { useParams } from "next/navigation";
import React,{useState, useEffect } from "react";
import ZoomMeetingSDK from "@/components/Share/Zoom/ZoomMeetingSDK";

export default function ZoomStudentJoin(){
    const {lectureUuid} = useParams();
    const [zoomConfig, setZoomConfig] = useState(null);

    // query runs only when enabled = true
    const { data, isSuccess, isLoading, error } =
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
    //   const params = new URLSearchParams({
    //     signature: data?.data?.signature,
    //     meetingNumber: data?.data?.meetingNumber,
    //     passWord: data?.data?.password,
    //     userName: data?.data?.userName,
    //     userEmail: data?.data?.userEmail,
    //     zak: data?.data?.zak,
    //     leaveUrl: data?.data?.leaveUrl,
    //   });
    //    setEnabled(!enabled);
    //   setLectureUuid(null);

    //   window.open(`/zoom-meeting/join?${params.toString()}`, "_blank");
    }
  }, [isSuccess, data]);

  console.log("zoomConfig", zoomConfig);
    return (
        <>
          {zoomConfig && <ZoomMeetingSDK config={zoomConfig} />}
        </>
    )
}