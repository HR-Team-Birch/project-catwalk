import React, { useState, useEffect } from 'react';
import ReviewMeta from './reviewmeta.jsx';
import ReviewTile from './reviewtile.jsx';
import AddReview from './addreview.jsx';

const ReviewList = (props) => {

  //create sort drop down
  //create search functionality

  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [reviewTilesCount, setReviewTilesCount] = useState(2);

  const renderMoreReviews = () => {
    let count = reviewTilesCount + 2;
    setReviewTilesCount(count);
  }

  const openAddReviewModal = () => {
    setShowAddReviewModal(true);
  }

  const closeAddReviewModal = () => {
    setShowAddReviewModal(false);
  }

  // console.log('props in reviewlist', props)
  return (
    <>
      <ReviewMeta reviewmeta={props.reviewMeta} />
      <div className="reviewlistparent">
        <div className="sortandsearchparent">

          <div className="sort">
            <label> {props.reviews.length} reviews, sorted by </label>
            <select id="reviewsort">
              <option value="relevant">Relevant</option>
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          <div className="reviewsearch">review search box</div>
        </div>
        <div className="reviewtileparent">
          {reviewTilesCount < props.reviews.length ?
            props.reviews.slice(0, reviewTilesCount).map((review, idx) => (
              <ReviewTile review={review} markHelpful={props.markHelpful} reportReview={props.reportReview} key={idx}/>
            )) : null
          }
          {reviewTilesCount > props.reviews.length ?
            props.reviews.map((review, idx) => (
              <ReviewTile review={review} markHelpful={props.markHelpful} reportReview={props.reportReview} key={idx}/>
            )) : null
          }
        </div>

        <div className="buttons">
          {props.reviews.length > 2 ? <button onClick={ () => {renderMoreReviews(); } }>More Reviews</button> : null}


          {showAddReviewModal}
          <button onClick={ () => setShowAddReviewModal(true) } >Add Review</button>




        </div>


      </div>
    </>
  )

};

export default ReviewList;