import React from "react";
import { usePopularMoviesQuery } from "../../../../src/hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import "./Banner.style.css";
import LoadingSpinner from "../../../../src/common/LoadingSpinner/LoadingSpinner";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("dddd", data);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/original${data?.results[0].backdrop_path}` +
          ")",
      }}
      className="banner"
    >
      <div className="banner-text-area">
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
