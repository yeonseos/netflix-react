import React, { useState } from "react";
import "./MovieReviewBox.style.css";

const MovieReviewBox = ({ review }) => {
  const [expanded, setExpanded] = useState(false);
  const avatar_basic_url = `https://media.themoviedb.org/t/p/w45_and_h45_face`;
  return (
    <div className="review-box">
      <div className="review-author-wrap">
        {review.author_details.avatar_path === null ? (
          <div className="user_avatar">
            <img
              src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png"
              alt=""
            />
          </div>
        ) : (
          <div className="user_avatar">
            <img
              src={`${avatar_basic_url}` + review.author_details.avatar_path}
              alt=""
            />
          </div>
        )}
        <h4>{review.author}</h4>
      </div>
      <div className={`review-text-box ${expanded ? "expanded" : "fold"}`}>
        {review.content}
      </div>
      <button className="more-btn" onClick={() => setExpanded(!expanded)}>
        {review.content.length > 500 && (expanded ? "close" : "more")}
      </button>
    </div>
  );
};

export default MovieReviewBox;
