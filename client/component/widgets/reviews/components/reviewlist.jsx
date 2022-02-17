import React, { useState, useEffect } from 'react';
import ReviewMeta from './reviewmeta.jsx';
import ReviewTile from './reviewtile.jsx';
import AddReview from './addreview.jsx';

const ReviewList = (props) => {

  //create sort drop down
  //create search functionality

  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [reviewTilesCount, setReviewTilesCount] = useState(2);

  const renderMoreReviews = () => {
    let count = reviewTilesCount + 2;
    setReviewTilesCount(count);
  }

  const openAddReviewModal = () => {
    setShowAddReviewModal(true);
  }

  const closeAddReviewModal = () => {
    setShowAddReviewModal(false);
  }

  console.log('props in reviewlist', props)
  return (
    <>
      <ReviewMeta reviewmeta={props.reviewMeta} />
      <div className="reviewlistparent">
        <div className="sortandsearchparent">

          <div className="sort">
            <label> {props.reviews.length} reviews, sorted by </label>
            <select id="reviewsort">
              <option value="relevant">Relevant</option>
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          <div className="reviewsearch">review search box</div>
        </div>
        <div className="reviewtileparent">
          {reviewTilesCount < props.reviews.length ?
            props.reviews.slice(0, reviewTilesCount).map((review, idx) => (
              <ReviewTile review={review} markHelpful={props.markHelpful} reportReview={props.reportReview} key={idx}/>
            )) : null
          }
          {reviewTilesCount > props.reviews.length ?
            props.reviews.map((review, idx) => (
              <ReviewTile review={review} markHelpful={props.markHelpful} reportReview={props.reportReview} key={idx}/>
            )) : null
          }
        </div>

        <div className="buttons">
          {props.reviews.length > 2 ? <button onClick={ () => {renderMoreReviews(); } }>More Reviews</button> : null}


          <button className="addreviewbutton" onClick={ openAddReviewModal } >Add Review</button>
          {showAddReviewModal && (
            <>
              <div className="addreviewoverlay"></div>
              <div className="addreviewmodal">
                <header className="addreviewmodalheader">
                  <h2 className="addreviewtitle">Write Your Review</h2>
                  <br></br>
                  <button className="closereviewmodal" onClick={closeAddReviewModal}>&times;</button>
                </header>
                <h4 className="addreviewsubtitle">About the ____ Here</h4>
                <main className="addreviewmain">
                  <form>
                    <label>Overall Rating *****</label>

                    <div>
                      <label>Do you recommend this product?
                        <input type="radio"/>
                          Yes
                      </label>
                      <label>
                        <input type="radio"/>
                          No
                      </label>
                    </div>

                    <label>What is your nickname?</label>
                    <input type="text"></input>
                    <br></br>
                    <label>Your email</label>
                    <input type="text"></input>


                    <div>
                      <div>Characteristics</div>
                      <div>Size</div>
                        <input type="radio"/>
                          A size too small
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                          A size too big

                      <div>Width</div>
                        <input type="radio"/>
                          Too narrow
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                          Too wide

                      <div>Comfort</div>
                        <input type="radio"/>
                          Uncomfortable
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                          Perfect

                      <div>Quality</div>
                        <input type="radio"/>
                          Poor
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                          Perfect

                      <div>Length</div>
                        <input type="radio"/>
                          Runs short
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                          Runs long

                      <div>Fit</div>
                        <input type="radio"/>
                          Runs tight
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                        <input type="radio"/>
                          Runs long
                    </div>

                    <div>Review Summary</div>
                    <input type="text"></input>
                    <br></br>
                    <div>Review Body</div>
                    <input type="text"></input>

                    <br></br>
                    <button>Upload Photo</button>
                    <label>Pic thumbnails</label>
                    <br></br>
                    <button>Submit</button>
                  </form>

                </main>
              </div>
            </>

          )}




        </div>


      </div>
    </>
  )

};

export default ReviewList;