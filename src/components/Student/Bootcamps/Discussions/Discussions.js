"use client";

import { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import {
  FaChevronDown,
  FaThumbsUp,
  FaThumbsDown,
  FaStar,
  FaReply,
  FaChevronUp,
  FaUser,
} from "react-icons/fa";
import styles from "./discussion.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";
import { IoArrowDown } from "react-icons/io5";
import { RiReplyLine } from "react-icons/ri";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const mockDiscussions = [
  {
    id: "1",
    author: {
      name: "Jane Cooper",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.98,
    },
    publishedTime: "2 months ago",
    title: "Help",
    content: "",
    codeSnippet: `df = pd.read_csv('advertising.csv', index_col=0)
is not working`,
    tags: ["data science", "programming", "data visualization"],
    likes: 0,
    followers: 20,
    replies: [],
    showReplies: true,
  },
];

const Discussions = () => {
  const editor = useRef(null);
  const [discussions, setDiscussions] = useState(mockDiscussions);
  const [newPost, setNewPost] = useState("");
  const [replyContent, setReplyContent] = useState("");
  const [activeReplyDiscussionId, setActiveReplyDiscussionId] = useState(null);

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
    if (replyContent.trim() && activeReplyDiscussionId) {
      const newReply = {
        id: Date.now().toString(),
        author: {
          name: "You",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5.0,
        },
        publishedTime: "Just now",
        content: replyContent,
        helpful: 0,
        notHelpful: 0,
      };

      setDiscussions((prevDiscussions) =>
        prevDiscussions.map((discussion) =>
          discussion.id === activeReplyDiscussionId
            ? { ...discussion, replies: [...discussion.replies, newReply] }
            : discussion
        )
      );

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

  return (
    <div className={styles.discussionsContainer}>
      {/* Top Input Area */}
      <div className={styles.topInputContainer}>
        <Image src={img} alt="Your avatar" className={styles.userAvatar} />
        <input
          type="text"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className={styles.topInput}
        />
      </div>

      <div className={styles.ic_btn_container}>
        <button className={`ic_common_primary_btn ${styles.ic_flex}`}>
          SORT BY LATEST
          <IoArrowDown className={styles.sortIcon} />
        </button>
      </div>

      {/* Discussions List */}
      <div className={styles.discussionsList}>
        {discussions.map((discussion) => (
          <div key={discussion.id}>
            {/* Discussion Header */}
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

            {/* Tags */}
            <div className={styles.tagsContainer}>
              {discussion.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Reactions */}
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

            {/* Reply Editor */}
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

            {/* Discussion Content */}
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

            {/* Replies Section */}
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
        ))}
      </div>
    </div>
  );
};

export default Discussions;
