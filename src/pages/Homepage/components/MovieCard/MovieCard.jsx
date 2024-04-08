import React from "react";
import "./MovieCard.style.css";
import Badge from "react-bootstrap/Badge";
import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>

        <div>
          <div className="fz-14">
            평균
            <span className="star">
              <FaStar />
            </span>
            {movie.vote_average.toFixed(1)}
          </div>
          <div className="fz-12 fw-normal">
            누적 관객 수 {movie.popularity.toFixed(0)}명
          </div>
          <div className="age-limit fz-12">
            {movie.adult ? "over18" : "under18"}
          </div>
        </div>
        <div className="movie-genre">
          {movie.genre_ids.map((id) => (
            <Badge bg="danger">{id}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
