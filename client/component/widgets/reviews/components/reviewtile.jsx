import React, { useState } from 'react';
import ViewImageModal from './viewimagemodal.jsx';
import ReviewStarRating from './reviewstarrating.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

const ReviewTile = ({ review, markHelpful, reportReview }) => {
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [shortBody, setShortBody] = useState(review.body.slice(0, 250));
  const [restOfBody, setRestOfBody] = useState(' ...Show More');

  const check = <FontAwesomeIcon icon={faCheck} />;
  const circleCheck = <FontAwesomeIcon icon={faCircleCheck} />;

  const updateHelpfulClicked = () => {
    markHelpful(review.review_id);
    setHelpfulClicked(true);
  }

  const renderShortBody = () => (
    <div className="reviewbody">{shortBody}<a className="reviewbody" onClick={() => setRestOfBody(review.body.slice(250))}>{restOfBody}</a></div>
  )

  return (

    <div id="reviewtile">
      <div className="reviewtilewidth">

        <div id="starsanduser">
          <div className="stars">
            <ReviewStarRating rating={review.rating} />
          </div>
          <div className="userdate">{circleCheck} {review.reviewer_name}, {moment(review.date).format('MMMM Do YYYY')}</div>
        </div>

        <div className="reviewsummary">{review.summary}</div>

        {review.body.length > 250 ? renderShortBody() : <div className="reviewbody">{review.body}</div>}

        <div className="reviewphotoparent">
          {review.photos
            ? review.photos.map((photo, idx) => (
              <ViewImageModal url={photo.url} key={idx} />
            )) : null
          }
        </div>

        {review.recommend ?
          <div id="recommend">
            <div>{check}  I recommend this product</div>
          </div>
          : null
        }
        <br></br>
        <div className="reviewresponse">
          {review.response
            ? <div>{review.response}</div>
            : null
          }
        </div>

        <div className="markreview">
          <div className="helpful">Helpful? </div>

          <div className="helpful">
            <a style={{ textDecorationLine: "underline", marginRight: "3px" }} onClick={() => { !helpfulClicked ? updateHelpfulClicked() : null }}>Yes</a>
            ({review.helpfulness})
          </div>
          <a>|    </a>
          <div style={{ textDecorationLine: "underline" }} className="report" onClick={() => reportReview(review.review_id)}>

            Report
          </div>

        </div>

      </div>
    </div>
  )
};

export default ReviewTile;
