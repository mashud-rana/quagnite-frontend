import { Modal } from "antd";
import React from "react";

const Icmodal = () => {
  return (
    <Modal
      title="Search Filter"
      open={open}
      onOk={onClose}
      onCancel={onClose}
      okText="APPLY FILTER"
      cancelText="BACK"
    >
      <h1>Common modal </h1>
    </Modal>
  );
};

export default Icmodal;
