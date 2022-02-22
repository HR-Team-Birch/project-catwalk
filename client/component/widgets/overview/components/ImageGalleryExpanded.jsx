import React, {useEffect, useState} from 'react'
import ThumbnailCarousel from './little components/ThumbnailCarousel.jsx'
import MainCarousel from './little components/MainCarousel.jsx'
//import ExtendedView from './ExtendedView.jsx'

  const ImageGalleryExpanded = ({currentStyle, allStyles, expandStatus, setExpandStatus}) => {

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
    
    const handleMinimize = () => {
      setExpandStatus(false)
    }
    
    
    useEffect(() => {
      if (allPics?.length > 0) {
        setMainImg(allPics[activeIndex].url)
      }
      //ONCE ALLPICS IS RECEIVED, DEFINE WHAT MAINIMG IS
    }, [allPics, activeIndex])
    
    
    if (allPics && mainImg) {
      return (
        <div className="ImageGallery ImageGalleryExpanded">
          <MainCarousel mainImg={mainImg} setMainImg={setMainImg} allPics={allPics}/>
          <ThumbnailCarousel mainImg={mainImg} setMainImg={setMainImg} allPics={allPics} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
          <div className="forwardArrow" onClick={goToNextSlide}>
            <i className="fa-regular fa-circle-right"></i>
          </div>
            <div className="backArrow" onClick={goToPrevSlide}>
          </div>
          <i className="fa-solid fa-minimize" onClick={handleMinimize}></i>
        
        
      </div>
      )
    } else {
      return (
        <div className="ImageGallery"></div>
      )
    }
  
  }
//}

export default ImageGalleryExpanded;