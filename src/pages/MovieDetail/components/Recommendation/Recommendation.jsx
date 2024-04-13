import React from "react";
import { Alert } from "react-bootstrap";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";

import "./Recommendation.style.css";
import { useMovieRecommendationQuery } from "../../../../hooks/useMovieRecommendation";
import MovieCard from "../../../../common/MovieCard/MovieCard";

const Recommendation = ({ id }) => {
  const { data, isLoading, isError, error } = useMovieRecommendationQuery({
    id,
  });
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div className="recommend-wrap">
      <h2>추천 영화</h2>
      <div className="movieList-area">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
