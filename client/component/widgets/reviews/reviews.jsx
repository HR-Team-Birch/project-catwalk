import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewList from './components/reviewlist.jsx';
import AddReview from './components/addreview.jsx';
import ReviewMeta from './components/reviewmeta.jsx';

const Reviews = ({productId, product, reviewMeta, getReviewMeta}) => {

  const [reviews, setReviews] = useState(null);
  const [sortOption, setSortOption] = useState('relevant');

  const sortReviews = () => {
    if (sortOption === 'relevant') {
      getAllReviews();
    } else if (sortOption === 'helpful') {
      getReviewsSortHelpful();
    } else if (sortOption === 'newest') {
      getReviewsSortNewest();
    }
  }

  const getAllReviews = () => {
    axios.get(`/reviews/?product_id=${productId}&count=500&sort=relevant`)
      .then((reviews) => {
        setReviews(reviews.data.results);
      })
      .catch((err) => console.error(err));
  }

  const getReviewsSortHelpful = () => {
    axios.get(`/reviews/?product_id=${productId}&count=500&sort=helpful`)
    .then((reviews) => {
      setReviews(reviews.data.results);
    })
    .catch((err) => console.error(err));
  }

  const getReviewsSortNewest = () => {
    axios.get(`/reviews/?product_id=${productId}&count=500&sort=newest`)
    .then((reviews) => {
      setReviews(reviews.data.results);
    })
    .catch((err) => console.error(err));
  }

  const addReview = (review) => {
    axios.post('/reviews', review)
      .then((data) => {
        console.log('data from post', data);
        getAllReviews();
        getReviewMeta(productId);
      })
      .catch((err) => console.error(err));
  }

  const markHelpful = (reviewId) => {
    axios.put(`/reviews/${reviewId}/helpful`)
      .then(() => {
        getAllReviews();
      })
      .catch((err) => console.error(err));
  }

  const reportReview = (reviewId) => {
    axios.put(`/reviews/${reviewId}/report`)
      .then(() => {
        getAllReviews();
      })
      .catch((err) => console.error(err));
  }

  // useEffect(() => {
  //   sortReviews();

  // }, []);

  useEffect(() => {
    sortReviews();
  }, [sortOption])


  return (
    <div id="reviewsparentcontainer">
      <div className="reviewsparent">
        {reviews && reviewMeta ? <ReviewList reviews={reviews} productId={productId} product={product} reviewMeta={reviewMeta} addReview={addReview} markHelpful={markHelpful} reportReview={reportReview} getReviewsSortHelpful={getReviewsSortHelpful} getReviewsSortNewest={getReviewsSortNewest} getAllReviews={getAllReviews} setSortOption={setSortOption}/> : null}
      </div>

    </div>
  )

}


export default Reviews;

