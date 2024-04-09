import React from "react";
import Alert from "react-bootstrap/Alert";
import LoadingSpinner from "../../../common/LoadingSpinner/LoadingSpinner";
import { useUpComingdMoviesQuery } from "../../../hooks/useUpcomingMovies";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../constants/responsive";

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpComingdMoviesQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="movie-slide">
      <MovieSlider
        title="상영예정작"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMovieSlide;
