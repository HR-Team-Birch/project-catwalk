import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const AddReviewStar = ({ getStarRating }) => {
  const [rating, setRating] = useState(0);
  const [starHover, setStarHover] = useState(0);

  const solidStar = <FontAwesomeIcon icon={faStar} />;

  useEffect(() => {
    getStarRating(rating);
  }, [rating])

  return (
    <span className="addreviewstar">
      {[...Array(5)].map((star, idx) => {
        return (
          <span
            type="starbutton"
            key={idx}
            className={idx <= (starHover || rating) ? "on" : "off"}
            onClick={() => setRating(idx)}
            onMouseEnter={() => setStarHover(idx)}
          >
            <span className="newstar">{solidStar}</span>
          </span>
        );
      })}
    </span>
  );
};

export default AddReviewStar;