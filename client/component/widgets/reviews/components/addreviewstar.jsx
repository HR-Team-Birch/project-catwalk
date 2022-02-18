import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const AddReviewStar = () => {
  const [rating, setRating] = useState(0);
  const [starHover, setStarHover] = useState(0);

  const solidStar = <FontAwesomeIcon icon={faStar} />;


  return (
    <span className="addreviewstar">
      {[...Array(5)].map((star, idx) => {
        return (
          <span
            type="starbutton"
            key={idx}
            className={idx <= (starHover || rating) ? "on" : "off"}
            onClick={ () => setRating(idx)}
            onMouseEnter={ () => setStarHover(idx) }
            onMouseLeave={ () => setStarHover(rating)}
          >

            <span className="star">{solidStar}</span>
          </span>
        );
      })}
    </span>
  );
};

export default AddReviewStar;