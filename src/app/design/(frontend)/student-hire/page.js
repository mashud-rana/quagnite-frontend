import AlumniDetails from "@/components/Frontend/StudentHire/AlumniDetails/AlumniDetails";
import AlumniFeedback from "@/components/Frontend/StudentHire/AlumniFeedback/AlumniFeedback";
import TopRatedAlumni from "@/components/Frontend/StudentHire/TopRatedAlumni/TopRatedAlumni";
import React from "react";

export default function page() {
  return (
    <>
      <AlumniDetails />
      <TopRatedAlumni />
      <AlumniFeedback />
    </>
  );
}
