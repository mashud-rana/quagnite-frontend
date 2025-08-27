import { Modal, Checkbox } from "antd";
import React from "react";

const FilterModal = ({ open, onClose }) => {
  return (
    <Modal
      title="Search Filter"
      open={open}
      onOk={onClose}
      onCancel={onClose}
      okText="APPLY FILTER"
      cancelText="BACK"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Checkbox value="exam">Exam</Checkbox>
        <Checkbox value="course">Course</Checkbox>
      </div>
    </Modal>
  );
};

export default FilterModal;
