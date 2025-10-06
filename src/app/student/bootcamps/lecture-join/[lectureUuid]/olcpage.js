"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useJoinBootcampLectureQuery } from "@/redux/features/student/bootcamp/bootcampApi";

import dynamic from "next/dynamic";

// Import LectureJoinImpl dynamically, disable SSR
const ZoomGuest = dynamic(() => import("../../../../../components/Share/Zoom/ZoomGuest.js"), { ssr: false });


const LectureJoin = () => {
  const { lectureUuid } = useParams();
  const [joinData, setJoinData] = useState(null);
  const [ZoomMtg, setZoomMtg] = useState(null);

  const { data, isSuccess } = useJoinBootcampLectureQuery(lectureUuid);

  // Dynamically import Zoom SDK only on client
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const mod = await import("@zoom/meetingsdk");
        mod.ZoomMtg.preLoadWasm();
        mod.ZoomMtg.prepareWebSDK();
        setZoomMtg(mod.ZoomMtg);
      }
    })();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      const urlOrigin = window.location.origin;
      setJoinData({
        ...data.data,
        leaveUrl: `${urlOrigin}/student/bootcamps`,
      });
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (!joinData || !ZoomMtg) return;

    const rootEl = document.getElementById("zmmtg-root");
    if (rootEl) rootEl.style.display = "block";

    ZoomMtg.init({
      leaveUrl: joinData.leaveUrl,
      patchJsMedia: true,
      leaveOnPageUnload: true,
      success: () => {
        ZoomMtg.join({
          signature: joinData.signature,
          meetingNumber: joinData.meetingNumber,
          passWord: joinData.password,
          userName: joinData.userName,
          userEmail: joinData.userEmail,
          zak: joinData.zak,
          success: (success) => console.log("Joined meeting", success),
          error: (error) => console.error("Join error", error),
        });
      },
      error: (error) => console.error("Init error", error),
    });
  }, [joinData, ZoomMtg]);

  return (
    <>
      <h1>Lecture Join: {lectureUuid}</h1>
      <div id="zmmtg-root" style={{ display: "none" }} />
    </>
  );
};

export default LectureJoin;
