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

  // console.log('props in reviewtile', props)
    return (
      <div className="reviewtileparent">
        <div className="reviewtile">
          <div>

            <div className="starsanduser">
              <div className="stars">stars *****</div>
              <div className="userdate">{props.reviewlist[2].reviewer_name}, {props.reviewlist[2].date}</div>
            </div>

            <div className="reviewsummary">{props.reviewlist[2].summary}</div>
            <div className="reviewbody">{props.reviewlist[2].body}</div>

            <div className="reviewphotoparent">
              {/* { props.reviewlist[2].photos
                ? props.reviewlist[2].photos.map((photo, idx) => (
                  <img id="reviewimage" src="https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg" key={idx} alt="review image" ></img>
                ))
                : null
              } */}
              { props.reviewlist[2].photos
                ? props.reviewlist[2].photos.map((photo, idx) => (
                  <ViewImageModal url={"https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"} key={idx}/>
                )) : null
              }

            </div>
            <div className="reviewresponse">
              {props.reviewlist[2].response
                ? <div>{props.reviewlist[2].response}</div>
                : null
              }
            </div>
            <div className="markreview">
              <div className="helpful">Helpful? </div>
              <div className="helpful"><a onClick={ () => props.markHelpful(props.reviewlist[2].review_id) }> Yes </a>{props.reviewlist[2].helpfulness}</div>
              <div className="report"><a>|    </a>    Report</div>
            </div>

          </div>
        </div>

        <div className="reviewtile">

          <div>
            <div>stars here *****</div>
            <div className="reviewsummary">{props.reviewlist[0].summary}</div>
            <div className="reviewbody">{props.reviewlist[0].body}</div>
            {/* <ViewImageModal /> */}
          </div>
        </div>
      </div>
    )


};

export default ReviewTile;