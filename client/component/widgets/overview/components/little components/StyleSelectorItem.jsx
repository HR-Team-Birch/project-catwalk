import React, {useEffect, useState} from 'react'

const StyleSelectorItem = ({currentStyle, style, setCurrentStyle}) => {
  if (currentStyle?.style_id === style?.style_id) {
    return (
      <div className="selectedStyleDiv styleIcon">
        
        <img className="currentSelectedStyle" src={style.photos[0].thumbnail_url}/>
        <i className="fa-solid fa-circle-check"></i>
        
      </div>
    )
  } else {
    return (
      <div className="styleIcon">
        
        <img className="unselectedStyle" onClick={() => setCurrentStyle(style)} src={style.photos[0].thumbnail_url}/>
        
      </div>
    )
    
  }
}

export default StyleSelectorItem;