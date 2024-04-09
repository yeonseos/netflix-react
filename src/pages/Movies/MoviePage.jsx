import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "./MoviePage.style.css";

const MoviePage = () => {
  const [query] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  console.log(data);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}></Col>
        <Col lg={8} xs={12}>
          <Row className="row">
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <div>
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
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
