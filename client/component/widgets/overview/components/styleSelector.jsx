import React, {useEffect, useState} from 'react'

const StyleSelector = ({allStyles, currentStyle, setCurrentStyle}) => {
  return (
    <div className="StyleSelector">
      {allStyles &&
      allStyles.map((style, index) => (
        <img onClick={() => setCurrentStyle(style)} key={index} src={style.photos[0].url}/>
      ))}
    </div>
  )

}

export default StyleSelector