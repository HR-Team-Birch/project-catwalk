import React from 'react';
import ViewImageModal from './viewimagemodal.jsx';

const ReviewTile = (props) => {

  //render 2 reviews from the props list
  //if more reviews button is clicked, render 3 reviews
  //if clicked again, send a get request

  //add state that keeps count of how many times helpful and report was click
  //if helpful was clicked, set to false
  //if report was clicked, send a put request to report
  // const modal = document.getElementById("viewreviewimage");
  // const img = document.getElementById("reviewimage");
  // const modalImage = document.getElementById("reimage");
  // const captionText = document.getElementById("caption");



  // const displayReviewImage = () => {
  //   modal.display = "block";
  //   modalImage.src = this.src;
  //   captionText.innerHTML = this.alt;
  // }

  console.log('props in reviewtile', props)
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
                <a onClick={ () => props.markHelpful(props.review.review_id) }> Yes </a>
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