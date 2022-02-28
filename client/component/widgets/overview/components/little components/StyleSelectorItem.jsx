import React, {useEffect, useState} from 'react'

const StyleSelectorItem = ({currentStyle, style, setCurrentStyle}) => (
  <div className="styleIcon">
      <img onClick={() => setCurrentStyle(style)} src={style.photos[0].thumbnail_url} alt="different styles"/>
      {currentStyle?.style_id === style?.style_id &&
      <i className="fa-solid fa-circle-check"></i>
      }
  </div>
)

export default StyleSelectorItem;
