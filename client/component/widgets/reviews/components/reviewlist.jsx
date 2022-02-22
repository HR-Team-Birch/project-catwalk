import React, { useState, useEffect } from 'react';
import ReviewMeta from './reviewmeta.jsx';
import ReviewTile from './reviewtile.jsx';
import AddReview from './addreview.jsx';

// !!!!!!!!!   DELETEEEEE bootstap   !!!!!!!!!

const ReviewList = ({reviews, productId, product, reviewMeta, addReview, markHelpful, reportReview, getReviewsSortHelpful, getReviewsSortNewest}) => {

  //create sort drop down
  //create search functionality
  //currently rendering based on helpful count

  const [reviewTilesCount, setReviewTilesCount] = useState(2);
  const [sort, setSort] = useState('relevant');

  const renderMoreReviews = () => {
    let count = reviewTilesCount + 2;
    setReviewTilesCount(count);
  }

  const sortByHelpful = () => {

  }

  // console.log('meta in reviewlist', reviewMeta)
  return (
    <>
      <ReviewMeta reviewMeta={reviewMeta} reviews={reviews}/>
      <div className="reviewlistparent">
        <div className="sortandsearchparent">

          <div className="sort">
            <label> {reviews.length} reviews, sorted by </label>
            <select id="reviewsort">
              <option value="relevant">Relevant</option>
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
            </select>
          </div>
{/*
          <div className="sort">
            <label> {reviews.length} reviews, sorted by </label>
            <DropdownButton id="sortreviewdropdown" title="stuff" autoClose="true">
              <Dropdown.Item >Relevant</Dropdown.Item>
              <Dropdown.Item onClick={ () => getReviewsSortHelpful() }>Newest</Dropdown.Item>
              <Dropdown.Item onClick={ () => getReviewsSortNewest() }>Helpful</Dropdown.Item>
            </DropdownButton>
          </div> */}

          <div className="reviewsearchparent">
            <input id="reviewsearch" type="search" placeholder="search reviews...">
            </input>
            <button>Submit</button>
          </div>


        </div>
        <div className="reviewtileparent">
          {reviewTilesCount < reviews.length ?
            reviews.slice(0, reviewTilesCount).map((review, idx) => (
              <ReviewTile review={review} markHelpful={markHelpful} reportReview={reportReview} key={idx}/>
            )) : null
          }
          {reviewTilesCount > reviews.length ?
            reviews.map((review, idx) => (
              <ReviewTile review={review} markHelpful={markHelpful} reportReview={reportReview} key={idx}/>
            )) : null
          }
        </div>

        <div id="reviewbuttons">
          {reviews.length > 2 ? <button id="morereviews" onClick={ () => {renderMoreReviews(); } }>More Reviews</button> : null}

          <AddReview productId={productId} product={product} reviewMeta={reviewMeta.characteristics} addReview={addReview}/>

        </div>

      </div>
    </>
  )

};

export default ReviewList;