import React, { useState } from 'react';
import AddReviewStar from './addreviewstar.jsx';
import UploadImageModal from './uploadimagemodal.jsx';


//figure out add review image modal


const AddReview = ({productId, product, reviewMeta, addReview}) => {
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [addReviewSubmitMessage, setAddReviewSubmitMessage] = useState('');
  const [sizeRating, setSizeRating] = useState('none selected');
  const [widthRating, setWidthRating] = useState('none selected');
  const [comfortRating, setComfortRating] = useState('none selected');
  const [qualityRating, setQualityRating] = useState('none selected');
  const [lengthRating, setLengthRating] = useState('none selected');
  const [fitRating, setFitRating] = useState('none selected');

  const getStarRating = (stars) => {
    setRating(stars + 1);
  };

  const createCharacteristicsObj = () => {
    let characteristics = {};
    if (reviewMeta.Size) {
      characteristics[reviewMeta.Size.id] = sizeDescriptions();
    }
    if (reviewMeta.Width) {
      characteristics[reviewMeta.Width.id] = widthDescriptions();
    }
    if (reviewMeta.Comfort) {
      characteristics[reviewMeta.Comfort.id] = comfortDescriptions();
    }
    if (reviewMeta.Quality) {
      characteristics[reviewMeta.Quality.id] = qualityDescriptions();
    }
    if (reviewMeta.Length) {
      characteristics[reviewMeta.Length.id] = lengthDescriptions();
    }
    if (reviewMeta.Fit) {
      characteristics[reviewMeta.Fit.id] = fitDescriptions();
    }
    return characteristics;
  };

  const handleSubmit = () => {
    let message = " is required.";
    if (body.length === 0) {
      message = 'Review body ' + message;
    }
    if (name.length === 0) {
      message = 'Name ' + message;
    }
    if (email.length === 0) {
      message = 'Email ' + message;
    } else if (email.indexOf('@') === -1) {
      message = 'Correct email format ' + message;
    }

    if (message !== " is required.") {
      setAddReviewSubmitMessage(message);
    } else {
      let reviewObj = {
        "product_id": productId,
        "rating": rating,
        "summary": summary,
        "body": body,
        "recommend": recommend,
        "name": name,
        "email": email,
        "photos": [],
        "characteristics": createCharacteristicsObj()
      }
      addReview(reviewObj);
      setShowAddReviewModal(false);
    }
  };



  const sizeDescriptions = () => {
    let sizeDesc = ["A size too small", "1/2 a size too small", "Perfect", "1/2 a size too big", "A size too big"]
    for (let i = 0; i < sizeDesc.length; i++) {
      if (sizeRating === sizeDesc[i]) {
        return i + 1;
      }
    }
  }

  const widthDescriptions = () => {
    let widthDesc = ["Too narrow", "Slightly narrow", "Perfect", "Slightly Wide", "Too wide"]
    for (let i = 0; i < widthDesc.length; i++) {
      if (widthRating === widthDesc[i]) {
        return i + 1;
      }
    }
  }

  const comfortDescriptions = () => {
    let comfortDesc = ["Uncomfortable", "Slightly uncomfortable", "Ok", "Comfortable", "Perfect"]
    for (let i = 0; i < comfortDesc.length; i++) {
      if (comfortRating === comfortDesc[i]) {
        return i + 1;
      }
    }
  }

  const qualityDescriptions = () => {
    let qualityDesc = ["Poor", "Below average", "What I expected", "Pretty great", "Perfect"]
    for (let i = 0; i < qualityDesc.length; i++) {
      if (qualityRating === qualityDesc[i]) {
        return i + 1;
      }
    }
  }

  const lengthDescriptions = () => {
    let lengthDesc = ["Runs short", "Runs slightly short", "Perfect", "Runs slightly long", "Runs long"]
    for (let i = 0; i < lengthDesc.length; i++) {
      if (lengthRating === lengthDesc[i]) {
        return i + 1;
      }
    }
  }

  const fitDescriptions = () => {
    let fitDesc = ["Runs tight", "Runs slightly tight", "Perfect", "Runs slightly long", "Runs long"]
    for (let i = 0; i < fitDesc.length; i++) {
      if (fitRating === fitDesc[i]) {
        return i + 1;
      }
    }
  }

  //figure out how to set state on submit and enter data inside review object

  // console.log('reviewMeta in addreview rating', reviewMeta)
  // console.log('in addreview recommend', fitRating)
  // console.log('fitDescriptions', fitDescriptions() )

  return (
    <>
      <button id="addreviewbutton" onClick={ ()=> setShowAddReviewModal(true) } >ADD A REVIEW +</button>
        {showAddReviewModal && (
          <>
            <div className="addreviewoverlay"></div>
            <div className="addreviewmodal">
              <header className="addreviewmodalheader">
                <h2 className="addreviewtitle">Write Your Review</h2>
                <br></br>
                <button className="closereviewmodal" onClick={() => setShowAddReviewModal(false)}>&times;</button>
              </header>
              <h4 className="addreviewsubtitle">About the {product} Here</h4>
              <main className="addreviewmain">
                <div>
                  <label>Overall Rating
                    <AddReviewStar getStarRating={getStarRating}/>
                  </label>
                </div>
                <br></br>

                  <div>
                    <span style={{margin: "0 0 50px 0"}}>Do you recommend this product?
                      <input required type="radio" name="recommend" onClick={ () => setRecommend(true)} />
                        Yes
                    </span>
                    <label>
                      <input type="radio" name="recommend" onClick={ () => setRecommend(false)}/>
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
                    <br></br>
                    <div style={{width: "250px", display: "flex", justifyContent: "center"}}>Size</div>
                    <span style={{fontSize : "10px",  width: "250px", margin: "3px 0", display: "flex", justifyContent: "center"}}>{sizeRating}</span>
                    <div id="characteristics">
                      <input type="radio" name="size" onClick={ () => setSizeRating("A size too small") }/>
                      <input type="radio" name="size" onClick={ () => setSizeRating("1/2 a size too small") }/>
                      <input type="radio" name="size" onClick={ () => setSizeRating("Perfect") }/>
                      <input type="radio" name="size" onClick={ () => setSizeRating("1/2 a size too big") }/>
                      <input type="radio" name="size" onClick={ () => setSizeRating("A size too big") }/>
                      <span>A size too small</span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span>A size too big</span>
                    </div>
                    <span>_____________________________</span>


                    <div style={{width: "250px", display: "flex", justifyContent: "center"}} >Width</div>
                    <span style={{fontSize : "10px",  width: "250px", margin: "3px 0", display: "flex", justifyContent: "center"}}>{widthRating}</span>

                    <div id="characteristics">
                      <input type="radio" name="width" onClick={ () => setWidthRating("Too narrow") }/>
                      <input type="radio" name="width" onClick={ () => setWidthRating("Slightly narrow") }/>
                      <input type="radio" name="width" onClick={ () => setWidthRating("Perfect") }/>
                      <input type="radio" name="width" onClick={ () => setWidthRating("Slightly Wide") }/>
                      <input type="radio" name="width" onClick={ () => setWidthRating("Too wide") }/>
                      <span>Too narrow</span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span>Too wide</span>
                    </div>
                    <span>_____________________________</span>


                    <div style={{width: "250px", display: "flex", justifyContent: "center"}}>Comfort</div>
                    <span style={{fontSize : "10px",  width: "250px", margin: "3px 0", display: "flex", justifyContent: "center"}}>{comfortRating}</span>

                    <div id="characteristics">
                      <input type="radio" name="comfort" onClick={ () => setComfortRating("Uncomfortable") }/>
                      <input type="radio" name="comfort" onClick={ () => setComfortRating("Slightly uncomfortable") }/>
                      <input type="radio" name="comfort" onClick={ () => setComfortRating("Ok") }/>
                      <input type="radio" name="comfort" onClick={ () => setComfortRating("Comfortable") }/>
                      <input type="radio" name="comfort" onClick={ () => setComfortRating("Perfect") }/>
                      <span>Uncomfortable</span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span>Perfect</span>
                    </div>
                    <span>_____________________________</span>


                    <div style={{width: "250px", display: "flex", justifyContent: "center"}}>Quality</div>
                    <span style={{fontSize : "10px",  width: "250px", margin: "3px 0", display: "flex", justifyContent: "center"}}>{qualityRating}</span>

                    <div id="characteristics">
                        <input type="radio" name="quality" onClick={ () => setQualityRating("Poor") }/>
                        <input type="radio" name="quality" onClick={ () => setQualityRating("Below average") }/>
                        <input type="radio" name="quality" onClick={ () => setQualityRating("What I expected") }/>
                        <input type="radio" name="quality" onClick={ () => setQualityRating("Pretty great") }/>
                        <input type="radio" name="quality" onClick={ () => setQualityRating("Perfect") }/>
                        <span>Poor</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>Perfect</span>
                    </div>
                    <span>_____________________________</span>


                    <div style={{width: "250px", display: "flex", justifyContent: "center"}}>Length</div>
                    <span style={{fontSize : "10px",  width: "250px", margin: "3px 0", display: "flex", justifyContent: "center"}}>{lengthRating}</span>

                    <div id="characteristics">
                      <input type="radio" name="length" onClick={ () => setLengthRating("Runs short") }/>
                      <input type="radio" name="length" onClick={ () => setLengthRating("Runs slightly short") }/>
                      <input type="radio" name="length" onClick={ () => setLengthRating("Perfect") }/>
                      <input type="radio" name="length" onClick={ () => setLengthRating("Runs slightly long") }/>
                      <input type="radio" name="length" onClick={ () => setLengthRating("Runs long") }/>
                      <span>Runs short</span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span>Runs long</span>
                    </div>
                    <span>_____________________________</span>


                    <div style={{width: "250px", display: "flex", justifyContent: "center"}}>Fit</div>
                    <span style={{fontSize : "10px",  width: "250px", margin: "3px 0", display: "flex", justifyContent: "center"}}>{fitRating}</span>

                    <div id="characteristics">
                      <input type="radio" name="fit" onClick={ () => setFitRating("Runs tight") }/>
                      <input type="radio" name="fit" onClick={ () => setFitRating("Runs slightly tight") }/>
                      <input type="radio" name="fit" onClick={ () => setFitRating("Perfect") }/>
                      <input type="radio" name="fit" onClick={ () => setFitRating("Runs slightly long") }/>
                      <input type="radio" name="fit" onClick={ () => setFitRating("Runs long") }/>
                      <span>Runs tight</span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span>Runs long</span>
                    </div>
                    <span>_____________________________</span>


                  </div>
                  <br></br>

                  <div style={{margin: "0 0 5px 0"}}>Review Summary</div>
                  <input type="text" id="reviewsummarytextbox" onChange={ e => setSummary(e.target.value)} maxLength="60"></input>

                  <br></br>
                  <div style={{margin: "20px 0 5px 0"}}>Review Body</div>
                  <textarea type="text" id="reviewbodytextbox" onChange={ e => setBody(e.target.value)} maxLength="1000"></textarea>

                  <br></br>
                  <UploadImageModal />
                  <label>Pic thumbnails</label>
                  <br></br>
                  <button id="submitreview" onClick={ () => {
                    handleSubmit(); sizeDescriptions(); widthDescriptions(); comfortDescriptions();qualityDescriptions(); lengthDescriptions(); fitDescriptions();
                    }   }>Submit</button>
                  <div id="submitreviewmessage" style={{color: "red", justifyContent: "center"}}>{addReviewSubmitMessage}</div>

              </main>
            </div>
          </>

        )}
    </>
  )
};

export default AddReview;