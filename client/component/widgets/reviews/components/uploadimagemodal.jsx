import React, { useState } from 'react';

const UploadImageModal = ({setPhotos}) => {

  const [uploadReviewPhoto, setUploadReviewPhoto] = useState(false);
  const [reviewImageOne, setReviewImageOne] = useState(null);
  const [reviewImageTwo, setReviewImageTwo] = useState(null);
  const [reviewImageThree, setReviewImageThree] = useState(null);
  const [reviewImageFour, setReviewImageFour] = useState(null);
  const [reviewImageFive, setReviewImageFive] = useState(null);

  const openAddReviewImageModal = () => {
    setUploadReviewPhoto(true);
  }

  const closeAddReviewImageModal = () => {
    setUploadReviewPhoto(false);
  }

  const getReviewImageUrl = () => {
    let reviewPhotos = [];
    if (reviewImageOne) {
      reviewPhotos.push(reviewImageOne);
    }
    if (reviewImageTwo) {
      reviewPhotos.push(reviewImageTwo);
    }
    if (reviewImageThree) {
      reviewPhotos.push(reviewImageThree);
    }
    if (reviewImageFour) {
      reviewPhotos.push(reviewImageFour);
    }
    if (reviewImageFive) {
      reviewPhotos.push(reviewImageFive);
    }
    setPhotos(reviewPhotos)
  }

  return (
    <>
      <button className="reviewphotobutton" onClick={ ()=> setUploadReviewPhoto(true) }>Upload Photo</button>

      {uploadReviewPhoto && (
        <div id="reviewphotomodal">
        <span className="closeImgUploadModal" onClick={closeAddReviewImageModal}>&times;</span>
        <h3 style={{textAlign: "center"}}>Upload a Review Photo</h3>
        <ol>
          <li><input type="text" id="reviewimageurl" type="text" onChange={ (e) => setReviewImageOne(e.target.value.toString()) }></input></li>
          <li><input type="text" id="reviewimageurl" type="text" onChange={ (e) => setReviewImageTwo(e.target.value.toString()) }></input></li>
          <li><input type="text" id="reviewimageurl" type="text" onChange={ (e) => setReviewImageThree(e.target.value.toString()) }></input></li>
          <li><input type="text" id="reviewimageurl" type="text" onChange={ (e) => setReviewImageFour(e.target.value.toString()) }></input></li>
          <li><input type="text" id="reviewimageurl" type="text" onChange={ (e) => setReviewImageFive(e.target.value.toString()) }></input></li>
        </ol>
        <div id="submitreviewphoto">
          <button className="reviewphotosubmit" onClick={ () => { getReviewImageUrl(); setUploadReviewPhoto(false); } }>Upload Photos</button>
        </div>
        </div>
      )}
    </>
  )
};

export default UploadImageModal;

