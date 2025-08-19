"use client";

import { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import {
  FaChevronDown,
  FaThumbsUp,
  FaThumbsDown,
  FaStar,
  FaHeart,
  FaReply,
  FaChevronUp,
} from "react-icons/fa";
import styles from "./discussion.module.css";

// Dynamically import Jodit to avoid SSR issues
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
    replies: [
      {
        id: "1",
        author: {
          name: "Jane Cooper",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4.98,
        },
        publishedTime: "2 months ago",
        content:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        helpful: 0,
        notHelpful: 0,
      },
    ],
    showReplies: true,
  },
];

const Discussions = () => {
  const editor = useRef(null);
  const [discussions, setDiscussions] = useState(mockDiscussions);
  const [newPost, setNewPost] = useState("");
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

  const toggleReplies = (discussionId) => {
    setDiscussions((prev) =>
      prev.map((discussion) =>
        discussion.id === discussionId
          ? { ...discussion, showReplies: !discussion.showReplies }
          : discussion
      )
    );
  };

  const handleSubmitReply = () => {
    if (replyContent.trim()) {
      console.log("New reply:", replyContent);
      setReplyContent("");
    }
  };

  const handleCancelReply = () => {
    setReplyContent("");
  };

  const handleVote = (replyId, type) => {
    console.log(`Vote ${type} for reply:`, replyId);
  };

  return (
    <div className={styles.discussionsContainer}>
      {/* Top Input Area */}
      <div className={styles.topInputContainer}>
        <img
          src="/placeholder.svg?height=40&width=40"
          alt="Your avatar"
          className={styles.userAvatar}
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className={styles.topInput}
        />
        <button className={styles.sortButton}>
          SORT BY LATEST
          <FaChevronDown className={styles.sortIcon} />
        </button>
      </div>

      {/* Discussions List */}
      <div className={styles.discussionsList}>
        {discussions.map((discussion) => (
          <div key={discussion.id} className={styles.discussionCard}>
            {/* Discussion Header */}
            <div className={styles.discussionHeader}>
              <div className={styles.authorInfo}>
                <img
                  src={discussion.author.avatar || "/placeholder.svg"}
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

            {/* Discussion Content */}
            <div className={styles.discussionContent}>
              <h3 className={styles.discussionTitle}>{discussion.title}</h3>
              {discussion.content && (
                <p className={styles.discussionText}>{discussion.content}</p>
              )}
              {discussion.codeSnippet && (
                <div className={styles.codeBlock}>
                  <pre className={styles.codeContent}>
                    {discussion.codeSnippet}
                  </pre>
                </div>
              )}
            </div>

            {/* Discussion Footer */}
            <div className={styles.discussionFooter}>
              <button className={styles.likeButton}>
                <FaThumbsUp className={styles.footerIcon} />
                Like
              </button>
              <button className={styles.followButton}>
                <FaHeart className={styles.footerIcon} />
                {discussion.followers} Flowers
              </button>
              <button className={styles.replyButton}>
                <FaReply className={styles.footerIcon} />
                Reply
              </button>
            </div>

            {/* Replies Section */}
            {discussion.replies.length > 0 && (
              <div className={styles.repliesSection}>
                <div className={styles.repliesHeader}>
                  <span className={styles.repliesCount}>
                    {discussion.replies.length} Replies
                  </span>
                  <button
                    className={styles.seeRepliesButton}
                    onClick={() => toggleReplies(discussion.id)}
                  >
                    {discussion.showReplies ? "Hide Replies" : "See Replies"}
                  </button>
                </div>

                {discussion.showReplies && (
                  <div className={styles.repliesList}>
                    {discussion.replies.map((reply) => (
                      <div key={reply.id} className={styles.replyCard}>
                        <div className={styles.replyHeader}>
                          <img
                            src={reply.author.avatar || "/placeholder.svg"}
                            alt={reply.author.name}
                            className={styles.replyAvatar}
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
            )}
          </div>
        ))}
      </div>

      {/* Rich Text Reply Editor - Always Visible */}
      <div className={styles.replyEditor}>
        <div className={styles.replyInputContainer}>
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Your avatar"
            className={styles.replyUserAvatar}
          />
          <div className={styles.editorWrapper}>
            <JoditEditor
              ref={editor}
              value={replyContent}
              config={editorConfig}
              tabIndex={1}
              onBlur={(newContent) => setReplyContent(newContent)}
              onChange={(newContent) => setReplyContent(newContent)}
            />
            <div className={styles.editorActions}>
              <button
                className={styles.cancelButton}
                onClick={handleCancelReply}
              >
                CANCEL
              </button>
              <button
                className={styles.submitButton}
                onClick={handleSubmitReply}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussions;
