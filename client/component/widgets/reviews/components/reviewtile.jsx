import React, { useState } from 'react';
import ViewImageModal from './viewimagemodal.jsx';
import ReviewStarRating from './reviewstarrating.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ReviewTile = (props) => {
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [shortBody, setShortBody] = useState(props.review.body.slice(0, 250));
  const [restOfBody, setRestOfBody] = useState(' ...Show More');

  const check = <FontAwesomeIcon icon={faCheck} />;

  const updateHelpfulClicked = () => {
    props.markHelpful(props.review.review_id);
    setHelpfulClicked(true);
  }

  const renderShortBody = () => (

    <div className="reviewbody">{shortBody}<a onClick={ () => setRestOfBody(props.review.body.slice(250)) }>{restOfBody}</a></div>
  )
    // console.log('props in reviewtile', props)
  return (

    <div id="reviewtile">
      <div className="reviewtilewidth">

        <div id="starsanduser">
          <div className="stars">
            <ReviewStarRating rating={props.review.rating}/>
          </div>
          <div className="userdate">{props.review.reviewer_name}, {props.review.date}</div>
        </div>

        <span className="reviewsummary">{props.review.summary}</span>

        {props.review.body.length > 250 ? renderShortBody() : <div className="reviewbody">{props.review.body}</div> }


        <div className="reviewphotoparent">

          { props.review.photos
            ? props.review.photos.map((photo, idx) => (
              <ViewImageModal url={photo.url} key={idx}/>
            )) : null
          }

        </div>

        <div id="recommend">
          <div>{check}  I recommend this product</div>
        </div>
        <br></br>
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
