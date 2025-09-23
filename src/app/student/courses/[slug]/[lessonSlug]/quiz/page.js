import ExamInterface from "@/components/Student/Exams/ExamInterface/ExamInterface";
import SubmitExam from "@/components/Student/Exams/ExamInterface/SubmitExam";
import ProgressInfo from "@/components/Student/Exams/SkillChart/ProgressInfo";
import React from "react";

const CourseQuizPage = () => {
  return (
    <>
      <ExamInterface />

      <SubmitExam />

      <ProgressInfo />
    </>
  );
};

export default CourseQuizPage;
