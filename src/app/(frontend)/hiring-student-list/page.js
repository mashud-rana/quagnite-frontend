import AboutBanner from "@/components/Frontend/About/Banner/Banner";
import React from "react";
import img1 from "@/assets/images/all/student-banner.png";
import Toprated from "@/components/Frontend/StudentList/Toprated/Toprated";
import RequestCandidate from "@/components/Frontend/StudentList/RequestCandidate/RequestCandidate";
import bg from "@/assets/images/all/about-bg.png";

const HiringStudentListPage = () => {
  return (
    <>
      <AboutBanner
        title={"Motivated. Qualified. Ready."}
        subtitle={
          "Our graduates are certified in the latest techniques and systems, excited to apply their knowledge to real-world problems, and ready to join your team."
        }
        img={img1}
        bg={bg}
      />

      <Toprated />
      <RequestCandidate />
    </>
  );
};

export default HiringStudentListPage;
