import React, { useState, useEffect } from 'react';
import ReviewMeta from './reviewmeta.jsx';
import ReviewTile from './reviewtile.jsx';
import AddReview from './addreview.jsx';

const ReviewList = (props) => {

  //render 2 reviews from the props list
  //if more reviews button is clicked, render 3 reviews
  //if clicked again, send a get request

  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [reviewTilesCount, setReviewTilesCount] = useState(2);

  const renderMoreReviews = () => {
    let count = reviewTilesCount + 2;
    setReviewTilesCount(count);
  }

  const getMoreReviews = () => {
    props.reviews.length - reviewTilesCount === 1 ? props.getAlotOfReviews(props.product_id) : null
  }


  return (
    <>
      <ReviewMeta reviewmeta={props.reviewMeta} />
      <div className="reviewlistparent">
        <div className="sortandsearchparent">
          <div className="sort">sort dropdown </div>
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
          <button onClick={ () => {renderMoreReviews(); getMoreReviews(); } }>More Reviews</button>
          <button onClick={ () => setShowAddReviewModal(true) } >Add Review</button>
          <AddReview setShowAddReviewModal={setShowAddReviewModal} />
        </div>


      </div>
    </>
  )

};

export default ReviewList;