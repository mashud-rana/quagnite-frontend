"use client";

import {useState, useRef, useMemo, useEffect} from "react";
import dynamic from "next/dynamic";
import {
  FaChevronDown,
  FaThumbsUp,
  FaThumbsDown,
  FaStar,
  FaReply,
  FaChevronUp,
  FaUser
} from "react-icons/fa";
import styles from "./discussion.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";
import {IoArrowDown} from "react-icons/io5";
import {RiReplyLine} from "react-icons/ri";
import {useCreateCourseDiscussionMutation, useCreateDiscussionCommentMutation} from '@/redux/features/student/course/courseApi';
import {antIcon, toastError, toastSuccess} from "@/utils/helper";
import {Spin} from "antd";
import NotDataFound from "@/components/Empty/NotDataFound";
import * as yup from "yup";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

// const JoditEditor = dynamic(() => import ("jodit-react"), {ssr: false});
const JoditEditor = dynamic(() => import ("@/components/Share/Editor/JoditEditor/JoditEditor"), {ssr: false});

//schema for form create validation
const createSchema = yup.object({
  course_id: yup
    .string()
    .required("Course ID is required"),
  description: yup
    .string()
    .required("Discussion content is required")
    .min(5, "Discussion content must be at least 5 characters")
});
//reply discussion schema
const createReplySchema = yup.object({
  discussion_id: yup
    .string()
    .required("Discussion ID is required"),
  comment: yup
    .string()
    .required("Comment content is required")
    .min(5, "Comment content must be at least 5 characters")
});
const Discussions = ({discussionsData, courseDetails}) => {
  const editor = useRef(null);
  const [newPost,
    setNewPost] = useState("");
  const [replyContent,
    setReplyContent] = useState("");
  const [activeReplyDiscussionId,
    setActiveReplyDiscussionId] = useState(null);
  const [discussions,
    setDiscussions] = useState({});
  const [course,
    setCourse] = useState({});
  //create discussion mutation
  const [createCourseDiscussion, {
      data : createData,
      isLoading : isCreateDataLoading,
      isSuccess : isCreateDataSuccess,
      isError : isCreateDataError,
      error : createDataResponseError
    }
  ] = useCreateCourseDiscussionMutation();
  //create discussion comment mutation
  const [createDiscussionComment, {
      data : createCommentData,
      isLoading : createCommentIsLoading,
      isSuccess : createCommentIsSuccess,
      isError : createCommentIsError,
      error : createCommentResponseError
    }
  ] = useCreateDiscussionCommentMutation();

  //Create Form Validation
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
  } = useForm({resolver: yupResolver(createSchema)});
  //reply form validation
  const {
    register: replyRegister,
    handleSubmit: replyHandleSubmit,
    formState: {
      errors: replyErrors
    },
    setValue: replySetValue,
    setError: replySetError,
    control: replyControl,
    watch: replyWatch,
    reset: replyReset
  } = useForm({resolver: yupResolver(createReplySchema)});

  //watch for create description

  const watchDescription = watch("description", "");
  //watch reply comment
  const watchReplyComment = replyWatch("comment", "");
  const watchReplyDiscussionId = replyWatch("discussion_id", "");

  const handleCancelReply = () => {
    setReplyContent("");
    setActiveReplyDiscussionId(null);
  };

  const handleVote = (replyId, type) => {
    console.log(`Vote ${type} for reply:`, replyId);
  };

  //submit create discussion
  const onSubmit = (data) => {
    createCourseDiscussion(data);
    // console.log("Create discussion data:", data); createCourseDiscussion(data);

  }
  const onSubmitReply = (data) => {
    createDiscussionComment(data);
    // console.log("Create discussion reply data:", data);

  }

  const resetCreateForm = () => {
    reset({
      description: "",
      course_id: course
        ?.id
    }, {keepValues: false});
  }

  //initialize data when props change
  useEffect(() => {
    setDiscussions(discussionsData);
    setCourse(courseDetails);
    //set course id for create discussion form
    setValue("course_id", courseDetails
      ?.id || "");
  }, [discussionsData, courseDetails])

  //crete discussion success
  useEffect(() => {
    if (isCreateDataSuccess && createData
      ?.success) {
      resetCreateForm();
      toastSuccess(createData
        ?.message || "Discussion created successfully");
      //set created discussion data to top of the list
      setDiscussions((prevDiscussions) => [
        createData
          ?.data,
        ...prevDiscussions
      ]);
    }
    if (isCreateDataError) {

      toastError(createDataResponseError
        ?.data
          ?.message || "Something went wrong. Please try again.");
    }

  }, [isCreateDataSuccess, createData, isCreateDataError, createDataResponseError])

  //create discussion comment success

  useEffect(() => {
    if (createCommentIsSuccess && createCommentData
      ?.success) {
      setDiscussions((prevDiscussions) => {
        return prevDiscussions.map(discussion => {
          if (discussion.id === watchReplyDiscussionId) {
            return {
              ...discussion,
              comments: [
                createCommentData
                  ?.data,
                ...discussion.comments
              ]
            }
          }
          return discussion;
        })
      });
      //reset reply form
      replyReset({
        comment: "",
        discussion_id: ""
      }, {keepValues: false});
      toastSuccess(createCommentData
        ?.message || "Discussion created successfully");
    }
    if (createCommentIsError) {

      toastError(createCommentResponseError
        ?.data
          ?.message || "Something went wrong. Please try again.");
    }
  }, [createCommentIsSuccess, createCommentData, createCommentIsError, createCommentResponseError])

  // console.log("discussionsData prop:", discussions, course); console.log('reply
  // comment:', watchReplyComment, 'discussion id:', watchReplyDiscussionId);

  return (
    <div className={styles.discussionsContainer}>
      {/* Top Input Area */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.topInputContainer}>
          <Image src={img} alt="Your avatar" className={styles.userAvatar}/>
          <input
            type="text"
            placeholder="What's on your mind?"
            {...register("description")}
            className={styles.topInput}/>
        </div>
        <small className="text-danger" style={{
          color: "red"
        }}>
          {errors.description
            ?.message}

        </small>
        {watchDescription.trim() && (
          <div className={styles.ic_btn_container}>
            <button type="button" className={`${styles.ic_btn} ${styles.ic_cencel}`} onClick={() => {
              reset({
                description: "",
                course_id: course
                  ?.id
              });
            }} // optional, clear form
            >
              Cancel
            </button>
            <button className={`${styles.ic_btn} ${styles.ic_save}`} type="submit">
              Submit
            </button>
          </div>
        )
}

      </form>

      <div className={styles.ic_btn_container}>
        <button className={`ic_common_primary_btn ${styles.ic_flex}`}>
          SORT BY LATEST
          <IoArrowDown className={styles.sortIcon}/>
        </button>
      </div>

      {/* Discussions List */}
      <div className={styles.discussionsList}>

        {discussions.length > 0 && discussions
          ?.map((discussion) => (
            <div key={discussion.id}>

              <div className={styles.discussionHeader}>
                <div className={styles.authorInfo}>
                  <Image
                    src={discussion
                    ?.user
                      ?.avatar_url}
                    alt={discussion
                    ?.user
                      ?.full_name}
                    width={40}
                    height={40}
                    className={styles.authorAvatar}/>
                  <div className={styles.authorDetails}>
                    <h4 className={styles.authorName}>
                      {discussion
                        ?.user
                          ?.full_name}
                    </h4>
                    <div className={styles.discussionMeta}>
                      {/* <div className={styles.rating}>
                      <FaStar className={styles.starIcon} />
                      <span>{discussion.author.rating}</span>
                    </div> */}
                      <span className={styles.publishTime}>
                        Published {discussion
                          ?.created_at}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.discussionActions}>
                  <button className={styles.actionButton}>
                    <FaChevronUp/>
                  </button>
                  <button className={styles.actionButton}>
                    <FaReply/>
                  </button>
                  <button className={styles.actionButton}>
                    <FaChevronUp/>
                  </button>
                </div>
              </div>

              {/* <div className={styles.tagsContainer}>
              {discussion.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div> */}

              <div className={styles.reviewActions}>
                <button className={styles.helpfulButton}>
                  <FaThumbsUp/>
                  Helpful
                </button>
                <button className={styles.notHelpfulButton}>
                  <FaUser/>
                  0 Followers
                </button>
                <button
                  className={styles.notHelpfulButton}
                  onClick={() => {
                  replySetValue("discussion_id", watchReplyDiscussionId == discussion.id
                    ? null
                    : discussion.id);
                }}>
                  <RiReplyLine size={20}/>
                  Reply
                </button>
              </div>

              {watchReplyDiscussionId === discussion.id && (
                <form onSubmit={replyHandleSubmit(onSubmitReply)}>
                  <div className={styles.replyEditor}>
                    <div className={styles.replyInputContainer}>
                      {/* <Image
                      src={img}
                      alt="Your avatar"
                      className={styles.userAvatar}
                    /> */}

                      <div className="w_100">

                        <Controller
                          name="comment"
                          control={replyControl}
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
                          {replyErrors.comment
                            ?.message}

                        </small>

                        {watchReplyComment && (
                          <div className={styles.ic_btn_container}>
                            <button
                              className={`${styles.ic_btn} ${styles.ic_cencel}`}
                              onClick={handleCancelReply}>
                              Cancel
                            </button>
                            <button className={`${styles.ic_btn} ${styles.ic_save}`} type="submit">
                              Save Comment {
                                createCommentIsLoading
                                  ? <Spin indicator={antIcon} />
                                  : ""
                              }
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              )}

              <div className={styles.discussionContent}>
                <h3 className={styles.discussionTitle}>{discussion.title}</h3>
                {/* {discussion.codeSnippet && (
                <div className={styles.codeBlock}>
                  <span className={styles.codeContent}>
                    {discussion.codeSnippet}
                  </span>
                </div>
              )} */}
                {discussion.description && (<div
                  className={styles.codeBlock}
                  dangerouslySetInnerHTML={{
                  __html: discussion.description || ""
                }}/>)}
              </div>

              <div className={styles.ic_reply_container}>
                <span>{discussion
                    ?.comments.length}  
                    &nbsp;
                  Replies</span>
                <span>See Replies</span>
              </div>

              {discussion
                ?.comments.length > 0 && (
                  <div className={styles.repliesSection}>
                    {discussion
                      ?.comments
                        .map((reply) => (
                          <div key={reply.id} className={styles.replyCard}>
                            <div className={styles.replyHeader}>
                              <Image
                                src={reply?.user?.avatar_url}
                                alt={reply
                                ?.user
                                  ?.full_name}
                                className={styles.authorAvatar}
                                width={40}
                                height={40}/>
                              <div className={styles.replyAuthorInfo}>
                                <h5 className={styles.replyAuthorName}>
                                  {reply
                                    ?.user
                                      ?.full_name}
                                </h5>
                                <div className={styles.replyMeta}>
                                  {/* <div className={styles.rating}>
                            <FaStar className={styles.starIcon} />
                            <span>{reply.author.rating}</span>
                          </div> */}
                                  <span className={styles.publishTime}>
                                    Published {reply
                                      ?.created_at}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p
                              className={styles.replyContent}
                              dangerouslySetInnerHTML={{
                              __html: reply.comment || ""
                            }}></p>
                            <div className={styles.replyActions}>
                              <button
                                className={styles.voteButton}
                                onClick={() => handleVote(reply.id, "helpful")}>
                                <FaThumbsUp className={styles.voteIcon}/>
                                Helpful
                              </button>
                              <button
                                className={styles.voteButton}
                                onClick={() => handleVote(reply.id, "notHelpful")}>
                                <FaThumbsDown className={styles.voteIcon}/>
                                Not helpful
                              </button>
                            </div>
                          </div>
                        ))}
                  </div>
                )}
            </div>
          ))}
        {/* {discussions.map((discussion) => (
          <div key={discussion.id}>

            <div className={styles.discussionHeader}>
              <div className={styles.authorInfo}>
                <Image
                  src={img}
                  alt={discussion.author.name}
                  className={styles.authorAvatar}
                />
                <div className={styles.authorDetails}>
                  <h4 className={styles.authorName}>
                    {discussion.author.name}
                  </h4>
                  <div className={styles.discussionMeta}>
                    <div className={styles.rating}>
                      <FaStar className={styles.starIcon} />
                      <span>{discussion.author.rating}</span>
                    </div>
                    <span className={styles.publishTime}>
                      Published {discussion.publishedTime}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.discussionActions}>
                <button className={styles.actionButton}>
                  <FaChevronUp />
                </button>
                <button className={styles.actionButton}>
                  <FaReply />
                </button>
                <button className={styles.actionButton}>
                  <FaChevronUp />
                </button>
              </div>
            </div>


            <div className={styles.tagsContainer}>
              {discussion.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>


            <div className={styles.reviewActions}>
              <button className={styles.helpfulButton}>
                <FaThumbsUp />
                Helpful
              </button>
              <button className={styles.notHelpfulButton}>
                <FaUser />
                {discussion.followers} Followers
              </button>
              <button
                className={styles.notHelpfulButton}
                onClick={() =>
                  setActiveReplyDiscussionId(
                    activeReplyDiscussionId === discussion.id
                      ? null
                      : discussion.id
                  )
                }
              >
                <RiReplyLine size={20} />
                Reply
              </button>
            </div>


            {activeReplyDiscussionId === discussion.id && (
              <div className={styles.replyEditor}>
                <div className={styles.replyInputContainer}>
                  <Image
                    src={img}
                    alt="Your avatar"
                    className={styles.userAvatar}
                  />

                  <div className="w_100">
                    <JoditEditor
                      ref={editor}
                      value={replyContent}
                      config={editorConfig}
                      tabIndex={2}
                      onChange={(newContent) => setReplyContent(newContent)}
                    />

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
                </div>
              </div>
            )}


            <div className={styles.discussionContent}>
              <h3 className={styles.discussionTitle}>{discussion.title}</h3>
              {discussion.codeSnippet && (
                <div className={styles.codeBlock}>
                  <span className={styles.codeContent}>
                    {discussion.codeSnippet}
                  </span>
                </div>
              )}
            </div>

            <div className={styles.ic_reply_container}>
              <span>{discussion.replies.length} Replies</span>
              <span>See Replies</span>
            </div>


            {discussion.replies.length > 0 && (
              <div className={styles.repliesSection}>
                {discussion.replies.map((reply) => (
                  <div key={reply.id} className={styles.replyCard}>
                    <div className={styles.replyHeader}>
                      <Image
                        src={img}
                        alt={reply.author.name}
                        className={styles.authorAvatar}
                      />
                      <div className={styles.replyAuthorInfo}>
                        <h5 className={styles.replyAuthorName}>
                          {reply.author.name}
                        </h5>
                        <div className={styles.replyMeta}>
                          <div className={styles.rating}>
                            <FaStar className={styles.starIcon} />
                            <span>{reply.author.rating}</span>
                          </div>
                          <span className={styles.publishTime}>
                            Published {reply.publishedTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className={styles.replyContent}>{reply.content}</p>
                    <div className={styles.replyActions}>
                      <button
                        className={styles.voteButton}
                        onClick={() => handleVote(reply.id, "helpful")}
                      >
                        <FaThumbsUp className={styles.voteIcon} />
                        Helpful
                      </button>
                      <button
                        className={styles.voteButton}
                        onClick={() => handleVote(reply.id, "notHelpful")}
                      >
                        <FaThumbsDown className={styles.voteIcon} />
                        Not helpful
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Discussions;
