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
import JoditEditor from "jodit-react";

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
  const [noteContent, setNoteContent] = useState(
    `Seven months back, I published my very first course on Udemy, since then I started this journey of creating and sharing with you, also listened and learned a lot from your feedback. Thank you so much for supporting the courses! To reward you for long-term support as an established student and get ready for the coming year, I hand-picked 3 flutter development courses out of my 7 paid courses on Udemy and opened their 5 days FREE coupons for you. You can find topics you like to enroll in and start learning now for FREE if you haven't done yet. Please note since Udemy's IPO it has a new coupon policy to allow FREE coupons open to the first 1000 enrollments and expires in 5 days so make sure you start earlier before they expire.`
  );

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
        "image",
        "file",
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
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
      },
      style: {
        background: "#ffffff",
        color: "#374151",
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
      <div>
        <div className={styles.ic_note_text_editor_wrapper}>
          <JoditEditor
            ref={editor}
            value={replyContent}
            config={editorConfig}
            tabIndex={2}
            onChange={(newContent) => setReplyContent(newContent)}
          />
        </div>

        {/* Cancel & Save Button → only show if replyContent is not empty */}
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

        <hr className={styles.ic_hr} />
      </div>

      {/* <div>
        <div className={styles.ic_note_text_editor_wrapper}>
          <JoditEditor
            ref={editor}
            value={replyContent}
            config={editorConfig}
            tabIndex={2}
            onBlur={(newContent) => setReplyContent(newContent)}
            onChange={(newContent) => setReplyContent(newContent)}
          />
        </div>
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

        <hr className={styles.ic_hr} />
      </div> */}

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
