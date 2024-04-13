import React from "react";
import "./MovieDetailInfo.style.css";
import MoviePreview from "../MoviePreview/MoviePreview";

const MovieDetailInfo = ({ movie }) => {
  const priceToString = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className="detail-info-wrap">
      <div className="detail-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          className="poster-image"
          alt="poster"
        />
      </div>
      <div className="detail-info">
        <div className="detail-badges">
          {movie?.genres.map((item, index) => (
            <span key={index}>{item.name}</span>
          ))}
        </div>
        <div className="detail-title">{movie?.title}</div>
        <div className="detail-subtitle">{movie?.tagline}</div>
        <div className="detail-overview">{movie?.overview}</div>
        <ul className="detail-info-list">
          <li>
            <span>제작비</span>
            {priceToString(movie?.budget)} 달러
          </li>
          <li>
            <span>수익</span>
            {priceToString(movie?.revenue)} 달러
          </li>
          <li>
            <span>개봉일</span>
            {movie?.release_date}
          </li>
          <li>
            <span>러닝타임</span>
            {movie?.runtime}분
          </li>
        </ul>
        <MoviePreview id={movie.id} title={movie.title} />
      </div>
    </div>
  );
};

export default MovieDetailInfo;
