"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useJoinBootcampLectureQuery } from "@/redux/features/student/bootcamp/bootcampApi";

const ZoomGuest = () => {
  const { lectureUuid } = useParams();
  const [joinData, setJoinData] = useState(null);
  const [ZoomMtg, setZoomMtg] = useState(null);

  // Fetch lecture join data
  const { data, isSuccess } = useJoinBootcampLectureQuery(lectureUuid);



  // Set joinData when API success
  useEffect(() => {
    if (isSuccess) {
      const urlOrigin = window.location.origin;
      setJoinData({
        ...data.data,
        leaveUrl: `${urlOrigin}/student/bootcamps`,
      });
    }
  }, [isSuccess, data]);

  // // Start meeting when both joinData & ZoomMtg are ready
  // useEffect(() => {
  //   if (!joinData || !ZoomMtg) return;

  //   const rootEl = document.getElementById("zmmtg-root");
  //   if (rootEl) rootEl.style.display = "block";

  //   ZoomMtg.init({
  //     leaveUrl: joinData.leaveUrl,
  //     patchJsMedia: true,
  //     leaveOnPageUnload: true,
  //     success: () => {
  //       ZoomMtg.join({
  //         signature: joinData.signature,
  //         meetingNumber: joinData.meetingNumber,
  //         passWord: joinData.password,
  //         userName: joinData.userName,
  //         userEmail: joinData.userEmail,
  //         zak: joinData.zak, // optional
  //         success: (success) => console.log("Joined meeting", success),
  //         error: (error) => console.error("Join error", error),
  //       });
  //     },
  //     error: (error) => console.error("Init error", error),
  //   });
  // }, [joinData, ZoomMtg]);

  console.log('Zoom guest data: ',joinData)

  return (
    <>
      <h1>Lecture Join: {lectureUuid}</h1>
     
    </>
  );
};

export default ZoomGuest;
