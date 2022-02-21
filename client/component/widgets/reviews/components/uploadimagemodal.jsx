import React, { useState } from 'react';

const UploadImageModal = () => {

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

  // const getReviewImageUrl

  return (
    <>
      <button className="reviewphotobutton" onClick={ ()=> openAddReviewImageModal }>Upload Photo</button>

      {uploadReviewPhoto && (
        <div id="reviewphotomodal">
        <span id="closeReviewModal" onClick={closeAddReviewImageModal}>&times;</span>
        <h3>Upload a Review Photo</h3>
        <ol>
          <textarea id="reviewimageurl" type="text" onChange={ (e) => setReviewImageOne(e.target.value) }></textarea>
          <textarea id="reviewimageurl" type="text" onChange={ (e) => setReviewImageTwo(e.target.value) }></textarea>
          <textarea id="reviewimageurl" type="text" onChange={ (e) => setReviewImageThree(e.target.value) }></textarea>
          <textarea id="reviewimageurl" type="text" onChange={ (e) => setReviewImageFour(e.target.value) }></textarea>
          <textarea id="reviewimageurl" type="text" onChange={ (e) => setReviewImageFive(e.target.value) }></textarea>
        </ol>
        </div>
      )}
    </>
  )
};

export default UploadImageModal;

