import React, {useState, useEffect} from "react";
import {FaStar, FaThumbsUp, FaThumbsDown} from "react-icons/fa";
import styles from "./reviews.module.css";
import img from "@/assets/images/all/instractor.png";
import Image from "next/image";
import {MdArrowDownward} from "react-icons/md";
import {set} from 'nprogress';
import {useSelector} from "react-redux";
import RatingComponent from "@/components/Share/Rating/RatingComponent";
import NotDataFound from "@/components/Empty/NotDataFound";
import * as yup from "yup";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {antIcon, toastError, toastSuccess} from "@/utils/helper";
import {Spin} from "antd";
import {useCreateReviewMutation} from "@/redux/features/student/course/courseApi";
import {useCreateBootcampReviewMutation} from "@/redux/features/student/bootcamp/bootcampApi";
import {useMakeVoteMutation} from "@/redux/features/student/vote/voteApi";


//validation schema
const schema = yup.object({
  course_id: yup
    .string()
    .required("Course ID is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5"),
  comment: yup
    .string()
    .required("Note content is required")
    .min(5, "Note content must be at least 5 characters")
});

const bootcampSchema = yup.object({
  bootcamp_id: yup
    .string()
    .required("Bootcamp ID is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5"),
  comment: yup
    .string()
    .required("Note content is required")
    .min(5, "Note content must be at least 5 characters")
});

const Reviews = ({reviewData, reviews, data_id, type}) => {
  const [allReviewData,
    setAllReviewData] = useState({});
  const [allReviews,
    setAllReviews] = useState([]);
  // const [course,
  //   setCourse] = useState({});
  const {user} = useSelector((state) => state.auth);
  const [orderBy, setOrderBy] = useState("latest");



  //create review mutation for course
  const [createReview, {
      data : createData,
      isLoading : isCreateDataLoading,
      isSuccess : isCreateDataSuccess,
      isError : isCreateDataError,
      error : createDataResponseError
    }
  ] = useCreateReviewMutation();
   //create review mutation for bootcamp
  const [createBootcampReview, {
      data : createBootcampData,
      isLoading : isCreateBootcampDataLoading,
      isSuccess : isCreateBootcampDataSuccess,
      isError : isCreateBootcampDataError,
      error : createBootcampDataResponseError
    }
  ] = useCreateBootcampReviewMutation();
  //review vote mutation
  const [reviewVote, {
      data : reviewVoteData,
      isLoading : isReviewVoteLoading,
      isSuccess : isReviewVoteSuccess,
      isError : isReviewVoteError,
      error : reviewVoteResponseError
    }
  ] = useMakeVoteMutation();
  

  //create review form
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
    } = useForm({resolver: yupResolver(type =='course'? schema: bootcampSchema)});


  const renderStars = (rating) => {
    return Array.from({
      length: 5
    }, (_, index) => (<FaStar
      key={index}
      className={`${styles.star} ${index < Math.floor(rating)
      ? styles.starFilled
      : styles.starEmpty}`}/>));
  };
  //reset form
  const resetForm = () => {
    if(type =='course'){
       reset({
        rating: "",
        comment: "",
        course_id: data_id
      }, {keepValues: false});
    }else if(type == 'bootcamp'){
       reset({
        rating: "",
        comment: "",
        bootcamp_id: data_id
      }, {keepValues: false});
    }
   
  }
  //create review submit
  const onSubmit = (data) => {
    if(type == 'course'){
      createReview(data);
    }else if(type == 'bootcamp'){
      createBootcampReview(data);
    }
    // console.log("Review submit data", data);

  }
  const sortByHandler = () => {
    if (orderBy === "latest") {
      // sort by id ASC
      const sorted = [...allReviews].sort((a, b) => a.id - b.id);
      setAllReviews(sorted);
    } else {
      // sort by id DESC
      const sorted = [...allReviews].sort((a, b) => b.id - a.id);
      setAllReviews(sorted);
    }

    // toggle state
    setOrderBy((prev) => (prev === "latest" ? "oldest" : "latest"));
  };

  //create review useEffect for course
  useEffect(() => {
    if (isCreateDataSuccess && createData
      ?.success) {
      resetForm();
      toastSuccess(createData
        ?.message || "Discussion created successfully");
      //set created discussion data to top of the list
     
       setAllReviews(prev => [
        createData
          ?.data.review,
        ...prev
      ]);
      setAllReviewData({
        ...createData?.data?.data?.review_data
      });
    }
    if (isCreateDataError) {

      toastError(createDataResponseError
        ?.data
          ?.message || "Something went wrong. Please try again.");
    }

  }, [isCreateDataSuccess, createData, isCreateDataError, createDataResponseError])


    //create review useEffect for bootcamp
  useEffect(() => {
    if (isCreateBootcampDataSuccess && createBootcampData
      ?.success) {
      resetForm();
      toastSuccess(createBootcampData
        ?.message || "Discussion created successfully");
      //set created discussion data to top of the list
      setAllReviews(prev => [
        createBootcampData
          ?.data.review,
        ...prev
      ]);
       setAllReviewData({
        ...createBootcampData?.data?.data?.review_data
      });
    }
    if (isCreateBootcampDataError) {

      toastError(createBootcampDataResponseError
        ?.data
          ?.message || "Something went wrong. Please try again.");
    }

  }, [isCreateBootcampDataSuccess, createBootcampData, isCreateBootcampDataError, createBootcampDataResponseError])

  //set data
  useEffect(() => {
    if (reviewData) {
      setAllReviewData(reviewData);
    }
    if (reviews) {
      setAllReviews((prev) => {
        return [...reviews]
      });
    }
    if(type == 'course'){
      setValue("course_id", data_id);
    }else if(type == 'bootcamp'){
      setValue("bootcamp_id", data_id);
    }

  }, [reviewData, reviews]);

  //review vote useEffect
  useEffect(() => {
  if (isReviewVoteSuccess && reviewVoteData) {
    console.log("Review vote data", reviewVoteData);

    setAllReviews((prevReviews) =>
      prevReviews.map((r) => {
        if (r.id === reviewVoteData?.votable?.id) {
          return {
            ...r,
            ...reviewVoteData.votable
          };
        }
        return r; // must return the unchanged review
      })
    );

    toastSuccess("Review vote submitted successfully");
  }

   if (isReviewVoteError) {
      toastError(reviewVoteResponseError
        ?.data
          ?.message || "Something went wrong. Please try again.");
    }
}, [isReviewVoteSuccess, reviewVoteData, isReviewVoteError, reviewVoteResponseError]);


  //watch review input
  const watchRating = watch("rating");
  const watchComment = watch("comment");
  console.log("watch review input",allReviews);

  return (
    <div className={styles.reviewsContainer}>
      {/* Header */}
      <div className={styles.header}>
        <h6 className={styles.title}>Student feedback</h6>
      </div>

      {/* Rating Summary Section */}
      <div className={styles.ratingSummary}>
        <div className={styles.overallRating}>
          <h4 className={styles.ratingScore}>{allReviewData.average_rating}</h4>
          <div className={styles.ratingLabel}>Course Rating</div>
          <p>{allReviewData.reviews_count}&nbsp;reviews</p>
        </div>

        <div className={styles.ratingBreakdown}>
          {allReviewData && allReviewData.percentageRatings && allReviewData
            .percentageRatings
            .map((item) => (
              <div key={item.stars} className={styles.ratingRow}>
                <span className={styles.starLabel}>{item.stars}&nbsp;Star</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{
                    width: `${item.percentage}%`
                  }}></div>
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
            <button className={styles.recentButton} onClick={sortByHandler}>
              {
                orderBy === "latest" ? "OLDEST" : "RECENT"
              }
              &nbsp; REVIEWS
              <MdArrowDownward className={styles.dropdownIcon}/>
            </button>
          </div>
        </div>
        {
          !reviewData.is_reviewed && (
          
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.reviewInput}>
                  
                  <div>
                    <Controller
                      name="rating"
                      control={control}
                      render={({field}) => (<RatingComponent ratingValue={field.value} setRatingValue={field.onChange}/>)}/>
                    <small
                      className="text-danger"
                      style={{
                      color: "red"
                    }}>
                      {errors.rating
                        ?.message}

                    </small>
                  </div>
                  <br/>
                  <div style={{
                    display: "flex",
                  }}>
                    <Image
                      src={user
                      ?.avatar_url}
                      width={50}
                      height={50}
                      alt="Your avatar"
                      className={styles.inputAvatar}/>
                    <input
                      type="text"
                      placeholder="Type Your Reviews and Press Enter..."
                      className={styles.reviewTextInput}
                      {...register("comment")}/>
                    
                  </div>
                  <small
                      className="text-danger"
                      style={{
                      color: "red"
                    }}>
                      {errors.comment
                        ?.message}

                    </small>

                </div>
                {watchComment && (
                  <div className={styles.ic_btn_container}>
                    <button className={`${styles.ic_btn} ${styles.ic_cencel}`} onClick={resetForm}>
                      Cancel
                    </button>
                    <button className={`${styles.ic_btn} ${styles.ic_save}`} type="submit">
                      Save Review {isCreateDataLoading || isCreateBootcampDataLoading
                        ? <Spin indicator={antIcon}/>
                        : ""
                        }
                    </button>
                  </div>
                )}
              </form>
          )
        }
        

        {/* Reviews List */}
        <div className={styles.reviewsList}>
          {
            allReviews.length === 0 && (<NotDataFound message="No reviews found." />)
          }
          {allReviews.length > 0 && allReviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <Image
                  src={review
                  ?.user
                    ?.avatar_url}
                  width={40}
                  height={40}
                  alt={review
                  ?.user
                    ?.full_name}
                  className={styles.reviewAvatar}/>
                <div className={styles.reviewMeta}>
                  <h4 className={styles.reviewerName}>{review?.user?.full_name}</h4>
                  <div className={styles.reviewRating}>
                    <div className={styles.stars}>
                      {renderStars(review
                        ?.rating)}
                    </div>
                    <span className={styles.ratingValue}>{review
                        ?.rating}</span>
                    <span className={styles.publishDate}>
                      Published {review
                        ?.created_at}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.reviewContent}>
                <p
                  className={styles.reviewText}
                  dangerouslySetInnerHTML={{
                  __html: review
                    ?.comment
                }}/>
              </div>

              <div className={styles.reviewActions}>
                <button className={ review?.my_vote ? (
                     review?.my_vote?.type == 'helpful' ? styles.helpfulButton : styles.notHelpfulButton 
                  ) : styles.notHelpfulButton  } onClick={() => {

                    reviewVote({
                      votable_id: review?.id,
                      votable_type: 'review',
                      type: 'helpful'
                    })

                  }}>
                  <FaThumbsUp className={styles.actionIcon} />
                  Helpful {
                    review?.helpful_votes_count > 0 ? `(${review?.helpful_votes_count})` : ''
                  } 
                </button>
                <button className={ review?.my_vote ? (
                     review?.my_vote?.type == 'unhelpful' ? styles.helpfulButton : styles.notHelpfulButton 
                  ) : styles.notHelpfulButton  } onClick={() => {
                    reviewVote({
                      votable_id: review?.id,
                      votable_type: 'review',
                      type: 'unhelpful'
                    })

                  }}>
                  <FaThumbsDown className={styles.actionIcon}/>
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
