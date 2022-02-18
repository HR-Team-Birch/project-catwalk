import React from 'react'

const ThumbnailCarouselItem = ({pic, setMainImg, mainImg}) => {
  if (pic.url === mainImg) {
    return(
      <img className="theChosenOne" onClick={() => setMainImg(pic.url)} src={pic.url} alt="a thumbnail of the main style"/>
    )
  } else {
    return (
      <img onClick={() => setMainImg(pic.url)} src={pic.url} alt="a thumbnail of the main style"/>
    )
    
  }
}

export default ThumbnailCarouselItem