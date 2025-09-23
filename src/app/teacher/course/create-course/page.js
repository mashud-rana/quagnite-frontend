import ProgressStepper from "@/components/Teacher/Courses/ProgressStepper/ProgressStepper";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import CreateCourseForm from "@/components/Teacher/Courses/CreateCourseForm/CreateCourseForm";

const CreateCoursePage = () => {
  return (
    <div>
      <ProgressStepper currentStep={1} />

      <div className="mb-24">
        <div className="ic_title_section">
          <Link href="#" className="ic_back_button" aria-label="Go back">
            <FaArrowLeft />
          </Link>
          <h1 className="ic_text_36">Create New Course</h1>
        </div>
      </div>

      <CreateCourseForm />
    </div>
  );
};

export default CreateCoursePage;
