import React, {useEffect, useState} from 'react'
import ThumbnailCarousel from './little components/ThumbnailCarousel.jsx'
import MainCarousel from './little components/MainCarousel.jsx'
//import ExtendedView from './ExtendedView.jsx'

  const ImageGallery = ({currentStyle}) => {

    const allPics = currentStyle?.photos
    
    const [mainImg, setMainImg] = useState("")
    const [activeIndex, setActiveIndex] = useState(0)
    const photosLength = allPics?.length
    
    const goToPrevSlide = () => {
      if (activeIndex < 1) {
        setActiveIndex(photosLength - 1)
        //put different behavior here in the future (remove arrow)
      } else {
        setActiveIndex(activeIndex - 1)
      }
    }
    
    const goToNextSlide = () => {
      if (activeIndex === photosLength - 1) {
        setActiveIndex(0)
      } else {
        setActiveIndex(activeIndex + 1)
      }
    }
    
    
    useEffect(() => {
      if (allPics?.length > 0) {
        setMainImg(allPics[activeIndex].url)
      }
      //ONCE ALLPICS IS RECEIVED, DEFINE WHAT MAINIMG IS
    }, [allPics, activeIndex])
    
    
    if (allPics && mainImg) {
      return (
        <div className="ImageGallery">
          <MainCarousel mainImg={mainImg} setMainImg={setMainImg} allPics={allPics}/>
        <ThumbnailCarousel mainImg={mainImg} setMainImg={setMainImg} allPics={allPics}/>
        <div className="forwardArrow" onClick={goToNextSlide}>
          <i className="fa-regular fa-circle-right"></i>
        </div>
        <div className="backArrow" onClick={goToPrevSlide}>
          <i className="fa-regular fa-circle-left"></i>
        </div>
        {/*<ExtendedView className="ExtendedView"/>*/}
      </div>
      )
    } else {
      return (
        <div className="ImageGallery"></div>
      )
    }
  
  }
//}

export default ImageGallery;