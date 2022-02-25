import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';


const StarRatings = (props) => {
  const solidStar = <FontAwesomeIcon icon={faStar} />;
  const halfStar = <FontAwesomeIcon icon={faStarHalf} />;
  const emptyStar = <FontAwesomeIcon icon={faStarRegular} />;

  const [rating, setRating] = useState(0);

  const calculateStarRating = () => {
    let oneStarTotalVal = Number(props.meta['1']);
    let twoStarTotalVal = Number(props.meta['2']) * 2;
    let threeStarTotalVal = Number(props.meta['3']) * 3;
    let fourStarTotalVal = Number(props.meta['4']) * 4;
    let fiveStarTotalVal = Number(props.meta['5']) * 5;

    let totalRatings = Object.values(props.meta).map((rating) => Number(rating)).reduce((acc, val) =>  acc + val, 0);

    let averageStarRating = (oneStarTotalVal + twoStarTotalVal + threeStarTotalVal + fourStarTotalVal + fiveStarTotalVal) / totalRatings;

    setRating(averageStarRating)
  }

  useEffect(() => {
    calculateStarRating()
  }, [])

  return (
    <div className="StarRatings" id="OverviewStarRatings">
      <a className="ratingaverage">{rating.toFixed(2)}</a>
      {[...Array(Math.ceil(rating))].map((star, idx) => (
        <span className="star" key={idx} >
          {solidStar}
        </span>
      ))}
      {[...Array(5-Math.ceil(rating))].map((star, idx) => (
        <span className="star" key={idx} >
          {emptyStar}
        </span>
      ))}
    </div>
  )
}

export default StarRatings;

