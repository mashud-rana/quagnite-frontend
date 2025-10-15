"use client";

import ProgressStepper from "@/components/Teacher/Courses/ProgressStepper/ProgressStepper";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import CreateCourseForm from "@/components/Teacher/Courses/CreateCourseForm/CreateCourseForm";
import { useState } from "react";
import Instractor from "@/components/Teacher/Courses/Instractor/Instractor";
import UploadVideo from "@/components/Teacher/Courses/UploadVideo/UploadVideo";

const CreateCoursePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  return (
    <div>
      {/* <ProgressStepper currentStep={1} /> */}
      <ProgressStepper
        currentStep={currentStep}
        onStepChange={handleStepChange}
      />

      <div className="mb-24">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Create New Course</h1>
        </div>
      </div>

      {/* <CreateCourseForm /> */}

      {currentStep === 1 && (
        <CreateCourseForm setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 2 && <UploadVideo setCurrentStep={setCurrentStep} />}
      {currentStep === 3 && <Instractor setCurrentStep={setCurrentStep} />}
    </div>
  );
};

export default CreateCoursePage;
