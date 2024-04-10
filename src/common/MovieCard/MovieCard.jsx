import React from "react";
import "./MovieCard.style.css";
import Badge from "react-bootstrap/Badge";
import { FaStar } from "react-icons/fa";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };
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
        <h1>
          <span>{movie.title}</span>
          {movie.adult ? (
            <span className="age-limit over18">19</span>
          ) : (
            <span className="age-limit under18">All</span>
          )}
        </h1>

        <div>
          <div className="fz-14">
            평균
            <span className="star">
              <FaStar />
            </span>
            {movie.vote_average.toFixed(1)}
          </div>
        </div>
        <div className="movie-genre">
          {showGenre(movie.genre_ids).map((genre, index) => (
            <span className="movieCard-badge" key={index}>
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
