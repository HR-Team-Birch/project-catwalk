import React, { useState } from 'react';
import ViewImageModal from './viewimagemodal.jsx';

const ReviewTile = (props) => {
  const [helpfulClicked, setHelpfulClicked] = useState(false);

  const updateHelpfulClicked = () => {
    props.markHelpful(props.review.review_id);
    setHelpfulClicked(true);
  }

  return (

      <div className="reviewtile">
        <div>

          <div className="starsanduser">
            <div className="stars">stars *****</div>
            <div className="userdate">{props.review.reviewer_name}, {props.review.date}</div>
          </div>

          <div className="reviewsummary">{props.review.summary}</div>
          <div className="reviewbody">{props.review.body}</div>

          <div className="reviewphotoparent">

            { props.review.photos
              ? props.review.photos.map((photo, idx) => (
                <ViewImageModal url={"https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"} key={idx}/>
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