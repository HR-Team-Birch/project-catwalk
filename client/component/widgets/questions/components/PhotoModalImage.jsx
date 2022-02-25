import React, { useEffect, useState } from 'react';
import ExpandImageModal from './ExpandImageModal.jsx';

const PhotoModalImage = ({photo}) => {

  const [showExpandPhoto, setShowExpandPhoto] = useState(false);
  const [showExpandPhotoUpload, setShowExpandPhotoUpload] = useState(false);

  const expandPhoto = () => {
    setShowExpandPhoto(true);
  }

  const expandPhotoAnswer = () => {
    setShowExpandPhotoUpload(true);
  }

  if(typeof(photo) === 'string') {
    return (
      <div id="photoModalImgContainer">
        <img src={photo} id="photoModalImg" onClick={expandPhotoAnswer}></img>
        {showExpandPhotoUpload ? <ExpandImageModal url={photo} show={setShowExpandPhotoUpload}/> : null}
      </div>
    )
  } else {
    return (
      <div id="photoModalImgContainer">
        <img src={photo.url} id="photoModalImg" onClick={expandPhoto}></img>
        {showExpandPhoto ? <ExpandImageModal url={photo.url} show={setShowExpandPhoto}/> : null}
      </div>
    )
  }
}

export default PhotoModalImage;