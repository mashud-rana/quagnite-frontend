"use client";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export default function RatingComponent({ ratingValue, setRatingValue }) {
  return (
    <Rating
      style={{ maxWidth: 180 }}
      value={ratingValue || ''} // default to '' if null
      onChange={setRatingValue}
    />
  );
}
