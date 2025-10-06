"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useJoinBootcampLectureQuery } from "@/redux/features/student/bootcamp/bootcampApi";
import dynamic from 'next/dynamic';

// Dynamically import the Zoom component with no SSR
const ZoomMeeting = dynamic(() => import('@/components/Share/Zoom/ZoomMeeting'), {
  ssr: false,
  loading: () => <div>Loading Zoom SDK...</div>
});
const LectureJoin = () => {
  

  return (
    <>
      <ZoomMeeting />
    </>
  );
};

export default LectureJoin;
