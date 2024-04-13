import React from "react";
import { Alert } from "react-bootstrap";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";
import "./MovieReview.style.css";
import { useMovieReviewQuery } from "../../../../hooks/useMovieReview";
import MovieReviewBox from "../MovieReviewBox/MovieReviewBox";

const MovieReview = ({ id }) => {
  const {
    data: review,
    isLoading,
    isError,
    error,
  } = useMovieReviewQuery({ id });
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div className="detail-review-wrap">
      <h2>영화 리뷰</h2>
      {review?.map((review, index) => (
        <MovieReviewBox review={review} key={index} />
      ))}
    </div>
  );
};

export default MovieReview;
