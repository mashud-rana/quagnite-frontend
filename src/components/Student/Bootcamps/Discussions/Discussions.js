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
import {useCreateCourseDiscussionMutation} from '@/redux/features/student/course/courseApi';
import {antIcon, toastError, toastSuccess} from "@/utils/helper";
import {Spin} from "antd";
import NotDataFound from "@/components/Empty/NotDataFound";
import * as yup from "yup";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const JoditEditor = dynamic(() => import ("jodit-react"), {ssr: false});

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

  const editorConfig = useMemo(() => ({
    readonly: false,
    placeholder: "What are your thoughts? (Type '/' to add images, files, or links)",
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
      "file"
    ],
    removeButtons: [
      "source",
      "fullsize",
      "about",
      "outdent",
      "indent",
      "video",
      "table"
    ],
    uploader: {
      insertImageAsBase64URI: true,
      imagesExtensions: [
        "jpg",
        "png",
        "jpeg",
        "gif",
        "svg",
        "webp"
      ]
    },
    style: {
      background: "#ffffff",
      color: "#374151"
    }
  }), []);

  const handleSubmitReply = () => {
    if (replyContent.trim() && activeReplyDiscussionId) {
      const newReply = {
        id: Date
          .now()
          .toString(),
        author: {
          name: "You",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5.0
        },
        publishedTime: "Just now",
        content: replyContent,
        helpful: 0,
        notHelpful: 0
      };

      setDiscussions((prevDiscussions) => prevDiscussions.map((discussion) => discussion.id === activeReplyDiscussionId
        ? {
          ...discussion,
          replies: [
            ...discussion.replies,
            newReply
          ]
        }
        : discussion));

      setReplyContent("");
      setActiveReplyDiscussionId(null);
    }
  };

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
      setDiscussions((prevDiscussions) => [createData
        ?.data, ...prevDiscussions]);
    }
    if (isCreateDataError) {

      toastError(createDataResponseError
        ?.data
          ?.message || "Something went wrong. Please try again.");
    }

  }, [isCreateDataSuccess, createData, isCreateDataError, createDataResponseError])

  //watch for create description

  const watchDescription = watch("description", "");

  console.log("discussionsData prop:", discussions, course);

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
                  onClick={() => setActiveReplyDiscussionId(activeReplyDiscussionId === discussion.id
                  ? null
                  : discussion.id)}>
                  <RiReplyLine size={20}/>
                  Reply
                </button>
              </div>

              {activeReplyDiscussionId === discussion.id && (
                <div className={styles.replyEditor}>
                  <div className={styles.replyInputContainer}>
                    {/* <Image
                    src={img}
                    alt="Your avatar"
                    className={styles.userAvatar}
                  /> */}

                    <div className="w_100">
                      <JoditEditor
                        ref={editor}
                        value={replyContent}
                        config={editorConfig}
                        tabIndex={2}
                        onChange={(newContent) => setReplyContent(newContent)}/> {replyContent.trim() && (
                        <div className={styles.ic_btn_container}>
                          <button
                            className={`${styles.ic_btn} ${styles.ic_cencel}`}
                            onClick={handleCancelReply}>
                            Cancel
                          </button>
                          <button
                            className={`${styles.ic_btn} ${styles.ic_save}`}
                            onClick={handleSubmitReply}>
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
                <span>{discussion?.comments.length}
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
                                src={img}
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
