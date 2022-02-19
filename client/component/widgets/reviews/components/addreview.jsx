import React, { useState } from 'react';
import AddReviewStar from './addreviewstar.jsx';

//form for adding a new review
//on submit, triggers a post request in reviews.jsx

//learn how to use grid for characteristics radio buttons

const AddReview = (props) => {
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [characteristics, setCharacteristics] = useState({});

  const openAddReviewModal = () => {
    setShowAddReviewModal(true);
  }

  const closeAddReviewModal = () => {
    setShowAddReviewModal(false);
  }

  //figure out how to set state on submit and enter data inside review object
  const createNewReviewObject = () => {
    return {
      "product_id": props.productId,
      "rating": rating,
      "summary": summary,
      "body": body,
      "recommend": recommend,
      "name": name,
      "email": email,
      "photos": [photos],
      "characteristics": {
        "Fit": 5,
        "Comfort": 4
      }
    }
  }
  console.log('in addreview rating', rating)
  console.log('in addreview recommend', recommend)
  console.log('in addreview name', name)
  console.log('in addreview email', email)
  console.log('in addreview summary', summary)
  console.log('in addreview body', body)
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
                <div>
                  <label>Overall Rating
                    <AddReviewStar />
                  </label>
                </div>
                <br></br>
                <form>

                  <div>
                    <span style={{margin: "0 0 50px 0"}}>Do you recommend this product?
                      <input type="radio" value="true"/>
                        Yes
                    </span>
                    <label>
                      <input type="radio" value="false"/>
                        No
                    </label>
                  </div>
                  <br></br>

                  <div>
                    <label>What is your nickname?</label>
                    <input type="text" onChange={ e => setName(e.target.value)}></input>
                  </div>

                  <br></br>
                  <div>
                    <label>Your email</label>
                    <input type="text" onChange={ e => setEmail(e.target.value)}></input>
                  </div>
                  <br></br>
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
                  <br></br>

                  <div style={{margin: "0 0 5px 0"}}>Review Summary</div>
                  <input type="text" id="reviewsummarytextbox" onChange={ e => setSummary(e.target.value)}></input>

                  <br></br>
                  <div style={{margin: "20px 0 5px 0"}}>Review Body</div>
                  <input type="text" id="reviewbodytextbox" onChange={ e => setBody(e.target.value)}></input>

                  <br></br>
                  <button>Upload Photo</button>
                  <label>Pic thumbnails</label>
                  <br></br>
                  <input type="submit" value="Submit"/>
                </form>

              </main>
            </div>
          </>

        )}
    </>
  )
};

export default AddReview;