import React from "react";
import { Spinner } from "react-bootstrap";
import "./LoadingSpinner.style.css";

const LoadingSpinner = () => {
  return (
    <div className="spinner-area">
      <Spinner
        animation="border"
        variant="danger"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoadingSpinner;
