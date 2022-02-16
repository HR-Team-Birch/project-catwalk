import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';


const StarRatings = (props) => {
  const solidStar = <FontAwesomeIcon icon={faStar} />;
  const halfStar = <FontAwesomeIcon icon={faStarHalf} />;

  return(
    <div className="StarRatings">
      {[...Array(5)].map((star, idx) => (
        <span className="star" key={idx}>
          {solidStar}
        </span>
      ))}
    </div>
  )
}

export default StarRatings;

