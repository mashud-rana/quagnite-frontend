"use client";

import { useMemo, useRef, useState } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaLink,
  FaPaperclip,
  FaTrash,
  FaEdit,
  FaEllipsisV,
  FaChevronDown,
} from "react-icons/fa";
import styles from "./note.module.css";
import dynamic from "next/dynamic"; // 👈 import dynamic

// 👇 Dynamically load JoditEditor (no SSR)
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const mockNotes = [
  {
    id: "1",
    title: "UX Design",
    content:
      "There are many variations of passages of Lorem Ipsum available...",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "AR/VR",
    content:
      "There are many variations of passages of Lorem Ipsum available...",
    createdAt: "2024-01-14",
  },
  {
    id: "3",
    title: "AI Tools",
    content:
      "There are many variations of passages of Lorem Ipsum available...",
    createdAt: "2024-01-13",
  },
];

const Notes = () => {
  const editor = useRef(null);
  const [replyContent, setReplyContent] = useState("");
  const editorConfig = useMemo(
    () => ({
      readonly: false,
      placeholder:
        "What are your thoughts? (Type '/' to add images, files, or links)",
      height: 120,
      toolbar: true,
      toolbarSticky: false,
      showCharsCounter: false,
      showWordsCounter: false,
      showXPathInStatusbar: false,
      buttons: [
        "bold",
        "italic",
        "underline",
        "|",
        "fontsize",
        "|",
        "link",
        "image", // 👈 image button
        "file", // 👈 file attach button
      ],
      removeButtons: [
        "source",
        "fullsize",
        "about",
        "outdent",
        "indent",
        "video",
        "table",
      ],

      toolbarAdaptive: true,
      toolbarStickyOffset: 0,
      buttonsMD: 7,
      buttonsSM: 4,
      buttonsXS: 2,

      /* 👇 Image uploader config */
      uploader: {
        insertImageAsBase64URI: true, // local image will be inserted as base64
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
        // alternative: server upload (example endpoint)
        url: "https://your-server.com/upload",
        method: "POST",
        process: (resp) => {
          // server theke image url peye return dite hobe
          return {
            files: [resp.url],
            path: resp.url,
            baseurl: resp.url,
          };
        },
      },
    }),
    []
  );

  const handleSubmitReply = () => {
    if (replyContent.trim()) {
      console.log("New reply:", replyContent);
      setReplyContent("");
    }
  };

  const handleCancelReply = () => {
    setReplyContent("");
  };

  const handleNoteAction = (action, noteId) => {
    console.log(`${action} note:`, noteId);
  };

  return (
    <div className={styles.notesContainer}>
      {/* Rich Text Editor */}
      <div className="mb-24">
        <div className={styles.ic_note_text_editor_wrapper}>
          <JoditEditor
            ref={editor}
            value={replyContent}
            config={editorConfig}
            tabIndex={2}
            onChange={(newContent) => setReplyContent(newContent)}
          />
        </div>

        {replyContent.trim() && (
          <div className={styles.ic_btn_container}>
            <button
              className={`${styles.ic_btn} ${styles.ic_cencel}`}
              onClick={handleCancelReply}
            >
              Cancel
            </button>
            <button
              className={`${styles.ic_btn} ${styles.ic_save}`}
              onClick={handleSubmitReply}
            >
              Save note
            </button>
          </div>
        )}
      </div>

      {/* Notes Section */}
      <div className={styles.notesSection}>
        <h5 className="fw_500">Your Notes</h5>
        <div className={styles.notesGrid}>
          {mockNotes.map((note) => (
            <div key={note.id} className={styles.noteCard}>
              <div className={styles.noteHeader}>
                <h5 className={styles.noteTitle}>{note.title}</h5>
                <div className={styles.noteActions}>
                  <button
                    className={styles.noteActionButton}
                    onClick={() => handleNoteAction("delete", note.id)}
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                  <button
                    className={styles.noteActionButton}
                    onClick={() => handleNoteAction("edit", note.id)}
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className={styles.noteActionButton}
                    onClick={() => handleNoteAction("more", note.id)}
                    title="More options"
                  >
                    <FaEllipsisV />
                  </button>
                </div>
              </div>
              <div className={styles.noteContent}>
                <p className={styles.notePreview}>{note.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;

// "use client";

// import { useMemo, useRef, useState } from "react";
// import {
//   FaBold,
//   FaItalic,
//   FaUnderline,
//   FaLink,
//   FaPaperclip,
//   FaTrash,
//   FaEdit,
//   FaEllipsisV,
//   FaChevronDown,
// } from "react-icons/fa";
// import styles from "./note.module.css";
// import JoditEditor from "jodit-react";

// const mockNotes = [
//   {
//     id: "1",
//     title: "UX Design",
//     content:
//       "There are many variations of passages of Lorem Ipsum available...",
//     createdAt: "2024-01-15",
//   },
//   {
//     id: "2",
//     title: "AR/VR",
//     content:
//       "There are many variations of passages of Lorem Ipsum available...",
//     createdAt: "2024-01-14",
//   },
//   {
//     id: "3",
//     title: "AI Tools",
//     content:
//       "There are many variations of passages of Lorem Ipsum available...",
//     createdAt: "2024-01-13",
//   },
// ];

// const Notes = () => {
//   const editor = useRef(null);
//   const [replyContent, setReplyContent] = useState("");
//   const editorConfig = useMemo(
//     () => ({
//       readonly: false,
//       placeholder:
//         "What are your thoughts? (Type '/' to add images, files, or links)",
//       height: 120,
//       toolbar: true,
//       toolbarSticky: false,
//       showCharsCounter: false,
//       showWordsCounter: false,
//       showXPathInStatusbar: false,
//       buttons: [
//         "bold",
//         "italic",
//         "underline",
//         "|",
//         "fontsize",
//         "|",
//         "link",
//         "image",
//         "file",
//       ],
//       removeButtons: [
//         "source",
//         "fullsize",
//         "about",
//         "outdent",
//         "indent",
//         "video",
//         "table",
//       ],
//       uploader: {
//         insertImageAsBase64URI: true,
//         imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
//       },
//       style: {
//         background: "#ffffff",
//         color: "#374151",
//       },
//     }),
//     []
//   );

//   const handleSubmitReply = () => {
//     if (replyContent.trim()) {
//       console.log("New reply:", replyContent);
//       setReplyContent("");
//     }
//   };

//   const handleCancelReply = () => {
//     setReplyContent("");
//   };

//   const handleNoteAction = (action, noteId) => {
//     console.log(`${action} note:`, noteId);
//   };

//   return (
//     <div className={styles.notesContainer}>
//       {/* Rich Text Editor */}
//       <div className="mb-24">
//         <div className={styles.ic_note_text_editor_wrapper}>
//           <JoditEditor
//             ref={editor}
//             value={replyContent}
//             config={editorConfig}
//             tabIndex={2}
//             onChange={(newContent) => setReplyContent(newContent)}
//           />
//         </div>

//         {/* Cancel & Save Button → only show if replyContent is not empty */}
//         {replyContent.trim() && (
//           <div className={styles.ic_btn_container}>
//             <button
//               className={`${styles.ic_btn} ${styles.ic_cencel}`}
//               onClick={handleCancelReply}
//             >
//               Cancel
//             </button>
//             <button
//               className={`${styles.ic_btn} ${styles.ic_save}`}
//               onClick={handleSubmitReply}
//             >
//               Save note
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Notes Section */}
//       <div className={styles.notesSection}>
//         <h5 className="fw_500">Your Notes</h5>
//         <div className={styles.notesGrid}>
//           {mockNotes.map((note) => (
//             <div key={note.id} className={styles.noteCard}>
//               <div className={styles.noteHeader}>
//                 <h5 className={styles.noteTitle}>{note.title}</h5>
//                 <div className={styles.noteActions}>
//                   <button
//                     className={styles.noteActionButton}
//                     onClick={() => handleNoteAction("delete", note.id)}
//                     title="Delete"
//                   >
//                     <FaTrash />
//                   </button>
//                   <button
//                     className={styles.noteActionButton}
//                     onClick={() => handleNoteAction("edit", note.id)}
//                     title="Edit"
//                   >
//                     <FaEdit />
//                   </button>
//                   <button
//                     className={styles.noteActionButton}
//                     onClick={() => handleNoteAction("more", note.id)}
//                     title="More options"
//                   >
//                     <FaEllipsisV />
//                   </button>
//                 </div>
//               </div>
//               <div className={styles.noteContent}>
//                 <p className={styles.notePreview}>{note.content}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Notes;
