import ReviewCard from "@/components/Coach/Community/ReviewCard/ReviewCard";
import React from "react";

const ReviewsPage = () => {
  const reviews = [
    {
      id: 1,
      name: "Leslie Alexander",
      title: "Product Designer",
      image: "/reviewer1.png",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc ",
    },
    {
      id: 2,
      name: "Michael Johnson",
      title: "Software Engineer",
      image: "/reviewer2.png",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc ",
    },
    {
      id: 3,
      name: "Sophia Lee",
      title: "Entrepreneur",
      image: "/reviewer3.png",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc ",
    },
  ];

  return (
    <div>
      <div className="ic_grid2">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
