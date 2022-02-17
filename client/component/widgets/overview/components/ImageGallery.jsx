import React, {useEffect, useState} from 'react'
import ThumbnailCarousel from './little components/ThumbnailCarousel.jsx'
import MainCarousel from './little components/MainCarousel.jsx'
//import ExtendedView from './ExtendedView.jsx'

  const ImageGallery = ({currentStyle}) => {

    const allPics = currentStyle?.photos
    
    
    const [mainImg, setMainImg] = useState("")
    
    useEffect(() => {
      if (allPics?.length > 0) {
        setMainImg(allPics[0].url)
      }
      //ONCE ALLPICS IS RECEIVED, DEFINE WHAT MAINIMG IS
    }, [allPics])
    
    
    if (allPics && mainImg) {
      return (
        <div className="ImageGallery">
          <MainCarousel mainImg={mainImg} setMainImg={setMainImg}/>
        <ThumbnailCarousel setMainImg={setMainImg} allPics={allPics}/>
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