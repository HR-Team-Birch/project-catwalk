import React from 'react'

const ThumbnailCarouselItem = ({pic, setMainImg, mainImg, index, activeIndex, setActiveIndex}) => {
  const handleClick = (url, newIndex) => {
    setMainImg(url)
    setActiveIndex(newIndex)
  }
  if (pic.url === mainImg) {
    return(
      <img className="theChosenOne" src={pic.url} alt="a thumbnail of the main style"/>
    )
  } else {
    return (
      <img onClick={() => handleClick(pic.url, index)} src={pic.url} alt="a thumbnail of the main style"/>
    )
    
  }
}

export default ThumbnailCarouselItem
