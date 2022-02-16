import React from 'react'

const Carousel = (props) => {
  return (
  <div className="thumbnails">
    {props.allPics && 
    props.allPics.map((pic, index) => (<img onClick={() => props.setMainImg(pic.url)} src={pic.url} alt="a thumbnail of the main style" key={index}/>))}
  </div> 
    
  )
}

export default Carousel