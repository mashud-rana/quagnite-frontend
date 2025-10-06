"use client";

import {useMemo, useRef, useState, useEffect} from "react";
import {FaTrash, FaEdit, FaEllipsisV} from "react-icons/fa";
import styles from "./note.module.css";
import dynamic from "next/dynamic";
import {useDeleteCourseNoteMutation} from '@/redux/features/student/course/courseApi';
import {confirmDelete} from '@/utils/helper';
import {antIcon, toastError, toastSuccess} from "@/utils/helper";
import {Spin} from "antd";
import NotDataFound from "@/components/Empty/NotDataFound";
import * as yup from "yup";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useCreateCourseNoteMutation, useUpdateCourseNoteMutation} from '@/redux/features/student/course/courseApi';
import { useSelector } from "react-redux";
import { useCreateBootcampNoteMutation, useDeleteBootcampNoteMutation, useUpdateBootcampNoteMutation } from "@/redux/features/student/bootcamp/bootcampApi";

const JoditEditor = dynamic(() => import ("@/components/Share/Editor/JoditEditor/JoditEditor"), {ssr: false});

const schema = yup.object({
  course_id: yup
    .string()
    .required("Course ID is required"),
  title: yup
    .string()
    .required("Title is required")
    .max(100, "Title must be at most 100 characters"),
  note: yup
    .string()
    .required("Note content is required")
    .min(10, "Note content must be at least 10 characters")
});

//bootcamp schema
const bootcampSchema = yup.object({
  bootcamp_id: yup
    .string()
    .required("Course ID is required"),
  title: yup
    .string()
    .required("Title is required")
    .max(100, "Title must be at most 100 characters"),
  note: yup
    .string()
    .required("Note content is required")
    .min(10, "Note content must be at least 10 characters")
});

const Notes = ({noteData, data_id, type}) => {
  const editor = useRef(null);

  // Get user information from Redux store
  const {user} = useSelector((state) => state.auth) || {};

  const [notes,
    setNotes] = useState([]);
  // const [course,
  //   setCourse] = useState({});
  const [noteDataId,
    setNoteDataId] = useState(null);


  const [mode, setMode] = useState("create"); // "create" or "edit"

  // Form Validation
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    setValue,
    setError,
    control,
    watch,
    reset
  } = useForm({resolver: yupResolver(type === "course" ? schema : bootcampSchema)});

  //delete course note
  const [deleteCourseNote, {
      data,
      isLoading,
      isSuccess,
      isError,
      error
    }
  ] = useDeleteCourseNoteMutation();

   //delete bootcamp note
  const [deleteBootcampNote, {
      data: bootcampDeleteData,
      isLoading: bootcampDeleteIsLoading,
      isSuccess: bootcampDeleteIsSuccess,
      isError: bootcampDeleteIsError,
      error: bootcampDeleteError
    }
  ] = useDeleteBootcampNoteMutation();
  //create course note
  const [createCourseNote, {
      data : createData,
      isLoading : isCreateDataLoading,
      isSuccess : isCreateDataSuccess,
      isError : isCreateDataError,
      error : createDataResponseError
    }
  ] = useCreateCourseNoteMutation();

   //create bootcamp note
  const [createBootcampNote, {
      data : createBootcampData,
      isLoading : isCreateBootcampLoading,
      isSuccess : isCreateBootcampSuccess,
      isError : isCreateBootcampError,
      error : createBootcampResponseError
    }
  ] = useCreateBootcampNoteMutation();

  //update course note
  const [updateCourseNote, {
      data : updateData,
      isLoading : isUpdateDataLoading,
      isSuccess : isUpdateDataSuccess,
      isError : isUpdateDataError,
      error : updateDataResponseError
    }
  ] = useUpdateCourseNoteMutation();

  //update bootcamp note
  const [updateBootcampNote, {
      data : updateBootcampData,
      isLoading : isUpdateBootcampLoading,
      isSuccess : isUpdateBootcampSuccess,
      isError : isUpdateBootcampError,
      error : updateBootcampResponseError
    }
  ] = useUpdateBootcampNoteMutation();

  //handle note action
  const handleNoteAction = (action, noteId) => {
    if (action === "edit") {
      
      let note = notes.find(n => n.id === noteId);
  
      if (note) {
        setMode("edit");
        setValue("title", note
          ?.title || "");
        setValue("note", note
          ?.note || "");
        // setValue("course_id", course
        //   ?.id || "");

        if(type === "course"){
          setValue("course_id", data_id);
        }else  if(type === "bootcamp"){
          setValue("bootcamp_id", data_id);
        }

        setNoteDataId(noteId);
      }
    } else if (action === "delete") {
      confirmDelete().then((result) => {
        if (result.isConfirmed) {
          setNoteDataId(noteId);
          // deleteCourseNote(noteId);
           if(type === "course"){
             deleteCourseNote(noteId);
           }
          else if(type === "bootcamp"){
            deleteBootcampNote(noteId);
          }
            
        }
      });
    } else if (action === "more") {}

  };

//onSubmit function
 const onSubmit = (data) => {
    const isBootcamp = type === "bootcamp";
    const isCourse = type === "course";

    if (mode === 'create') {
      if (isCourse) {
        createCourseNote(data);
      } else if (isBootcamp) {
        createBootcampNote(data);
      }
    } else if (mode === 'edit') {
      const payload = { noteData: data, noteId: noteDataId };
      
      if (isCourse) {
        updateCourseNote(payload);
      } else if (isBootcamp) {
        updateBootcampNote(payload);
      }
    }
  };

  //for delete course note
  useEffect(() => {
    if (isSuccess && data
      ?.success) {
      let filteredNotes = notes.filter(note => note.id !== data
        ?.data
          ?.id);
      setNotes(filteredNotes);
      toastSuccess(data
        ?.message || "Note deleted successfully.");
    }
    if (isError) {

      toastError(error
        ?.data
          ?.message || "Something went wrong. Please try again.");
    }
    setNoteDataId(null);
  }, [isSuccess, data, isError, error])

   //for delete bootcamp note
  useEffect(() => {
    if (bootcampDeleteIsSuccess && bootcampDeleteData
      ?.success) {
      let filteredNotes = notes.filter(note => note.id !== bootcampDeleteData
        ?.data
          ?.id);
      setNotes(filteredNotes);
      toastSuccess(bootcampDeleteData
        ?.message || "Note deleted successfully.");
    }
    if (bootcampDeleteIsError) {

      toastError(bootcampDeleteError
        ?.data
          ?.message || "Something went wrong. Please try again.");
    }
    setNoteDataId(null);
  }, [bootcampDeleteIsSuccess, bootcampDeleteData, bootcampDeleteIsError, bootcampDeleteError])

  //for create course note
  useEffect(() => {
    if (isCreateDataSuccess && createData
      ?.success) {
      setNotes((prevNotes) => [
        createData
          ?.data,
        ...prevNotes
      ]);
      toastSuccess(createData
        ?.message || "Note created successfully.");
      if(type === "course"){
        reset({ title: "", note: "", course_id: data_id }, { keepValues: false });
      }else  if(type === "bootcamp"){
        reset({ title: "", note: "", bootcamp_id: data_id }, { keepValues: false });
      }
      
    }
    if (isCreateDataError) {
      toastError(createDataResponseError
        ?.data
          ?.message || "Something went wrong. Please try again.");
    }

  }, [isCreateDataSuccess, createData, isCreateDataError, createDataResponseError])


   //for create bootcamp note
  useEffect(() => {
    if (isCreateBootcampSuccess && createBootcampData
      ?.success) {
      setNotes((prevNotes) => [
        createBootcampData
          ?.data,
        ...prevNotes
      ]);
      toastSuccess(createBootcampData
        ?.message || "Note created successfully.");
      // Reset form fields
      if(type === "course"){
        reset({ title: "", note: "", course_id: data_id }, { keepValues: false });
      }else  if(type === "bootcamp"){
        reset({ title: "", note: "", bootcamp_id: data_id }, { keepValues: false });
      }
      
    } 
    if (isCreateBootcampError) {
      toastError(createBootcampResponseError
        ?.data
          ?.message || "Something went wrong. Please try again.");
    }

  }, [isCreateBootcampSuccess, createBootcampData, isCreateBootcampError, createBootcampResponseError])

  //for update course note
  useEffect(()=>{
  
    if(isUpdateDataSuccess && updateData?.success){
      let updatedNote = updateData?.data;
      setNotes((prevNotes) => prevNotes.map(note => {
        if (note.id === updatedNote.id) {
          return {
            ...note,
            title: updatedNote.title,
            note: updatedNote.note,
          };
        }
        return note;
      }));
      toastSuccess(updateData?.message || "Note updated successfully.");
      setMode("create");
      setNoteDataId(null);
       if(type === "course"){
        reset({ title: "", note: "", course_id: data_id }, { keepValues: false });
      }else  if(type === "bootcamp"){
        reset({ title: "", note: "", bootcamp_id: data_id }, { keepValues: false });
      }
    }
    if (isUpdateDataError) {
      toastError(updateDataResponseError
        ?.data
          ?.message || "Something went wrong. Please try again.");
    }

    },[isUpdateDataSuccess, updateData, isUpdateDataError, updateDataResponseError])

    //for update bootcamp note
  useEffect(()=>{
    
    if(isUpdateBootcampSuccess && updateBootcampData?.success){
      let updatedNote = updateBootcampData?.data;
      setNotes((prevNotes) => prevNotes.map(note => {
        if (note.id === updatedNote.id) {
          return {
            ...note,
            title: updatedNote.title,
            note: updatedNote.note,
          };
        }
        return note;
      }));
      toastSuccess(updateBootcampData?.message || "Note updated successfully.");
      setMode("create");
      setNoteDataId(null);
     
        // Reset form fields
      if(type === "course"){
        reset({ title: "", note: "", course_id: data_id }, { keepValues: false });
      }else  if(type === "bootcamp"){
        reset({ title: "", note: "", bootcamp_id: data_id }, { keepValues: false });
      }
    }
    if (isUpdateBootcampError) {
      toastError(updateBootcampResponseError
        ?.data
          ?.message || "Something went wrong. Please try again.");
    }

    },[isUpdateBootcampSuccess, updateBootcampData, isUpdateBootcampError, updateBootcampResponseError])

  //set note data to state
  useEffect(() => {
    if (noteData) {
      setNotes(noteData);
    }
  
    if(type === "course"){
      setValue("course_id", data_id);
    }else  if(type === "bootcamp"){
      setValue("bootcamp_id", data_id);
    }
  }, [noteData, data_id]);



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
                  className={styles.topInput}/>

              </div>
              <small
                className="text-danger"
                style={{
                color: "red"
              }}>
                {errors.title
                  ?.message}

              </small>
            </div>
            <Controller
              name="note"
              control={control}
              render={({field}) => (<JoditEditor
              {...field}
              editorRef={editor}
              editorValue={field.value}
              setEditorValue={field.onChange}/>)}/>

            <small
              className="text-danger"
              style={{
              color: "red"
            }}>
              {errors.note
                ?.message}

            </small>
          </div>

          {noteContent
            ?.length > 0 && (
              <div className={styles.ic_btn_container}>
                {
                  mode === "edit" &&   <button
                    className={`${styles.ic_btn} ${styles.ic_cencel}`}
                    onClick={()=> { setMode("create");  reset({ title: "", note: "",course_id:course?.id }, { keepValues: false }); }}
                    
                    >
                    Cancel
                  </button>
                }
                
                <button className={`${styles.ic_btn} ${styles.ic_save}`} type="submit">
                  {
                    mode === "edit"
                      ? "Update note"
                      : "Save note"
                  }
                  {
                    (isCreateDataLoading || isUpdateDataLoading || isCreateBootcampLoading || isUpdateBootcampLoading) ? <Spin indicator={antIcon}/> : null
                  }
                </button>
              </div>
            )}
        </div>
      </form>
      {/* Notes Section */}
      
      <div className={styles.notesSection}>
        <h5 className="fw_500">Your Notes</h5>
        <div className={styles.notesGrid}>
          {
            notes.length == 0 && <NotDataFound message="No notes found." />
          }
          {notes.length > 0 && notes.map((note) => (
            <div key={note.id} className={styles.noteCard}>
              <div className={styles.noteHeader}>
                <h5 className={styles.noteTitle}>{note
                    ?.title}</h5>
                    {
                      note.user_id === user?.id && ( 
                        <div className={styles.noteActions}>
                          <button
                            className={styles.noteActionButton}
                            onClick={() => handleNoteAction("delete", note.id)}
                            title="Delete">
                            {noteDataId === note.id && (isLoading || bootcampDeleteIsLoading)
                              ? <Spin indicator={antIcon}/>
                              : <FaTrash/>
                            }
                          </button>
                          <button
                            className={styles.noteActionButton}
                            onClick={() => handleNoteAction("edit", note.id)}
                            title="Edit">
                            {noteDataId === note.id && (isLoading || bootcampDeleteIsLoading)
                              ? <Spin indicator={antIcon}/>
                              : <FaEdit/>
                        }
                          </button>
                        
                        </div>
                      )  
                    }
              
              </div>
              <div className={styles.noteContent}>
                <div
                  className={styles.notePreview}
                  dangerouslySetInnerHTML={{
                  __html: note
                    ?.note || ""
                }}/>
              </div>
            </div>
          ))}
          {notes.length === 0 && (<NotDataFound
            message={`No notes found for  'this course'}.`}/>)
}
        </div>

      </div>


    </div>
  );
};

export default Notes;
