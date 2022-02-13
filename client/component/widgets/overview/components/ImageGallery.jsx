import React from 'react'
//import ExtendedView from './ExtendedView.jsx'

  function ImageGallery(props) {
    return (
      <div className="ImageGallery">
        <img className="mainimg" src={props.currentStyle.photos[0].url} alt="some pic idk"/>
        {/*<ExtendedView className="ExtendedView"/>*/}
      </div>
    )
  }
//}

export default ImageGallery;