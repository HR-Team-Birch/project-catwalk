import React, { useState } from 'react';
import StarRatings from '../../Shared components/starRatings.jsx';

const ReviewMeta = (props) => {

  //create stars
  //create recommendation

  console.log('props in meta', props)

  return (
    <div className="reviewsmeta">
      <p style={{ fontWeight: "300"}}>Ratings  Reviews</p>
      <div>
        <StarRatings  meta={props.reviewmeta.ratings}/>
      </div>
    </div>
  )

};

export default ReviewMeta;