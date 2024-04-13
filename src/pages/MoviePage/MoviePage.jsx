import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "./MoviePage.style.css";

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [genre, setGenre] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const keyword = query.get("q");

  const {
    isLoading,
    isError,
    error,
    data: searchData,
  } = useSearchMovieQuery({
    keyword,
    page,
  });

  const { data: genreData } = useMovieGenreQuery();

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const filterMovieByGenre = () => {
    const filteredData = data.results.filter((movie) => {
      return movie.genre_ids.includes(genre.id);
    });
    setData({ ...data, results: filteredData });
  };

  useEffect(() => {
    if (searchData) {
      setData(searchData);
    }
  }, [searchData]);

  useEffect(() => {
    setFilteredData(data?.results);
  }, [data]);
  console.log(data);

  useEffect(() => {
    if (genre) {
      filterMovieByGenre();
    }
  }, [genre]);

  const genreFilter = (item) => {
    const filteredMovies = data.results?.filter((movie) =>
      movie.genre_ids.includes(item.id)
    );
    setFilteredData(filteredMovies);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="movie-section">
      <div>
        <div className="genre-list">
          {genreData?.map((item) => (
            <button
              className="genre-btn"
              key={item.id}
              onClick={() => genreFilter(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="movieList-area">
        {filteredData?.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      <div className="pagination-area">
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={data?.total_pages > 200 ? 200 : data?.total_pages}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link-m"
          previousClassName="page-item"
          previousLinkClassName="page-link-m"
          nextClassName="page-item"
          nextLinkClassName="page-link-m"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link-m"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        />
      </div>
    </div>
  );
};

export default MoviePage;
