"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { FaTrash, FaEdit, FaEllipsisV } from "react-icons/fa";
import styles from "./note.module.css";
import dynamic from "next/dynamic";
import { useDeleteCourseNoteMutation } from "@/redux/features/student/course/courseApi";
import { confirmDelete } from "@/utils/helper";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";
import NotDataFound from "@/components/Empty/NotDataFound";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useCreateCourseNoteMutation,
  useUpdateCourseNoteMutation,
} from "@/redux/features/student/course/courseApi";

const JoditEditor = dynamic(
  () => import("@/components/Share/Editor/JoditEditor/JoditEditor"),
  { ssr: false }
);

const schema = yup.object({
  course_id: yup.string().required("Course ID is required"),
  title: yup
    .string()
    .required("Title is required")
    .max(100, "Title must be at most 100 characters"),
  note: yup
    .string()
    .required("Note content is required")
    .min(10, "Note content must be at least 10 characters"),
});

const Notes = ({ noteData, courseDetails }) => {
  const editor = useRef(null);
  const updateEditor = useRef(null);

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
  const [notes, setNotes] = useState([]);
  const [course, setCourse] = useState({});
  const [noteDataId, setNoteDataId] = useState(null);

  const [mode, setMode] = useState("create"); // "create" or "edit"

  // Form Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    control,
    watch,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const [deleteCourseNote, { data, isLoading, isSuccess, isError, error }] =
    useDeleteCourseNoteMutation();
  //create note
  const [
    createCourseNote,
    {
      data: createData,
      isLoading: isCreateDataLoading,
      isSuccess: isCreateDataSuccess,
      isError: isCreateDataError,
      error: createDataResponseError,
    },
  ] = useCreateCourseNoteMutation();
  //update note
  const [
    updateCourseNote,
    {
      data: updateData,
      isLoading: isUpdateDataLoading,
      isSuccess: isUpdateDataSuccess,
      isError: isUpdateDataError,
      error: updateDataResponseError,
    },
  ] = useUpdateCourseNoteMutation();
  //handle note action
  const handleNoteAction = (action, noteId) => {
    if (action === "edit") {
      let note = notes.find((n) => n.id === noteId);

      if (note) {
        setMode("edit");
        setValue("title", note?.title || "");
        setValue("note", note?.note || "");
        setValue("course_id", course?.id || "");

        setNoteDataId(noteId);
      }
    } else if (action === "delete") {
      confirmDelete().then((result) => {
        if (result.isConfirmed) {
          setNoteDataId(noteId);
          deleteCourseNote(noteId);
        }
      });
    } else if (action === "more") {
    }
  };

  //onSubmit function
  const onSubmit = (data) => {
    if (mode == "create") {
      createCourseNote(data);
    } else {
      updateCourseNote({ noteData: data, noteId: noteDataId });
    }
  };

  //for delete note
  useEffect(() => {
    if (isSuccess && data?.success) {
      let filteredNotes = notes.filter((note) => note.id !== data?.data?.id);
      setNotes(filteredNotes);
      toastSuccess(data?.message || "Note deleted successfully.");
    }
    if (isError) {
      toastError(
        error?.data?.message || "Something went wrong. Please try again."
      );
    }
    setNoteDataId(null);
  }, [isSuccess, data, isError, error]);

  //for create note
  useEffect(() => {
    if (isCreateDataSuccess && createData?.success) {
      setNotes((prevNotes) => [createData?.data, ...prevNotes]);
      toastSuccess(createData?.message || "Note created successfully.");
      reset(
        { title: "", note: "", course_id: course.id },
        { keepValues: false }
      );
    }
    if (isCreateDataError) {
      toastError(
        createDataResponseError?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  }, [
    isCreateDataSuccess,
    createData,
    isCreateDataError,
    createDataResponseError,
  ]);

  //for update note
  useEffect(() => {
    if (isUpdateDataSuccess && updateData?.success) {
      let updatedNote = updateData?.data;
      setNotes((prevNotes) =>
        prevNotes.map((note) => {
          if (note.id === updatedNote.id) {
            return {
              ...note,
              title: updatedNote.title,
              note: updatedNote.note,
            };
          }
          return note;
        })
      );
      toastSuccess(updateData?.message || "Note updated successfully.");
      setMode("create");
      setNoteDataId(null);
      reset(
        { title: "", note: "", course_id: course.id },
        { keepValues: false }
      );
    }
    if (isUpdateDataError) {
      toastError(
        updateDataResponseError?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  }, [
    isUpdateDataSuccess,
    updateData,
    isUpdateDataError,
    updateDataResponseError,
  ]);

  useEffect(() => {
    if (noteData) {
      setNotes(noteData);
    }
    if (courseDetails) {
      setCourse(courseDetails);
      setValue("course_id", courseDetails?.id || "");
    }
  }, [noteData, courseDetails]);

  console.log("noteData prop:", notes, course);

  //watch note input
  const noteContent = watch("note");

  return (
    <div className={styles.notesContainer}>
      {/* Rich Text Editor */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-24 ic_text_editor">
          <div className={styles.ic_note_text_editor_wrapper}>
            <div>
              <div className={styles.topInputContainer}>
                <input
                  type="text"
                  placeholder="Enter title"
                  {...register("title")}
                  className={styles.topInput}
                />
              </div>
              <small
                className="text-danger"
                style={{
                  color: "red",
                }}
              >
                {errors.title?.message}
              </small>
            </div>
            {/* <Controller
              name="note"
              control={control}
              render={({field}) => (<JoditEditor
              {...field}
              editorRef={editor}
              editorValue={field.value}
              setEditorValue={field.onChange}/>)}/> */}

            <Controller
              name="note"
              control={control}
              render={({ field: { value, onChange } }) => (
                <JoditEditor ref={editor} value={value} onChange={onChange} />
              )}
            />

            <small
              className="text-danger"
              style={{
                color: "red",
              }}
            >
              {errors.note?.message}
            </small>
          </div>

          {noteContent?.length > 0 && (
            <div className={styles.ic_btn_container}>
              {mode === "edit" && (
                <button
                  className={`${styles.ic_btn} ${styles.ic_cencel}`}
                  onClick={() => {
                    setMode("create");
                    reset(
                      { title: "", note: "", course_id: course?.id },
                      { keepValues: false }
                    );
                  }}
                >
                  Cancel
                </button>
              )}

              <button
                className={`${styles.ic_btn} ${styles.ic_save}`}
                type="submit"
              >
                {mode === "edit" ? "Update note" : "Save note"}
              </button>
            </div>
          )}
        </div>
      </form>
      {/* Notes Section */}

      <div className={styles.notesSection}>
        <h5 className="fw_500">Your Notes</h5>
        <div className={styles.notesGrid}>
          {notes.length > 0 &&
            notes.map((note) => (
              <div key={note.id} className={styles.noteCard}>
                <div className={styles.noteHeader}>
                  <h5 className={styles.noteTitle}>{note?.title}</h5>
                  <div className={styles.noteActions}>
                    <button
                      className={styles.noteActionButton}
                      onClick={() => handleNoteAction("delete", note.id)}
                      title="Delete"
                    >
                      {noteDataId === note.id && isLoading ? (
                        <Spin indicator={antIcon} />
                      ) : (
                        <FaTrash />
                      )}
                    </button>
                    <button
                      className={styles.noteActionButton}
                      onClick={() => handleNoteAction("edit", note.id)}
                      title="Edit"
                    >
                      {noteDataId === note.id && isLoading ? (
                        <Spin indicator={antIcon} />
                      ) : (
                        <FaEdit />
                      )}
                    </button>
                  </div>
                </div>
                <div className={styles.noteContent}>
                  <div
                    className={styles.notePreview}
                    dangerouslySetInnerHTML={{
                      __html: note?.note || "",
                    }}
                  />
                </div>
              </div>
            ))}
          {notes.length === 0 && (
            <NotDataFound
              message={`No notes found for ${course?.title || "this course"}.`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;
