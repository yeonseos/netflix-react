import React, { useState } from "react";
import { Alert, Modal } from "react-bootstrap";
import YouTube from "react-youtube";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";
import "./MoviePreview.style.css";
import useMovieVideoQuery from "../../../../hooks/useMovieVideo";

const MoviePreview = ({ id, title }) => {
  const { data, isLoading, isError, error } = useMovieVideoQuery({ id });

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <button className="detail-trailer-btn" onClick={handleShow}>
        예고편 보기
      </button>

      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>{title} 예고편</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data && (
            <YouTube
              videoId={data.results[0].key}
              className="video"
              iframeClassName="iframe"
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MoviePreview;
