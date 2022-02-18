import React from 'react'
import ThumbnailCarouselItem from './ThumbnailCarouselItem'

const ThumbnailCarousel = ({allPics, mainImg, setMainImg}) => {
  
  console.log('ALL PICS', allPics)
  console.log('MAIN IMAGE', mainImg)
  return (
  <div className="thumbnails">
    {allPics && 
    allPics.map((pic, index) => (
      
        <ThumbnailCarouselItem pic={pic} key={index} mainImg={mainImg} setMainImg={setMainImg} /> 
    ))
    }
  </div> 
    
  )
}

export default ThumbnailCarousel