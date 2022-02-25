import React, { useEffect, useState } from 'react';

const AnswerPhotoModal = ({ show, modalPhotos, setModalPhotos }) => {

  const [answerPhotoUrl, setAnswerPhotoUrl] = useState('');

  const answerPhotoUrlChange = (event) => {
    setAnswerPhotoUrl(event.target.value);
  }

  const clickCloseModal = () => {
    show(false);
  }

  const submitAnswerPhoto = () => {
    if(modalPhotos.length === 0) {
      setModalPhotos([answerPhotoUrl]);
      show(false);
    } else {
      modalPhotos.push(answerPhotoUrl);
      setModalPhotos(modalPhotos);
      show(false);
    }
  }

  return (
    <div id="answerPhotoModal">
      <span id="closeAPhotoModal" onClick={clickCloseModal}>&times;</span>
      <div id="answerPhotoModalFields">
        <h3 id="aPhotoModalTitle">Upload A Photo</h3>
        <input id="answerURL" type="text" maxLength="100" onChange={answerPhotoUrlChange}></input>
        <button id="submitAnswerPhoto" onClick={submitAnswerPhoto}>Submit Photo</button>
      </div>
    </div>
  )
}

export default AnswerPhotoModal;