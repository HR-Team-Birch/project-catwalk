import React, { useEffect, useState } from 'react';

const PhotoModalImage = ({photo}) => {
  if(typeof(photo) === 'string') {
    return (
      <div id="photoModalImgContainer">
        <img src={photo} id="photoModalImg" alt="customer photo"></img>
      </div>
    )
  } else {
    return (
      <div id="photoModalImgContainer">
        <img src={photo.url} id="photoModalImg" alt="customer photo"></img>
      </div>
    )
  }
}

export default PhotoModalImage;