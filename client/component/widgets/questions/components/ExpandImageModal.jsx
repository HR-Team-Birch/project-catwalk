import React, { useEffect, useState } from 'react';

const ExpandImageModal = ({url, show}) => {

  const closePhoto = () => {
    show(false);
  }

    return (
      <div id="expandedAnswerImgContainer">
        <img src={url} id="expandedAnswerImg" onClick={closePhoto}></img>
      </div>
    )
}

export default ExpandImageModal;