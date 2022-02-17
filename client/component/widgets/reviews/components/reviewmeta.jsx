import React, { useState } from 'react';
import StarRatings from '../../Shared components/starRatings.jsx';

const ReviewMeta = (props) => {

  //create stars
  //create recommendation

  // console.log('props in meta', props)

  return (
    <div className="reviewsmeta">
      <p style={{ fontWeight: "400"}}>Ratings  Reviews</p>
      <div>
        <StarRatings  meta={props.reviewmeta.ratings}/>
      </div>
      <br></br>
      <div style={{fontSize: "12px"}}>____ of reviews recommend this product</div>

      <div>bars</div>

      <div>type of filter applied</div>

      <div>Characteristics bars</div>
    </div>
  )

};

export default ReviewMeta;