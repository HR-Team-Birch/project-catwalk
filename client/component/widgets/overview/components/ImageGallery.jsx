import React, {useEffect, useState} from 'react'
//import ExtendedView from './ExtendedView.jsx'

  const ImageGallery = (props) => {
    useEffect(() => {
      
    }, [props.product])
    
    return (
      <div className="ImageGallery">
        <img className="mainimg" src={props.currentStyle.photos[0].url} alt="some pic idk"/>
        {/*<ExtendedView className="ExtendedView"/>*/}
      </div>
    )
  
  }
//}

export default ImageGallery;