import React, {useEffect, useState} from 'react'

const StyleSelectorItem = ({currentStyle, style, setCurrentStyle}) => {
  if (currentStyle?.style_id === style?.style_id) {
    return (
      <div className="selectedStyleDiv">
        
        <img className="currentSelectedStyle" src={style.photos[0].url}/>
        <i className="fa-solid fa-circle-check"></i>
        
      </div>
    )
  } else {
    return (
        <img className="unselectedStyle" onClick={() => setCurrentStyle(style)} src={style.photos[0].url}/>
    )
    
  }
}

export default StyleSelectorItem;