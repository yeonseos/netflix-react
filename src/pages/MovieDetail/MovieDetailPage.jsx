import React from "react";
import { Alert } from "react-bootstrap";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router-dom";
import MovieDetailInfo from "./components/MovieDetailInfo/MovieDetailInfo";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import "./MovieDetailPage.style.css";
import MovieReview from "./components/MovieReview/MovieReview";
import Recommendation from "./components/Recommendation/Recommendation";

const MovieDetailPage = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useMovieDetailQuery({ id });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="detail-page-wrap">
      <MovieDetailInfo movie={movie} id={id} />
      <MovieReview id={id} />
      <Recommendation id={id} />
    </div>
  );
};

export default MovieDetailPage;
