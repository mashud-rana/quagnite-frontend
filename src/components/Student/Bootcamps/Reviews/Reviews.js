import React from "react";
import { FaStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import styles from "./reviews.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";
import { MdArrowDownward } from "react-icons/md";

const mockReviews = [
  {
    id: "1",
    userName: "Jane Cooper",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.98,
    publishedDate: "2 months ago",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    helpful: 0,
    notHelpful: 0,
  },
  {
    id: "2",
    userName: "Jane Cooper",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.98,
    publishedDate: "2 months ago",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    helpful: 0,
    notHelpful: 0,
  },
];

const ratingBreakdown = [
  { stars: 5, count: 58, percentage: 85 },
  { stars: 4, count: 20, percentage: 30 },
  { stars: 3, count: 15, percentage: 22 },
  { stars: 2, count: 2, percentage: 3 },
  { stars: 1, count: 1, percentage: 1.5 },
];

const Reviews = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${styles.star} ${
          index < Math.floor(rating) ? styles.starFilled : styles.starEmpty
        }`}
      />
    ));
  };

  return (
    <div className={styles.reviewsContainer}>
      {/* Header */}
      <div className={styles.header}>
        <h6 className={styles.title}>Student feedback</h6>
      </div>

      {/* Rating Summary Section */}
      <div className={styles.ratingSummary}>
        <div className={styles.overallRating}>
          <h4 className={styles.ratingScore}>4.96</h4>
          <div className={styles.ratingLabel}>Course Rating</div>
          <p>3,014 reviews</p>
        </div>

        <div className={styles.ratingBreakdown}>
          {ratingBreakdown.map((item) => (
            <div key={item.stars} className={styles.ratingRow}>
              <span className={styles.starLabel}>{item.stars} Star</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <span className={styles.ratingCount}>{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className={styles.reviewsSection}>
        <div className={styles.reviewsHeader}>
          <p className={styles.reviewsTitle}>Reviews</p>
          <div className={styles.reviewsControls}>
            <p>Filter ratings</p>
            <button className={styles.recentButton}>
              RECENT REVIEWS
              <MdArrowDownward className={styles.dropdownIcon} />
            </button>
          </div>
        </div>

        {/* Review Input */}
        <div className={styles.reviewInput}>
          <Image
            src={img}
            width={50}
            height={50}
            alt="Your avatar"
            className={styles.inputAvatar}
          />
          <input
            type="text"
            placeholder="Type Your Reviews and Press Enter..."
            className={styles.reviewTextInput}
          />
        </div>

        {/* Reviews List */}
        <div className={styles.reviewsList}>
          {mockReviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <Image
                  src={img}
                  width={40}
                  height={40}
                  alt={review.userName}
                  className={styles.reviewAvatar}
                />
                <div className={styles.reviewMeta}>
                  <h4 className={styles.reviewerName}>{review.userName}</h4>
                  <div className={styles.reviewRating}>
                    <div className={styles.stars}>
                      {renderStars(review.rating)}
                    </div>
                    <span className={styles.ratingValue}>{review.rating}</span>
                    <span className={styles.publishDate}>
                      Published {review.publishedDate}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.reviewContent}>
                <p className={styles.reviewText}>{review.content}</p>
              </div>

              <div className={styles.reviewActions}>
                <button className={styles.helpfulButton}>
                  <FaThumbsUp className={styles.actionIcon} />
                  Helpful
                </button>
                <button className={styles.notHelpfulButton}>
                  <FaThumbsDown className={styles.actionIcon} />
                  Not helpful
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
