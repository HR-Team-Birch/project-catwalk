import React, { useState, useEffect } from 'react';
import ReviewMeta from './reviewmeta.jsx';
import ReviewTile from './reviewtile.jsx';
import AddReview from './addreview.jsx';
import { Dropdown, Item } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton'

const ReviewList = (props) => {

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


  console.log('props in reviewlist', props)
  return (
    <>
      <ReviewMeta reviewmeta={props.reviewMeta} reviews={props.reviews}/>
      <div className="reviewlistparent">
        <div className="sortandsearchparent">

          {/* <div className="sort">
            <label> {props.reviews.length} reviews, sorted by </label>
            <select id="reviewsort">
              <option value="relevant">Relevant</option>
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
            </select>
          </div> */}

          <div className="sort">
            <label> {props.reviews.length} reviews, sorted by </label>
            <DropdownButton id="sortreviewdropdown" title="stuff" autoClose="true">
              <Dropdown.Item >Relevant</Dropdown.Item>
              <Dropdown.Item onClick={ () => props.getReviewsSortHelpful() }>Newest</Dropdown.Item>
              <Dropdown.Item onClick={ () => props.getReviewsSortNewest() }>Helpful</Dropdown.Item>
            </DropdownButton>
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

          <AddReview productId={props.productId}/>

        </div>

      </div>
    </>
  )

};

export default ReviewList;