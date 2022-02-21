import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewList from './components/reviewlist.jsx';
import AddReview from './components/addreview.jsx';
import ReviewMeta from './components/reviewmeta.jsx';


const Reviews = ({productId, product}) => {

  const [reviews, setReviews] = useState(null);
  const [reviewMeta, setReviewMeta] = useState(null);

  const getReviews = () => {
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

  const getReviewMeta = () => {
    axios.get(`/reviews/meta/?product_id=${productId}`)
      .then((meta) => {
        setReviewMeta(meta.data);
      })
      .catch((err) => console.error(err));
  }

  const addReview = (review) => {
    axios.post('/reviews', review)
      .then((data) => {
        console.log('data from post', data);
        getReviews();
        getReviewMeta();
      })
      .catch((err) => console.error(err));
  }

  const markHelpful = (reviewId) => {
    axios.put(`/reviews/${reviewId}/helpful`)
      .then(() => {
        getReviews();
      })
      .catch((err) => console.error(err));
  }

  const reportReview = (reviewId) => {
    axios.put(`/reviews/${reviewId}/report`)
      .then(() => {
        getReviews();
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getReviews();
    getReviewMeta();

  }, []);

  return (
    <div className="reviewsparent">
      {reviews && reviewMeta ? <ReviewList reviews={reviews} productId={productId} product={product} reviewMeta={reviewMeta} addReview={addReview} markHelpful={markHelpful} reportReview={reportReview} getReviewsSortHelpful={getReviewsSortHelpful} getReviewsSortNewest={getReviewsSortNewest}/> : null}
    </div>
  )

}


export default Reviews;



// createContext()
// useContext()
// useRef() //references something. doesnt trigger a rerender

