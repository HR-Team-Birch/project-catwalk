import React, {useEffect, useState} from 'react'
import StyleSelectorItem from './little components/StyleSelectorItem'
const StyleSelector = ({allStyles, currentStyle, setCurrentStyle}) => {
  return (
    <div className="StyleSelector">
      {allStyles &&
      allStyles.map((style, index) => (
        <StyleSelectorItem currentStyle={currentStyle} key={index} style={style} setCurrentStyle={setCurrentStyle} />
      ))}
    </div>
  )

}

export default StyleSelector