import React, { useState } from 'react';
import ViewImageModal from './viewimagemodal.jsx';
import ReviewStarRating from './reviewstarrating.jsx';

const ReviewTile = (props) => {
  const [helpfulClicked, setHelpfulClicked] = useState(false);

  const updateHelpfulClicked = () => {
    props.markHelpful(props.review.review_id);
    setHelpfulClicked(true);
  }

  // fix user and date not rendering at the end sometimes

  return (

      <div className="reviewtile">
        <div>

          <div id="starsanduser">
            <div className="stars">
              <ReviewStarRating rating={props.review.rating}/>
            </div>
            <div className="userdate">{props.review.reviewer_name}, {props.review.date}</div>
          </div>

          <div className="reviewsummary">{props.review.summary}</div>
          <div className="reviewbody">{props.review.body}</div>

          <div className="reviewphotoparent">

            { props.review.photos
              ? props.review.photos.map((photo, idx) => (
                <ViewImageModal url={photo.url} key={idx}/>
              )) : null
            }

          </div>
          <div className="reviewresponse">
            {props.review.response
              ? <div>{props.review.response}</div>
              : null
            }
          </div>
          <div className="markreview">
            <div className="helpful">Helpful? </div>

            <div className="helpful">
              <a onClick={ () => { !helpfulClicked ? updateHelpfulClicked() : null } }> Yes </a>
              {props.review.helpfulness}
            </div>

            <div className="report" onClick={ () => props.reportReview(props.review.review_id) }>
              <a>|    </a>
              Report
            </div>

          </div>

        </div>
      </div>
  )
};

export default ReviewTile;