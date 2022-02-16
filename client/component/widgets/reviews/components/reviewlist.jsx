import React, { useState, useEffect } from 'react';
import ReviewMeta from './reviewmeta.jsx';
import ReviewTile from './reviewtile.jsx';
import AddReview from './addreview.jsx';

const ReviewList = (props) => {

  //render 2 reviews from the props list
  //if more reviews button is clicked, render 3 reviews
  //if clicked again, send a get request

  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [reviewTilesCount, setReviewTilesCount] = useState(props.reviewTiles)

  // useEffect(() => {
  //   renderReviewTiles();
  // }, [props.reviewTilesToRender])


    console.log('props reviewlist', props)
    return (
      <>
        <ReviewMeta reviewmeta={props.reviewMeta} />
        <div className="reviewlistparent">
          <div className="sortandsearchparent">
            <div className="sort">sort dropdown </div>
            <div className="reviewsearch">review search box</div>
          </div>

            <ReviewTile reviewlist={props.reviews} markHelpful={props.markHelpful}/>

          <div className="buttons">
            <button>More Reviews</button>
            <button onClick={ () => setShowAddReviewModal(true) } >Add Review</button>
            <AddReview setShowAddReviewModal={setShowAddReviewModal} />
          </div>
        </div>
      </>
    )

};

export default ReviewList;