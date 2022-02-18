import React, { useState } from 'react';
import AddReviewStar from './addreviewstar.jsx';

//form for adding a new review
//on submit, triggers a post request in reviews.jsx


const AddReview = () => {
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);

  const openAddReviewModal = () => {
    setShowAddReviewModal(true);
  }

  const closeAddReviewModal = () => {
    setShowAddReviewModal(false);
  }

  return (
    <>
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
                  <label>Overall Rating
                    <AddReviewStar />
                  </label>
                <form>

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
    </>
  )
};

export default AddReview;