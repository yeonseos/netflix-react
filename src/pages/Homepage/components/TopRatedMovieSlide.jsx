import React from "react";
import Alert from "react-bootstrap/Alert";
import LoadingSpinner from "../../../common/LoadingSpinner/LoadingSpinner";
import { useTopRatedMoviesQuery } from "../../../hooks/useTopRatedMovies";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../constants/responsive";

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="movie-slide">
      <MovieSlider
        title="죽기 전에 꼭 봐야 할 명작"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatedMovieSlide;
