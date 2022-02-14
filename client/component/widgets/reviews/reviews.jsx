import React from 'react';
import axios from 'axios';
import ReviewList from './components/reviewlist.jsx';
import AddReview from './components/addreview.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewMeta: []
    }
    this.getReviews = this.getReviews.bind(this);
    this.getReviewMeta = this.getReviewMeta.bind(this);
    this.addReview = this.addReview.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getReviewMeta();
  }

  //needs to get product id from somewhere
  getReviews(productId) {
    axios.get(`/reviews/?product_id=${37312}`)
      .then((reviews) => {
        this.setState({
          reviews: reviews.data.results
        })
      })
      .catch((err) => console.error(err));
  }

  //needs to get product id from somewhere
  getReviewMeta(productId) {
    axios.get(`/reviews/meta/?product_id=${37312}`)
      .then((meta) => {
        this.setState({
          reviewMeta: meta.data
        })
      })
      .catch((err) => console.error(err));
  }

  addReview(review) {
    axios.post('/reviews', review)
      .then((data) => {
        console.log('data from post', data);
        // this.getReviews();
        // this.getReviewMeta();
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="reviewsparent">
        <ReviewList reviews={this.state.reviews} reviewMeta={this.state.reviewMeta} add={this.addReview}/>
      </div>
    )
  }
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



