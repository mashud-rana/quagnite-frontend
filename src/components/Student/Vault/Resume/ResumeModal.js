import { Modal, Checkbox } from "antd";
import React from "react";

const ResumeModal = ({ open, onClose }) => {
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
        <Checkbox value="coach">My Coach</Checkbox>
        <Checkbox value="teacher">My Teacher</Checkbox>
        <Checkbox value="org">My Org</Checkbox>
        <Checkbox value="admin">Admin</Checkbox>
      </div>
    </Modal>
  );
};

export default ResumeModal;
