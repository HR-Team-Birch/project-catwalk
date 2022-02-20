import React from 'react'
import ThumbnailCarouselItem from './ThumbnailCarouselItem'

const ThumbnailCarousel = ({allPics, mainImg, setMainImg, activeIndex, setActiveIndex}) => {
  return (
  <div className="thumbnails">
    {allPics && 
    allPics.map((pic, index) => (
        <ThumbnailCarouselItem pic={pic} index={index} key={index} mainImg={mainImg} setMainImg={setMainImg} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/> 
    ))
    }
  </div> 
    
  )
}

export default ThumbnailCarousel