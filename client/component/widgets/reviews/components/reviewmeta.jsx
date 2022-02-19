import React, { useState, useEffect } from 'react';
import StarRatings from '../../Shared components/starRatings.jsx';

const ReviewMeta = (props) => {

  //create stars
  //create recommendation

  const [percentRecommend, setPercentRecommend] = useState(0);

  const getPercentRecommend = () => {
    //iterate through props.reviews
    //create counter to keep track of how many true
    //divide counter by props.reviews length
    let counter = 0;
    props.reviews.forEach((review) => {
      if (review.recommend === true) {
        counter++;
      }
    })

    let percent = (counter / props.reviews.length) * 100;
    setPercentRecommend(counter)
  }
  console.log('percentRecommend', percentRecommend)

  console.log('props in meta', props)

  // useEffect(() => {
  //   setPercentRecommend()
  // }, [])

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