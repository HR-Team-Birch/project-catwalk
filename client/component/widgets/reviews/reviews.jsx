import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewList from './components/reviewlist.jsx';
import AddReview from './components/addreview.jsx';

const Reviews = (props) => {

  const [reviews, setReviews] = useState(null);
  const [reviewMeta, setReviewMeta] = useState(null);


  //needs to get product id from somewhere
  const getReviews = (productId) => {
    axios.get(`/reviews/?product_id=${37316}`)
      .then((reviews) => {
        setReviews(reviews.data.results);
      })
      .catch((err) => console.error(err));
  }

  const getAlotOfReviews = (productId) => {
    axios.get(`/reviews/?product_id=${37316}&count=50`)
      .then((reviews) => {
        setReviews(reviews.data.results);
      })
      .catch((err) => console.error(err));
  }

  //needs to get product id from somewhere
  const getReviewMeta = (productId) => {
    axios.get(`/reviews/meta/?product_id=${37316}`)
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
      {reviews && reviewMeta ? <ReviewList reviews={reviews} reviewMeta={reviewMeta} add={addReview} markHelpful={markHelpful} reportReview={reportReview}  getAlotOfReviews={getAlotOfReviews}/> : null}
    </div>
  )

}


export default Reviews;

//must use a function component to use hooks. cannot use a class component
//cannot put hooks inside of if statements, loops. has to be in top level of your function
//the thing we pass to useState is our default state
//useState always returns an array of two values, first value is your state the second thing is a function that allows you to update your state
//useState can take a hardcoded value like a number or it can take an anonymous function

// createContext()
// useContext()
// useRef() //references something. doesnt trigger a rerender

// export default function Reviews() {

//   const [reviews, setReviews] = useState([]); //replaces this.state object
//   const [reviewsMeta, setReviewsMeta] = useState([]);

//   useEffect(() => {
//     //anonymous function i defined
//     //replaces life cycle methods like componentDidMount, componentDidUpdate, componentWillUnmount
//     fetch('/reviews/')
//       .then((reviews) => console.log('in reviews.jsx', reviews) )
//     // ^ fetch data once component initialize then updates state asynchronously after data has been fetched. needs array of dependencies below to
//   }, [reviews])
//   // ^ dependencies array tells react to monitor the reviews state and rerun this function if reviews is updated
//   // an empty array tells it to run once when component is initialized



//   return (
//     <div>Reviews working???</div>
//   )
// }



