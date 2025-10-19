"use client";

import ProgressStepper from "@/components/Teacher/Courses/ProgressStepper/ProgressStepper";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

import { useState } from "react";
import Instractor from "@/components/Teacher/Courses/Instractor/Instractor";
import CreateCourseForm from "@/components/Teacher/Courses/CreateCourseForm/CreateCourseForm";
import UploadVideos from "@/components/Teacher/Courses/UploadVideo/UploadVideo";

const CreateCoursePage = () => {
  // const [currentStep, setCurrentStep] = useState(1);
  // const handleStepChange = (step) => {
  //   setCurrentStep(step);
  // };

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: "Bootcamp Overview", id: "overview" },
    { label: "Upload Video", id: "video" },
    { label: "Instructor", id: "instructor" },
    { label: "Submit", id: "submit" },
  ];

  console.log("aaaaaaaaaaaaaaaaaaaaaa", currentStep);

  return (
    <div>
      {/* <ProgressStepper currentStep={1} /> */}
      {/* <ProgressStepper
        currentStep={currentStep}
        onStepChange={handleStepChange}
      /> */}

      <ProgressStepper steps={steps} currentStep={currentStep} />

      {/* <CreateCourseForm
        onStepChange={setCurrentStep}
        currentStep={currentStep}
      /> */}

      {currentStep === 0 && (
        <CreateCourseForm
          onStepChange={setCurrentStep}
          currentStep={currentStep}
        />
      )}

      {currentStep === 1 && (
        <UploadVideos onStepChange={setCurrentStep} currentStep={currentStep} />
      )}
      {/* {currentStep === 1 && <UploadVideo setCurrentStep={setCurrentStep} />} */}
      {currentStep === 2 && (
        <Instractor onStepChange={setCurrentStep} currentStep={currentStep} />
      )}
    </div>
  );
};

export default CreateCoursePage;
