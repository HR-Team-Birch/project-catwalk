import React, {useEffect, useState} from 'react'
 
const StyleSelector = (props) => {
  return (
    <div className="StyleSelector">
      {props.allStyles &&
       props.allStyles.map((style, index) => (
         <img key={index} src={style.photos[0].url}/>
       ))}
    </div>
  )
  
}

export default StyleSelector