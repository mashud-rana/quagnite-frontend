"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { FaTrash, FaEdit, FaEllipsisV } from "react-icons/fa";
import styles from "./note.module.css";
import dynamic from "next/dynamic";
import {useDeleteCourseNoteMutation} from '@/redux/features/student/course/courseApi';
import {confirmDelete} from '@/utils/helper';
import { antIcon, toastError, toastSuccess } from "@/utils/helper";
import { Spin } from "antd";
import NotDataFound from "@/components/Empty/NotDataFound";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useCreateCourseNoteMutation, } from '@/redux/features/student/course/courseApi';


const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const schema = yup.object({
  course_id: yup.string().required("Course ID is required"),
  title: yup.string().required("Title is required").max(100, "Title must be at most 100 characters"),
  note: yup.string().required("Note content is required").min(10, "Note content must be at least 10 characters"),
});



const Notes = ({ noteData, courseDetails }) => {
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
  const [notes, setNotes] = useState( []);
  const [course, setCourse] = useState({});
  const [targetId, setTargetId] = useState(null);


    // Form Validation
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
      setError,
    } = useForm({
      mode: "onBlur",
      resolver: yupResolver(schema),
    });

  const [
      deleteCourseNote,
      {
        data ,
        isLoading,
        isSuccess,
        isError,
        error,
      },
    ] = useDeleteCourseNoteMutation();

    
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


  const handleCancelReply = () => {
    setReplyContent("");
  };

  const handleNoteAction = (action, noteId) => {

    confirmDelete().then((result) => {
      
      if (result.isConfirmed) {
        setTargetId(noteId);
        deleteCourseNote(noteId); 
      }
    });
  };

  const isHtmlEmpty = (html) => {
    // Remove all tags like <br>, <p>, etc.
    const text = html
      .replace(/<br\s*\/?>/gi, '') // remove <br>
      .replace(/<\/?p[^>]*>/gi, '') // remove <p> and </p>
      .trim(); // trim whitespace

    return text.length === 0;
  };


  const handleSubmitReply = () => {
    if (replyContent.trim() && !isHtmlEmpty(replyContent)) {
      console.log("New reply:", replyContent);  
      setReplyContent("");
      handleSubmit(onSubmit)();
    } else {
      setError("note", { type: 'manual', message: 'Note content is required' });
    }
  };

  const onSubmit =  (data) => {
    
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

     createCourseNote(formData).unwrap();
    
  }

  useEffect(()=>{
    if(isSuccess && data?.success){
      let filteredNotes = notes.filter(note => note.id !== data?.data?.id);
      setNotes(filteredNotes);
      toastSuccess(data?.message || "Note deleted successfully.");
    }
    if (isError) {

      toastError(error?.data?.message || "Something went wrong. Please try again.");
    }
    setTargetId(null);
  },[isSuccess, data,isError, error])

  useEffect(() =>{
    if(isCreateDataSuccess && createData?.success){
      setNotes((prevNotes) => [createData?.data, ...prevNotes]);
      toastSuccess(createData?.message || "Note created successfully.");
      setValue("title", "");
      setValue("note", "");
      setReplyContent("");
    }
      if (isCreateDataError) {

      toastError(createDataResponseError?.data?.message || "Something went wrong. Please try again.");
    }

    },[isCreateDataSuccess, createData, isCreateDataError, createDataResponseError])

  useEffect(() => {
    if(noteData){
      setNotes(noteData);
    }
    if(courseDetails){
      setCourse(courseDetails);
      setValue("course_id", courseDetails?.id || "");
    }
  }, [noteData, courseDetails]);

  console.log("noteData prop:", notes, course);

  return (
    <div className={styles.notesContainer}>
      {/* Rich Text Editor */}
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
            <small className="text-danger" style={{color: "red"}}>
              {errors.title?.message}
              
            </small>
          </div>
          <JoditEditor
            ref={editor}
            value={replyContent}
            config={editorConfig}
            tabIndex={2}
            onChange={(newContent) => {
              setValue("note", newContent)
              setReplyContent(newContent)
            }}
          />
            <small className="text-danger" style={{color: "red"}}>
              {errors.note?.message}
              
            </small>
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
          {notes.length >0 && notes.map((note) => (
            <div key={note.id} className={styles.noteCard}>
              <div className={styles.noteHeader}>
                <h5 className={styles.noteTitle}>{note?.title}</h5>
                <div className={styles.noteActions}>
                  <button
                    className={styles.noteActionButton}
                    onClick={() => handleNoteAction("delete", note.id)}
                    title="Delete"
                  >
                  {
                    targetId === note.id && isLoading ? <Spin indicator={antIcon} /> : <FaTrash />
                  }
                  </button>
                  <button
                    className={styles.noteActionButton}
                    onClick={() => handleNoteAction("edit", note.id)}
                    title="Edit"
                  >
                    {
                      targetId === note.id && isLoading ? <Spin indicator={antIcon} /> : <FaEdit />
                    }
                  </button>
                  <button
                    className={styles.noteActionButton}
                    onClick={() => handleNoteAction("more", note.id)}
                    title="More options"
                  >
                    
                    {
                      targetId === note.id && isLoading ? <Spin indicator={antIcon} /> : <FaEllipsisV />
                    }
                  </button>
                </div>
              </div>
              <div className={styles.noteContent}>
                <div
                  className={styles.notePreview}
                  dangerouslySetInnerHTML={{ __html: note?.note  || "" }}
                />
              </div>
            </div>
          ))}
          {
            notes.length === 0 && (
              <NotDataFound message={`No notes found for ${course?.title || 'this course'}.`} />
            )
          }
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
