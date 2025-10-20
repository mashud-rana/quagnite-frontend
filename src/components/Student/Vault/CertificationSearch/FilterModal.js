import { Modal, Checkbox } from "antd";
import React, {useState} from "react";

const FilterModal = ({ open, onClose, onCourseTypeChange }) => {
  const [courseTypes, setCourseTypes] = useState([]);
  // console.log("Selected course types:", courseTypes);
  const onApply = () =>{
    onCourseTypeChange(courseTypes);
    onClose();
  }
 
  return (
    <Modal
      title="Search Filter"
      open={open}
      onOk={onApply}
      onCancel={onClose}
      okText="APPLY FILTER"
      cancelText="BACK"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Checkbox value="exam" checked={courseTypes.includes("exam")} onChange={(e) => {
          const { checked, value } = e.target;
          setCourseTypes(checked ? [...courseTypes, value] : courseTypes.filter((type) => type !== value));
        }}>Exam</Checkbox>
        <Checkbox value="course" checked={courseTypes.includes("course")} onChange={(e) => {
          const { checked, value } = e.target;
          setCourseTypes(checked ? [...courseTypes, value] : courseTypes.filter((type) => type !== value));
        }}>Course</Checkbox>
      </div>
    </Modal>
  );
};

export default FilterModal;
