// // import { Modal } from "antd";
// // import React from "react";

// // const CoachingModal = ({ open, onCancel, onOk }) => {
// //   return (
// //     <Modal
// //       title="Do you accept the request?"
// //       open={open}
// //       onCancel={onCancel}
// //       onOk={onOk}
// //       style={{ maxWidth: "90vw" }}
// //       width={928}
// //       okText="Start Exam"
// //       cancelText="Cancel"
// //     ></Modal>
// //   );
// // };

// // export default CoachingModal;

// import { Modal, Button } from "antd";
// import React from "react";

// const CoachingModal = ({ open, onCancel, onOk }) => {
//   return (
//     <Modal
//       title="Do you accept the request?"
//       open={open}
//       onCancel={onCancel}
//       footer={[
//         <div
//           key="footer"
//           style={{ display: "flex", gap: "10px", width: "100%" }}
//         >
//           <Button
//             key="deny"
//             onClick={onCancel}
//             style={{
//               flex: 1,
//               backgroundColor: "#ff4d4f",
//               color: "#fff",
//               border: "none",
//             }}
//           >
//             Deny
//           </Button>
//           <Button
//             key="accept"
//             type="primary"
//             onClick={onOk}
//             style={{ flex: 1 }}
//           >
//             Accept
//           </Button>
//         </div>,
//       ]}
//       style={{ maxWidth: "90vw" }}
//       width={928}
//     >
//       <p>Please confirm your action.</p>
//     </Modal>
//   );
// };

// export default CoachingModal;

import { Modal } from "antd";
import React from "react";

const CoachingModal = ({ open, onCancel, onOk }) => {
  return (
    <Modal
      title="Do you accept the request?"
      open={open}
      onCancel={onCancel}
      footer={null}
      style={{ maxWidth: "90vw" }}
      width={928}
    >
      {/* Custom Buttons */}
      <div className="ic_gap_flex mt_30">
        <button onClick={onCancel} className="ic_btn w_100">
          Deny
        </button>
        <button onClick={onOk} className="ic_btn w_100">
          Accept
        </button>
      </div>
    </Modal>
  );
};

export default CoachingModal;
