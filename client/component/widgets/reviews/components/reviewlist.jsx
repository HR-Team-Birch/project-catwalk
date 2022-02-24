import React, { useState, useEffect } from 'react';
import ReviewMeta from './reviewmeta.jsx';
import ReviewTile from './reviewtile.jsx';
import AddReview from './addreview.jsx';

const ReviewList = ({reviews, productId, product, reviewMeta, addReview, markHelpful, reportReview, getReviewsSortHelpful, getReviewsSortNewest, getAllReviews, setSortOption}) => {

  console.log('reviews', reviews)
  //create search functionality

  const [reviewTilesCount, setReviewTilesCount] = useState(2);
  const [sort, setSort] = useState('relevant');
  const [barFilter, setBarFilter] = useState(null);

  const [reviewsToRender, setReviewsToRender] = useState(reviews);
  const [reviewsToRenderCount, setReviewsToRenderCount] = useState(reviewsToRender.length);

  // console.log('barFilter', barFilter)
  // console.log('reviewsToRender', reviewsToRender)

  // console.log('sort', sort)

  const starFilterClicked = () => {
    // iterate through reviews and filter out the ones with 5 stars
    let filteredReviews = [];
    if (barFilter === 5) {
      reviews.forEach((review) => {
        if (review.rating === 5) {
          filteredReviews.push(review)
        }
      })
    } else if (barFilter === 4) {
      reviews.forEach((review) => {
        if (review.rating === 4) {
          filteredReviews.push(review)
        }
      })
    } else if (barFilter === 3) {
      reviews.forEach((review) => {
        if (review.rating === 3) {
          filteredReviews.push(review)
        }
      })
    } else if (barFilter === 2) {
      reviews.forEach((review) => {
        if (review.rating === 2) {
          filteredReviews.push(review)
        }
      })
    } else if (barFilter === 1) {
      reviews.forEach((review) => {
        if (review.rating === 1) {
          filteredReviews.push(review)
        }
      })
    }

    setReviewsToRender(filteredReviews);
  }


  const renderMoreReviews = () => {
    let count = reviewTilesCount + 2;
    setReviewTilesCount(count);
  }

  const toggleMoreReviewButton = () => {
    let count = reviewsToRenderCount - 2;
    setReviewsToRenderCount(count);
  }

  const renderMoreBarReviews = () => {
    !barFilter && reviewsToRenderCount > 2 ?
    <button id="morereviews"
      onClick={ () => {renderMoreReviews(); setReviewsToRenderCount(reviewsToRenderCount - 2)} }
      >MORE REVIEWS
    </button>
    : <div></div>
  }

  useEffect(() => {
    setSortOption(sort)
  }, [sort]);

  useEffect(() => {
    starFilterClicked();
  }, [barFilter] );

  useEffect(() => {
    setReviewsToRender(reviews)
  }, [reviews])

  useEffect(() => {
    setReviewsToRenderCount(reviewsToRender.length)
  }, [reviewsToRender]);

  // console.log('meta in reviewlist', reviewMeta)
  return (
    <>
      <ReviewMeta reviewMeta={reviewMeta} reviews={reviews} setBarFilter={setBarFilter} setReviewsToRender={setReviewsToRender}/>
      <div className="reviewlistparent">
        <div className="sortandsearchparent">

          <div className="sort">
            <label> {reviews.length} reviews, sorted by </label>
            <select id="reviewsort" onChange={ (e) => setSort(e.target.value)}>
              <option value="relevant">Relevant</option>
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {/* <div className="reviewsearchparent">
            <input id="reviewsearch" type="search" placeholder="search reviews...">
            </input>
            <button>Submit</button>
          </div> */}

{/* TODO fix stars not rendering right when filtering by stars */}


        </div>
        <div className="reviewtileparent">
          {reviewTilesCount < reviewsToRender.length ?
            reviewsToRender.slice(0, reviewTilesCount).map((review, idx) => (
              <ReviewTile review={review} markHelpful={markHelpful} reportReview={reportReview} key={idx}/>
            )) : null
          }
          {reviewTilesCount >= reviewsToRender.length ?
            reviewsToRender.map((review, idx) => (
              <ReviewTile review={review} markHelpful={markHelpful} reportReview={reportReview} key={idx}/>
            )) : null
          }
        </div>

        <div id="reviewbuttons">
          {reviewsToRenderCount > 2 ? <button id="morereviews" onClick={ () => {renderMoreReviews(); toggleMoreReviewButton(); } }>MORE REVIEWS</button> : null}
          <AddReview productId={productId} product={product} reviewMeta={reviewMeta.characteristics} addReview={addReview}/>

        </div>

      </div>
    </>
  )

};

export default ReviewList;