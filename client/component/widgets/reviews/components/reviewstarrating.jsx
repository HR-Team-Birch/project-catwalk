import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const ReviewStarRating = (props) => {
  const solidStar = <FontAwesomeIcon icon={faStar} />;
  const emptyStar = <FontAwesomeIcon icon={faStarRegular} />;

  const [reviewSolidStar, setReviewSolidStar] = useState(props.rating);

  return (
    <div>
      {[...Array(reviewSolidStar)].map((star, idx) => (
        <span className="star" key={idx}>
          {solidStar}
        </span>
      ))}

      {[...Array(5-reviewSolidStar)].map((star, idx) => (
        <span className="star" key={idx}>
          {emptyStar}
        </span>
      ))}
    </div>
  )
}

export default ReviewStarRating;