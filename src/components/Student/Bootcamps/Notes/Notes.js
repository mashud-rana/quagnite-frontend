"use client";

import { useState } from "react";
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

  const handleSaveNote = () => {
    console.log("Saving note:", noteContent);
  };

  const handleCancel = () => {
    setNoteContent("");
  };

  const handleNoteAction = (action, noteId) => {
    console.log(`${action} note:`, noteId);
  };

  return (
    <div className={styles.notesContainer}>
      {/* Rich Text Editor */}
      <div className={styles.editorContainer}>
        {/* Editor Toolbar */}
        <div className={styles.editorToolbar}>
          <button className={styles.toolbarButton} title="Bold">
            <FaBold />
          </button>
          <button className={styles.toolbarButton} title="Italic">
            <FaItalic />
          </button>
          <button className={styles.toolbarButton} title="Underline">
            <FaUnderline />
          </button>
          <div className={styles.toolbarSeparator}></div>
          <button className={styles.toolbarButton} title="Font Size">
            Aa
            <FaChevronDown className={styles.dropdownIcon} />
          </button>
          <div className={styles.toolbarSeparator}></div>
          <button className={styles.toolbarButton} title="Add Link">
            <FaLink />
          </button>
          <button className={styles.toolbarButton} title="Attach File">
            <FaPaperclip />
          </button>
        </div>

        {/* Editor Content */}
        <div className={styles.editorContent}>
          <textarea
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            className={styles.editorTextarea}
            placeholder="Start writing your notes..."
          />

          {/* Embedded Image */}
          <div className={styles.embeddedImage}>
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="Lunar surface"
              className={styles.noteImage}
            />
          </div>
        </div>

        {/* Editor Actions */}
        <div className={styles.editorActions}>
          <button className={styles.cancelButton} onClick={handleCancel}>
            CANCEL
          </button>
          <button className={styles.saveButton} onClick={handleSaveNote}>
            SAVE NOTE
          </button>
        </div>
      </div>

      {/* Notes Section */}
      <div className={styles.notesSection}>
        <h3 className={styles.notesTitle}>Your Notes</h3>
        <div className={styles.notesGrid}>
          {mockNotes.map((note) => (
            <div key={note.id} className={styles.noteCard}>
              <div className={styles.noteHeader}>
                <h4 className={styles.noteTitle}>{note.title}</h4>
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
